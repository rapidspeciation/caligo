/**
 * src/data/initiative.ts — Canonical data module for Caligo initiative material.
 *
 * All factual content transcribed from:
 *   context/plan-mejora/01_INVENTARIO_MATERIAL_NICOL.md (sections A–N)
 * No names, affiliations, dates or counts are invented; if doc 01 does not
 * document it, it is omitted.
 *
 * consumers should import from './initiative'; './content' remains the raw store.
 */
import type { Locale } from '../i18n/config';
import { FACILITIES as _FACILITIES } from './content';

export type Bilingual = Record<Locale, string>;

/* ---------- Re-exports — content.ts remains the raw store ---------- */
export {
  OBJECTIVES,
  PRINCIPLES,
  TIERS,
  PROJECTS,
  FACILITIES,
  LINKS,
  LAST_REVIEWED,
  pick,
  italicizeSpecies,
} from './content';
export type { Project, Facility } from './content';

/* ---------- Initiative leaders ---------- */
export type Person = {
  name: string;
  photo: {
    path: string;
    width: number;
    height: number;
    alt: Bilingual;
    source: {
      label: Bilingual;
      href: string;
    };
  };
  role: Bilingual;
  bio: Bilingual;
  affiliation: string;
  regionalTies: Bilingual;
  source: {
    label: Bilingual;
    href: string;
  };
};

/**
 * Leadership names and regional connections follow the initiative leadership
 * slide supplied in July 2026. Affiliations and research summaries were checked
 * against official institutional profiles and research-group pages in July 2026.
 */
export const LEADERS: Person[] = [
  {
    name: 'Caroline Bacquet',
    photo: {
      path: 'media/people/caroline-bacquet-caligo.jpg',
      width: 480,
      height: 475,
      alt: { en: 'Portrait of Caroline Bacquet.', es: 'Retrato de Caroline Bacquet.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Butterfly ecology and environmental response',
      es: 'Ecología de mariposas y respuesta ambiental',
    },
    bio: {
      en: 'At Ikiam’s Scientific Insectary, Caroline studies the genetics, molecular evolution and behaviour of Amazonian Lepidoptera, including their responses to environmental change.',
      es: 'En el Insectario Científico de Ikiam, Caroline estudia la genética, la evolución molecular y el comportamiento de los lepidópteros amazónicos, incluidas sus respuestas al cambio ambiental.',
    },
    affiliation: 'Universidad Regional Amazónica Ikiam',
    regionalTies: { en: 'Ecuador', es: 'Ecuador' },
    source: {
      label: { en: 'Profile at Ikiam', es: 'Perfil en Ikiam' },
      href: 'https://pure.ikiam.edu.ec/en/persons/caroline-bacquet-p%C3%A9rez/',
    },
  },
  {
    name: 'Gyanpriya Maharaj',
    photo: {
      path: 'media/people/gyanpriya-maharaj-caligo.jpg',
      width: 365,
      height: 547,
      alt: { en: 'Portrait of Gyanpriya Maharaj.', es: 'Retrato de Gyanpriya Maharaj.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Butterfly ecology and biodiversity monitoring',
      es: 'Ecología de mariposas y monitoreo de biodiversidad',
    },
    bio: {
      en: 'Her research examines the diversity, genetics, physiology, ecology and behaviour of Neotropical butterflies, alongside broader work in entomology and insect monitoring.',
      es: 'Gyanpriya estudia la diversidad, la genética, la fisiología, la ecología y la conducta de las mariposas neotropicales, además de otros temas de entomología y monitoreo de insectos.',
    },
    affiliation: 'University of Guyana',
    regionalTies: { en: 'Guyana', es: 'Guyana' },
    source: {
      label: { en: 'University of Guyana profile', es: 'Perfil en la Universidad de Guyana' },
      href: 'https://expertguide.uog.edu.gy/dr-gyanpriya-maharaj',
    },
  },
  {
    name: 'Carmen Barragán',
    photo: {
      path: 'media/people/carmen-barragan-caligo.png',
      width: 166,
      height: 156,
      alt: { en: 'Portrait of Carmen Barragán.', es: 'Retrato de Carmen Barragán.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Conservation and population genetics',
      es: 'Genética de la conservación y de poblaciones',
    },
    bio: {
      en: 'Her research combines molecular ecology and conservation genetics to study Neotropical species, population history and biodiversity conservation.',
      es: 'Su investigación combina la ecología molecular y la genética de la conservación para estudiar especies neotropicales, historia poblacional y conservación de la biodiversidad.',
    },
    affiliation: 'Universidade Federal de Goiás',
    regionalTies: { en: 'Brazil / Colombia', es: 'Brasil / Colombia' },
    source: {
      label: { en: 'PUC Goiás research feature', es: 'Nota de investigación de PUC Goiás' },
      href: 'https://www.pucgoias.edu.br/noticias/coleta-de-dados-genomicos-em-especies-do-cerrado-impulsiona-pesquisa-coordenada-pela-puc/',
    },
  },
  {
    name: 'Carlos Arias',
    photo: {
      path: 'media/people/carlos-arias-caligo.jpg',
      width: 480,
      height: 480,
      alt: { en: 'Portrait of Carlos Arias.', es: 'Retrato de Carlos Arias.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Evolutionary genomics and speciation',
      es: 'Genómica evolutiva y especiación',
    },
    bio: {
      en: 'Carlos uses computational methods and research on Heliconius to study how species form and what limits their divergence.',
      es: 'Carlos usa métodos computacionales e investigación en Heliconius para estudiar cómo se forman las especies y qué limita su divergencia.',
    },
    affiliation: 'Smithsonian Tropical Research Institute',
    regionalTies: { en: 'Panama', es: 'Panamá' },
    source: {
      label: { en: 'Smithsonian team profile', es: 'Perfil del equipo Smithsonian' },
      href: 'https://striresearch.si.edu/gamboa-heliconius/research/team/',
    },
  },
  {
    name: 'Nicol Rueda',
    photo: {
      path: 'media/people/nicol-rueda-caligo.jpg',
      width: 480,
      height: 556,
      alt: { en: 'Portrait of Nicol Rueda.', es: 'Retrato de Nicol Rueda.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: { en: 'Chromosome evolution', es: 'Evolución cromosómica' },
    bio: {
      en: 'She studies chromosome structure and sex chromosome-autosome fusions in Heliconius, using reference genomes to investigate Lepidoptera evolution.',
      es: 'Estudia la estructura cromosómica y las fusiones entre cromosomas sexuales y autosomas en Heliconius mediante genomas de referencia para investigar la evolución de los lepidópteros.',
    },
    affiliation: 'Wellcome Sanger Institute',
    regionalTies: { en: 'Colombia / United Kingdom', es: 'Colombia / Reino Unido' },
    source: {
      label: { en: 'Profile at Sanger', es: 'Perfil en Sanger' },
      href: 'https://www.sanger.ac.uk/person/rueda-nicol/',
    },
  },
  {
    name: 'Joana Meier',
    photo: {
      path: 'media/people/joana-meier-caligo.jpg',
      width: 447,
      height: 447,
      alt: { en: 'Portrait of Joana Meier.', es: 'Retrato de Joana Meier.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Speciation and comparative genomics',
      es: 'Especiación y genómica comparativa',
    },
    bio: {
      en: 'Her research in speciation and evolutionary genomics examines how interbreeding and chromosomal rearrangements contribute to rapid adaptation and the formation of new species.',
      es: 'Su investigación en especiación y genómica evolutiva estudia cómo la hibridación y los reordenamientos cromosómicos contribuyen a la adaptación rápida y la formación de nuevas especies.',
    },
    affiliation: 'Wellcome Sanger Institute',
    regionalTies: { en: 'Ecuador / Peru / United Kingdom', es: 'Ecuador / Perú / Reino Unido' },
    source: {
      label: { en: 'Profile at Sanger', es: 'Perfil en Sanger' },
      href: 'https://www.sanger.ac.uk/person/meier-joana/',
    },
  },
  {
    name: 'Vicencio Oostra',
    photo: {
      path: 'media/people/vicencio-oostra-caligo.jpg',
      width: 300,
      height: 300,
      alt: { en: 'Portrait of Vicencio Oostra.', es: 'Retrato de Vicencio Oostra.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Tropical adaptation and genome resources',
      es: 'Adaptación tropical y recursos genómicos',
    },
    bio: {
      en: 'He combines development, genomics, evolutionary biology and ecology to study how tropical butterflies adapt to environmental change.',
      es: 'Combina desarrollo, genómica, biología evolutiva y ecología para estudiar cómo las mariposas tropicales se adaptan al cambio ambiental.',
    },
    affiliation: 'Queen Mary University of London',
    regionalTies: { en: 'Colombia / United Kingdom', es: 'Colombia / Reino Unido' },
    source: {
      label: { en: 'Profile at Queen Mary', es: 'Perfil en Queen Mary' },
      href: 'https://www.seresearch.qmul.ac.uk/cefg/people/voostra/',
    },
  },
  {
    name: 'Geoff Gallice',
    photo: {
      path: 'media/people/geoff-gallice-caligo.jpg',
      width: 480,
      height: 422,
      alt: { en: 'Portrait of Geoff Gallice.', es: 'Retrato de Geoff Gallice.' },
      source: {
        label: { en: 'Photo supplied by Caligo', es: 'Foto proporcionada por Caligo' },
        href: 'https://docs.google.com/presentation/d/11_jUsbEc9hDb45DSBlSCiLov8dTWd3_o/edit',
      },
    },
    role: {
      en: 'Amazonian entomology and conservation',
      es: 'Entomología y conservación amazónicas',
    },
    bio: {
      en: 'Geoff studies the taxonomy, systematics, ecology and conservation of Amazonian insects. He also teaches and supervises research on sustainable biodiversity management in Peru.',
      es: 'Geoff estudia la taxonomía, la sistemática, la ecología y la conservación de insectos amazónicos. También enseña y supervisa investigaciones sobre el manejo sostenible de la biodiversidad en Perú.',
    },
    affiliation: 'Pontificia Universidad Católica del Perú / Alianza para una Amazonía Sostenible',
    regionalTies: { en: 'Peru / United States', es: 'Perú / Estados Unidos' },
    source: {
      label: { en: 'Profile at PUCP', es: 'Perfil en la PUCP' },
      href: 'https://www.pucp.edu.pe/profesor/geoffrey-gallice-',
    },
  },
];

/* ---------- Network size (doc 01 §J1) ---------- */
export type NetworkMetric = { value: number; asOf: string };

/** Membership count supplied in the September 2026 website review. */
// Membership geography from Nicole’s September 2026 document.
export const MEMBER_COUNTRIES = { latinAmerica: 17, outsideRegion: 12 } as const;

export const PARTICIPANTS: NetworkMetric = { value: 105, asOf: '2026-09' };

/* ---------- Events with dates (doc 01 §L1, §L2) ---------- */
export type InitiativeEvent = {
  id: string;
  name: Bilingual;
  dates: Bilingual;
  location: Bilingual;
  summary: Bilingual;
  /** [longitude, latitude] of the host city, used on the network map. */
  lonLat: readonly [number, number];
  /** First and last day (ISO), for the "3 months ago" chips. */
  start: string;
  end: string;
};

export const EVENTS: InitiativeEvent[] = [
  {
    id: 'bogota-2026',
    name: {
      en: 'Bogotá sequencing workshop',
      es: 'Taller de secuenciación de Bogotá',
    },
    dates: {
      en: '20–23 July 2026',
      es: '20–23 de julio de 2026',
    },
    location: {
      en: 'Bogotá, Colombia',
      es: 'Bogotá, Colombia',
    },
    lonLat: [-74.07, 4.62],
    start: '2026-07-20',
    end: '2026-07-23',
    summary: {
      en: 'The network’s first activity in Latin America, with the Red Colombiana de Genómica. Eight Heliconius species were sequenced during the workshop.',
      es: 'La primera actividad de la red en América Latina, con la Red Colombiana de Genómica. Durante el taller se secuenciaron ocho especies de Heliconius.',
    },
  },
  {
    id: 'campinas-2027',
    name: {
      en: 'Campinas hackathon',
      es: 'Hackathon de Campinas',
    },
    dates: {
      en: '30 March – 3 April 2027',
      es: '30 de marzo – 3 de abril de 2027',
    },
    location: {
      en: 'Campinas, Brazil',
      es: 'Campinas, Brasil',
    },
    lonLat: [-47.06, -22.91],
    start: '2027-03-30',
    end: '2027-04-03',
    summary: {
      en: 'Hackathon at the Biology of Butterflies and Neotropical Lepidoptera (ELEN) congress: collaborative work to assemble reference genomes, analyse the data and strengthen the network.',
      es: 'Hackathon durante el congreso Biology of Butterflies y Encuentro de Lepidópteros Neotropicales (ELEN): trabajo colaborativo para ensamblar genomas de referencia, analizar los datos y fortalecer la red.',
    },
  },
];

/* ---------- Language policy (doc 01 §H10) ---------- */
/** DOC L69; PRES L81 — English and Spanish official; Portuguese informal in meetings. */
export const LANGUAGE_POLICY: Bilingual = {
  en: 'Official communications are in English and Spanish. Portuguese is also used in meetings, with informal translation among participants who understand both.',
  es: 'Las comunicaciones oficiales se hacen en inglés y español. El portugués también se usa en las reuniones, con traducción informal entre quienes entienden ambos.',
};


/* ---------- Derived aggregates — principle 4: never hardcoded ---------- */
/**
 * Derive facility and country counts from the FACILITIES data array at call time.
 * Never hardcode these numbers — derive from data so build-time tripwires stay green.
 */
export function facilityStats(): { facilities: number; countries: number } {
  const countries = new Set(_FACILITIES.map((f) => f.country.en));
  return { facilities: _FACILITIES.length, countries: countries.size };
}
