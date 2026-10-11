/**
 * English source copy. This is the source language; es.ts must mirror this shape.
 *
 * Every layered scientific-question and pilot field is populated. Bracketed
 * source tokens ([S##]) map to the SOURCES ids in src/data/records.ts and
 * must be rendered by components as compact links to the source drawer,
 * never printed raw. See src/lib/citations.ts for the parser.
 */
export const en = {
  "site": {
    "name": "Caligo",
    "descriptor": "Genomes of Neotropical butterflies and moths"
  },
  "common": {
    "skipToContent": "Skip to content",
    "menu": "Menu",
    "close": "Close",
    "theme": "Theme",
    "toggleTheme": "Switch between light and dark themes",
    "language": "Language",
    "chooseLanguage": "Choose language",
    "backTo": "Back to",
    "status": "Status"
  },
  "status": {
    "proposedCaligoWork": "Proposed pilot project",
    "proposedPilot": "Proposed pilot project"
  },
  "mediaViewer": {
    "previousImage": "Previous visual",
    "nextImage": "Next visual",
    "imageOfLabel": "Visual {n} of {total}",
    "documentaryType": "Documentary image",
    "aiConceptType": "Concept illustration",
    "codeNativeType": "Explanatory graphic",
    "imageDetailsLabel": "Image details",
    "sourceLinkLabel": "Source"
  },
  "nav": {
    "funding": "Funding opportunities",
    "home": "Home",
    "science": "Science",
    "proposedPilots": "Pilot projects",
    "about": "About",
    "participate": "Participate",
    "projects": "Pilot projects",
    "join": "Join"
  },
  "cta": {
    "join": "Start a conversation",
    "readVision": "Read about Caligo"
  },
  "committee": {
    "heading": "Join a committee",
    "body": "Committees organise sampling and permits, sequencing, analysis, training and communication. The committee sheet lists each group and its current members.",
    "cta": "Open the committee sheet"
  },
  "join": {
    "title": "Join the network",
    "body": "The registration form asks for your country, institution, taxonomic groups of interest, and your experience with genomes or sequencing. It takes a few minutes and is open now.",
    "cta": "Open the registration form",
    "privacyNote": "Responses are collected through Google Forms and sent to the Caligo organising team.",
    "ctaSecondary": "Join the network"
  },
  "home": {
    "metaTitle": "Caligo | Genomes of Neotropical butterflies and moths",
    "metaDescription": "A Latin American-led community connecting researchers, collections and sequencing facilities to study Neotropical butterflies and moths.",
    "hero": {
      "kicker": "Latin American-led genomics",
      "title": "Rich in species.",
      "body": "Caligo connects researchers, collections and sequencing facilities to close the genetic-data gap for Neotropical butterflies and moths.",
      "focus": "Much left to sequence.",
      "scienceAction": "What questions can genomics help us answer?",
      "projectsAction": "Meet the pilot projects"
    },
    "researchLabels": [
      "Chromosome evolution",
      "Population connectivity",
      "Movement and resistance",
      "Seasonal migration"
    ],
    "researchCards": [
      {
        "question": "How can butterfly chromosomes split and fuse, yet still work?",
        "projectLink": "See the proposed Heliconius study",
        "scienceTopic": "Science: how the chromosomes changed",
        "projectTopic": "Pilot project: the proposed Heliconius study"
      },
      {
        "question": "Are threatened butterfly populations still connected a decade later?",
        "projectLink": "See how Caligo would revisit connectivity",
        "scienceTopic": "Science: what the 2016 population study found",
        "projectTopic": "Pilot project: revisiting connectivity"
      },
      {
        "question": "How do crop pests move and evolve resistance across soybean landscapes?",
        "projectLink": "See the proposed soybean landscape study",
        "scienceTopic": "Science: how pests move and evolve resistance",
        "projectTopic": "Pilot project: the soybean landscape study"
      },
      {
        "question": "Thousands of Panacea prola fly north-east. Where do they come from?",
        "projectLink": "See how Caligo would trace the migration wave",
        "scienceTopic": "Science: the evidence for seasonal movement",
        "projectTopic": "Pilot project: tracing the migration wave"
      }
    ],
    "intro": {
      "eyebrow": "Why butterflies and moths",
      "title": "Why butterflies and moths?",
      "body": [
        "Butterflies and moths live in nearly every terrestrial ecosystem and are especially diverse in the Neotropics. They are an ideal group for studying ecology, evolution and conservation.",
        "But most species in the region still lack reference genomes and genetic markers. Caligo brings researchers and resources together across Latin America to identify species, discover new ones and study how they arise."
      ]
    },
    "building": {
      "heading": "What Caligo is building",
      "items": [
        {
          "title": "Sequence undersampled groups",
          "body": "Produce DNA barcodes, population data and reference assemblies for taxonomic groups that remain poorly represented."
        },
        {
          "title": "Link genetic information with specimens",
          "body": "Each sequence or assembly points to a documented specimen in a collection, so researchers can check which organism was sequenced and where it came from."
        },
        {
          "title": "Build regional capacity",
          "body": "Expand sequencing, sample banking and bioinformatics in Latin America, from country capitals to remote field sites in areas of high biodiversity."
        },
        {
          "title": "Train and credit fairly",
          "body": "Support training, open data and shared publications while recognising everyone who contributes specimens, analysis or knowledge."
        }
      ]
    },
    "activity": {
      "heading": "Caligo in action",
      "intro": "Workshops, hackathons and other events help us learn together and grow the network."
    },
    "closing": {
      "title": "Bring a question, an organism or your expertise",
      "body": "You can contribute specimens, sequencing capacity, taxonomic knowledge or a research question. Register with the network, join the conversation on Discord or contact us by email."
    },
    "stats": {
      "participants": "members",
      "facilities": "sequencing facilities",
      "countries": "Latin American countries",
      "pilots": "proposed pilot projects",
      "participantsNote": "As of September 2026. Registration is still open.",
      "facilitiesNote": "In {n} countries, from Panama to Chile.",
      "countriesNote": "Plus {n} outside the region.",
      "pilotsNote": "Eight Heliconius species already sequenced in Bogotá.",
      "whenNow": "Happening now"
    }
  },
  "science": {
    "fission": {
      "title": "Chromosome fissions with and without a single centromere",
      "desc": "Twenty-one chromosomes, as in most Heliconius. Fissions are added one by one, each splitting one chromosome in two, up to 39 fissions and 60 chromosomes, the highest count in the sapho group. When the division machinery can attach along the whole chromosome, as in butterflies and moths, every piece can still be passed on to the daughter cells. With a single centromere, as in most animals, each piece left without the centromere is lost. This is a simplified picture.",
      "count": "{c} chromosomes",
      "countLost": "{c} kept, {n} lost",
      "unit": [
        "fission",
        "fissions"
      ],
      "modeLegend": "Where does the division machinery attach?",
      "modes": [
        "Along the whole chromosome (butterflies and moths)",
        "One centromere (most animals)"
      ],
      "start": "No fissions: 21 chromosomes, as in most <i>Heliconius</i>.",
      "splitting": "Each fission splits one chromosome in two.",
      "holoMax": "{f}: 60 chromosomes, the most in the sapho group, and every piece is still passed on.",
      "mono": "{f}: only the 21 pieces with a centromere are passed on. The other {n} cannot attach and are lost (simplified)."
    },
    "tiers": {
      "heading": "Three tiers of genomic data",
      "intro": "Each tier answers different questions, at a different cost.",
      "tierLabel": "Tier",
      "replay": "Replay",
      "explore": {
        "barcode": {
          "prompt": "Which species is this butterfly?",
          "note": "16 of about 650 bases shown (COI gene)",
          "match": "All 16 bases match <i>{name}</i>. A cross marks each base where another species differs."
        },
        "resequencing": {
          "prompt": "Where do the two populations differ?",
          "legend": [
            "same in all",
            "mixed in both",
            "differs"
          ],
          "summary": "1 of {n} sites tells the populations apart: {a} above, {b} below. The others are shared or mixed."
        },
        "reference": {
          "prompt": "How do reads become chromosomes?",
          "steps": [
            "Reads",
            "Overlap",
            "Join",
            "Order"
          ],
          "reads": "Long stretches of DNA are read from a single butterfly, in no particular order.",
          "overlap": "Reads that end and begin with the same letters overlap, so each one finds its neighbour.",
          "join": "Overlapping reads join into one continuous sequence.",
          "chrom": "Hi-C data then puts the joined pieces in order: 21 chromosomes.",
          "whole": "Costly, but done once per species. Later butterflies need only cheaper short reads, aligned to this reference."
        }
      },
      "items": [
        {
          "title": "DNA barcodes",
          "body": "A short, standard stretch of DNA, matched against a reference library, identifies the species. It is the cheapest of the three tiers."
        },
        {
          "title": "Population resequencing",
          "body": "Short reads from many individuals, aligned to a reference genome, show where populations differ and help tell species apart."
        },
        {
          "title": "Reference genomes",
          "body": "Chromosome-scale assemblies: one continuous sequence per chromosome instead of many fragments. Resequenced reads are aligned to them."
        }
      ],
      "diagrams": {
        "barcode": {
          "title": "How a DNA barcode identifies a species",
          "desc": "A butterfly of unknown species gives a short, standard stretch of DNA. Each of its bases, A, C, G or T, becomes a coloured bar, forming a barcode. The barcode is compared with the barcodes of four Heliconius species in a reference library. Three differ at a few positions, marked with crosses; one is identical, so the specimen is identified, first as Heliconius cydno. A button swaps in another unknown butterfly and the same comparison names it. Sixteen bases are drawn; a real animal barcode is about 650 bases of the COI gene."
        },
        "resequencing": {
          "title": "How population resequencing compares populations",
          "desc": "Three butterflies from one population and three from another are sequenced as short reads. The reads line up along a reference genome, one row per butterfly: the first population above it and the second below. Five sites are read one after another and each gets a mark. At two, all six butterflies carry the same letter. At two, both letters occur in both populations, so that site cannot tell them apart. At one, every butterfly above carries a T and every butterfly below a C: a site where the two populations differ."
        },
        "reference": {
          "title": "How a reference genome is assembled",
          "desc": "The DNA of one butterfly is sequenced as long reads, which arrive in no particular order. Reads that end and begin with the same letters overlap, so they can be lined up and joined into one continuous sequence. Hi-C data then orders the joined pieces, giving a chromosome-scale reference with the 21 chromosomes of a typical Heliconius. This is costly but done once per species: later butterflies need only cheaper short reads, aligned to the reference.",
          "count": "21 chromosomes"
        }
      }
    },
    "metaTitle": "Science | Caligo",
    "metaDescription": "Reference genomes of Neotropical butterflies and moths: what they are, published examples and the questions Caligo wants to answer.",
    "pilotContinuationLabel": "What Caligo proposes next",
    "chromosomeFigure": {
      "src": "media/figures-published/rueda-2024-fig1-chromosome-counts.jpg",
      "sourceId": "rueda-2024",
      "licence": "CC0 1.0",
      "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "questions": [
      {
        "heading": "How can butterfly chromosomes split and fuse, yet still work?",
        "teaser": "Most Heliconius have 21 chromosomes; five sapho-group species have up to 60.",
        "answer": [
          "Chromosome number remains stable for millions of years in many animal lineages. Some butterflies and moths are different. Most Heliconius species carry 21 chromosomes in the haploid set, but five species in the sapho group have up to 60 after repeated fissions.",
          "Lepidopteran chromosomes are holocentric. During cell division, the machinery that moves them can attach along the whole chromosome instead of at one centromere. A broken fragment can therefore retain the machinery needed to move into a daughter cell. This may help chromosome fissions persist, but it does not explain why they spread through a population.",
          "In the Heliconius sapho group, genomic studies identified three W-autosome fusion events. The W fused with chromosome 4 in their common ancestor, followed by separate fusions with chromosomes 9 and 14 in two descendant lineages."
        ]
      },
      {
        "heading": "Are threatened butterfly populations still connected a decade later?",
        "teaser": "In 2016, most surviving populations still exchanged migrants.",
        "answer": [
          "Parides ascanius is restricted to coastal restinga and wetlands in south-eastern Brazil. The IUCN assessed it as Vulnerable globally in 2018. Brazil’s national assessment listed it as Endangered in 2021.",
          "Seraphim and colleagues used mitochondrial COI sequences and eight microsatellite markers to compare the surviving populations. Their 2016 study found little genetic structure, no evidence of inbreeding and high migration among most sampled sites, although one population was more isolated by the metropolitan landscape.",
          "The 2016 result provides a baseline but does not show whether the populations remain connected today. A chromosome-scale reference and new population sampling could measure how much diversity remains and whether habitat loss, drainage or fragmentation has interrupted gene flow. Precise localities are not shown, to protect the species."
        ]
      },
      {
        "heading": "How do crop pests move and evolve resistance across soybean landscapes?",
        "teaser": "Similar-looking moth species can differ in how they move and resist control.",
        "answer": [
          "Several closely related moth species occur in Brazilian soybean fields and can be difficult to distinguish during monitoring. Reliable identification matters because movement and resistance can differ among species.",
          "Brazilian studies have found that susceptibility to insecticidal proteins is changing, so each species needs repeated testing. Genomic data can distinguish the species, compare movement among populations and identify variants associated with resistance.",
          "Genomes do not measure crop damage or prove that a variant causes resistance by themselves. Field trials, bioassays, agronomy and growers’ observations are still needed to choose a management response."
        ]
      },
      {
        "heading": "Thousands of Panacea prola fly north-east. Where do they come from?",
        "teaser": "Of 2,509 Panacea prola counted in Peru, all but 19 flew north-east.",
        "answer": [
          "In 2020, Gallice and colleagues recorded 2,509 Panacea prola in 50 one-hour observations in south-eastern Peru. Only 19 flew in another direction. They presented the observation as the first evidence of an Amazonian insect migration.",
          "The closest available genomic reference is from another member of the same subfamily, Batesia hypochlora. It cannot reveal where these butterflies came from, whether they belonged to one population or several, or whether the movement repeats each year.",
          "Comparing samples from different places, seasons and years could estimate ancestry and connectivity. Genomes would still need to be combined with field observations, environmental data or other movement evidence."
        ]
      }
    ],
    "ethics": {
      "heading": "Planning responsible sampling"
    }
  },
  "pilots": {
    "metaTitle": "Proposed pilot projects | Caligo",
    "title": "Proposed pilot projects",
    "fieldLabels": {
      "proposedQuestion": "What the pilot project would test"
    }
  },
  "projects": {
    "rail": {
      "heliconius": "Heliconius",
      "parides": "Parides ascanius",
      "panacea": "Panacea prola"
    },
    "metaTitle": "Proposed pilot projects | Caligo",
    "metaDescription": "Four proposed pilot projects, each starting from a published finding about Neotropical butterflies or moths.",
    "title": "Proposed pilot projects",
    "pilotProposal": {
      "leadsLabel": "Pilot project leads",
      "resourcesLabel": "Starting material and capacity",
      "backgroundLabel": "Published background and resources"
    }
  },
  "about": {
    "metaTitle": "About | Caligo",
    "metaDescription": "Caligo’s 1,000-genome goal, sequencing facilities and principles for research led from Latin America.",
    "title": "About Caligo",
    "workflow": {
      "projectName": "Project Psyche"
    },
    "leadership": {
      "heading": "Leadership"
    },
    "network": {
      "heading": "The Caligo network"
    },
    "facilities": {
      "heading": "Partner facilities"
    }
  },
  "participate": {
    "metaTitle": "Participate | Caligo",
    "metaDescription": "Ways for researchers, students, collections, educators, naturalists, institutions and supporters to begin a conversation with Caligo.",
    "title": "Help build Neotropical genomics from Latin America",
    "intro": "Caligo brings together people who want to understand, document and protect the diversity of Neotropical butterflies and moths.",
    "contact": {
      "heading": "Start a conversation",
      "body": "Write to Caligo about a species, a question or how you would like to help.",
      "email": "genomica.neotropical@gmail.com"
    },
    "audiences": {
      "heading": "What you can bring",
      "intro": "There is a place in Caligo for people in taxonomy, ecology, conservation, collections, sequencing, bioinformatics and education.",
      "items": [
        {
          "title": "A question",
          "body": "Have a scientific or conservation question that genomics could help answer? Caligo connects ideas with specimens, expertise and sequencing capacity."
        },
        {
          "title": "An organism",
          "body": "Work on a butterfly or moth species, collection or taxonomic group that should be sequenced? Help us set sequencing priorities."
        },
        {
          "title": "Expertise",
          "body": "Contribute skills in fieldwork, taxonomy, molecular biology, sequencing, bioinformatics, data analysis, computing, conservation or communication."
        },
        {
          "title": "Infrastructure or resources",
          "body": "Laboratories, collections, computing facilities, field stations and sequencing platforms can become part of the regional network."
        },
        {
          "title": "A training opportunity",
          "body": "Help organise workshops, exchanges, hackathons, courses and mentoring that build lasting capacity across Latin America."
        },
        {
          "title": "A partnership",
          "body": "We welcome universities, museums, research institutes, conservation organisations, communities, funders and biodiversity initiatives that share our principles."
        }
      ],
      "closing": "You do not need a genome project already planned. If you want to contribute, write to us.",
      "proposalLink": "Suggest a species or a research question"
    },
    "benefits": {
      "heading": "What participation can lead to",
      "intro": "Depending on the project and funding, members can join:",
      "items": [
        "New collaborations around organisms, collections, methods or research questions",
        "Training, exchanges and shared technical experience",
        "Joint research and funding proposals",
        "Shared publications that recognise regional expertise"
      ]
    },
    "discord": {
      "heading": "Meet the Caligo community",
      "body": "Discord is an informal space for introductions, questions and shared resources across countries and disciplines.",
      "active": {
        "button": "Join the Discord",
        "ariaLabel": "Join the Caligo Discord community; opens an external site"
      },
      "pending": {
        "button": "New invite link coming soon",
        "ariaLabel": "Caligo Discord invite link will be added soon",
        "note": "The community option remains here while a new invitation link is prepared. You can contact Caligo by email now."
      }
    },
    "beforeSubmitting": {
      "heading": "A short introduction is enough",
      "body": "Tell us who you are, what you study and what you would like to explore. We can arrange how to share specimen records, permits or other project files later."
    },
    "languagePolicy": {
      "heading": "Working languages",
      "body": "Official communications are in English and Spanish. Portuguese is also spoken in meetings, and participants translate informally for each other."
    }
  },
  "notFound": {
    "title": "This page hasn’t been sequenced yet",
    "body": "The address may have changed, or the page never existed. Like this moth, you may be circling the wrong light.",
    "homeLink": "Back to the home page"
  },
  "footer": {
    "tagline": "A Latin American network building reference genomes for the butterflies and moths of the Neotropics.",
    "rights": "Caligo",
    "navHeading": "Explore",
    "languageHeading": "Language"
  }
} as const;

/** Widen literal leaves so the Spanish dict can mirror the shape. */
export type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly DeepWiden<U>[]
        : T extends object
          ? { [K in keyof T]: DeepWiden<T[K]> }
          : T;

export type Dict = DeepWiden<typeof en>;
