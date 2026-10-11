/**
 * Checks on the built pages: run with `pnpm test:nav`, after `pnpm build`.
 *
 * Every page in dist/ is read as text. Each check guards something a visitor
 * would notice and that no other test sees:
 *   1. One <h1> per page, and <html lang> matching the page's language.
 *   2. No id used twice on a page: links to "#section" and the expandable
 *      cards depend on ids being unique.
 *   3. Every <img> has alt text (empty is allowed for decoration) and a
 *      width and height, so the page does not jump while images load.
 *   4. The card contract (DESIGN.md): a card marked data-card="link" really
 *      contains a link, and one marked data-card="toggle" a <details>.
 *   5. A weight budget: HTML, styles and scripts per page, and the largest
 *      single image. These catch a heavy file slipping in.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const BUDGET = { pageKB: 90, imageKB: 400 };

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const pass = (msg) => console.log(`  ✓ ${msg}`);

if (!existsSync(dist)) {
  fail('dist/ is missing: run `pnpm build` first');
  process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const kb = (bytes) => Math.round(bytes / 1024);
const gz = (path) => gzipSync(readFileSync(path)).length;

console.log('Built-page checks\n');
const problems = { h1: [], lang: [], ids: [], img: [], card: [], weight: [] };
let heaviest = { kb: 0, page: '' };

for (const file of pages) {
  const page = relative(dist, file);
  const html = readFileSync(file, 'utf8');
  // Redirect stubs (the bare "/" page) carry no content of their own.
  if (/http-equiv="refresh"/i.test(html)) continue;

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) problems.h1.push(`${page} has ${h1}`);

  const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1] ?? '';
  const expected = page.startsWith('es/') ? 'es' : 'en';
  if (!lang.startsWith(expected)) problems.lang.push(`${page} says "${lang}"`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const repeated = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  if (repeated.length) problems.ids.push(`${page}: ${repeated.slice(0, 4).join(', ')}`);

  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    // An <img> without a src is filled in by a script (the figure zoom).
    const src = tag.match(/\ssrc="([^"]*)"/)?.[1];
    if (!src) continue;
    if (!/\salt=/.test(tag)) problems.img.push(`${page}: no alt on ${src}`);
    if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag)) problems.img.push(`${page}: no width/height on ${src}`);
  }

  // Each opening tag that declares a card, with the markup up to the next card.
  const cards = [...html.matchAll(/<([a-z]+)\b[^>]*\sdata-card="(link|toggle)"[^>]*>/g)];
  // A card's colour comes from its position (global.css), never from markup.
  if (/style="[^"]*--card-tone/.test(html)) problems.card.push(`${page}: a card colour set by hand`);
  cards.forEach((match, i) => {
    const [, tag, kind] = match;
    const inside = html.slice(match.index, cards[i + 1]?.index ?? html.length);
    if (kind === 'link' && tag !== 'a' && !/class="[^"]*\bcard-link\b/.test(inside)) problems.card.push(`${page}: a link card without a .card-link`);
    if (kind === 'toggle' && tag !== 'details' && !/<details\b/.test(inside)) problems.card.push(`${page}: a toggle card without <details>`);
  });

  const assets = [...new Set([...html.matchAll(/(?:href|src)="([^"#?]+\.(?:css|js))"/g)].map((m) => m[1]))];
  const base = html.match(/<link rel="canonical" href="https?:\/\/[^/]+(\/[^"]*?)(?:en|es)\//)?.[1] ?? '/';
  const assetBytes = assets
    .map((href) => resolve(dist, href.startsWith(base) ? href.slice(base.length) : href.replace(/^\//, '')))
    .filter(existsSync)
    .reduce((sum, path) => sum + gz(path), 0);
  const total = kb(gz(file) + assetBytes);
  if (total > heaviest.kb) heaviest = { kb: total, page };
  if (total > BUDGET.pageKB) problems.weight.push(`${page}: ${total} KB of HTML, styles and scripts (budget ${BUDGET.pageKB} KB, compressed)`);
}

const images = files.filter((f) => /\.(png|jpe?g|webp|avif|gif)$/i.test(f));
const big = images.filter((f) => statSync(f).size > BUDGET.imageKB * 1024);
for (const f of big) problems.weight.push(`${relative(dist, f)} is ${kb(statSync(f).size)} KB (budget ${BUDGET.imageKB} KB per image)`);

const report = (list, ok, bad) => (list.length ? fail(`${bad}: ${list.slice(0, 6).join(' | ')}${list.length > 6 ? ` (+${list.length - 6} more)` : ''}`) : pass(ok));
report(problems.h1, `${pages.length} pages, each with exactly one <h1>`, 'pages need exactly one <h1>');
report(problems.lang, '<html lang> matches each page\'s language', 'wrong <html lang>');
report(problems.ids, 'no id is used twice on a page', 'repeated ids');
report(problems.img, 'every image has alt text, width and height', 'images');
report(problems.card, 'every card that claims an action has one', 'card contract');
report(problems.weight, `weight within budget (heaviest page: ${heaviest.page}, ${heaviest.kb} KB compressed; largest image under ${BUDGET.imageKB} KB)`, 'over budget');

console.log('');
if (failures) {
  console.error(`FAILED: ${failures} problem(s) found.`);
  process.exit(1);
}
console.log('All built-page checks passed.');
