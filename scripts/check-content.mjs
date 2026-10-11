/**
 * Content checks: run with `pnpm test`. No browser or build needed.
 *
 * Each check guards something that has gone wrong on this site or that the
 * owner has asked for as a standing rule:
 *   1. English and Spanish have the same structure, and nothing is empty.
 *   2. Every bilingual field in the data files has both languages.
 *   3. Scientific sources have unique ids and canonical DOI links.
 *   4. Known-wrong links and the expired Discord invite do not come back.
 *   5. Only the approved contact email is published.
 *   6. House style: no em dashes, and "pilot" is never used without "project".
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`  ✗ ${msg}`);
};
const pass = (msg) => console.log(`  ✓ ${msg}`);

/** Shape of a value: object keys, array length, or leaf type. */
function shape(value, path, other, otherPath) {
  if (Array.isArray(value)) {
    if (!Array.isArray(other)) return fail(`type mismatch at ${path} (array vs non-array)`);
    if (value.length !== other.length)
      return fail(`array length mismatch: ${path} has ${value.length}, ${otherPath} has ${other.length}`);
    value.forEach((v, i) => shape(v, `${path}[${i}]`, other[i], `${otherPath}[${i}]`));
  } else if (value && typeof value === 'object') {
    if (!other || typeof other !== 'object' || Array.isArray(other))
      return fail(`type mismatch at ${path} (object vs non-object)`);
    const a = Object.keys(value).sort();
    const b = Object.keys(other).sort();
    const missing = a.filter((k) => !b.includes(k));
    const extra = b.filter((k) => !a.includes(k));
    if (missing.length) fail(`keys in ${path} missing from ${otherPath}: ${missing.join(', ')}`);
    if (extra.length) fail(`extra keys in ${otherPath} (not in ${path}): ${extra.join(', ')}`);
    a.forEach((k) => b.includes(k) && shape(value[k], `${path}.${k}`, other[k], `${otherPath}.${k}`));
  } else if (typeof value !== typeof other) {
    fail(`leaf type mismatch at ${path}: ${typeof value} vs ${typeof other}`);
  }
}

/** Collect every string leaf. */
function strings(value, acc = []) {
  if (typeof value === 'string') acc.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, acc));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => strings(v, acc));
  return acc;
}

console.log('Content integrity checks\n');

// Load dictionaries via a tiny TS-aware import. They are plain object literals,
// so we read and strip the surrounding TS to eval them without a toolchain.
async function loadDicts() {
  const { en } = await importTs('src/i18n/en.ts', 'en');
  const { es } = await importTs('src/i18n/es.ts', 'es');
  return { en, es };
}

// Minimal loader: transpile-free by using a data: module after stripping TS bits.
async function importTs(rel, exportName) {
  let src = readFileSync(resolve(root, rel), 'utf8');
  // Drop type-only imports and `import type` lines.
  src = src.replace(/^import\s+type[^\n]*\n/gm, '');
  src = src.replace(/^import\s+\{[^}]*\}\s+from\s+'[^']*';\s*\n/gm, '');
  // Strip a trailing `as const` and type annotations on the export.
  src = src.replace(/:\s*Dict\s*=/, ' =');
  src = src.replace(/\bas const\b/g, '');
  // Remove the `export type` block if present.
  src = src.replace(/export type[\s\S]*$/m, '');
  const mod = await import(
    'data:text/javascript,' + encodeURIComponent(src.replace('export const', 'export const'))
  );
  return { [exportName]: mod[exportName] };
}

const { en, es } = await loadDicts();

// 1. Structural parity of the i18n dictionaries.
const before = failures;
shape(en, 'en', es, 'es');
if (failures === before) pass('English and Spanish dictionaries have identical structure');

const { pathToFileURL } = await import('node:url');
const { registerHooks } = await import('node:module');
// The data files import each other without a file extension, as Astro allows.
registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (specifier.startsWith('.')) return nextResolve(`${specifier}.ts`, context);
      throw error;
    }
  },
});
const load = (rel) => import(pathToFileURL(resolve(root, rel)).href);

// 2. Every bilingual field in the data files has both languages. A field is
//    bilingual when it is an object with an `en` or an `es` key.
const DATA_FILES = ['content', 'records', 'initiative', 'pilot-call', 'about-feedback', 'science-feedback', 'network-map'];
const oneSided = [];
function bilingual(node, path) {
  if (Array.isArray(node)) return node.forEach((v, i) => bilingual(v, `${path}[${i}]`));
  if (!node || typeof node !== 'object') return;
  if ('en' in node || 'es' in node) {
    const filled = (v) => (typeof v === 'string' ? v.trim() !== '' : v != null);
    if (!filled(node.en) || !filled(node.es)) oneSided.push(path);
  }
  for (const [k, v] of Object.entries(node)) bilingual(v, `${path}.${k}`);
}
const dataText = [];
for (const name of DATA_FILES) {
  dataText.push(readFileSync(resolve(root, `src/data/${name}.ts`), 'utf8'));
  const mod = await load(`src/data/${name}.ts`);
  for (const [key, value] of Object.entries(mod)) if (typeof value !== 'function') bilingual(value, `${name}.${key}`);
}
if (oneSided.length) fail(`bilingual fields missing a language: ${oneSided.slice(0, 8).join(', ')}${oneSided.length > 8 ? ` and ${oneSided.length - 8} more` : ''}`);
else pass('every bilingual field in the data files has English and Spanish');

// 3. Scientific sources.
const allText = [...strings(en), ...strings(es), ...dataText].join('\n');
const recordsMod = await load('src/data/records.ts');
const sourceIds = recordsMod.SOURCES.map((source) => source.id);
const duplicateSourceIds = sourceIds.filter((id, index) => sourceIds.indexOf(id) !== index);
const noncanonicalDoiUrls = recordsMod.SOURCES.filter(
  (source) => source.doi && source.url.toLowerCase() !== `https://doi.org/${source.doi}`.toLowerCase(),
);
if (duplicateSourceIds.length === 0 && noncanonicalDoiUrls.length === 0) {
  pass('scientific source records have unique IDs and canonical DOI URLs');
} else {
  if (duplicateSourceIds.length) {
    fail(`duplicate scientific source IDs: ${[...new Set(duplicateSourceIds)].join(', ')}`);
  }
  if (noncanonicalDoiUrls.length) {
    fail(`noncanonical DOI source URLs: ${noncanonicalDoiUrls.map((source) => source.id).join(', ')}`);
  }
}

// 4. Mistakes that were published once and must not come back.
const banned = [
  { pattern: /10\.1093\/gbe\/evaf012/i, why: 'wrong Mackay-Smith DOI (it resolves to an unrelated whitefly paper)' },
  { pattern: /10\.1007\/s10592-016-0849-y/i, why: 'wrong Seraphim DOI (it resolves to an unrelated mangrove paper)' },
  { pattern: /iucnredlist\.org\/species\/15992\/121728821/i, why: 'wrong Parides IUCN assessment URL' },
  { pattern: /discord\.gg\//i, why: 'a Discord invite written into the copy (the last one expired; the link comes from configuration)' },
];

// 5. Personal emails: only the approved public contact address is allowed.
const ALLOWED_EMAIL = 'genomica.neotropical@gmail.com';
const emails = [...allText.matchAll(/[\w.+-]+@[\w.-]+\.\w+/g)].map((m) => m[0]);
const strayEmails = emails.filter((e) => e.toLowerCase() !== ALLOWED_EMAIL);
if (strayEmails.length) fail(`unexpected email address(es) present: ${[...new Set(strayEmails)].join(', ')}`);
else pass(`only the approved contact email appears (${ALLOWED_EMAIL})`);

for (const { pattern, why } of banned) {
  if (pattern.test(allText)) fail(why);
  else pass(`clear: ${why}`);
}

// 6. House style, checked on the dictionaries and the data files' strings.
//    The owner's standing rules: no em dashes, and "pilot" always comes with
//    "project" ("a pilot" is someone who flies planes).
const dataStrings = [];
for (const name of DATA_FILES) {
  const mod = await load(`src/data/${name}.ts`);
  for (const value of Object.values(mod)) if (typeof value !== 'function') strings(value, dataStrings);
}
// Prose only: ids, slugs, paths and URLs have no spaces.
const copy = [...strings(en), ...strings(es), ...dataStrings].filter((t) => /\s/.test(t));
const quote = (list) => list.slice(0, 5).map((t) => `"${t.slice(0, 70)}"`).join('; ');
const emDashes = copy.filter((t) => t.includes('\u2014'));
if (emDashes.length) fail(`em dash in copy: ${quote(emDashes)}`);
else pass('no em dashes in the copy');
const barePilot = copy.filter(
  (t) => /\bpilots?\b(?!\s+projects?\b)/i.test(t.replace(/https?:\S+/g, '')) || /\bpilotos?\b/i.test(t.replace(/proyectos?\s+piloto\b/gi, '')),
);
if (barePilot.length) fail(`"pilot" without "project": ${quote(barePilot)}`);
else pass('"pilot" always appears as "pilot project" / "proyecto piloto"');

// 7. No empty strings in either dictionary.
const empty = strings(en).filter((t) => t.trim() === '').length + strings(es).filter((t) => t.trim() === '').length;
if (empty) fail(`${empty} empty string(s) in the dictionaries`);
else pass('no empty strings in either dictionary');

console.log('');
if (failures) {
  console.error(`FAILED: ${failures} problem(s) found.`);
  process.exit(1);
} else {
  console.log('All content checks passed.');
}
