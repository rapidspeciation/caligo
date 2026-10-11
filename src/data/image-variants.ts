/**
 * Smaller copies of an image, for `srcset`.
 *
 * `scripts/make-image-variants.py` writes `<name>-320.webp`, `-640.webp` and
 * `-960.webp` beside the photographs and paper figures. This looks for them
 * at build time, so an image without variants simply renders as before.
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const WIDTHS = [320, 640, 960];
const PUBLIC = resolve(process.cwd(), 'public');

/**
 * `path` is relative to `public/` (as stored in the data files); `width` is
 * the original's pixel width. Returns a `srcset` listing every variant that
 * exists plus the original, or `undefined` when there are none.
 */
export function srcsetFor(path: string, width: number, base: string): string | undefined {
  const stem = path.replace(/\.[a-z]+$/i, '');
  const found = WIDTHS.filter((w) => w < width && existsSync(resolve(PUBLIC, `${stem}-${w}.webp`)));
  if (!found.length) return undefined;
  return [...found.map((w) => `${base}${stem}-${w}.webp ${w}w`), `${base}${path} ${width}w`].join(', ');
}
