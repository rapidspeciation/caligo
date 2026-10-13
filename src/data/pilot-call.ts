// Source: the Ecuador call flyer supplied by Franz on 13 October 2026. Its
// QR code leads to the same form the Colombia call used.
export const PILOT_APPLICATION_URL: string = 'https://docs.google.com/forms/d/e/1FAIpQLScCX2XIzecHAMZ8lr4lZE1vYkubZawt4zXKywHD9qnJNLIfaw/viewform';

// Last day applications are accepted (inclusive, visitor's local date).
export const PILOT_DEADLINE = '2026-10-31';

// Calls that have closed, kept on the timeline. Source for Colombia:
// Nicole's message supplied by Franz on 18 September 2026.
export const PAST_CALLS = [
  {
    id: 'colombia',
    deadline: '2026-09-30',
    country: 'Colombia',
    name: { en: 'Sequencing support for Lepidoptera from Colombia', es: 'Apoyo para secuenciar lepidópteros de Colombia' },
    date: { en: '30 September 2026', es: '30 de septiembre de 2026' },
    summary: {
      en: 'Our first call supported local pilot projects to sequence Lepidoptera species from Colombia.',
      es: 'Nuestra primera convocatoria apoyó proyectos piloto locales para secuenciar especies de lepidópteros de Colombia.',
    },
    coverage: {
      en: 'All sequencing expenses were covered, with samples to be delivered to the Universidad Nacional de Colombia in Bogotá.',
      es: 'Se cubrieron todos los gastos de secuenciación; las muestras debían entregarse en la Universidad Nacional de Colombia, en Bogotá.',
    },
  },
];

export const PILOT_INTRO = {
  en: {
    opening: 'Caligo starts with what the network can do now and will expand as funding and partnerships grow.',
    body: [
      'We invite researchers across the network to propose pilot projects that can begin with the resources and expertise already available in Latin America. These projects will demonstrate our capacity while we seek funding for larger collaborative efforts.',
      'Each pilot project is modest in scope, with two aims: produce scientific results and develop the shared infrastructure, protocols and partnerships needed for larger genomics initiatives in the region.',
    ],
    why: 'Why start with pilot projects?',
    reasons: [
      ['Demonstrate capacity', 'Show funders that Caligo is an active network capable of generating and collaboratively analysing genomes in Latin America.'],
      ['Build core workflows', 'Develop and test the full process, from field sampling to final data deposition.'],
      ['Train and standardise', 'Train the regional network in shared protocols for consistent, high-quality work across sites.'],
      ['Meet regulatory requirements', 'Establish clear, replicable processes for permits, Nagoya Protocol compliance and benefit-sharing agreements.'],
      ['Set data standards early', 'Define data and quality standards before scaling to larger sample sizes.'],
      ['Build realistic budgets', 'Estimate costs based on the actual logistics of fieldwork and sequencing in Latin America.'],
      ['Deliver early results', 'Publish scientific results that give the initiative credibility.'],
      ['Connect ongoing work', 'Bring existing projects and ideas from the Caligo community together under a shared initiative.'],
    ],
    closing: 'Starting small and working together will help build genomics infrastructure by and for Latin America.',
    funding: 'Funding opportunities',
    browse: 'Explore the proposed pilot projects',
    projects: 'Proposed pilot projects',
    call: 'Sequencing support for Lepidoptera from Ecuador',
    country: 'Ecuador',
    deadline: 'Application deadline',
    date: '31 October 2026',
    description: 'This call funds local research teams to sequence Lepidoptera species native to Ecuador.',
    descriptionClosed: 'This call funded local research teams to sequence Lepidoptera species native to Ecuador.',
    coverage: 'All sequencing expenses are covered. Samples are processed at the Universidad Regional Amazónica Ikiam in Tena and must be delivered before 20 November 2026.',
    past: 'Past calls',
    eligibility: 'Who can apply and which species qualify?',
    conditions: [
      'Projects must be proposed and led exclusively by local researchers affiliated with academic institutions in Latin America.',
      'Species must not already be in a proposed Caligo pilot project.',
      'Species must be native or endemic to Ecuador.',
      'Species must not already have a published or in-progress reference genome.',
      'Applicants must provide evidence of available, high-quality biological samples or a short-term plan to obtain them.',
      'Samples must have valid collection permits and, where required in the country concerned, Access and Benefit-Sharing (ABS) permits.',
    ],
    check: 'See the proposed pilot projects',
    apply: 'Complete the application form',
    pending: 'Application form link pending.',
    share: 'Please share this opportunity with your collaborators.',
    closedNote: 'Register with the network to hear about future calls.',
    chip: {
      open: 'Open until 31 October',
      days: 'Closes in {n} days',
      tomorrow: 'Closes tomorrow',
      today: 'Closes today',
      closed: 'Applications closed',
      closedAgo: 'Closed {ago}',
    },
    banner: 'Ecuador sequencing call',
    bannerAction: 'Apply',
    dismiss: 'Dismiss announcement',
  },
  es: {
    opening: 'Caligo empieza con lo que la red puede hacer hoy y crecerá a medida que aumenten el financiamiento y las alianzas.',
    body: [
      'Invitamos a quienes integran la red a proponer proyectos piloto que puedan comenzar con los recursos y la experiencia ya disponibles en América Latina. Estos proyectos permitirán demostrar nuestra capacidad mientras buscamos financiamiento para colaboraciones de mayor escala.',
      'Cada proyecto piloto tiene un alcance acotado y dos objetivos: producir resultados científicos y desarrollar la infraestructura, los protocolos y las alianzas que necesitamos para iniciativas genómicas de mayor escala en la región.',
    ],
    why: '¿Por qué empezar con proyectos piloto?',
    reasons: [
      ['Demostrar nuestra capacidad', 'Mostrar a las entidades financiadoras que Caligo es una red activa, capaz de generar y analizar genomas de forma colaborativa en América Latina.'],
      ['Desarrollar flujos de trabajo', 'Desarrollar y probar el proceso completo, desde el muestreo en campo hasta el depósito final de los datos.'],
      ['Capacitar y estandarizar', 'Capacitar a la red regional en protocolos compartidos para mantener la calidad y la consistencia del trabajo entre centros.'],
      ['Cumplir los requisitos regulatorios', 'Establecer procesos claros y replicables para los permisos, el cumplimiento del Protocolo de Nagoya y los acuerdos de distribución de beneficios.'],
      ['Definir estándares de datos', 'Establecer estándares de datos y calidad antes de trabajar con un mayor número de muestras.'],
      ['Preparar presupuestos realistas', 'Estimar los costos a partir de la logística real del trabajo de campo y la secuenciación en América Latina.'],
      ['Obtener los primeros resultados', 'Publicar resultados científicos que den credibilidad a la iniciativa.'],
      ['Conectar el trabajo en marcha', 'Reunir los proyectos e ideas que ya existen en la comunidad Caligo dentro de una iniciativa compartida.'],
    ],
    closing: 'Empezar con proyectos pequeños y trabajar en conjunto permitirá construir infraestructura genómica desde y para América Latina.',
    funding: 'Oportunidades de financiamiento',
    browse: 'Explora los proyectos piloto propuestos',
    projects: 'Proyectos piloto propuestos',
    call: 'Apoyo para secuenciar lepidópteros de Ecuador',
    country: 'Ecuador',
    deadline: 'Fecha límite de postulación',
    date: '31 de octubre de 2026',
    description: 'Esta convocatoria financia a equipos de investigación locales para secuenciar especies de lepidópteros nativas de Ecuador.',
    descriptionClosed: 'Esta convocatoria financió a equipos de investigación locales para secuenciar especies de lepidópteros nativas de Ecuador.',
    coverage: 'Se cubren todos los gastos de secuenciación. Las muestras se procesan en la Universidad Regional Amazónica Ikiam, en Tena, y deben entregarse antes del 20 de noviembre de 2026.',
    past: 'Convocatorias anteriores',
    eligibility: '¿Quiénes pueden postular y qué especies son elegibles?',
    conditions: [
      'Los proyectos deben ser propuestos y liderados exclusivamente por investigadores locales afiliados a instituciones académicas de América Latina.',
      'Las especies no deben formar parte de un proyecto piloto propuesto de Caligo.',
      'Las especies deben ser nativas o endémicas de Ecuador.',
      'Las especies no deben tener ya un genoma de referencia publicado o en proceso de generación.',
      'Se debe presentar evidencia de disponibilidad de muestras biológicas de calidad o un plan para obtenerlas a corto plazo.',
      'Las muestras deben contar con permisos de recolección vigentes y, cuando el país lo requiera, permisos de acceso y distribución de beneficios (ABS).',
    ],
    check: 'Consulta los proyectos piloto propuestos',
    apply: 'Completa el formulario de postulación',
    pending: 'Enlace al formulario de postulación pendiente.',
    share: 'Comparte esta oportunidad con tus colaboradores.',
    closedNote: 'Inscríbete en la red para enterarte de próximas convocatorias.',
    chip: {
      open: 'Abierta hasta el 31 de octubre',
      days: 'Cierra en {n} días',
      tomorrow: 'Cierra mañana',
      today: 'Cierra hoy',
      closed: 'Convocatoria cerrada',
      closedAgo: 'Cerró {ago}',
    },
    banner: 'Convocatoria de secuenciación en Ecuador',
    bannerAction: 'Postula',
    dismiss: 'Cerrar anuncio',
  },
};

/** True once the deadline day has passed (build-time default; Base.astro re-checks in the browser). */
export function isCallClosed(now: Date = new Date()): boolean {
  const [y, m, d] = PILOT_DEADLINE.split('-').map(Number);
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()) > new Date(y, m - 1, d);
}
