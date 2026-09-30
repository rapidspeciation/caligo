/**
 * consumers should import from './initiative'; this module remains the raw store.
 * Footer.astro and JoinCTA.astro import LINKS directly — do not rename exports here.
 */
import type { Locale } from '../i18n/config';

export type Bilingual = Record<Locale, string>;

/** Pick a localized string from a bilingual field. */
export function pick(field: Bilingual, locale: Locale): string {
  return field[locale];
}

/* ---------- Strategic objectives (Network page) ---------- */
export const OBJECTIVES: Bilingual[] = [
  {
    en: 'Generate three complementary tiers of genomic data: DNA barcodes for identification and population work; short-read data at species and population levels; and reference-quality assemblies, beginning with representation across Neotropical Lepidoptera families and subfamilies.',
    es: 'Generar tres niveles complementarios de datos genómicos: códigos de barras de ADN para identificación y trabajo poblacional; datos de lecturas cortas a nivel de especie y de población; y ensamblajes de calidad de referencia, comenzando por la representación de las familias y subfamilias de lepidópteros neotropicales.',
  },
  {
    en: 'Balance phylogenetic breadth with research priorities defined in Latin America, including rare, endemic, and taxonomically difficult lineages.',
    es: 'Equilibrar la amplitud filogenética con las prioridades de investigación definidas en América Latina, incluyendo linajes raros, endémicos y taxonómicamente difíciles.',
  },
  {
    en: 'Anchor every project in taxonomy: each genome tied to a vouchered, identified specimen and to accountable specialist expertise.',
    es: 'Vincular cada proyecto con la taxonomía: cada genoma debe corresponder a un ejemplar identificado y depositado en una colección, con especialistas responsables de confirmar su identidad.',
  },
  {
    en: 'Build regional sequencing partnerships, sample-banking infrastructure, and bioinformatics capacity so that sequencing and analysis happen in Latin America or with researchers from the region.',
    es: 'Construir alianzas regionales de secuenciación, bancos de muestras y capacidad bioinformática para que la secuenciación y el análisis se realicen en América Latina o con investigadores de la región.',
  },
  {
    en: 'Train early-career researchers through workshops, exchanges, joint supervision, and shared publications.',
    es: 'Formar a investigadores al inicio de su carrera mediante talleres, intercambios, cosupervisión y publicaciones conjuntas.',
  },
  {
    en: 'Make data and methods open by default while governing authorship, embargoes, credit, and benefit-sharing transparently and fairly.',
    es: 'Mantener abiertos los datos y métodos por defecto, con reglas transparentes y justas para la autoría, los embargos, el crédito y la distribución de beneficios.',
  },
  {
    en: 'Coordinate national, regional, and international funding as a single initiative.',
    es: 'Coordinar el financiamiento nacional, regional e internacional como una sola iniciativa.',
  },
];

/* ---------- Guiding principles (Network page) ---------- */
export const PRINCIPLES: { title: Bilingual; body: Bilingual }[] = [
  {
    title: { en: 'Latin American leadership', es: 'Liderazgo latinoamericano' },
    body: {
      en: 'Researchers in Latin America help choose the questions and lead sampling, analysis and publication.',
      es: 'Los investigadores radicados en América Latina ayudan a definir las preguntas y lideran el muestreo, el análisis y la publicación.',
    },
  },
  {
    title: { en: 'Prioritising capacity building', es: 'Prioridad al desarrollo de capacidades' },
    body: {
      en: 'Invest in people, skills, knowledge and infrastructure so researchers and institutions in the region can lead biodiversity research, conservation and management.',
      es: 'Invertir en personas, capacidades, conocimiento e infraestructura para que investigadores e instituciones de la región lideren la investigación, conservación y gestión de la biodiversidad.',
    },
  },
  {
    title: { en: 'Inclusive and democratic', es: 'Inclusiva y democrática' },
    body: {
      en: 'Decisions include voices from different countries, languages, institutions and career stages.',
      es: 'Las decisiones incorporan voces de distintos países, idiomas, instituciones y etapas profesionales.',
    },
  },
  {
    title: { en: 'Protection of nature', es: 'Protección de la naturaleza' },
    body: {
      en: 'Reduce harm to organisms, habitats and ecosystems through non-lethal or minimally invasive sampling and responsible field practice.',
      es: 'Reducir el daño a organismos, hábitats y ecosistemas mediante muestreos no letales o mínimamente invasivos y prácticas de campo responsables.',
    },
  },
  {
    title: { en: 'Taxonomy', es: 'Taxonomía' },
    body: {
      en: 'Identify specimens before sequencing, and return genomic results to systematics and taxonomic research.',
      es: 'Identificar los ejemplares antes de secuenciarlos y devolver los resultados genómicos a la sistemática y la investigación taxonómica.',
    },
  },
  {
    title: {
      en: 'Respect for cultures and people’s rights',
      es: 'Respeto por las culturas y los derechos de las personas',
    },
    body: {
      en: 'Respect cultural values, community authority, intellectual and cultural property, privacy and self-determination. Seek free, prior and informed consent where appropriate.',
      es: 'Respetar los valores culturales, la autoridad comunitaria, la propiedad intelectual y cultural, la privacidad y la autodeterminación. Buscar el consentimiento libre, previo e informado cuando corresponda.',
    },
  },
  {
    title: {
      en: 'Permits, national laws and fair benefit sharing',
      es: 'Permisos, leyes nacionales y distribución justa de beneficios',
    },
    body: {
      en: 'Follow national requirements for genetic resources and agree how research results, training and other benefits will be shared. Include local and Indigenous communities, independent naturalists and holders of traditional ecological knowledge.',
      es: 'Cumplir los requisitos nacionales sobre recursos genéticos y acordar cómo se compartirán los resultados, la formación y otros beneficios. Incluir a comunidades locales e indígenas, naturalistas independientes y portadores de conocimiento ecológico tradicional.',
    },
  },
  {
    title: { en: 'Open data and fair credit', es: 'Datos abiertos y crédito justo' },
    body: {
      en: 'Share data openly and credit every contribution transparently and appropriately.',
      es: 'Compartir los datos de forma abierta y reconocer cada contribución de manera transparente y apropiada.',
    },
  },
];

/* ---------- Three data tiers (Science page) ---------- */
export const TIERS: {
  n: string;
  title: Bilingual;
  body: Bilingual;
  platforms: Bilingual;
}[] = [
  {
    n: '01',
    title: { en: 'DNA barcoding and amplicons', es: 'Códigos de barras de ADN y amplicones' },
    body: {
      en: 'Small DNA fragments such as COI and other markers. Relatively low cost, and useful for taxonomy, phylogenetics, identification, and metabarcoding.',
      es: 'Fragmentos pequeños de ADN como el COI y otros marcadores. De costo relativamente bajo, útiles para taxonomía, filogenética, identificación y metabarcoding.',
    },
    platforms: {
      en: 'Commonly produced with Sanger or Oxford Nanopore sequencing.',
      es: 'Se producen habitualmente con secuenciación Sanger u Oxford Nanopore.',
    },
  },
  {
    n: '02',
    title: { en: 'Short-read sequencing', es: 'Secuenciación de lecturas cortas' },
    body: {
      en: 'Whole-genome resequencing, RAD-tag, GBS, RNA-seq, and related approaches. Supports population genomics, classification, and phylogenomics, ideally mapped to a reference genome.',
      es: 'Resecuenciación de genomas completos, RAD-tag, GBS, RNA-seq y enfoques afines. Sustenta la genómica de poblaciones, la clasificación y la filogenómica, idealmente mapeada a un genoma de referencia.',
    },
    platforms: {
      en: 'Usually Illumina or comparable platforms.',
      es: 'Habitualmente en plataformas Illumina o comparables.',
    },
  },
  {
    n: '03',
    title: { en: 'Reference assemblies', es: 'Ensamblajes de referencia' },
    body: {
      en: 'Long reads, often combined with Hi-C, to build chromosome-level genomes and study structural variation, gene-family expansion, and transposable elements.',
      es: 'Lecturas largas, a menudo combinadas con Hi-C, para construir genomas a nivel cromosómico y estudiar la variación estructural, la expansión de familias génicas y los elementos transponibles.',
    },
    platforms: {
      en: 'Platforms include Oxford Nanopore and PacBio.',
      es: 'Las plataformas incluyen Oxford Nanopore y PacBio.',
    },
  },
];

/* ---------- Pilot projects (Projects page) ---------- */
export type Project = {
  id: string;
  species: string; // italicised scientific name(s), rendered with <em>
  title: Bilingual;
  leads: string; // proper names kept as-is
  leadsNote?: Bilingual;
  goal: Bilingual;
  resources?: Bilingual;
  openToCollaborators: boolean;
  heliconiusQuestions?: Bilingual[];
  soyObjectives?: Bilingual[];
};

export const PROJECTS: Project[] = [
  {
    id: 'heliconius',
    species: 'Heliconius',
    title: {
      en: 'Chromosomal rearrangements in Heliconius: drivers and consequences',
      es: 'Reordenamientos cromosómicos en Heliconius: causas y consecuencias',
    },
    leads: 'Nicol Rueda, Joana Meier',
    leadsNote: {
      en: 'The presentation additionally names Caroline Bacquet; this difference between sources needs confirmation.',
      es: 'La presentación menciona además a Caroline Bacquet; esta diferencia entre fuentes necesita confirmación.',
    },
    goal: {
      en: 'Generate chromosome-level genomes across Heliconius. Most species retain 21 chromosomes while some reach as many as 60, giving a system to study why rearrangements occur and how they affect adaptation, speciation, gene loss, and sex-chromosome evolution. The W chromosome carries its own set of questions: where it came from, how W–autosome fusions behave once they happen, whether it is degenerating and at what rate, and which genes are still on it.',
      es: 'Generar genomas a escala cromosómica en Heliconius. La mayoría de las especies conserva 21 cromosomas, mientras que algunas llegan a 60. Esto permite estudiar por qué ocurren los reordenamientos y cómo afectan la adaptación, la especiación, la pérdida de genes y la evolución de los cromosomas sexuales. El cromosoma W plantea sus propias preguntas: cuál es su origen, cómo se comportan las fusiones entre el W y los autosomas una vez formadas, si está degenerando y a qué ritmo, y qué genes conserva.',
    },
    resources: {
      en: 'The project already has contributors with samples, genomic data and expertise in analysis, ecology and behaviour.',
      es: 'El proyecto ya cuenta con colaboradores que aportan muestras, datos genómicos y experiencia en análisis, ecología y comportamiento.',
    },
    openToCollaborators: true,
    heliconiusQuestions: [
      {
        en: 'What are the predictors and drivers of chromosomal rearrangements in Heliconius?',
        es: '¿Cuáles son los predictores y factores que impulsan los reordenamientos cromosómicos en Heliconius?',
      },
      {
        en: 'Why do some lineages undergo frequent rearrangements while others do not?',
        es: '¿Por qué algunos linajes sufren reordenamientos frecuentes y otros no?',
      },
      {
        en: 'What are the functional consequences of rearrangements for gene order, recombination and inheritance?',
        es: '¿Cuáles son las consecuencias funcionales de los reordenamientos para el orden génico, la recombinación y la herencia?',
      },
      {
        en: 'What is the origin and evolutionary history of the W sex chromosome in this group?',
        es: '¿Cuál es el origen y la historia evolutiva del cromosoma sexual W en este grupo?',
      },
      {
        en: 'What are the dynamics and consequences of W–autosome fusions?',
        es: '¿Cuáles son la dinámica y las consecuencias de las fusiones entre el W y los autosomas?',
      },
      {
        en: 'Is the W chromosome degenerating, and at what rate?',
        es: '¿Está degenerando el cromosoma W y a qué ritmo?',
      },
      {
        en: 'Which genes remain on the W chromosome, and what roles do they serve?',
        es: '¿Qué genes permanecen en el W y qué funciones cumplen?',
      },
      {
        en: 'What role do chromosomal rearrangements play in adaptation and speciation?',
        es: '¿Qué papel desempeñan los reordenamientos cromosómicos en la adaptación y la especiación?',
      },
    ],
  },
  {
    id: 'parides',
    species: 'Parides ascanius',
    title: {
      en: 'Genome and population diversity of the endangered Parides ascanius',
      es: 'Genoma y diversidad poblacional de la especie amenazada Parides ascanius',
    },
    leads: 'Karina Brandão, André Freitas, Gilberto Almeida',
    goal: {
      en: 'Assemble a reference genome in Brazil using Nanopore sequencing, and assess genetic diversity in surviving populations of this coastal Brazilian endemic to support its conservation. The species depends on Aristolochia trilobata and is threatened by urbanisation and habitat loss.',
      es: 'Ensamblar en Brasil un genoma de referencia con secuenciación Nanopore y evaluar la diversidad genética de las poblaciones restantes de esta especie endémica de la costa brasileña. Parides ascanius depende de Aristolochia trilobata y está amenazada por la urbanización y la pérdida de hábitat.',
    },
    resources: {
      en: 'Frozen material and DNA are available, and new field collection is planned.',
      es: 'Ya se dispone de material congelado y ADN, y se planea una nueva recolección en campo.',
    },
    openToCollaborators: false,
  },
  {
    id: 'soybean-pests',
    species: '',
    title: {
      en: 'Population genomic monitoring of soybean pests',
      es: 'Monitoreo genómico de poblaciones de plagas de la soja',
    },
    leads: 'Chris Jiggins, Diogo Cavalcante Cabral de Mello, Alberto Soares Corrêa, Henry North',
    goal: {
      en: 'Study a guild of Brazilian lepidopteran soybean pests relevant to food security, using a collection from roughly 800 sites sampled over five years. Planned work includes reference genomes for five species, population histories for eight, landscape connectivity, associations with climate and crop type, and an amplicon panel for pest and insecticide-resistance monitoring.',
      es: 'Estudiar un grupo de plagas lepidópteras de la soja relevantes para la seguridad alimentaria en Brasil, a partir de material recolectado durante cinco años en cerca de 800 sitios. El trabajo previsto incluye genomas de referencia para cinco especies, historias poblacionales para ocho, conectividad del paisaje, asociaciones con el clima y el tipo de cultivo, y un panel de amplicones para monitorear las plagas y la resistencia a insecticidas.',
    },
    resources: {
      en: 'Funding exists for several new reference genomes, and the work could expand to other pests.',
      es: 'Existe financiamiento para varios genomas de referencia nuevos, y el trabajo podría ampliarse a otras plagas.',
    },
    openToCollaborators: false,
    soyObjectives: [
      {
        en: 'Generate reference genomes for five soybean-associated Lepidoptera species, three of which are already partially sequenced.',
        es: 'Generar genomas de referencia para cinco especies de lepidópteros asociados con la soja, tres de las cuales ya están parcialmente secuenciadas.',
      },
      {
        en: 'Study population genomics of eight species, including isolation-by-distance patterns and landscape connectivity.',
        es: 'Estudiar la genómica poblacional de ocho especies, incluyendo patrones de aislamiento por distancia y conectividad del paisaje.',
      },
      {
        en: 'Conduct GWAS analyses associating genomic variation with climate variables and transgenic crop type.',
        es: 'Realizar análisis GWAS asociando variación genómica con variables climáticas y tipo de cultivo transgénico.',
      },
      {
        en: 'Develop an amplicon panel for monitoring pest identity and tracking insecticide resistance.',
        es: 'Desarrollar un panel de amplicones para el monitoreo de la identidad de plagas y el seguimiento de la resistencia a insecticidas.',
      },
    ],
  },
  {
    id: 'panacea',
    species: 'Panacea prola',
    title: {
      en: 'Reference genome for Panacea prola',
      es: 'Genoma de referencia para Panacea prola',
    },
    leads: 'Vicencio Oostra, Jennifer Stewart, Blanca Huertas, Geoff Gallice',
    goal: {
      en: 'Generate a Latin American reference genome with Oxford Nanopore, potentially using a portable PromethION P2 at Finca Las Piedras in southern Peru. The species may be migratory in southern Peru and possibly Colombia. Analysis and publication should ideally be led by a Latin American researcher.',
      es: 'Generar un genoma de referencia latinoamericano con Oxford Nanopore, posiblemente con un PromethION P2 portátil en la Finca Las Piedras, en el sur de Perú. La especie podría ser migratoria en el sur de Perú y quizá también en Colombia. Sería preferible que un investigador latinoamericano liderara el análisis y la publicación.',
    },
    resources: {
      en: 'The project can draw on existing population genomic data and high-coverage Illumina data from museum holotypes of two subspecies and Panacea procilla.',
      es: 'El proyecto puede usar datos genómicos poblacionales existentes y datos Illumina de alta cobertura de holotipos de museo de dos subespecies y de Panacea procilla.',
    },
    openToCollaborators: false,
  },
];

/* ---------- Regional sequencing capacity (Capacity page) ---------- */
export type Facility = {
  institution: string;
  country: Bilingual;
  platforms: string; // platform names kept literal in both languages
  websites: { label: string; href: string }[];
  /** City of the institution's main campus, used to place it on the network map. */
  city: Bilingual;
  /** [longitude, latitude] of that city. */
  lonLat: readonly [number, number];
};

export const FACILITIES: Facility[] = [
  {
    institution: 'Universidad del Rosario',
    city: { en: 'Bogotá', es: 'Bogotá' },
    lonLat: [-74.07, 4.6],
    country: { en: 'Colombia', es: 'Colombia' },
    platforms: 'NextSeq 2000, Nanopore MinION',
    websites: [{ label: 'urosario.edu.co', href: 'https://urosario.edu.co/' }],
  },
  {
    institution: 'Universidad Nacional de Colombia',
    city: { en: 'Bogotá', es: 'Bogotá' },
    lonLat: [-74.08, 4.64],
    country: { en: 'Colombia', es: 'Colombia' },
    platforms: 'Nanopore PromethION',
    websites: [{ label: 'unal.edu.co', href: 'https://unal.edu.co/' }],
  },
  {
    institution: 'Smithsonian Tropical Research Institute',
    city: { en: 'Panama City', es: 'Ciudad de Panamá' },
    lonLat: [-79.54, 8.95],
    country: { en: 'Panama', es: 'Panamá' },
    platforms: 'NextSeq 2000, MinION, PromethION (Hi-C expertise planned)',
    websites: [{ label: 'stri.si.edu', href: 'https://stri.si.edu/' }],
  },
  {
    institution: 'Universidade Federal de Goiás',
    city: { en: 'Goiânia', es: 'Goiânia' },
    lonLat: [-49.26, -16.6],
    country: { en: 'Brazil', es: 'Brasil' },
    platforms: 'NextSeq 2000, MiSeq, MinION, PromethION',
    websites: [{ label: 'ufg.br', href: 'https://ufg.br/' }],
  },
  {
    institution: 'Universidad Regional Amazónica Ikiam',
    city: { en: 'Tena', es: 'Tena' },
    lonLat: [-77.86, -0.95],
    country: { en: 'Ecuador', es: 'Ecuador' },
    platforms: 'PromethION, Hi-C',
    websites: [{ label: 'ikiam.edu.ec', href: 'https://www.ikiam.edu.ec/' }],
  },
  {
    institution: 'Universidad Austral de Chile',
    city: { en: 'Valdivia', es: 'Valdivia' },
    lonLat: [-73.25, -39.81],
    country: { en: 'Chile', es: 'Chile' },
    platforms: 'NextSeq 2000, MinION',
    websites: [{ label: 'uach.cl', href: 'https://www.uach.cl/' }],
  },
  {
    institution: 'Universidade Federal do Pará',
    city: { en: 'Belém', es: 'Belém' },
    lonLat: [-48.45, -1.47],
    country: { en: 'Brazil', es: 'Brasil' },
    platforms: 'NextSeq 2000, MinION',
    websites: [{ label: 'ufpa.br', href: 'https://ufpa.br/' }],
  },
  {
    institution: 'Pontificia Universidad Católica del Perú / Alianza para una Amazonía Sostenible',
    /* Nanopore work runs at the Alliance's Finca Las Piedras field lab near
       Puerto Maldonado (Madre de Dios); PUCP's campus is in Lima. */
    city: { en: 'Puerto Maldonado', es: 'Puerto Maldonado' },
    lonLat: [-69.11, -12.23],
    country: { en: 'Peru', es: 'Perú' },
    platforms: 'Nanopore MinION',
    websites: [
      { label: 'pucp.edu.pe', href: 'https://www.pucp.edu.pe/' },
      { label: 'sustainableamazon.org', href: 'https://www.sustainableamazon.org/' },
    ],
  },
];

/* ---------- External links (single source of truth) ---------- */
export const LINKS = {
  joinForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSdJbLIgK-fOI9XjJ9AodMjKtP41JQcnzjrh-o6lRMYOFaQJtg/viewform',
  /*
    Nicol listed three links on 2026-07-14 that "deben estar ahí": the
    registration form, this committee sign-up sheet, and Discord. The
    committee sheet had never been wired to the site.
  */
  committeeForm:
    'https://docs.google.com/spreadsheets/d/1YaY78DRBeqpfaJzL7bpYRIEecu1msf5usl3Z5piLgCY/edit',
  contactEmail: 'genomica.neotropical@gmail.com',
  projectPsyche: 'https://www.projectpsyche.org/',
};

/** ISO date the public copy was last reviewed against the source brief. */
export const LAST_REVIEWED = '2026-07-15';

/**
 * Scientific names that should render italic wherever they appear in prose.
 * One alternation, longest first, so a binomial wins over its bare genus and
 * nothing is wrapped twice. "Caligo" alone is the initiative's name, so only
 * its binomials are listed.
 */
const SCIENTIFIC_NAMES = [
  'Parides ascanius',
  'Aristolochia trilobata',
  'Panacea procilla',
  'Panacea prola',
  'Batesia hypochlora',
  'Chrysodeixis includens',
  'Rachiplusia nu',
  'Caligo martia',
  'Caligo memnon',
  'Greta oto',
  'Heliconius sapho',
  'Heliconius elevatus',
  'Heliconius pardalinus',
  'Heliconius melpomene',
  'H. elevatus',
  'H. pardalinus',
  'H. melpomene',
  'Heliconius',
  'Panacea',
  'Parides',
  'sapho',
];

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const NAME_PATTERN = new RegExp(
  `(?<![\\w.])(${[...SCIENTIFIC_NAMES]
    .sort((a, b) => b.length - a.length)
    .map((n) => n.replace(/[.]/g, '\\.'))
    .join('|')})(?!\\w)`,
  'g',
);

/** Escape text, then wrap known scientific names in <em>. Safe for set:html. */
export function italicizeSpecies(text: string): string {
  return escapeHtml(text).replace(NAME_PATTERN, '<em>$1</em>');
}
