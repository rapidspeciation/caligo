# Caligo

Bilingual public website for **Caligo — Genomes of Neotropical butterflies and moths**.

Caligo connects regional expertise, biological collections, genomic infrastructure, training, and responsible benefit-sharing across Latin America.

## Public website

<https://rapidspeciation.github.io/caligo/>

- English: <https://rapidspeciation.github.io/caligo/en/>
- Español: <https://rapidspeciation.github.io/caligo/es/>

## Local development

Requires Node.js 24+ and pnpm 11.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Verification

```bash
pnpm check
pnpm test
pnpm build
pnpm test:nav
```

The maintained repository is `rapidspeciation/caligo`. Push accepted changes to its `main` branch; the Fr4nzz fork is no longer maintained. The site is deployed automatically to GitHub Pages from `main` through `.github/workflows/deploy.yml`.
