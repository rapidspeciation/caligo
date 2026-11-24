/**
 * Local pilot projects selected in Caligo's calls.
 *
 * Source for Colombia: Nicol Rueda's Google Doc "Pilot projects Colombia
 * website", shared on 24 November 2026 with the titles, English and Spanish
 * summaries, leaders and the first photos ("faltan unas fotos pero mañana me
 * las envían; si puedes ir adicionando los que ya tienen foto"). Summaries are
 * the doc's own text in both languages; titles were in one language only, so
 * the other is our translation, and obvious typos were fixed.
 *
 * A project is shown once it has a photo (`photo`), as Nicol asked. To add a
 * photo: put the file in public/media/local-pilots/, run
 * `python3 scripts/make-image-variants.py`, and fill in `photo` below.
 */
import type { Locale } from '../i18n';

type Text = Record<Locale, string>;

export interface LocalPilot {
  id: string;
  /** Which call selected it (see PAST_CALLS in pilot-call.ts). */
  call: 'colombia';
  title: Text;
  summary: Text;
  /** People leading the project, as the team wrote them. */
  leaders: readonly string[];
  /** Institutions and city, as the team wrote them. */
  where?: Text;
  photo?: {
    /** Relative to public/. */
    path: string;
    width: number;
    height: number;
    alt: Text;
    /** Name of the species in the photo, when the team gave it. */
    caption?: string;
    /** `contain` for specimens on a plain background, so nothing is cut off. */
    fit?: 'cover' | 'contain';
    position?: string;
  };
}

export const LOCAL_PILOTS: readonly LocalPilot[] = [
  {
    id: 'eurytides',
    call: 'colombia',
    title: {
      en: 'Untangling phylogenetic discordance in Eurytides (Protesilaus): incomplete lineage sorting, gene flow, or fewer species than currently recognized?',
      es: 'Discordancia filogenética en Eurytides (Protesilaus): ¿separación incompleta de linajes, flujo génico o menos especies de las que se reconocen hoy?',
    },
    summary: {
      en: 'The subgenus Protesilaus (Leptocircini) comprises kite swallowtail butterflies characterized by highly similar color patterns and unresolved phylogenetic relationships. Using population genomics and a reference genome, we aim to clarify species boundaries, distinguish between cryptic speciation and taxonomic inflation, and uncover demographic and evolutionary processes underlying genomic diversity.',
      es: 'El subgénero Protesilaus (Leptocircini) está formado por mariposas que se caracterizan por patrones de coloración muy similares y relaciones filogenéticas aún sin resolver. Mediante el uso de la genómica de poblaciones y un genoma de referencia, nuestro objetivo es aclarar los límites entre especies, distinguir entre especiación críptica e inflación taxonómica, y descubrir los procesos demográficos y evolutivos que subyacen a la diversidad genómica.',
    },
    leaders: ['Juan Camilo Dumar', 'Frasella de Martino', 'Camilo Salazar'],
    where: { en: 'Universidad del Rosario, Bogotá', es: 'Universidad del Rosario, Bogotá' },
    photo: {
      path: 'media/local-pilots/eurytides-protesilaus.jpg',
      width: 1400,
      height: 1381,
      alt: {
        en: 'A kite swallowtail of the subgenus Protesilaus, white with black stripes and long tails, wings spread on a white background.',
        es: 'Una mariposa cola de golondrina del subgénero Protesilaus, blanca con franjas negras y colas largas, con las alas abiertas sobre fondo blanco.',
      },
      fit: 'contain',
    },
  },
  {
    id: 'neoleucinodes',
    call: 'colombia',
    title: {
      en: 'Whole-genome sequencing and transcriptome analysis of Neoleucinodes elegantalis (Lepidoptera: Crambidae)',
      es: 'Secuenciación del genoma completo y análisis del transcriptoma de Neoleucinodes elegantalis (Lepidoptera: Crambidae)',
    },
    summary: {
      en: 'We will generate the first reference genome of Neoleucinodes elegantalis, a major pest of solanaceous crops in tropical America. Together with transcriptomes from antennae, pheromone glands and larvae, it will reveal genes for chemical communication and insecticide detoxification, as well as differences between populations from Suriname and Colombia, to support more precise and sustainable pest control.',
      es: 'Generaremos el primer genoma de referencia de Neoleucinodes elegantalis, una plaga importante de cultivos de solanáceas en América tropical. Junto con transcriptomas de antenas, glándulas de feromonas y larvas, permitirá identificar genes de comunicación química y detoxificación de insecticidas, así como diferencias entre poblaciones de Surinam y Colombia, para apoyar un control de plagas más preciso y sostenible.',
    },
    leaders: ['Clara Saldamando'],
    where: { en: 'Universidad Nacional de Colombia, Medellín', es: 'Universidad Nacional de Colombia, Medellín' },
    photo: {
      path: 'media/local-pilots/neoleucinodes-elegantalis.jpg',
      width: 208,
      height: 158,
      alt: {
        en: 'A Neoleucinodes elegantalis moth, white with rust-brown patches, wings spread on a beige background.',
        es: 'Una polilla Neoleucinodes elegantalis, blanca con manchas pardo rojizas, con las alas abiertas sobre fondo beige.',
      },
      caption: 'Neoleucinodes elegantalis',
    },
  },
  {
    id: 'macrosoma',
    call: 'colombia',
    title: {
      en: 'Filling the gap: new genomic and distributional data for Macrosoma Hübner (Lepidoptera: Hedylidae) from the Colombian Caribbean',
      es: 'Llenando el vacío: nuevos datos genómicos y de distribución de Macrosoma Hübner (Lepidoptera: Hedylidae) del Caribe colombiano',
    },
    summary: {
      en: 'Hedylidae are the only nocturnal lineage of butterflies and, although exclusively Neotropical, their diversity in Colombia remains poorly known, particularly in the Caribbean region. We aim to document at least five Hedylidae species for the first time in the Colombian Caribbean and provide genetic evidence to assess their morphological identifications. We will also generate the first reference genome for Macrosoma heliconiaria (Guenée, 1858), expanding the genomic resources available for the study of this Neotropical family.',
      es: 'Los Hedylidae son el único linaje nocturno de mariposas y, aunque son exclusivamente neotropicales, su diversidad en Colombia sigue siendo poco conocida, especialmente en el Caribe. En este proyecto buscamos documentar al menos cinco especies de Hedylidae por primera vez para el Caribe colombiano y aportar evidencia genética para evaluar sus identificaciones morfológicas. Asimismo, generaremos el primer genoma de referencia de Macrosoma heliconiaria (Guenée, 1858), ampliando los recursos genómicos disponibles para el estudio de esta familia neotropical.',
    },
    // Not in the doc yet: leaders and institution (asked of Nicol).
    leaders: [],
    photo: {
      path: 'media/local-pilots/macrosoma.jpg',
      width: 1400,
      height: 931,
      alt: {
        en: 'A Macrosoma moth-butterfly, dark grey with white patches near the wing tips, resting on a white sheet.',
        es: 'Una mariposa Macrosoma, gris oscura con manchas blancas cerca de las puntas de las alas, posada sobre una sábana blanca.',
      },
    },
  },
  {
    id: 'satyrinae',
    call: 'colombia',
    title: {
      en: 'Genomics for species delimitation in Neotropical Satyrinae butterflies',
      es: 'Genómica para delimitar especies de mariposas Satyrinae neotropicales',
    },
    summary: {
      en: 'We will use genome-scale data, together with morphology, ecology and geography, to delimit species in three taxonomically challenging Neotropical Satyrinae groups: Hermeuptychia, the Pareuptychia ocirrhoe complex, and the Pedaliodes obstructa complex in the Belmira Páramo (Colombia). We will test for cryptic species, gene flow and the role of elevational isolation in Andean diversification, and propose a revised taxonomy for these groups.',
      es: 'Usaremos datos genómicos, junto con morfología, ecología y geografía, para delimitar especies en tres grupos de Satyrinae neotropicales taxonómicamente complejos: Hermeuptychia, el complejo Pareuptychia ocirrhoe y el complejo Pedaliodes obstructa en el Páramo de Belmira (Colombia). Evaluaremos la existencia de especies crípticas, el flujo génico y el papel del aislamiento altitudinal en la diversificación andina, y propondremos una taxonomía revisada para estos grupos.',
    },
    leaders: ['Mario Marin'],
    where: { en: 'Universidad Nacional de Colombia, Medellín', es: 'Universidad Nacional de Colombia, Medellín' },
    photo: {
      path: 'media/local-pilots/hermeuptychia-harmonia.jpg',
      width: 1050,
      height: 1400,
      alt: {
        en: 'A brown Hermeuptychia harmonia butterfly with eyespots on its wings, perched among green leaves.',
        es: 'Una mariposa Hermeuptychia harmonia, parda y con ocelos en las alas, posada entre hojas verdes.',
      },
      caption: 'Hermeuptychia harmonia',
      position: '62% 42%',
    },
  },
  {
    id: 'lymanopoda',
    call: 'colombia',
    title: {
      en: 'Reference genomes for Lymanopoda Westwood, 1851 (Nymphalidae, Satyrinae, Pronophilina): elevational adaptation and wing colour-pattern evolution in Andean butterflies',
      es: 'Genomas de referencia de Lymanopoda Westwood, 1851 (Nymphalidae, Satyrinae, Pronophilina): adaptación altitudinal y evolución del patrón de color alar en mariposas andinas',
    },
    summary: {
      en: 'We will generate high-quality reference genomes for seven Lymanopoda species, a young and diverse Andean butterfly genus with high endemism in Colombia. The species were chosen to contrast closely related and co-occurring species with different wing colours, and lineages living at different elevations. This will create the first comparative genomic framework for the genus, to study how wing colour and pattern evolve and how species adapt to Andean elevational gradients.',
      es: 'Generaremos genomas de referencia de alta calidad para siete especies de Lymanopoda, un género andino de mariposas joven y diverso, con alto endemismo en Colombia. Las especies se eligieron para comparar especies cercanas que conviven pero tienen colores de ala distintos, y linajes que viven a diferentes altitudes. Así se creará el primer marco genómico comparativo del género, para estudiar cómo evolucionan el color y el patrón alar y cómo se adaptan las especies a los gradientes altitudinales andinos.',
    },
    leaders: ['Oscar Javier Mahecha Jiménez', 'Miguel Gonzalo Andrade Correa'],
    where: { en: 'Universidad Nacional de Colombia, Bogotá', es: 'Universidad Nacional de Colombia, Bogotá' },
  },
  {
    id: 'pedaliodes',
    call: 'colombia',
    title: {
      en: 'Comparative genomics of elevational diversification in Pedaliodes Butler, 1867 (Nymphalidae: Satyrinae: Pronophilina) of the Colombian Eastern Andes',
      es: 'Genómica comparativa de la diversificación altitudinal en Pedaliodes Butler, 1867 (Nymphalidae: Satyrinae: Pronophilina) de la Cordillera Oriental de Colombia',
    },
    summary: {
      en: 'We will generate high-quality reference genomes for six Colombian endemic Pedaliodes species spread across an elevational gradient of about 1,800 m in the Eastern Andes, from montane forest to páramo. Because some of these species replace each other with altitude and others live together, we can compare species in shared and contrasting environments. This comparative genomic framework will show how elevation, coexistence and evolutionary history have shaped diversification in this highly endemic Andean genus.',
      es: 'Generaremos genomas de referencia de alta calidad para seis especies endémicas colombianas de Pedaliodes, distribuidas a lo largo de un gradiente altitudinal de unos 1.800 m en la Cordillera Oriental, desde el bosque montano hasta el páramo. Como algunas especies se reemplazan con la altitud y otras conviven, podremos comparar especies en ambientes compartidos y contrastantes. Este marco genómico comparativo mostrará cómo la altitud, la coexistencia y la historia evolutiva han influido en la diversificación de este género andino con alto endemismo.',
    },
    leaders: ['Astrid Muñoz Ortiz', 'Leidy Vanessa Hilary Díaz Suárez'],
    where: {
      en: 'Universidad Distrital Francisco José de Caldas and Universidad de La Salle, Bogotá',
      es: 'Universidad Distrital Francisco José de Caldas y Universidad de La Salle, Bogotá',
    },
  },
  {
    id: 'oidaematophorus',
    call: 'colombia',
    title: {
      en: 'A reference genome for Oidaematophorus espeletiae, a plume moth native to the Colombian páramos',
      es: 'Genoma de referencia de Oidaematophorus espeletiae, una polilla pluma nativa de los páramos de Colombia',
    },
    summary: {
      en: 'Oidaematophorus espeletiae is a plume moth from the Colombian páramos whose larvae feed on the growing tissue of frailejones (Espeletia), weakening the plants and allowing fungal infections that can kill them. It has been recorded in several páramo complexes, yet it has no genetic reference, not even a DNA barcode. We will collect larvae from frailejones and generate a high-quality reference genome. This genome will lay the groundwork for studying the moth’s adaptation to high-mountain environments, its detoxification of plant compounds and its interaction with Espeletia.',
      es: 'Oidaematophorus espeletiae es una polilla pluma de los páramos colombianos cuyas larvas se alimentan del tejido en crecimiento de los frailejones (Espeletia). Esto debilita las plantas y favorece infecciones por hongos que pueden causarles la muerte. Se ha registrado en varios complejos de páramo, pero no tiene ninguna referencia genética, ni siquiera un código de barras de ADN. Colectaremos larvas en frailejones para generar un genoma de referencia de alta calidad. Este genoma será la base para estudiar su adaptación a la alta montaña, la detoxificación de compuestos vegetales y su interacción con Espeletia.',
    },
    leaders: ['Fabian Camilo Zapata Sierra', 'Jose Vladimir Sandoval', 'Juan Alejandro Guerrero Cupacan', 'Mailyn Gonzalez'],
    where: {
      en: 'Instituto de Investigación de Recursos Biológicos Alexander von Humboldt, Bogotá',
      es: 'Instituto de Investigación de Recursos Biológicos Alexander von Humboldt, Bogotá',
    },
  },
  {
    id: 'lonomia',
    call: 'colombia',
    title: {
      en: 'Genomic basis of the variation in toxicity between venomous and non-venomous Lonomia species',
      es: 'Bases genómicas de la variación en toxicidad entre especies venenosas y no venenosas de Lonomia',
    },
    summary: {
      en: 'Lonomia caterpillars carry a venom that can cause serious and sometimes fatal hemorrhagic syndromes. Only some species are known or suspected to envenom humans, yet several venomous species share common toxins, which suggests convergent venom evolution. We have already published the genome of the medically important L. casanarensis. We now propose to sequence L. venezuelensis, a species with no reported envenomations, and compare the two to find the genomic basis of differences in venom toxicity. The results will shed light on venom evolution and support bioprospecting and better treatments for the hundreds of envenomations that occur each year in South America.',
      es: 'Las orugas del género Lonomia tienen un veneno que puede causar síndromes hemorrágicos graves y a veces mortales. Solo algunas especies causan o se sospecha que causan envenenamiento en humanos, pero varias especies venenosas comparten toxinas, lo que sugiere una evolución convergente del veneno. Ya publicamos el genoma de L. casanarensis, una especie de importancia médica. Ahora proponemos secuenciar L. venezuelensis, una especie sin accidentes reportados, y comparar ambas para identificar las bases genómicas de las diferencias en toxicidad. Los resultados ayudarán a entender la evolución del veneno y apoyarán la bioprospección y el desarrollo de mejores tratamientos para los cientos de accidentes que ocurren cada año en Sudamérica.',
    },
    leaders: ['Diana M. Toro-Vargas', 'Camila González Rosas', 'Gustavo A. Bravo'],
    where: {
      en: 'CIMPAT, Department of Biological Sciences, Universidad de los Andes, Bogotá; Instituto Alexander von Humboldt, Villa de Leyva',
      es: 'CIMPAT, Departamento de Ciencias Biológicas, Universidad de los Andes, Bogotá; Instituto Alexander von Humboldt, Villa de Leyva',
    },
  },
];

/** The projects shown on the site: those with a photo, as Nicol asked. */
export const SHOWN_LOCAL_PILOTS = LOCAL_PILOTS.filter((p) => p.photo);

export const LOCAL_PILOTS_COPY = {
  en: {
    title: 'Local pilot projects in Colombia',
    lead: 'Our first call selected eight local pilot projects from Colombia. Caligo covers their sequencing; each team leads its own research.',
    more: 'More projects from this call will appear here soon.',
    leaders: 'Led by',
    where: 'Institution',
    proposedTitle: 'Pilot projects proposed by the network',
    seeSelected: 'See the selected projects',
  },
  es: {
    title: 'Proyectos piloto locales en Colombia',
    lead: 'Nuestra primera convocatoria seleccionó ocho proyectos piloto locales de Colombia. Caligo cubre su secuenciación; cada equipo lidera su propia investigación.',
    more: 'Pronto añadiremos aquí más proyectos de esta convocatoria.',
    leaders: 'Liderado por',
    where: 'Institución',
    proposedTitle: 'Proyectos piloto propuestos por la red',
    seeSelected: 'Ver los proyectos seleccionados',
  },
} as const;
