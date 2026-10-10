import type { Locale } from '../i18n';

type BilingualText = Record<Locale, string>;

interface PublicationExample {
  readonly title: string;
  readonly url: string;
  readonly citation: string;
  readonly figure: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: BilingualText;
    readonly caption: BilingualText;
    readonly licence: string;
    readonly licenceUrl: string;
    readonly changes?: BilingualText;
  };
}

interface ScienceFeedbackContent {
  readonly pageTitle: string;
  readonly pageIntro: string;
  readonly reference: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: readonly string[];
    readonly goalHeading: string;
    readonly goalBody: string;
    readonly standardsLink: string;
  };
  readonly analysis: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: readonly string[];
    readonly projectsLink: string;
  };
  readonly publications: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly intro: string;
    readonly figureLabel: string;
  };
  readonly evidence: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly intro: string;
  };
  readonly ethics: {
    readonly heading: string;
    readonly body: readonly string[];
  };
}

export const scienceFeedback: Record<Locale, ScienceFeedbackContent> = {
  en: {
    pageTitle: 'Reference genomes',
    pageIntro: 'A shared scientific resource for understanding and conserving Neotropical butterflies and moths.',
    reference: {
      eyebrow: 'The shared resource',
      heading: 'What is a reference genome?',
      body: [
        'A reference genome is the assembled DNA sequence of one individual, used as the standard for its species. It supports research in conservation, ecology, evolution, taxonomy, behaviour, agriculture and forestry.',
        'Researchers can compare it with other species to see how genes and chromosomes have changed. They can also align lower-cost short-read data from many individuals to the reference, then study relationships, population size and connectivity, natural selection and gene exchange.',
      ],
      goalHeading: 'species at chromosome scale',
      goalBody: 'Caligo aims to generate 1,000 reference genomes of Neotropical butterflies and moths in and for Latin America. Chromosome-scale assembly means placing the genome into one sequence for each chromosome, rather than leaving it as many disconnected fragments.',
      standardsLink: 'EBP assembly standards',
    },
    analysis: {
      eyebrow: 'Analysis and training',
      heading: 'Learn by analysing together',
      body: [
        'Caligo will analyse these genomes jointly so that each dataset also creates an opportunity for training. Courses and learning materials will be paired with hands-on work, connecting experienced genomicists with researchers who want to develop new skills.',
        'The first pilot projects show where this approach begins. People who want to take part can contact the relevant project leads.',
      ],
      projectsLink: 'Explore the proposed pilot projects',
    },
    publications: {
      eyebrow: 'Published examples',
      heading: 'What Neotropical genomes already reveal',
      intro: 'These studies show how reference genomes and population data can uncover chromosome change, rapid radiations and hybrid origins.',
      figureLabel: 'Published figure',
    },
    evidence: {
      eyebrow: 'Questions for Caligo',
      heading: 'From published evidence to new questions',
      intro: 'Four published findings lead into Caligo’s proposed pilot projects and show what new samples or genomic data could reveal next.',
    },
    ethics: {
      heading: 'Planning responsible sampling',
      body: [
        'Sampling plans need permits, specimen records, agreements on how research results, training and other benefits will be shared, and a plan for managing data.',
        'Requirements differ among countries, and sequencing or exporting samples may require additional permits. Sampling on Indigenous Peoples’ lands requires their consent. Caligo will only support sampling with strong involvement from local researchers.',
      ],
    },
  },
  es: {
    pageTitle: 'Genomas de referencia',
    pageIntro: 'Un recurso científico compartido para comprender y conservar las mariposas y polillas neotropicales.',
    reference: {
      eyebrow: 'El recurso compartido',
      heading: '¿Qué es un genoma de referencia?',
      body: [
        'Un genoma de referencia es la secuencia de ADN ensamblada de un individuo, que sirve de patrón para su especie. Se usa en investigación sobre conservación, ecología, evolución, taxonomía, comportamiento, agricultura y silvicultura.',
        'Se puede comparar con los genomas de otras especies para estudiar cambios en sus genes y cromosomas. También permite alinear datos de lecturas cortas, más económicos, de muchos individuos y analizar parentesco, tamaño y conectividad de las poblaciones, selección natural e intercambio genético.',
      ],
      goalHeading: 'especies a escala cromosómica',
      goalBody: 'Caligo busca generar 1.000 genomas de referencia de mariposas y polillas neotropicales en y para América Latina. Ensamblar a escala cromosómica significa organizar el genoma en una secuencia por cromosoma, en vez de dejarlo en muchos fragmentos desconectados.',
      standardsLink: 'Estándares de ensamblaje del EBP',
    },
    analysis: {
      eyebrow: 'Análisis y formación',
      heading: 'Aprender mientras analizamos juntos',
      body: [
        'Caligo analizará estos genomas de manera conjunta para que cada conjunto de datos también abra una oportunidad de formación. Los cursos y materiales se combinarán con trabajo práctico, vinculando a especialistas en genómica con investigadores que quieran desarrollar nuevas habilidades.',
        'Los primeros proyectos piloto muestran dónde empieza este trabajo. Quienes quieran participar pueden comunicarse con las personas que lideran cada proyecto.',
      ],
      projectsLink: 'Explora los proyectos piloto propuestos',
    },
    publications: {
      eyebrow: 'Ejemplos publicados',
      heading: 'Lo que ya revelan los genomas neotropicales',
      intro: 'Estos estudios muestran cómo los genomas de referencia y los datos poblacionales revelan cambios cromosómicos, radiaciones rápidas y orígenes híbridos.',
      figureLabel: 'Figura publicada',
    },
    evidence: {
      eyebrow: 'Preguntas para Caligo',
      heading: 'De la evidencia publicada a nuevas preguntas',
      intro: 'Cuatro hallazgos publicados conducen a los proyectos piloto propuestos por Caligo y muestran lo que podrían revelar nuevas muestras o datos genómicos.',
    },
    ethics: {
      heading: 'Planificar un muestreo responsable',
      body: [
        'Los planes de muestreo necesitan permisos, registros de los ejemplares, acuerdos sobre cómo compartir los resultados, la formación y otros beneficios, además de un plan para gestionar los datos.',
        'Los requisitos varían entre países, y secuenciar o exportar muestras puede exigir permisos adicionales. El muestreo en tierras de pueblos indígenas requiere su consentimiento. Caligo solo apoyará muestreos con una participación sólida de investigadores locales.',
      ],
    },
  },
};

export const publicationExamples: readonly PublicationExample[] = [
  {
    title: 'Genomic evidence reveals three W-autosome fusions in Heliconius butterflies',
    url: 'https://doi.org/10.1371/journal.pgen.1011318',
    citation: 'Rueda-M et al. 2024 · PLOS Genetics',
    figure: {
      src: 'media/figures-published/rueda-2024-fig1-chromosome-counts.jpg',
      width: 1600,
      height: 1187,
      alt: {
        en: 'A phylogeny of Heliconius butterflies beside chromosome counts, distribution maps and wing photographs.',
        es: 'Una filogenia de mariposas Heliconius junto a conteos cromosómicos, mapas de distribución y fotografías de alas.',
      },
      caption: {
        en: 'Chromosome counts and three inferred fusions between the female-specific W chromosome and autosomes.',
        es: 'Conteos cromosómicos y tres fusiones inferidas entre el cromosoma W, específico de las hembras, y autosomas.',
      },
      licence: 'CC0 1.0',
      licenceUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    },
  },
  {
    title: 'Genomics of Neotropical biodiversity indicators: Two butterfly radiations with rampant chromosomal rearrangements and hybridization',
    url: 'https://doi.org/10.1073/pnas.2410939122',
    citation: 'van der Heijden et al. 2025 · PNAS · Fig. 2',
    figure: {
      src: 'media/figures-published/van-der-heijden-2025-fig2-radiations.jpg',
      width: 1200,
      height: 1467,
      alt: {
        en: 'Time-calibrated phylogenies of Mechanitis and Melinaea butterflies with wing patterns, hybridisation arrows, chromosome counts, maps and elevation ranges.',
        es: 'Filogenias calibradas en el tiempo de mariposas Mechanitis y Melinaea con patrones alares, flechas de hibridación, conteos cromosómicos, mapas y rangos de elevación.',
      },
      caption: {
        en: 'Two rapid radiations viewed through evolutionary relationships, geography, chromosome number and evidence of hybridisation.',
        es: 'Dos radiaciones rápidas vistas a través de sus relaciones evolutivas, geografía, número de cromosomas y evidencia de hibridación.',
      },
      licence: 'CC BY 4.0',
      licenceUrl: 'https://creativecommons.org/licenses/by/4.0/',
      changes: {
        en: 'Resized and re-encoded from the PMC-hosted figure.',
        es: 'Redimensionada y recodificada a partir de la figura alojada en PMC.',
      },
    },
  },
  {
    title: 'Hybrid speciation driven by multilocus introgression of ecological traits',
    url: 'https://doi.org/10.1038/s41586-024-07263-w',
    citation: 'Rosser et al. 2024 · Nature · Fig. 1e',
    figure: {
      src: 'media/figures-published/rosser-2024-fig1e-hybrid-origin.png',
      width: 900,
      height: 792,
      alt: {
        en: 'An evolutionary tree showing Heliconius elevatus arising mainly from H. pardalinus, with a smaller genomic contribution from H. melpomene.',
        es: 'Un árbol evolutivo que muestra el origen de Heliconius elevatus principalmente desde H. pardalinus, con una contribución genómica menor de H. melpomene.',
      },
      caption: {
        en: 'A cropped panel showing the inferred hybrid origin of Heliconius elevatus and the genomic contribution from each parental lineage.',
        es: 'Un panel recortado que muestra el origen híbrido inferido de Heliconius elevatus y la contribución genómica de cada linaje parental.',
      },
      licence: 'CC BY 4.0',
      licenceUrl: 'https://creativecommons.org/licenses/by/4.0/',
      changes: {
        en: 'Cropped to panel e, with the panel letter removed and a white margin added.',
        es: 'Recortada al panel e; se retiró la letra del panel y se añadió un margen blanco.',
      },
    },
  },
];
