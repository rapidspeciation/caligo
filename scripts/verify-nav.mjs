/**
 * verify-nav.mjs — primary nav checks.
 *
 * Asserts behaviour, not a hardcoded item count. Previously this file
 * locked `anchors.length === 6`, a magic number with no derivation from
 * the nav config: changing the nav was reported as a test failure, which
 * trains you to edit the test rather than think about the change.
 *
 * What actually matters to a reader:
 *   • the header offers primary navigation and the footer retains Join
 *     (or, on a page that closes on its own join block, the page links to it);
 *     since November 2026 the footer also repeats the page links as one
 *     quiet row, so long pages need not scroll back to the header;
 *   • Home's footer leaves out the email, because its "Súmate" section
 *     already shows the address just above;
 *   • every nav destination resolves to a page that was really built;
 *   • both locales offer the same routes.
 *
 * Runs post-build so it needs `dist/`. A missing `dist/` is a build
 * precondition failure — do not silently pass.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.error(`  ✗ ${msg}`);
};
const pass = (msg) => console.log(`  ✓ ${msg}`);

console.log('Primary nav checks\n');

const distRoot = resolve(root, 'dist');
if (!existsSync(distRoot)) {
  fail('dist/ is missing — run `pnpm build` before this script');
  process.exit(1);
}

const pages = [
  { path: 'dist/en/index.html', label: 'EN home' },
  { path: 'dist/es/index.html', label: 'ES home' },
];

const blockRe = (cls) =>
  new RegExp(`<(nav|footer)[^>]*class=["'][^"']*${cls}[^"']*["'][^>]*>([\\s\\S]*?)</\\1>`);
const hrefRe = /<a\b[^>]*href=["']([^"'#]+)[^"']*["']/g;

/** Every internal route an anchor block points at, deduped and ordered. */
function routes(html) {
  const seen = [];
  for (const [, href] of html.matchAll(hrefRe)) {
    if (!href.startsWith('/')) continue;
    const clean = href.endsWith('/') ? href : `${href}/`;
    if (!seen.includes(clean)) seen.push(clean);
  }
  return seen;
}

/** dist/ path for a built route, honouring the configured base. */
function builtFile(route) {
  const base = process.env.CALIGO_BASE ?? '/';
  const rel = route.startsWith(base) ? route.slice(base.length) : route.replace(/^\//, '');
  return resolve(distRoot, rel, 'index.html');
}

const perLocale = new Map();

for (const { path, label } of pages) {
  const abs = resolve(root, path);
  if (!existsSync(abs)) {
    fail(`${label}: file ${path} not found`);
    continue;
  }
  const html = readFileSync(abs, 'utf8');

  const headerMatch = html.match(blockRe('primary-nav'));
  if (!headerMatch) {
    fail(`${label}: primary-nav <nav> block not found`);
    continue;
  }
  const footerMatch = html.match(blockRe('site-footer'));
  if (!footerMatch) {
    fail(`${label}: site-footer block not found`);
    continue;
  }

  const headerRoutes = routes(headerMatch[2]);
  const footerRoutes = routes(footerMatch[2]);
  perLocale.set(label, headerRoutes);

  if (headerRoutes.length === 0) {
    fail(`${label}: primary nav has no internal destinations`);
  } else {
    pass(`${label}: ${headerRoutes.length} primary-nav destinations`);
  }

  // The footer keeps Join, except on a page whose own content already
  // closes on a join block (Home's "Súmate"); that page must then link to
  // Join from its main content instead.
  const joinRoute = headerRoutes.find(r => r.includes('/participate/'));
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  const mainRoutes = mainMatch ? routes(mainMatch[1]) : [];
  if (!joinRoute) fail(`${label}: primary nav has no Join destination`);
  else if (footerRoutes.includes(joinRoute)) pass(`${label}: compact footer retains Join`);
  else if (mainRoutes.includes(joinRoute)) pass(`${label}: page content links to Join, so the footer omits it`);
  else fail(`${label}: footer or page content needs the Join destination`);

  // Home shows the address in "Súmate"; the footer must not repeat it.
  if (/class=["'][^"']*footer-email/.test(footerMatch[2])) {
    fail(`${label}: footer repeats the email that "Súmate" already shows`);
  } else if (!/data-copy-email/.test(mainMatch ? mainMatch[1] : '')) {
    fail(`${label}: footer omits the email but the page does not show it`);
  } else {
    pass(`${label}: email shown once, in "Súmate", not again in the footer`);
  }

  const unbuilt = headerRoutes.filter((r) => !existsSync(builtFile(r)));
  if (unbuilt.length) {
    fail(`${label}: nav points at unbuilt route(s): ${unbuilt.join(', ')}`);
  } else {
    pass(`${label}: every nav destination was built`);
  }
}

// Both locales must offer the same set of pages, or one language is a
// smaller site than the other.
const [en, es] = [perLocale.get('EN home'), perLocale.get('ES home')];
if (en && es) {
  const strip = (rs) => rs.map((r) => r.replace(/\/(en|es)\//, '/')).sort();
  const [a, b] = [strip(en), strip(es)];
  if (a.join('|') !== b.join('|')) {
    fail(`locale nav mismatch:\n    EN ${a.join(', ')}\n    ES ${b.join(', ')}`);
  } else {
    pass('EN and ES navs offer the same routes');
  }
}

if (failures) {
  console.error(`\nFAILED: ${failures} primary-nav check(s).`);
  process.exit(1);
}
console.log('\nAll primary-nav checks passed.');
