// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment configuration.
//
// GitHub Pages project site:   https://<owner>.github.io/<repo>/   -> set BASE to '/<repo>/'
// GitHub Pages user/org site:  https://<owner>.github.io/          -> set BASE to '/'
// Custom domain (current):     https://caligogenomics.com/         -> BASE '/', SITE the domain.
// The old project URL https://rapidspeciation.github.io/caligo/ redirects here.
//
// Override without editing this file via environment variables, e.g.:
//   SITE_URL=https://caligo.org BASE_PATH=/ pnpm build
const SITE = process.env.SITE_URL ?? 'https://caligogenomics.com';
const BASE = process.env.BASE_PATH ?? '/';

// Extra hostnames allowed by the local `pnpm dev` / `pnpm preview` servers,
// e.g. a Tailscale MagicDNS hostname when previewing from another device.
// Only affects the local dev/preview servers — has no effect on the built
// static output shipped to GitHub Pages.
const PREVIEW_ALLOWED_HOSTS = (process.env.PREVIEW_ALLOWED_HOSTS ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      /*
        Exclude:
        • /theme-review/  — internal review surface, env-gated but also filtered
          here for defence in depth.
        • /network/, /capacity/  — compat pages (moved content). They return
          200 with noindex,follow so a bookmark still resolves, but must not
          appear in sitemap / discovery / hreflang.
      */
      filter: (page) =>
        !/\/(theme-review|capacity)\//.test(page) &&
        // The root serves the English home; /en/ is its listed address.
        new URL(page).pathname !== '/',
    }),
  ],
  vite: {
    server: { allowedHosts: PREVIEW_ALLOWED_HOSTS },
    preview: { allowedHosts: PREVIEW_ALLOWED_HOSTS },
  },
});
