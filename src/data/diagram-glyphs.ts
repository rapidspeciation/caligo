/**
 * Shared glyph geometry for the Home tier diagrams, so every diagram draws
 * the same butterfly. Centred on 0,0, about 50 x 30 units: a Heliconius-like
 * silhouette with long narrow forewings and a forewing band.
 * The band is the only pattern element, so two populations can be told
 * apart by band colour, as geographic races of Heliconius often are.
 */
export const BUTTERFLY = {
  forewing: 'M-1.4 -2.6 C-5 -9.8 -15 -16.2 -23.6 -15.6 C-25.6 -14 -24.4 -9.4 -20.6 -6.2 C-15.4 -2.2 -7.4 -0.2 -1.4 1 Z',
  hindwing: 'M-1.4 1.4 C-7.6 1 -14.6 3.4 -15.2 8.6 C-14.6 13 -7.8 13.4 -1.4 6.6 Z',
  band: 'M-11.6 -11.7 Q-13.2 -12.7 -14.9 -13.3 L-17.8 -4.7 Q-15.8 -3.6 -13.9 -2.9 Z',
  body: 'M0 -5.6 V10.4',
  antennae: 'M-0.6 -5.2 C-2 -9.6 -3.8 -12.6 -6 -14.6 M0.6 -5.2 C2 -9.6 3.8 -12.6 6 -14.6',
} as const;

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
