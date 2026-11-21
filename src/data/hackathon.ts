/**
 * The Genome Assembly & Curation Hackathon (Campinas, April 2027).
 *
 * Source: the bilingual flyer Joana Meier sent on 21 November 2026 with the
 * request to "prominently feature the Assembly hackathon" on the site. Every
 * fact below is on that flyer except the congress dates, which come from the
 * Biology of Butterflies / ELEN 2027 page (even3.com.br/bob-elen-2027,
 * 30 March – 3 April 2027), the week before the hackathon.
 *
 * Dates drive the page by themselves (`caligoDeadlines()` in Base.astro):
 * registration is open until REGISTRATION_DEADLINE, and the home feature and
 * the banner disappear once the event has ended.
 */
import type { Locale } from '../i18n';

export const HACKATHON_ID = 'campinas-2027';
/** The short link printed on the flyer; it leads to the Google Form. */
export const HACKATHON_REGISTRATION_URL = 'https://tinyurl.com/caligo-hackathon';
export const HACKATHON_REGISTRATION_DEADLINE = '2026-12-20';
export const HACKATHON_START = '2027-04-05';
export const HACKATHON_END = '2027-04-09';
export const HACKATHON_CONGRESS_URL = 'https://www.even3.com.br/bob-elen-2027/';

export const HACKATHON_FLYER = {
  full: 'media/events/hackathon-2027-flyer.jpg',
  srcset: [
    { width: 480, path: 'media/events/hackathon-2027-flyer-480w.jpg' },
    { width: 720, path: 'media/events/hackathon-2027-flyer-720w.jpg' },
    { width: 1086, path: 'media/events/hackathon-2027-flyer.jpg' },
  ],
  width: 1086,
  height: 1448,
} as const;

/** True once the visitor's local date is after `iso` (YYYY-MM-DD). */
export function isPast(iso: string, now: Date = new Date()): boolean {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()) > new Date(y, m - 1, d);
}

type HackathonCopy = {
  eyebrow: string;
  eyebrowClosed: string;
  title: string;
  dates: string;
  place: string;
  mode: string;
  points: readonly { label: string; text: string }[];
  register: string;
  deadlineLabel: string;
  deadline: string;
  closedNote: string;
  congress: string;
  congressLink: string;
  flyerAlt: string;
  flyerCaption: string;
  flyerOpen: string;
  heroPill: string;
  banner: string;
  bannerAction: string;
  timelineLink: string;
  chip: {
    open: string;
    days: string;
    tomorrow: string;
    today: string;
    closed: string;
    closedAgo: string;
  };
};

export const HACKATHON: Record<Locale, HackathonCopy> = {
  en: {
    eyebrow: 'Next event · Registration open',
    eyebrowClosed: 'Next event',
    title: 'Genome Assembly & Curation Hackathon',
    dates: 'Mon 5 – Fri 9 April 2027',
    place: 'UNICAMP, Campinas, Brazil',
    mode: 'In person or online',
    points: [
      { label: 'Aim', text: 'Learn and work together to assemble and analyse reference genomes.' },
      { label: 'Who can take part', text: 'Researchers with and without experience in genome assembly and curation.' },
      { label: 'Join us', text: 'Help us generate our first genomes as a community.' },
    ],
    register: 'Register now',
    deadlineLabel: 'Registration deadline',
    deadline: '20 December 2026',
    closedNote: 'Registration has closed. See you in Campinas or online.',
    congress: 'The week after the Biology of Butterflies & ELEN congress in Campinas (30 March – 3 April).',
    congressLink: 'Congress website',
    flyerAlt: 'Poster of the Genome Assembly & Curation Hackathon, 5–9 April 2027 at UNICAMP, Campinas, Brazil, with the registration link, a QR code and the 20 December 2026 deadline.',
    flyerCaption: 'Hackathon poster (English and Spanish).',
    flyerOpen: 'Enlarge the poster',
    heroPill: 'Genome assembly hackathon · 5–9 April 2027',
    banner: 'Genome Assembly & Curation Hackathon · 5–9 April 2027',
    bannerAction: 'Register',
    timelineLink: 'Details and registration',
    chip: {
      open: 'Open until 20 December',
      days: 'Closes in {n} days',
      tomorrow: 'Closes tomorrow',
      today: 'Closes today',
      closed: 'Registration closed',
      closedAgo: 'Closed {ago}',
    },
  },
  es: {
    eyebrow: 'Próximo evento · Inscripciones abiertas',
    eyebrowClosed: 'Próximo evento',
    title: 'Hackatón de Ensamblaje y Curación de Genomas',
    dates: 'Lun 5 – Vie 9 de abril de 2027',
    place: 'UNICAMP, Campinas, Brasil',
    mode: 'Presencial o virtual',
    points: [
      { label: 'Objetivo', text: 'Aprender y trabajar juntos para ensamblar y analizar genomas de referencia.' },
      { label: '¿Quiénes pueden participar?', text: 'Investigadores con y sin experiencia previa en ensamblaje y curación de genomas.' },
      { label: '¡Únete!', text: 'Ayúdanos a generar nuestros primeros genomas como comunidad.' },
    ],
    register: 'Regístrate ahora',
    deadlineLabel: 'Fecha límite de inscripción',
    deadline: '20 de diciembre de 2026',
    closedNote: 'Las inscripciones están cerradas. Nos vemos en Campinas o en línea.',
    congress: 'La semana siguiente al congreso Biology of Butterflies y ELEN en Campinas (30 de marzo – 3 de abril).',
    congressLink: 'Sitio del congreso',
    flyerAlt: 'Afiche del Hackatón de Ensamblaje y Curación de Genomas, del 5 al 9 de abril de 2027 en la UNICAMP, Campinas, Brasil, con el enlace de inscripción, un código QR y la fecha límite del 20 de diciembre de 2026.',
    flyerCaption: 'Afiche del hackatón (inglés y español).',
    flyerOpen: 'Ampliar el afiche',
    heroPill: 'Hackatón de ensamblaje de genomas · 5–9 de abril de 2027',
    banner: 'Hackatón de Ensamblaje y Curación de Genomas · 5–9 de abril de 2027',
    bannerAction: 'Inscríbete',
    timelineLink: 'Detalles e inscripción',
    chip: {
      open: 'Abiertas hasta el 20 de diciembre',
      days: 'Cierran en {n} días',
      tomorrow: 'Cierran mañana',
      today: 'Cierran hoy',
      closed: 'Inscripciones cerradas',
      closedAgo: 'Cerraron {ago}',
    },
  },
};
