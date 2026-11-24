/**
 * The Genome Assembly & Curation Hackathon (Campinas, April 2027).
 *
 * Sources:
 *  - the bilingual flyer, first sent by Joana Meier on 21 November 2026 and
 *    revised by Nicol Rueda on 23 November 2026 (aim names Lepidoptera,
 *    participants from Latin America & the Caribbean, LEMA logo);
 *  - Nicol's Google Doc of 23 November 2026, the full text for the
 *    hackathon page: description, participation and selection, key dates,
 *    cost, language and the provisional schedule;
 *  - Nicol's changes of 23 November 2026 (WhatsApp): the event line with the
 *    optional Sunday welcome day, "(optional)" on the Sunday row, and the
 *    cost text with scholarships.
 * The Spanish here is our translation of the English text.
 * The congress dates (30 March – 3 April 2027) come from the Biology of
 * Butterflies / ELEN 2027 page (even3.com.br/bob-elen-2027).
 *
 * Dates drive the page by themselves (`caligoDeadlines()` in Base.astro):
 * registration is open until REGISTRATION_DEADLINE, and the home feature and
 * the banner disappear once the event has ended. The /hackathon page stays.
 */
import type { Locale } from '../i18n';

export const HACKATHON_ID = 'campinas-2027';
/** The short link printed on the flyer; it leads to the Google Form. */
export const HACKATHON_REGISTRATION_URL = 'https://tinyurl.com/caligo-hackathon';
export const HACKATHON_REGISTRATION_DEADLINE = '2026-12-20';
export const HACKATHON_NOTIFICATION = '2027-01-31';
export const HACKATHON_START = '2027-04-05';
export const HACKATHON_END = '2027-04-09';
export const HACKATHON_CONGRESS_URL = 'https://www.even3.com.br/bob-elen-2027/';
/** Logical page path (no locale). */
export const HACKATHON_PAGE = '/hackathon';

/* "-v2": the revised flyer of 23 November; a new name so no browser keeps
   showing the first one from its cache. */
export const HACKATHON_FLYER = {
  full: 'media/events/hackathon-2027-flyer-v2.jpg',
  srcset: [
    { width: 480, path: 'media/events/hackathon-2027-flyer-v2-480w.jpg' },
    { width: 720, path: 'media/events/hackathon-2027-flyer-v2-720w.jpg' },
    { width: 1086, path: 'media/events/hackathon-2027-flyer-v2.jpg' },
  ],
  width: 1086,
  height: 1448,
} as const;

/** True once the visitor's local date is after `iso` (YYYY-MM-DD). */
export function isPast(iso: string, now: Date = new Date()): boolean {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()) > new Date(y, m - 1, d);
}

type ChipStrings = {
  open: string;
  days: string;
  tomorrow: string;
  today: string;
  closed: string;
  closedAgo: string;
};

type HackathonCopy = {
  eyebrow: string;
  title: string;
  dates: string;
  place: string;
  mode: string;
  points: readonly { label: string; text: string }[];
  register: string;
  deadlineLabel: string;
  deadline: string;
  closedNote: string;
  moreLink: string;
  flyerAlt: string;
  flyerCaption: string;
  flyerOpen: string;
  heroPill: string;
  heroDates: string;
  bannerName: string;
  bannerDates: string;
  bannerAction: string;
  timelineLink: string;
  timelineLinkClosed: string;
  newTab: string;
  chip: ChipStrings;
  bannerChip: ChipStrings;
  page: {
    metaTitle: string;
    description: string;
    /** The first paragraph holds `{link}` for the congress name. */
    intro: readonly string[];
    congressLink: string;
    participationTitle: string;
    participation: readonly string[];
    datesTitle: string;
    keyDates: readonly { label: string; value: string; iso?: string }[];
    costTitle: string;
    cost: string;
    languageTitle: string;
    language: string;
    scheduleTitle: string;
    scheduleNote: string;
    noMilestone: string;
    detailsLabel: string;
    columns: { day: string; morning: string; afternoon: string; milestone: string };
    schedule: readonly { day: string; iso: string; morning: string; afternoon: string; milestone: string }[];
    applyTitle: string;
    applyNote: string;
  };
};

export const HACKATHON: Record<Locale, HackathonCopy> = {
  en: {
    eyebrow: 'Next event',
    title: 'Genome Assembly & Curation Hackathon',
    dates: 'Mon. 5 – Fri. 9 April 2027',
    place: 'UNICAMP, Campinas, Brazil',
    mode: 'In person or online',
    points: [
      { label: 'Aim:', text: 'Learn and work together to assemble and analyse reference genomes of Lepidoptera.' },
      { label: 'Who can participate?', text: 'Researchers from Latin America and the Caribbean, with or without experience.' },
      { label: 'Help us', text: 'generate our first genomes as a community!' },
    ],
    register: 'Apply now',
    deadlineLabel: 'Application deadline',
    deadline: '20 December 2026',
    closedNote: 'See you in Campinas or online.',
    moreLink: 'Selection, cost and schedule',
    flyerAlt: 'Poster of the Genome Assembly & Curation Hackathon, 5–9 April 2027 at UNICAMP, Campinas, Brazil, for researchers from Latin America and the Caribbean, with the registration link, a QR code and the 20 December 2026 deadline.',
    flyerCaption: 'Hackathon poster (English and Spanish).',
    flyerOpen: 'Enlarge the poster',
    heroPill: 'Genome assembly hackathon',
    heroDates: '5–9 April 2027',
    bannerName: 'Genome assembly hackathon',
    bannerDates: '5–9 April 2027',
    bannerAction: 'Details',
    timelineLink: 'Details and how to apply',
    timelineLinkClosed: 'Event details',
    newTab: '(opens in a new tab)',
    chip: {
      open: 'Closes on 20 December',
      days: 'Closes in {n} days',
      tomorrow: 'Closes tomorrow',
      today: 'Closes today',
      closed: 'Applications closed',
      closedAgo: 'Applications closed',
    },
    bannerChip: {
      open: 'Apply by 20 December',
      days: 'Applications: {n} days left',
      tomorrow: 'Applications close tomorrow',
      today: 'Applications close today',
      closed: 'Applications closed',
      closedAgo: 'Applications closed',
    },
    page: {
      metaTitle: 'Genome Assembly & Curation Hackathon',
      description: 'Five days at UNICAMP, Campinas, Brazil (5–9 April 2027), in person or online, to assemble and curate the first Caligo reference genomes of Lepidoptera. Apply by 20 December 2026.',
      intro: [
        'Right after the {link} meeting in São Paulo, Brazil, we will spend five days at the Universidade Estadual de Campinas (UNICAMP) assembling and curating long-read sequencing data that the Caligo initiative has generated with Oxford Nanopore Technologies (ONT) across Latin America, with the aim of producing our first Lepidoptera reference genomes.',
        'We invite researchers from Latin America and the Caribbean, whatever their previous experience in genome assembly, to learn, collaborate and develop new skills while we build our first reference genomes as a community.',
      ],
      congressLink: 'Neotropical Lepidoptera / Biology of Butterflies',
      participationTitle: 'Selection',
      participation: [
        'Places will be prioritised for Caligo members, followed by students from UNICAMP and the wider region.',
        'The selection process will actively favour applicants from historically excluded groups, underrepresented countries and institutions, and first-generation academics, while aiming for diversity in gender, country of origin and career stage.',
      ],
      datesTitle: 'Key dates and hours',
      keyDates: [
        { label: 'Event', value: 'Monday 5 to Friday 9 April 2027, at UNICAMP in Campinas, Brazil, in person or online', iso: '2027-04-05' },
        { label: 'Optional welcome day', value: 'Sunday 4 April: introductions, team formation and computing access checks', iso: '2027-04-04' },
        { label: 'Application deadline', value: '20 December 2026', iso: '2026-12-20' },
        { label: 'Selected participants notified', value: '31 January 2027', iso: '2027-01-31' },
        { label: 'Daily hours', value: '9:00 am to 6:00 pm (Brasília time, UTC−3)' },
      ],
      costTitle: 'Cost',
      cost: 'The registration fee is US$50 per participant, which covers lunch and coffee breaks. We are applying for grants to fund scholarships. If funding is secured, scholarship recipients will not need to pay the registration fee. We will update this page as soon as we have confirmation.',
      languageTitle: 'Language',
      language: 'The hackathon will be taught in English, and several instructors speak Spanish and Portuguese.',
      scheduleTitle: 'Schedule',
      scheduleNote: 'This schedule is provisional and subject to change.',
      noMilestone: 'No milestone listed',
      detailsLabel: 'Hackathon details',
      columns: { day: 'Day', morning: 'Morning', afternoon: 'Afternoon', milestone: 'Milestone' },
      schedule: [
        { day: 'Sun. 4 Apr. (optional)', iso: '2027-04-04', morning: 'Welcome, introductions, IDEA and data sovereignty principles', afternoon: 'Form teams, practice command-line tools and computing access checks', milestone: 'All participants in teams and online, data release strategy and plan for genome release & papers' },
        { day: 'Mon. 5 Apr.', iso: '2027-04-05', morning: 'ONT read quality control, trimming, purging, and genome size estimation', afternoon: 'Inspect assigned genome raw data and estimate coverage', milestone: 'QC report for genomes' },
        { day: 'Tue. 6 Apr.', iso: '2027-04-06', morning: 'Long-read genome assembly', afternoon: 'Long-read assembler intro, parameter selection and computational workflows', milestone: 'Toy genomes assembled' },
        { day: 'Wed. 7 Apr.', iso: '2027-04-07', morning: 'Hi-C contact maps, chromosome scaffolding, and manual curation', afternoon: 'Inspect precomputed Hi-C maps, identify misassemblies, and practice curation', milestone: 'Preliminary chromosome-level scaffolds or documented curation decisions' },
        { day: 'Thu. 8 Apr.', iso: '2027-04-08', morning: 'Assembly completeness, contamination screening, BUSCO and comparative genome analysis', afternoon: 'First comparative analyses across 50 genomes, compare quality metrics', milestone: 'Quality metrics table for 50 genomes' },
        { day: 'Fri. 9 Apr.', iso: '2027-04-09', morning: 'Team presentations and discussion of findings', afternoon: 'Refine follow-up plan', milestone: '' },
      ],
      applyTitle: 'Apply',
      applyNote: 'No previous experience in genome assembly is needed. Fee: US$50. Selected participants will be notified on 31 January 2027.',
    },
  },
  es: {
    eyebrow: 'Próximo evento',
    title: 'Hackatón de Ensamblaje y Curación de Genomas',
    dates: 'Lun. 5 – Vie. 9 de abril de 2027',
    place: 'UNICAMP, Campinas, Brasil',
    mode: 'Presencial o virtual',
    points: [
      { label: 'Objetivo:', text: 'Aprender y trabajar juntos para ensamblar y analizar genomas de referencia de lepidópteros.' },
      { label: '¿Quiénes pueden participar?', text: 'Investigadores de América Latina y el Caribe, con o sin experiencia previa.' },
      { label: '¡Ayúdanos', text: 'a generar nuestros primeros genomas como comunidad!' },
    ],
    register: 'Postúlate ahora',
    deadlineLabel: 'Cierre de postulaciones',
    deadline: '20 de diciembre de 2026',
    closedNote: 'Nos vemos en Campinas o de forma virtual.',
    moreLink: 'Selección, costo y programa',
    flyerAlt: 'Afiche del Hackatón de Ensamblaje y Curación de Genomas, del 5 al 9 de abril de 2027 en la UNICAMP, Campinas, Brasil, para investigadores de América Latina y el Caribe, con el enlace de inscripción, un código QR y la fecha límite del 20 de diciembre de 2026.',
    flyerCaption: 'Afiche del hackatón (inglés y español).',
    flyerOpen: 'Ampliar el afiche',
    heroPill: 'Hackatón de ensamblaje de genomas',
    heroDates: '5–9 de abril de 2027',
    bannerName: 'Hackatón de ensamblaje',
    bannerDates: '5–9 abr. 2027',
    bannerAction: 'Detalles',
    timelineLink: 'Detalles y postulación',
    timelineLinkClosed: 'Detalles del evento',
    newTab: '(se abre en otra pestaña)',
    chip: {
      open: 'Cierra el 20 de diciembre',
      days: 'Cierra en {n} días',
      tomorrow: 'Cierra mañana',
      today: 'Cierra hoy',
      closed: 'Postulaciones cerradas',
      closedAgo: 'Postulaciones cerradas',
    },
    bannerChip: {
      open: 'Postulaciones hasta el 20 de diciembre',
      days: 'Postulaciones: quedan {n} días',
      tomorrow: 'Postulaciones: cierran mañana',
      today: 'Postulaciones: cierran hoy',
      closed: 'Postulaciones cerradas',
      closedAgo: 'Postulaciones cerradas',
    },
    page: {
      metaTitle: 'Hackatón de Ensamblaje y Curación de Genomas',
      description: 'Cinco días en la UNICAMP, Campinas, Brasil (5–9 de abril de 2027), presencial o virtual, para ensamblar y curar los primeros genomas de referencia de lepidópteros de Caligo. Postúlate hasta el 20 de diciembre de 2026.',
      intro: [
        'Justo después del congreso {link} en São Paulo, Brasil, pasaremos cinco días en la Universidade Estadual de Campinas (UNICAMP) ensamblando y curando datos de secuenciación de lecturas largas que la iniciativa Caligo ha generado con Oxford Nanopore Technologies (ONT) en distintos países de América Latina, con el objetivo de producir nuestros primeros genomas de referencia de lepidópteros.',
        'Invitamos a investigadores de América Latina y el Caribe, tengan o no experiencia previa en ensamblaje de genomas, a aprender, colaborar y desarrollar nuevas habilidades mientras construimos en comunidad nuestros primeros genomas de referencia.',
      ],
      congressLink: 'Neotropical Lepidoptera / Biology of Butterflies',
      participationTitle: 'Selección',
      participation: [
        'Se dará prioridad a integrantes de Caligo y, después, a estudiantes de la UNICAMP y del resto de la región.',
        'El proceso de selección favorecerá activamente a postulantes de grupos históricamente excluidos, de países e instituciones subrepresentados y a personas de primera generación universitaria, buscando además diversidad de género, país de origen y etapa de la carrera académica.',
      ],
      datesTitle: 'Fechas y horario',
      keyDates: [
        { label: 'Evento', value: 'Del lunes 5 al viernes 9 de abril de 2027, en la UNICAMP, en Campinas, Brasil, de forma presencial o virtual', iso: '2027-04-05' },
        { label: 'Día de bienvenida (opcional)', value: 'Domingo 4 de abril: presentaciones, formación de equipos y verificación del acceso a los recursos de cómputo', iso: '2027-04-04' },
        { label: 'Cierre de postulaciones', value: '20 de diciembre de 2026', iso: '2026-12-20' },
        { label: 'Aviso a las personas seleccionadas', value: '31 de enero de 2027', iso: '2027-01-31' },
        { label: 'Horario diario', value: 'De 9:00 a 18:00 (hora de Brasilia, UTC−3)' },
      ],
      costTitle: 'Costo',
      cost: 'La inscripción cuesta US$50 por participante e incluye almuerzos y pausas para café. Estamos postulando a fondos para ofrecer becas. Si conseguimos el financiamiento, las personas becadas no tendrán que pagar la inscripción. Actualizaremos esta página en cuanto tengamos confirmación.',
      languageTitle: 'Idioma',
      language: 'El hackatón se impartirá en inglés; varios instructores hablan español y portugués.',
      scheduleTitle: 'Programa',
      scheduleNote: 'Este programa es provisional y puede cambiar.',
      noMilestone: 'Sin resultado indicado',
      detailsLabel: 'Detalles del hackatón',
      columns: { day: 'Día', morning: 'Mañana', afternoon: 'Tarde', milestone: 'Resultado del día' },
      schedule: [
        { day: 'Dom. 4 abr. (opcional)', iso: '2027-04-04', morning: 'Bienvenida, presentaciones, principios IDEA y de soberanía de datos', afternoon: 'Formación de equipos, práctica con herramientas de línea de comandos y verificación del acceso a los recursos de cómputo', milestone: 'Todos los participantes en equipos y conectados; estrategia de publicación de datos y plan para publicar los genomas y los artículos' },
        { day: 'Lun. 5 abr.', iso: '2027-04-05', morning: 'Control de calidad de lecturas ONT, recorte (trimming), depuración (purging) y estimación del tamaño del genoma', afternoon: 'Revisión de los datos crudos del genoma asignado y estimación de la cobertura', milestone: 'Informe de calidad de los genomas' },
        { day: 'Mar. 6 abr.', iso: '2027-04-06', morning: 'Ensamblaje de genomas con lecturas largas', afternoon: 'Introducción a los ensambladores de lecturas largas, selección de parámetros y flujos de trabajo computacionales', milestone: 'Genomas de prueba ensamblados' },
        { day: 'Mié. 7 abr.', iso: '2027-04-07', morning: 'Mapas de contacto Hi-C, scaffolding a escala cromosómica y curación manual', afternoon: 'Revisión de mapas Hi-C precalculados, detección de errores de ensamblaje y práctica de curación', milestone: 'Scaffolds preliminares a escala cromosómica o decisiones de curación documentadas' },
        { day: 'Jue. 8 abr.', iso: '2027-04-08', morning: 'Completitud del ensamblaje, detección de contaminación, BUSCO y análisis genómico comparativo', afternoon: 'Primeros análisis comparativos entre 50 genomas y comparación de métricas de calidad', milestone: 'Tabla de métricas de calidad de 50 genomas' },
        { day: 'Vie. 9 abr.', iso: '2027-04-09', morning: 'Presentaciones de los equipos y discusión de resultados', afternoon: 'Ajuste del plan de seguimiento', milestone: '' },
      ],
      applyTitle: 'Postúlate',
      applyNote: 'No hace falta experiencia previa en ensamblaje de genomas. Inscripción: US$50. Avisaremos a las personas seleccionadas el 31 de enero de 2027.',
    },
  },
};
