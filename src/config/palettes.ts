/**
 * Palette + mode metadata for the Caligo theming engine.
 *
 * The site presents ONE identity in three palette families and two modes.
 * The provisional default palette is `caligo` — derived from the provisional
 * Caligo logo (design-references/Caligo logo.jpeg): warm ivory / warm charcoal
 * with burnt orange and ochre accents. Two alternatives exist for stakeholder
 * comparison:
 *   • canopy — the current deep-forest emerald identity, kept as an option
 *              because it is the strongest continuation of the previous design.
 *   • morpho — a cool indigo / iridescent-blue alternative (no neon).
 *
 * This file is the single source of truth for:
 *   - the whitelist of allowed palette / mode values (used by the pre-paint
 *     inline script in Base.astro for URL + localStorage validation);
 *   - the theme-color hex per (palette × mode) — the browser chrome colour
 *     must be updated in JS because a static <meta name="theme-color"> cannot
 *     read CSS variables (see Oracle review).
 *   - bilingual selector labels and palette swatch preview colours.
 *
 * The MODE_COLORS[palette][mode] hex MUST match --bg in src/styles/tokens.css
 * for the same combo; `scripts/verify-palette-engine.mjs` and
 * `scripts/verify-contrast.mjs` guard both invariants.
 */

export const ALLOWED_PALETTES = ['caligo', 'canopy', 'morpho'] as const;
export type PaletteId = (typeof ALLOWED_PALETTES)[number];

export const MODES = ['dark', 'light'] as const;
export type ModeId = (typeof MODES)[number];

export const DEFAULT_PALETTE: PaletteId = 'caligo';
export const DEFAULT_MODE: ModeId = 'light';

export interface PaletteMeta {
  readonly id: PaletteId;
  readonly nameEn: string;
  readonly nameEs: string;
  readonly descEn: string;
  readonly descEs: string;
  /** Small preview swatches shown in the selector (bg, surface, text, accent). */
  readonly preview: {
    readonly dark: readonly [string, string, string, string];
    readonly light: readonly [string, string, string, string];
  };
}

export const PALETTES: Readonly<Record<PaletteId, PaletteMeta>> = {
  caligo: {
    id: 'caligo',
    nameEn: 'Caligo',
    nameEs: 'Caligo',
    descEn: 'Warm ivory and burnt orange, from the provisional Caligo logo.',
    descEs: 'Marfil cálido y naranja quemado, del logotipo provisional de Caligo.',
    preview: {
      dark:  ['#171310', '#201A16', '#F2ECE1', '#E38249'],
      light: ['#FCF6EA', '#FFFDF7', '#2B2A2C', '#B45621'],
    },
  },
  canopy: {
    id: 'canopy',
    nameEn: 'Canopy',
    nameEs: 'Dosel',
    descEn: 'Deep-forest near-black with a crisp scientific emerald.',
    descEs: 'Casi negro de bosque profundo con esmeralda científico nítido.',
    preview: {
      dark:  ['#07100D', '#0E1C18', '#DAE8E1', '#34D399'],
      light: ['#EEF4F0', '#FFFFFF', '#17231D', '#04795F'],
    },
  },
  morpho: {
    id: 'morpho',
    nameEn: 'Morpho',
    nameEs: 'Morpho',
    descEn: 'Indigo blue-black with restrained iridescent blue.',
    descEs: 'Índigo negro-azulado con azul iridiscente contenido.',
    preview: {
      dark:  ['#0A101B', '#131A28', '#DDE4F2', '#7BA6EE'],
      light: ['#EEF1F7', '#FFFFFF', '#161D2C', '#2E4E9E'],
    },
  },
} as const;

/**
 * Hex used for <meta name="theme-color">. Must match --bg in tokens.css for
 * the same combo — verified numerically at build time by verify-contrast /
 * checked structurally by verify-palette-engine.
 */
export const MODE_COLORS: Readonly<Record<PaletteId, Readonly<Record<ModeId, `#${string}`>>>> = {
  caligo: { dark: '#171310', light: '#FCF6EA' },
  canopy: { dark: '#07100D', light: '#EEF4F0' },
  morpho: { dark: '#0A101B', light: '#EEF1F7' },
} as const;

/** Type guards for runtime validation of URL / storage input. */
export function isPalette(v: unknown): v is PaletteId {
  return typeof v === 'string' && (ALLOWED_PALETTES as readonly string[]).includes(v);
}
export function isMode(v: unknown): v is ModeId {
  return typeof v === 'string' && (MODES as readonly string[]).includes(v);
}
