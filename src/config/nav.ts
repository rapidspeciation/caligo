import type { Dict } from '../i18n/en';

/** The site's pages in navigation order: the header menu and the footer's
    link row share this one list. */
export const navItems = (t: Dict) => [
  { path: '/', label: t.nav.home },
  { path: '/science', label: t.nav.science },
  { path: '/projects', label: t.nav.proposedPilots },
  { path: '/funding', label: t.nav.funding },
  { path: '/about', label: t.nav.about },
  { path: '/participate', label: t.nav.join },
] as const;
