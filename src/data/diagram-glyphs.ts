/**
 * Shared glyph geometry for the tier diagrams. Centred on 0,0, about 54 x 30
 * units, drawn as a spread Heliconius seen from above: long forewings with a
 * rounded tip, rounded hindwings, a three-part body and clubbed antennae.
 * Only the left half is stored; the right is its mirror image.
 */
export const BUTTERFLY = {
  forewing: 'M-1.4 -3 C-7 -9 -16 -15 -23 -15.2 C-26 -15.2 -27.2 -12.8 -26 -10.4 C-23.6 -6 -18.5 -2.6 -13.5 -0.8 C-9 0.6 -4.5 0.8 -1.4 0.6 Z',
  hindwing: 'M-1.4 -0.2 C-6 -0.6 -12.5 -0.4 -16 2.2 C-18.2 4.2 -17.6 8.2 -15 10.6 C-11.6 13.6 -6.6 13.4 -3.6 10.4 C-2.2 8.8 -1.6 6.6 -1.4 4.6 Z',
  antennae: 'M-0.5 -6 C-1.8 -9.6 -3.8 -12.8 -6.4 -15.4 M0.5 -6 C1.8 -9.6 3.8 -12.8 6.4 -15.4',
} as const;

type Mark = { on: 'fore' | 'hind'; d: string; tone: 'white' | 'yellow' | 'orange' | 'ink' | 'band'; stroke?: number };

/**
 * Simplified dorsal wing patterns of the four species in the barcode library,
 * left half only and clipped to the wing. `band` marks take the colour of
 * `--band`, so one species can be drawn as two geographic races.
 */
export const WING_PATTERNS: Record<string, readonly Mark[]> = {
  // Black with a pale forewing band and a pale hindwing margin.
  cydno: [
    { on: 'fore', d: 'M-12.6 -13.4 L-17.4 -16 L-21.6 -3.2 L-16.4 -1 Z', tone: 'band' },
    { on: 'hind', d: 'M-17 3 C-18.4 5.4 -17.2 8.6 -14.8 10.6 C-11.6 13.2 -7 13 -4 10.2', tone: 'white', stroke: 2.6 },
  ],
  // Orange at the wing bases, black tips with a yellow band.
  hecale: [
    { on: 'fore', d: 'M0 -8 L-13.4 -15 L-15.4 2 L0 2 Z', tone: 'orange' },
    { on: 'fore', d: 'M-17.4 -15.6 L-20.2 -16 L-23 -5.4 L-20.4 -4.2 Z', tone: 'yellow' },
    { on: 'hind', d: 'M-0.4 0.6 C-6 0 -12 0.4 -14.6 3 C-16 5.4 -14.6 8.4 -12 9.8 C-8.4 11.4 -4.6 10.4 -0.4 6 Z', tone: 'orange' },
  ],
  // Tiger pattern: orange with black stripes and yellow spots near the tip.
  ismenius: [
    { on: 'fore', d: 'M0 -8 L-17.6 -16 L-19.4 2 L0 2 Z', tone: 'orange' },
    { on: 'fore', d: 'M-3 -3 C-7 -5.4 -11 -7 -15.6 -8', tone: 'ink', stroke: 1.7 },
    { on: 'fore', d: 'M-12.4 -12.6 L-15 -1.4', tone: 'ink', stroke: 1.5 },
    { on: 'fore', d: 'M-19.6 -12.8 l-1.5 4.2 M-22.6 -13.4 l-1.3 3.6', tone: 'yellow', stroke: 1.7 },
    { on: 'hind', d: 'M-0.4 0.6 C-6 0 -12 0.4 -14.6 3 C-16 5.4 -14.6 8.4 -12 9.8 C-8.4 11.4 -4.6 10.4 -0.4 6 Z', tone: 'orange' },
    { on: 'hind', d: 'M-2.4 4.8 C-6.4 3.8 -10.6 4.4 -14.6 6.6', tone: 'ink', stroke: 1.6 },
  ],
  // Black with an orange forewing band and an orange hindwing bar.
  clysonimus: [
    { on: 'fore', d: 'M-9.4 -11.4 L-14.6 -14.6 L-18.6 -3.2 L-12.6 -1 Z', tone: 'orange' },
    { on: 'hind', d: 'M-2.6 2.6 C-7 1.8 -11.6 2.2 -15.4 4.2', tone: 'orange', stroke: 2.8 },
  ],
};

/** Small deterministic PRNG (mulberry32), so diagrams render identically on every build. */
export function seededRandom(seed: number): () => number {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * The 21-chromosome karyotype drawn by the reference-genome diagram and the
 * chromosome-fission explainer: relative lengths, longest first, laid out in
 * three rows of seven.
 */
export const KARYOTYPE = Array.from({ length: 21 }, (_, i) => Math.round((56 - i * 1.15) * 10) / 10);
