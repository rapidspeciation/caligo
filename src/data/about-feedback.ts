import { MEMBER_COUNTRIES, PARTICIPANTS } from './initiative';

export type AboutLink = {
  label: string;
  href: string;
};

const membershipDate = new Date(`${PARTICIPANTS.asOf}-01T12:00:00Z`);
const membershipMonth = (locale: string) => new Intl.DateTimeFormat(locale, {
  month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(membershipDate);

export const ABOUT_FEEDBACK = {
  header: {
    title: { en: 'About Caligo', es: 'Acerca de Caligo' },
    intro: {
      en: 'Caligo is a Latin American-led scientific community working to produce 1,000 reference genomes for Neotropical butterflies and moths. Members in the region set priorities and lead the work from sampling and sequencing to analysis and publication.',
      es: 'Caligo es una comunidad científica liderada desde América Latina que trabaja para producir 1.000 genomas de referencia de mariposas y polillas neotropicales. Sus integrantes en la región definen las prioridades y lideran el trabajo, desde el muestreo y la secuenciación hasta el análisis y la publicación.',
    },
  },
  community: {
    body: {
      en: `As of ${membershipMonth('en')}, Caligo brings together ${PARTICIPANTS.value} members from ${MEMBER_COUNTRIES.latinAmerica} Latin American countries and ${MEMBER_COUNTRIES.outsideRegion} countries outside the region. Members span all career stages.`,
      es: `A ${membershipMonth('es')}, Caligo reúne a ${PARTICIPANTS.value} integrantes de ${MEMBER_COUNTRIES.latinAmerica} países de América Latina y ${MEMBER_COUNTRIES.outsideRegion} países fuera de la región. Sus integrantes se encuentran en todas las etapas profesionales.`,
    },
  },
  goals: {
    eyebrow: { en: 'What we hope to achieve', es: 'Qué queremos lograr' },
    heading: { en: '1,000 genomes, built in and for Latin America', es: '1.000 genomas, producidos en y para América Latina' },
    body: [
      {
        en: 'We select species according to regional scientific, cultural, conservation and economic priorities, while representing the major groups of Neotropical butterflies and moths.',
        es: 'Seleccionamos las especies según prioridades científicas, culturales, de conservación y económicas de la región, y buscamos representar los principales grupos de mariposas y polillas neotropicales.',
      },
      {
        en: 'Each project is also a chance to teach and learn. The network develops skills in biology, computing, data science, project management, public engagement and leadership, while expanding lasting sequencing infrastructure across Latin America.',
        es: 'Cada proyecto también ofrece una oportunidad para enseñar y aprender. La red desarrolla capacidades en biología, computación, ciencia de datos, gestión de proyectos, comunicación pública y liderazgo, a la vez que amplía una infraestructura de secuenciación duradera en América Latina.',
      },
    ],
  },
  name: {
    heading: { en: 'Why the name Caligo?', es: '¿Por qué el nombre Caligo?' },
    body: [
      {
        en: 'Caligo takes its name from a Neotropical genus of owl butterflies, known for their beauty and striking eyespots. Their beauty is readily visible, but much of the genetic history behind it remains obscure. The Latin meaning of caligo, mist or darkness, echoes that gap. Through research led in Latin America, we aim to bring Neotropical butterfly and moth genomics into the light.',
        es: 'Caligo toma su nombre de un género neotropical de mariposas búho, conocidas por su belleza y sus llamativos ocelos. Su belleza salta a la vista, pero gran parte de la historia genética que la originó sigue sin conocerse. El significado latino de caligo, niebla u oscuridad, evoca ese vacío de conocimiento. Mediante investigación liderada desde América Latina, buscamos arrojar luz sobre la genómica de las mariposas y polillas neotropicales.',
      },
    ],
    etymologySource: {
      label: { en: 'Latin definition', es: 'Definición en latín' },
      href: 'https://logeion.uchicago.edu/morpho/caligo',
    },
  },
  principles: {
    eyebrow: { en: 'How we work', es: 'Cómo trabajamos' },
    heading: { en: 'Principles that guide Caligo', es: 'Principios que guían a Caligo' },
  },
  network: {
    eyebrow: { en: 'The network', es: 'La red' },
    heading: { en: 'The Caligo network', es: 'La red Caligo' },
    leadershipHeading: { en: 'Leadership team', es: 'Equipo de liderazgo' },
    leadershipLink: { en: 'Meet the leadership team', es: 'Conoce al equipo de liderazgo' },
    leadershipIntro: {
      en: 'Eight researchers from institutions in Latin America and Europe coordinate the community.',
      es: 'Ocho investigadores de instituciones de América Latina y Europa coordinan la comunidad.',
    },
    facilitiesHeading: { en: 'Sequencing facilities', es: 'Instalaciones de secuenciación' },
    relationshipsHeading: { en: 'Related sequencing networks', es: 'Redes de secuenciación relacionadas' },
    relationships: {
      beforeEarth: {
        en: 'Caligo is engaged with EBP Latin America, the regional initiative of the ',
        es: 'Caligo participa en EBP Latin America, la iniciativa regional del ',
      },
      betweenEarthAndGeno: {
        en: ', and with ',
        es: ', y en ',
      },
      afterGeno: {
        en: ', a network studying genomic diversity across Neotropical organisms. Some Caligo members also contribute to the European Lepidoptera initiatives ',
        es: ', una red que estudia la diversidad genómica de organismos neotropicales. Algunos integrantes de Caligo también participan en las iniciativas europeas de genómica de lepidópteros ',
      },
      betweenEuropean: { en: ' and ', es: ' y ' },
      end: { en: '.', es: '.' },
    },
  },
} as const satisfies Record<string, unknown>;

export const ABOUT_LINKS = {
  earthBioGenome: { label: 'Earth BioGenome Project', href: 'https://www.earthbiogenome.org/' },
  genoTropics: { label: 'GenoTropics', href: 'https://www.genotropics.org/' },
  projectPsyche: { label: 'Project Psyche', href: 'https://www.projectpsyche.org/' },
  lepEu: { label: 'LepEU', href: 'https://lepeu.github.io/' },
} as const satisfies Record<string, AboutLink>;
