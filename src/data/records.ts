/**
 * Structured records for the Caligo first-release site.
 *
 *   Source  — a citable paper, preprint, database query, standard, or
 *             institutional page. Feeds Claims and Pilots.
 *   Claim   — a bounded, dated, and status-tagged public assertion.
 *             Never render a numeric or scientific claim from raw prose.
 *   Pilot   — one of the four proposed pilot directions. Public rendering
 *             shows Published context / Proposed Caligo question / Sources.
 *   Media   — a locally hosted image or video derivative with its exact
 *             attribution, licence, taxon confidence, and change record.
 *
 * The `publish` flag on every record is the gate for public rendering.
 * `scripts/verify-records.mjs` fails the build if any record with
 * `publish: true` is missing a required field or references an unknown
 * id or a missing local media file.
 *
 * Records are release-safe fallbacks pending stakeholder approval. Nicol
 * Rueda's approvals will flip the appropriate `publish` flags to true and
 * add the `approvalOwner` and `approvalDate` fields.
 */

export type PublicStatus =
  | 'published-evidence'
  | 'database-snapshot'
  | 'proposed-caligo-work';

export type Provenance =
  | 'published-evidence'
  | 'dated-database-result'
  | 'stakeholder-working-material'
  | 'editorial-synthesis'
  | 'implementation-observation';

export interface Bilingual {
  readonly en: string;
  readonly es: string;
}

export interface Source {
  readonly id: string;
  /**
   * Short author-year form for inline source lines. `citation` is the full
   * reference; printing that inline gave each pilot three wrapped lines of
   * link text. Science already used short labels — this makes Projects match.
   */
  readonly shortLabel?: string;
  readonly inlineLabel?: Bilingual;
  readonly kind: 'paper' | 'preprint' | 'database' | 'standard' | 'institutional';
  readonly citation: string;
  readonly url: string;
  readonly publicationDate?: string;
  readonly checkedDate: string;
  readonly doi?: string;
  readonly archive?: string;
}

export interface Pilot {
  readonly id: string;
  readonly slug: string;
  readonly heading: Bilingual;
  readonly hook: Bilingual;
  readonly taxon: string;
  readonly publishedContext: Bilingual;
  readonly proposedQuestion: Bilingual;
  readonly evidenceNeeded: Bilingual;
  readonly genomesCan: Bilingual;
  readonly limits: Bilingual;
  readonly closing: Bilingual;
  readonly sourceNote: Bilingual;
  readonly sourceIds: readonly string[];
  readonly mediaIds: readonly string[];
  readonly status: PublicStatus;
  readonly approvalOwner?: string;
  readonly approvalDate?: string;
  readonly publish: boolean;
}

export interface Media {
  readonly id: string;
  readonly path: string;
  readonly kind: 'photograph' | 'video' | 'diagram' | 'poster';
  readonly creator: string;
  readonly licence: string;
  readonly licenceUrl: string;
  readonly sourceItemPage: string;
  readonly taxon?: string;
  readonly taxonConfidence?: 'genus' | 'species' | 'unconfirmed';
  readonly location?: string;
  readonly dateTaken?: string;
  readonly changes: readonly string[];
  readonly alt: Bilingual;
  readonly caption: Bilingual;
  readonly credit: Bilingual;
  readonly approvalOwner?: string;
  readonly approvalDate?: string;
  readonly reviewDate?: string;
  readonly publish: boolean;
}

/* ═══════════════════════════════════════════════════════════════════════
   SOURCES
   ═══════════════════════════════════════════════════════════════════════ */

export const SOURCES: readonly Source[] = [
  {
    id: 'rueda-2024',
    shortLabel: 'Rueda-M et al. 2024',
    kind: 'paper',
    // Title and date corrected against Crossref, 2026-07-27. The record
    // previously read "Chromosome evolution in Heliconius" dated
    // 2024-01-01, neither of which matches the DOI. The paper is CC0.
    citation:
      'Rueda-M et al. 2024. Genomic evidence reveals three W-autosome fusions in Heliconius butterflies. PLOS Genetics 20(7):e1011318.',
    url: 'https://doi.org/10.1371/journal.pgen.1011318',
    publicationDate: '2024-07-18',
    checkedDate: '2026-07-15',
    doi: '10.1371/journal.pgen.1011318',
  },
  {
    id: 'mackay-smith-2026',
    shortLabel: 'Mackay-Smith et al. 2026',
    kind: 'paper',
    citation:
      'Mackay-Smith et al. de novo assembly of 5 highly contiguous Heliconius butterfly genomes with long-read sequencing alone. Genome Biology and Evolution, published 11 July 2026.',
    url: 'https://doi.org/10.1093/gbe/evag171',
    publicationDate: '2026-07-11',
    checkedDate: '2026-07-15',
    doi: '10.1093/gbe/evag171',
  },
  {
    id: 'wright-2024-chromosomes',
    shortLabel: 'Wright et al. 2024',
    kind: 'paper',
    citation:
      'Wright et al. 2024. Comparative genomics reveals the dynamics of chromosome evolution in Lepidoptera. Nature Ecology & Evolution 8:777–790.',
    url: 'https://doi.org/10.1038/s41559-024-02329-4',
    publicationDate: '2024-03-04',
    checkedDate: '2026-07-29',
    doi: '10.1038/s41559-024-02329-4',
  },
  {
    id: 'iucn-parides-2018',
    shortLabel: 'IUCN Red List, 2018',
    inlineLabel: {
      en: 'IUCN Red List, 2018',
      es: 'Lista Roja de la UICN, 2018',
    },
    kind: 'institutional',
    citation:
      'IUCN Red List global assessment of Parides ascanius (Vulnerable, 2018).',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T16239A122600413.en',
    publicationDate: '2018-01-01',
    checkedDate: '2026-07-15',
    doi: '10.2305/IUCN.UK.2018-2.RLTS.T16239A122600413.en',
  },
  {
    id: 'icmbio-parides-2021',
    shortLabel: 'ICMBio, 2021',
    inlineLabel: {
      en: 'ICMBio, 2021',
      es: 'ICMBio, 2021',
    },
    kind: 'institutional',
    citation:
      'Official Brazilian national assessment (ICMBio, 2021): Parides ascanius listed as Endangered.',
    url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/fauna-brasileira/estado-de-conservacao/invertebrados-terrestres/parides-ascanius',
    publicationDate: '2021-01-01',
    checkedDate: '2026-07-17',
  },
  {
    id: 'batesia-2026',
    shortLabel: 'Pham et al. 2026',
    kind: 'paper',
    citation:
      'Pham et al. 2026. A high-quality draft genome assembly of the Neotropical butterfly, Batesia hypochlora (Nymphalidae: Biblidinae). BMC Genomics 27:31. Co-authored by Geoff Gallice and Vicencio Oostra, who also lead Caligo work.',
    url: 'https://doi.org/10.1186/s12864-025-12394-z',
    publicationDate: '2025-12-06',
    checkedDate: '2026-07-27',
    doi: '10.1186/s12864-025-12394-z',
  },
  {
    id: 'gallice-2020',
    shortLabel: 'Gallice et al. 2020 (preprint)',
    kind: 'preprint',
    citation:
      'Gallice et al. 2020. A seasonal mass movement of Panacea prola in south-eastern Peru. bioRxiv preprint.',
    url: 'https://doi.org/10.1101/2020.09.01.277665',
    publicationDate: '2020-09-01',
    checkedDate: '2026-07-15',
    doi: '10.1101/2020.09.01.277665',
  },
  {
    id: 'ukri-soybean',
    shortLabel: 'UKRI project UKRI2955',
    kind: 'institutional',
    citation:
      'UK Research and Innovation, project UKRI2955, Population genomic monitoring of soybean pests. Independent scientific context for the proposed Caligo pilot project.',
    url: 'https://gtr.ukri.org/projects?ref=UKRI2955',
    checkedDate: '2026-07-16',
  },
  {
    id: 'seraphim-2016',
    shortLabel: 'Seraphim et al. 2016',
    kind: 'paper',
    citation:
      'Seraphim et al. Genetic diversity of Parides ascanius (Lepidoptera: Papilionidae: Troidini): implications for the conservation of Brazil’s most iconic endangered invertebrate species. Conservation Genetics 17:533–546 (2016).',
    url: 'https://doi.org/10.1007/s10592-015-0802-5',
    publicationDate: '2016-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1007/s10592-015-0802-5',
  },
  {
    id: 'horikoshi-2021',
    shortLabel: 'Horikoshi et al. 2021',
    kind: 'paper',
    citation:
      'Horikoshi et al. Resistance status of lepidopteran soybean pests following large-scale use of MON 87701 × MON 89788 soybean in Brazil. Scientific Reports 11:21323 (2021).',
    url: 'https://doi.org/10.1038/s41598-021-00770-0',
    publicationDate: '2021-11-01',
    checkedDate: '2026-07-16',
    doi: '10.1038/s41598-021-00770-0',
  },
  {
    id: 'braga-2024',
    shortLabel: 'Braga et al. 2024',
    kind: 'paper',
    citation:
      'Braga et al. Characterizing the differential susceptibility and resistance to insecticides in populations of Chrysodeixis includens and Rachiplusia nu (Lepidoptera: Noctuidae) in Brazil. Pest Management Science 80:4853–4862 (2024).',
    url: 'https://doi.org/10.1002/ps.8197',
    publicationDate: '2024-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1002/ps.8197',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   CLAIMS
   ═══════════════════════════════════════════════════════════════════════ */

export const PILOTS: readonly Pilot[] = [
  {
    id: 'pilot-heliconius',
    slug: 'heliconius',
    heading: {
      en: 'When chromosomes split, fuse and reshape a lineage',
      es: 'Cómo las fisiones y fusiones cromosómicas transforman un linaje',
    },
    hook: {
      en: 'Most Heliconius have 21 chromosomes in each haploid set. Five species in the sapho group have between 21 and 60.',
      es: 'La mayoría de las especies de Heliconius tiene 21 cromosomas en cada juego haploide. Cinco especies del grupo sapho tienen entre 21 y 60.',
    },
    taxon: 'Heliconius',
    publishedContext: {
      en: 'Across 210 butterfly and moth genomes, Wright and colleagues reconstructed 32 ancestral chromosomal units that remained largely intact for about 250 million years. Most Heliconius have 21 haploid chromosomes. In five species from the sapho group, repeated chromosome fissions increased that number to as many as 60. Researchers have also identified three independent fusions between autosomes and the female-specific W chromosome. Comparisons among these species can show how chromosome rearrangements alter recombination and sex-chromosome evolution. Existing genomes do not explain why the rearrangements spread.',
      es: 'A partir de 210 genomas de mariposas y polillas, Wright y sus colegas reconstruyeron 32 unidades cromosómicas ancestrales que se mantuvieron en gran parte intactas durante unos 250 millones de años. La mayoría de las especies de Heliconius tiene 21 cromosomas haploides. En cinco especies del grupo sapho, las fisiones cromosómicas repetidas aumentaron ese número hasta 60. Los investigadores también identificaron tres fusiones independientes entre autosomas y el cromosoma W, exclusivo de las hembras. Las comparaciones entre estas especies permiten estudiar cómo los reordenamientos cromosómicos alteran la recombinación y la evolución de los cromosomas sexuales. Los genomas disponibles todavía no explican por qué esos reordenamientos se extendieron en las poblaciones.',
    },
    proposedQuestion: {
      en: 'The pilot project would compare chromosome-scale genomes to locate the fissions and fusions and test how they changed gene order and recombination.',
      es: 'El proyecto piloto compararía genomas a escala cromosómica para determinar dónde ocurrieron las fisiones y fusiones y estudiar cómo cambiaron el orden de los genes y la recombinación.',
    },
    evidenceNeeded: {
      en: 'Chromosome-scale assemblies from the focal and closely related species; verified specimens; chromosome counts where available; robust phylogenetic comparisons; and trait, recombination or breeding evidence.',
      es: 'Ensamblajes a escala cromosómica de las especies focales y sus parientes cercanos; ejemplares verificados; conteos cromosómicos cuando existan; comparaciones filogenéticas sólidas; y evidencia sobre rasgos, recombinación o cruces.',
    },
    genomesCan: {
      en: 'Locate structural changes, compare gene order and measure how recombination or diversity varies across rearranged regions.',
      es: 'Localizar cambios estructurales, comparar el orden de los genes y medir cómo varían la recombinación o la diversidad en las regiones reordenadas.',
    },
    limits: {
      en: 'The comparisons cannot show that a rearrangement caused adaptation or speciation without experiments, population data and organismal evidence.',
      es: 'Sin experimentos, datos poblacionales e información sobre los organismos y sus rasgos, las comparaciones no pueden demostrar que un reordenamiento causó adaptación o especiación.',
    },
    closing: {
      en: 'Why did these rearrangements spread, and what did they change for the species that carry them?',
      es: '¿Por qué se extendieron estos reordenamientos y cómo afectaron a las especies que los heredaron?',
    },
    sourceNote: {
      en: 'Published context: Rueda-M et al. 2024; Mackay-Smith et al. 2026. The 2026 paper is a published accepted manuscript and may receive typesetting changes while retaining its DOI.',
      es: 'Contexto publicado: Rueda-M et al. 2024; Mackay-Smith et al. 2026. El artículo de 2026 es un manuscrito aceptado ya publicado y puede recibir cambios de edición sin modificar su DOI.',
    },
    sourceIds: ['wright-2024-chromosomes', 'rueda-2024', 'mackay-smith-2026'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
  {
    id: 'pilot-parides',
    slug: 'parides-ascanius',
    heading: {
      en: 'Can a threatened coastal butterfly stay connected?',
      es: '¿Pueden seguir conectadas las poblaciones de una mariposa costera amenazada?',
    },
    hook: {
      en: 'Parides ascanius is restricted to coastal restinga and wetlands in south-eastern Brazil, where urbanisation and drainage have reduced its habitat.',
      es: 'Parides ascanius está restringida a restingas costeras y humedales del sureste de Brasil, donde la urbanización y el drenaje han reducido su hábitat.',
    },
    taxon: 'Parides ascanius',
    publishedContext: {
      en: 'The IUCN assessed Parides ascanius as Vulnerable globally in 2018, while Brazil’s national assessment listed it as Endangered in 2021. A 2016 study used mitochondrial COI sequences and eight microsatellite markers to compare the remaining populations. It found little population structure and inferred substantial migration among most sites. Those results do not show whether the populations remain connected today. Habitat loss and drainage can alter movement before populations become genetically distinct.',
      es: 'La UICN evaluó a Parides ascanius como Vulnerable a nivel global en 2018, mientras que la evaluación nacional de Brasil la clasificó En Peligro en 2021. Un estudio de 2016 usó secuencias mitocondriales de COI y ocho marcadores microsatélites para comparar las poblaciones restantes. Encontró poca estructura poblacional e infirió una migración considerable entre la mayoría de las poblaciones estudiadas. Esos resultados no muestran si las poblaciones siguen conectadas hoy. La pérdida de hábitat y el drenaje pueden interrumpir la conectividad antes de que las poblaciones acumulen diferencias genéticas detectables.',
    },
    proposedQuestion: {
      en: 'The pilot project would build a reference genome from a documented specimen and compare newly sampled populations with the 2016 results. This would test whether gene flow or genetic diversity has changed.',
      es: 'El proyecto piloto construiría un genoma de referencia a partir de un ejemplar documentado y compararía nuevas muestras de las poblaciones con los resultados de 2016. Así se podría evaluar si cambiaron el flujo génico o la diversidad genética.',
    },
    evidenceNeeded: {
      en: 'A documented reference specimen; appropriately permitted samples from a planned, non-public set of populations; habitat and time metadata; and analyses designed to compare current structure with earlier results.',
      es: 'Un ejemplar de referencia documentado; muestras con los permisos adecuados de un conjunto planificado y no público de poblaciones; metadatos de hábitat y tiempo; y análisis preparados para comparar la estructura actual con los resultados previos.',
    },
    genomesCan: {
      en: 'Estimate relatedness, population structure, historical and recent gene flow, inbreeding and the distribution of genetic diversity.',
      es: 'Estimar parentesco, estructura poblacional, flujo génico histórico y reciente, endogamia y distribución de la diversidad genética.',
    },
    limits: {
      en: 'Genomic data cannot measure habitat quality, identify every movement route or set conservation priorities without ecological observations and decisions by the relevant authorities and communities.',
      es: 'Los datos genómicos no miden la calidad del hábitat, no identifican todas las rutas de movimiento ni fijan prioridades de conservación sin observaciones ecológicas y decisiones de las autoridades y comunidades pertinentes.',
    },
    closing: {
      en: 'Do the populations sampled in 2016 still exchange individuals across today’s coast?',
      es: '¿Las poblaciones estudiadas en 2016 todavía intercambian individuos a lo largo de la costa?',
    },
    sourceNote: {
      en: 'Published context: Seraphim et al. 2016; IUCN global assessment 2018; ICMBio national assessment 2021. Sensitive localities remain omitted.',
      es: 'Contexto publicado: Seraphim et al. 2016; evaluación global de la UICN 2018; evaluación nacional de ICMBio 2021. Se omiten las localidades sensibles.',
    },
    sourceIds: ['seraphim-2016', 'iucn-parides-2018', 'icmbio-parides-2021'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
  {
    id: 'pilot-soybean',
    slug: 'soybean-lepidoptera',
    heading: {
      en: 'Following movement and resistance across soybean landscapes',
      es: 'Movimiento y resistencia en los paisajes sojeros',
    },
    hook: {
      en: 'Several similar-looking moth species occur in Brazilian soybean fields. Monitoring their movement or insecticide resistance begins with knowing which species was collected.',
      es: 'En los cultivos de soja de Brasil se encuentran varias especies de polillas difíciles de distinguir a simple vista. Para monitorear su movimiento o resistencia a insecticidas, primero hay que saber qué especie se recolectó.',
    },
    taxon: '',
    publishedContext: {
      en: 'Brazilian studies have found closely related species confused during monitoring. They have also detected changes in susceptibility to insecticidal proteins that require repeated, species-specific testing. Genomic data can distinguish the species, compare movement among populations and identify variants associated with resistance. Field trials, agronomy and growers’ observations are still needed to choose a management response.',
      es: 'Estudios realizados en Brasil han mostrado que algunas especies cercanas pueden confundirse durante el monitoreo. También han detectado cambios en la susceptibilidad a proteínas insecticidas que requieren pruebas repetidas y específicas para cada especie. Los datos genómicos permiten distinguir las especies, comparar el movimiento entre poblaciones e identificar variantes asociadas con la resistencia. Todavía se necesitan ensayos de campo, conocimientos agronómicos y observaciones de los productores para elegir una respuesta de manejo.',
    },
    proposedQuestion: {
      en: 'The pilot project would identify the species in existing collections, compare their movement across agricultural regions and test which resistance markers are reliable enough for monitoring.',
      es: 'El proyecto piloto identificaría las especies en las colecciones existentes, compararía su movimiento entre regiones agrícolas y evaluaría qué marcadores de resistencia son lo bastante confiables para el monitoreo.',
    },
    evidenceNeeded: {
      en: 'Confirmed species identifications; documented reference specimens; repeated and geographically designed population sampling; resistance phenotypes or bioassays; crop and management context; and validated marker panels.',
      es: 'Identificación confirmada de cada especie; ejemplares de referencia documentados; muestreo poblacional repetido y diseñado geográficamente; fenotipos o bioensayos de resistencia; contexto de cultivo y manejo; y paneles de marcadores validados.',
    },
    genomesCan: {
      en: 'Improve identification, reveal population structure and movement, locate candidate resistance-associated variation and support the design of monitoring markers.',
      es: 'Mejorar la identificación, describir la estructura de las poblaciones y sus desplazamientos, localizar variantes posiblemente asociadas con la resistencia y apoyar el diseño de marcadores de monitoreo.',
    },
    limits: {
      en: 'Genomes cannot determine crop damage, prove that a variant causes resistance or choose a management response without field, experimental, agronomic and socioeconomic evidence.',
      es: 'Los genomas no determinan el daño al cultivo, no prueban que una variante cause resistencia ni permiten elegir una respuesta de manejo sin datos de campo, experimentos, criterios agronómicos e información socioeconómica.',
    },
    closing: {
      en: 'Which markers are reliable enough that a monitoring result can change a management decision?',
      es: '¿Qué marcadores son lo bastante confiables para que un resultado de monitoreo cambie una decisión de manejo?',
    },
    sourceNote: {
      en: 'Scientific context: Horikoshi et al. 2021; Braga et al. 2024. UKRI2955 is an independent project; its taxa, sites, samples, partners, years and outputs remain specific to that work.',
      es: 'Contexto científico: Horikoshi et al. 2021; Braga et al. 2024. UKRI2955 es un proyecto independiente; sus taxones, sitios, muestras, socios, años y resultados pertenecen a ese trabajo.',
    },
    sourceIds: ['horikoshi-2021', 'braga-2024', 'ukri-soybean'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
  {
    id: 'pilot-panacea',
    slug: 'panacea-prola',
    heading: {
      en: 'Thousands of Panacea prola fly north-east. Where do they come from?',
      es: 'Miles de Panacea prola vuelan hacia el noreste. ¿De dónde vienen?',
    },
    hook: {
      en: 'In south-eastern Peru, thousands of Panacea prola have been observed flying north-east during the same season.',
      es: 'En el sureste de Perú se han observado miles de Panacea prola volando hacia el noreste durante una misma temporada.',
    },
    taxon: 'Panacea prola',
    publishedContext: {
      en: 'In 2020, Gallice and colleagues recorded 2,509 Panacea prola during fifty one-hour observations in south-eastern Peru. Only 19 flew in another direction. The authors presented this as the first evidence of an Amazonian insect migration. Pham and colleagues published the first Biblidinae reference genome, for Batesia hypochlora, in 2026. It provides the closest genomic reference for Panacea but cannot explain where the moving butterflies came from, whether they belonged to one or several populations or whether the movement repeats each year.',
      es: 'En 2020, Gallice y sus colegas registraron 2.509 individuos de Panacea prola durante cincuenta observaciones de una hora en el sureste de Perú. Solo 19 volaron en otra dirección. Los autores presentaron el hallazgo como la primera evidencia de una migración de insectos en la Amazonía. Pham y sus colegas publicaron en 2026 el primer genoma de referencia de una especie de Biblidinae: Batesia hypochlora. Es la referencia genómica más cercana para Panacea, pero no explica de dónde procedían esas mariposas, si pertenecían a una o varias poblaciones ni si el movimiento se repite cada año.',
    },
    proposedQuestion: {
      en: 'The pilot project would compare samples collected in different places and seasons. The analysis would test where the moving butterflies came from, whether they belonged to one or several populations and whether the same movement occurs in different years.',
      es: 'El proyecto piloto compararía muestras recolectadas en distintos lugares y temporadas. El análisis permitiría determinar de dónde procedían esas mariposas, si pertenecían a una o varias poblaciones y si el mismo movimiento ocurre en años diferentes.',
    },
    evidenceNeeded: {
      en: 'A verified reference specimen; repeated, responsibly permitted sampling across seasons and broad regions; environmental and host-plant context; and independent movement evidence such as observations, tracking or stable isotopes.',
      es: 'Un ejemplar de referencia verificado; muestreo repetido, responsable y autorizado a lo largo de temporadas y regiones amplias; contexto ambiental y de plantas hospederas; y evidencia independiente como observaciones, seguimiento o isótopos estables.',
    },
    genomesCan: {
      en: 'Compare ancestry among sampled groups, estimate connectivity and test whether moving aggregations draw from one or several populations.',
      es: 'Comparar la ascendencia de los grupos muestreados, estimar su conectividad y probar si los grupos observados en vuelo reúnen una o varias poblaciones.',
    },
    limits: {
      en: 'Genomes cannot reconstruct individual flight paths, identify the environmental trigger or define the full geographic range of the phenomenon by themselves.',
      es: 'Los genomas no reconstruyen trayectorias individuales de vuelo, no identifican el factor ambiental que desencadena el movimiento ni definen por sí solos el alcance geográfico completo del fenómeno.',
    },
    closing: {
      en: 'Did the butterflies in that wave come from one population or from several?',
      es: '¿Las mariposas de esa oleada vinieron de una sola población o de varias?',
    },
    sourceNote: {
      en: 'Public evidence: Gallice et al. 2020, a preprint checked on 16 July 2026. No unpublished isotope result or wider route is stated.',
      es: 'Evidencia pública: Gallice et al. 2020, preprint revisado el 16 de julio de 2026. No se mencionan resultados isotópicos no publicados ni rutas más amplias.',
    },
    sourceIds: ['gallice-2020', 'batesia-2026'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   MEDIA
   ═══════════════════════════════════════════════════════════════════════ */

export const MEDIA: readonly Media[] = [
  {
    id: 'hero-caligo-tambopata',
    path: 'media/hero/caligo-tambopata-1600w.jpg',
    kind: 'photograph',
    creator: 'Wikimedia Commons user “Polygonia c-album”',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceItemPage:
      'https://commons.wikimedia.org/wiki/File:Owl_Butterfly_(Caligo)_at_night_in_Tambopata_National_Reserve,_Peru.jpg',
    taxon: 'Caligo sp.',
    taxonConfidence: 'genus',
    location: 'near Tambopata Research Centre, Madre de Dios, Peru',
    dateTaken: '2023-07-28',
    changes: [
      'colour space normalised to sRGB',
      'stripped EXIF metadata',
      'resized proportionally to multiple widths',
      'mobile portrait crop 2000×2142+400+0 to keep the head and compound eye fully visible',
      'JPEG re-encoded (quality 82; progressive; 4:2:0)',
    ],
    alt: {
      en: 'Close-up of a Caligo owl butterfly photographed at night near Tambopata Research Centre, Peru. The large round compound eye sits at the centre of the frame; wing scale patterns fill the left side.',
      es: 'Primer plano de una mariposa búho del género Caligo, fotografiada de noche cerca del Centro de Investigación de Tambopata, Perú. El gran ojo compuesto ocupa el centro y los patrones formados por las escamas del ala llenan el lado izquierdo.',
    },
    caption: {
      en: 'Caligo sp., near Tambopata Research Centre, Peru. The bright round feature is the butterfly’s compound eye.',
      es: 'Caligo sp., cerca del Centro de Investigación de Tambopata, Perú. El elemento redondo brillante es el ojo compuesto de la mariposa.',
    },
    credit: {
      en: 'Photograph: Wikimedia Commons user “Polygonia c-album”. Cropped and resized.',
      es: 'Fotografía: usuario de Wikimedia Commons «Polygonia c-album». Recortada y redimensionada.',
    },
    publish: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   ACCESSORS (indexed lookups)
   ═══════════════════════════════════════════════════════════════════════ */

const byId = <T extends { readonly id: string }>(list: readonly T[]) =>
  new Map(list.map((r) => [r.id, r]));

const SOURCE_MAP = byId(SOURCES);
const MEDIA_MAP = byId(MEDIA);

export const getSource = (id: string): Source | undefined => SOURCE_MAP.get(id);
export const getMedia = (id: string): Media | undefined => MEDIA_MAP.get(id);

export const PUBLIC_STATUS_LABELS: Readonly<Record<PublicStatus, Bilingual>> = {
  'published-evidence': { en: 'Published evidence', es: 'Evidencia publicada' },
  'database-snapshot': { en: 'Database snapshot', es: 'Consulta de base de datos' },
  'proposed-caligo-work': { en: 'Proposed pilot project', es: 'Proyecto piloto propuesto' },
};

/* ═══════════════════════════════════════════════════════════════════════
   MEDIA CANDIDATE MODULES  (MediaCandidateViewer.astro data source)
   ═══════════════════════════════════════════════════════════════════════ */

export type CandidateKind = 'documentary' | 'ai-concept' | 'code-native';

export type CandidateFit = 'cover' | 'contain';

export interface MediaCandidate {
  readonly kind: CandidateKind;
  readonly path: string;
  readonly width: number;
  readonly height: number;
  readonly alt: Bilingual;
  readonly caption: Bilingual;
  readonly credit: Bilingual;
  readonly licence?: string;
  readonly licenceUrl?: string;
  readonly sourceItemPage?: string;
  readonly creator?: string;
  readonly changes?: readonly string[];
  readonly dateTaken?: string;
  readonly location?: string;
  readonly conceptCaveat?: Bilingual;
  readonly taxon?: string;
  readonly taxonConfidence?: 'genus' | 'species' | 'unconfirmed';
  readonly fit?: CandidateFit;
  readonly objectPosition?: string;
  readonly background?: string;
  readonly aspectRatio?: string;
}

export interface MediaModule {
  readonly id: string;
  readonly candidates: readonly MediaCandidate[];
  readonly initialIndex?: number;
  readonly publish: boolean;
  readonly fit?: CandidateFit;
  readonly aspectRatio?: string;
  readonly background?: string;
}

const CC_BY_SA_4 = { name: 'CC BY-SA 4.0', url: 'https://creativecommons.org/licenses/by-sa/4.0/' };
const CC_BY_4 = { name: 'CC BY 4.0', url: 'https://creativecommons.org/licenses/by/4.0/' };
const CC0_1 = { name: 'CC0 1.0', url: 'https://creativecommons.org/publicdomain/zero/1.0/' };

export const MODULES: readonly MediaModule[] = [
  {
    id: 'pilot-heliconius',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/heliconius-sapho-colombia-desertnaturalist.jpg',
        width: 997,
        height: 669,
        creator: 'iNaturalist user desertnaturalist',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/3915600613',
        taxon: 'Heliconius sapho',
        taxonConfidence: 'species',
        dateTaken: '2021-03-18',
        location: 'Colombia',
        changes: [
          'selected from GBIF occurrence 3915600613: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; orientation normalised, metadata stripped and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A Heliconius sapho butterfly resting with its blue-black wings open, revealing broad white bands.',
          es: 'Una mariposa Heliconius sapho posada con las alas negro azuladas abiertas, atravesadas por anchas bandas blancas.',
        },
        caption: {
          en: 'Heliconius sapho, dorsal view, Colombia. This species belongs to the chromosome-variable sapho group.',
          es: 'Heliconius sapho, vista dorsal, Colombia. Esta especie pertenece al grupo sapho, que presenta variación cromosómica.',
        },
        credit: {
          en: 'Photo: desertnaturalist / iNaturalist, via GBIF.',
          es: 'Foto: desertnaturalist / iNaturalist, vía GBIF.',
        },
      },
      {
        kind: 'documentary',
        path: 'media/documentary/heliconius-sapho-ventral-roger-rittmaster.jpg',
        width: 1400,
        height: 1120,
        creator: 'Roger Rittmaster',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/2862358322',
        taxon: 'Heliconius sapho sapho',
        taxonConfidence: 'species',
        dateTaken: '2014-01-26',
        location: 'Panama',
        changes: [
          'selected from GBIF occurrence 2862358322: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; orientation normalised, metadata stripped, resized proportionally to 2048 × 1638 and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A Heliconius sapho butterfly resting side-on on purple flowers, showing the black, white and red pattern on the underside of its closed wings.',
          es: 'Una mariposa Heliconius sapho posada de lado sobre flores moradas, mostrando el patrón negro, blanco y rojo del reverso de sus alas cerradas.',
        },
        caption: {
          en: 'Heliconius sapho, ventral view, Panama.',
          es: 'Heliconius sapho, vista ventral, Panamá.',
        },
        credit: {
          en: 'Photo: Roger Rittmaster / iNaturalist, via GBIF.',
          es: 'Foto: Roger Rittmaster / iNaturalist, vía GBIF.',
        },
      },
    ],
  },
  {
    id: 'pilot-parides',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/parides-ascanius-dorsal-pablo-toledo.jpg',
        width: 1400,
        height: 1050,
        creator: 'Pablo Cauã da Silva Toledo',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/5932772077',
        taxon: 'Parides ascanius',
        taxonConfidence: 'species',
        dateTaken: '2025-12-06',
        location: 'Brazil',
        changes: [
          'selected from GBIF occurrence 5932772077: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; orientation normalised, metadata stripped, resized proportionally to 2048 × 1536 and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A living Parides ascanius resting with its wings open on green foliage, showing broad white and pink-red bands.',
          es: 'Un Parides ascanius vivo posado con las alas abiertas sobre follaje verde, mostrando anchas bandas blancas y rosadas.',
        },
        caption: {
          en: 'Parides ascanius, dorsal view, Brazil.',
          es: 'Parides ascanius, vista dorsal, Brasil.',
        },
        credit: {
          en: 'Photo: Pablo Cauã da Silva Toledo / iNaturalist, via GBIF.',
          es: 'Foto: Pablo Cauã da Silva Toledo / iNaturalist, vía GBIF.',
        },
      },
      {
        kind: 'documentary',
        path: 'media/documentary/parides-ascanius-field-lucas-lopes.jpg',
        width: 1400,
        height: 779,
        creator: 'Lucas Lopes',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/5063288543',
        taxon: 'Parides ascanius',
        taxonConfidence: 'species',
        dateTaken: '2025-01-19',
        location: 'Brazil',
        changes: [
          'selected from GBIF occurrence 5063288543: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; metadata stripped and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A living Parides ascanius resting side-on on a broad green leaf, showing the pale and vivid pink-red markings on the underside of its wings.',
          es: 'Un Parides ascanius vivo posado de lado sobre una hoja verde ancha, mostrando las marcas claras y rosadas del reverso de sus alas.',
        },
        caption: {
          en: 'Parides ascanius, ventral view, Brazil.',
          es: 'Parides ascanius, vista ventral, Brasil.',
        },
        credit: {
          en: 'Photo: Lucas Lopes / iNaturalist, via GBIF.',
          es: 'Foto: Lucas Lopes / iNaturalist, vía GBIF.',
        },
      },
    ],
  },
  {
    id: 'pilot-soybean',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/soybean-field-novo-barreiro.webp',
        width: 1400,
        height: 939,
        creator: 'Lucas Friederich',
        licence: CC_BY_SA_4.name,
        licenceUrl: CC_BY_SA_4.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:Planta%C3%A7%C3%A3o_de_Soja_em_Novo_Barreiro.jpg',
        dateTaken: '2018-12-18',
        location: 'Novo Barreiro, Rio Grande do Sul, Brazil',
        changes: ['downloaded from Wikimedia Commons; resized to 1600 × 1073, converted to WebP and metadata stripped'],
        alt: {
          en: 'Rows of green soybean plants fill a field bordered by trees in Novo Barreiro, southern Brazil.',
          es: 'Hileras de plantas verdes de soja llenan un campo rodeado de árboles en Novo Barreiro, al sur de Brasil.',
        },
        caption: {
          en: 'Soybean field in Novo Barreiro, Rio Grande do Sul, Brazil.',
          es: 'Campo de soja en Novo Barreiro, Rio Grande do Sul, Brasil.',
        },
        credit: {
          en: 'Photo: Lucas Friederich / Wikimedia Commons.',
          es: 'Foto: Lucas Friederich / Wikimedia Commons.',
        },
      },
      {
        kind: 'documentary',
        path: 'media/documentary/chrysodeixis-includens-fernando-sessegolo.jpg',
        width: 1400,
        height: 932,
        creator: 'Fernando Sessegolo',
        licence: CC0_1.name,
        licenceUrl: CC0_1.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/3335324399',
        taxon: 'Chrysodeixis includens',
        taxonConfidence: 'species',
        dateTaken: '2021-03-18',
        location: 'Brazil',
        changes: [
          'selected from GBIF occurrence 3335324399: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; orientation normalised, metadata stripped, resized proportionally to 2048 × 1363 and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'An adult Chrysodeixis includens moth resting on a glossy green leaf in Brazil.',
          es: 'Una polilla adulta Chrysodeixis includens posada sobre una hoja verde brillante en Brasil.',
        },
        caption: {
          en: 'Chrysodeixis includens, Brazil.',
          es: 'Chrysodeixis includens, Brasil.',
        },
        credit: {
          en: 'Photo: Fernando Sessegolo / iNaturalist, via GBIF.',
          es: 'Foto: Fernando Sessegolo / iNaturalist, vía GBIF.',
        },
      },
      {
        kind: 'documentary',
        path: 'media/documentary/rachiplusia-nu-frank-sautter.jpg',
        width: 1400,
        height: 1400,
        creator: 'Frank Thomas Sautter',
        licence: CC0_1.name,
        licenceUrl: CC0_1.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/3902680776',
        taxon: 'Rachiplusia nu',
        taxonConfidence: 'species',
        dateTaken: '2022-08-25',
        location: 'Brazil',
        changes: [
          'selected from GBIF occurrence 3902680776: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; orientation normalised, metadata stripped, resized proportionally to 2048 × 2048 and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'An adult Rachiplusia nu moth resting among green leaves in Brazil.',
          es: 'Una polilla adulta Rachiplusia nu posada entre hojas verdes en Brasil.',
        },
        caption: {
          en: 'Rachiplusia nu, Brazil.',
          es: 'Rachiplusia nu, Brasil.',
        },
        credit: {
          en: 'Photo: Frank Thomas Sautter / iNaturalist, via GBIF.',
          es: 'Foto: Frank Thomas Sautter / iNaturalist, vía GBIF.',
        },
      },
    ],
  },
  {
    id: 'pilot-panacea',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/panacea-prola-dorsal-desertnaturalist.jpg',
        width: 1400,
        height: 901,
        creator: 'desertnaturalist',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/3947651393',
        taxon: 'Panacea prola',
        taxonConfidence: 'species',
        dateTaken: '2022-09-30',
        location: 'Peru',
        changes: [
          'selected from GBIF occurrence 3947651393: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; orientation normalised, metadata stripped and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A living Panacea prola with its wings fully open, showing iridescent blue dorsal wings with broad pale bands.',
          es: 'Un Panacea prola vivo con las alas completamente abiertas, mostrando el dorso azul iridiscente con bandas claras anchas.',
        },
        caption: {
          en: 'Panacea prola, dorsal view, Peru.',
          es: 'Panacea prola, vista dorsal, Perú.',
        },
        credit: {
          en: 'Photo: desertnaturalist / iNaturalist, via GBIF.',
          es: 'Foto: desertnaturalist / iNaturalist, vía GBIF.',
        },
      },
      {
        kind: 'documentary',
        path: 'media/documentary/panacea-prola-field-laura-gaudette.jpg',
        width: 1400,
        height: 1400,
        creator: 'Laura Gaudette',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.gbif.org/occurrence/5199225308',
        taxon: 'Panacea prola',
        taxonConfidence: 'species',
        dateTaken: '2025-06-13',
        location: 'Brazil',
        changes: [
          'selected from GBIF occurrence 5199225308: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; metadata stripped and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A living Panacea prola resting on a dew-covered green leaf, showing black-and-white forewings and vivid red-orange hindwings.',
          es: 'Un Panacea prola vivo posado sobre una hoja verde cubierta de rocío, con alas anteriores negras y blancas y alas posteriores de un rojo anaranjado intenso.',
        },
        caption: {
          en: 'Panacea prola, ventral view, Brazil.',
          es: 'Panacea prola, vista ventral, Brasil.',
        },
        credit: {
          en: 'Photo: Laura Gaudette / iNaturalist, via GBIF.',
          es: 'Foto: Laura Gaudette / iNaturalist, vía GBIF.',
        },
      },
    ],
  },
  {
    id: 'journey-2-provenance',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/a7-specimen-labels.jpg',
        width: 1400,
        height: 933,
        creator: 'Kristy Hoath / Museums Victoria Collections',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:Trapezites_sciron_eremicola_labels.jpg',
        taxon: 'Trapezites sciron eremicola (Australian skipper)',
        taxonConfidence: 'species',
        changes: ['downloaded from Wikimedia Commons; no re-encode or crop applied locally'],
        alt: {
          en: 'A close-up of specimen labels stacked in canonical order beneath a pinned butterfly, showing collector, locality, date, and determinavit lines.',
          es: 'Primer plano de las etiquetas apiladas bajo una mariposa montada con alfileres. Las etiquetas registran el colector, la localidad, la fecha y la identificación taxonómica.',
        },
        caption: {
          en: 'Voucher labels preserve collector, locality, date and identification details in a standard order. This is the documentary record a reusable genomic reference needs.',
          es: 'Las etiquetas del ejemplar conservan los datos del colector, la localidad, la fecha y la identificación. Ese registro permite comprobar el origen del material secuenciado y volver a examinar el ejemplar.',
        },
        credit: {
          en: 'Photograph: Kristy Hoath / Museums Victoria Collections / Wikimedia Commons.',
          es: 'Fotografía: Kristy Hoath / Museums Victoria Collections / Wikimedia Commons.',
        },
      },
    ],
  },
  {
    id: 'namesake-compound-eye',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/hero/caligo-tambopata-1200w.jpg',
        width: 1200,
        height: 677,
        creator: 'Wikimedia Commons user “Polygonia c-album”',
        licence: CC_BY_SA_4.name,
        licenceUrl: CC_BY_SA_4.url,
        sourceItemPage:
          'https://commons.wikimedia.org/wiki/File:Owl_Butterfly_(Caligo)_at_night_in_Tambopata_National_Reserve,_Peru.jpg',
        taxon: 'Caligo sp.',
        taxonConfidence: 'genus',
        location: 'near Tambopata Research Centre, Madre de Dios, Peru',
        dateTaken: '2023-07-28',
        changes: [
          'colour space normalised to sRGB',
          'stripped EXIF metadata',
          'resized proportionally to multiple widths',
          'JPEG re-encoded (quality 82; progressive; 4:2:0)',
        ],
        alt: {
          en: 'Close-up of a Caligo owl butterfly photographed at night. The large round compound eye sits at the centre of the frame; wing scale patterns fill the left side.',
          es: 'Primer plano de una mariposa búho del género Caligo, fotografiada de noche. El gran ojo compuesto ocupa el centro y los patrones formados por las escamas del ala llenan el lado izquierdo.',
        },
        caption: {
          en: 'Caligo sp., near Tambopata Research Centre, Peru. The bright round feature is the butterfly’s compound eye.',
          es: 'Caligo sp., cerca del Centro de Investigación de Tambopata, Perú. El elemento redondo brillante es el ojo compuesto de la mariposa.',
        },
        credit: {
          en: 'Photograph: Wikimedia Commons user “Polygonia c-album”. Cropped and resized.',
          es: 'Fotografía: usuario de Wikimedia Commons «Polygonia c-album». Recortada y redimensionada.',
        },
      },
    ],
  },
];

const MODULE_MAP = new Map(MODULES.map((m) => [m.id, m]));

export const getMediaModule = (id: string): MediaModule | undefined => MODULE_MAP.get(id);
