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
    "descriptor": "Genomes of Neotropical butterflies and moths",
    "proposition": "Caligo is a Latin American-led network building reference genomes for Neotropical butterflies and moths. Each genome is linked to a documented specimen."
  },
  "common": {
    "skipToContent": "Skip to content",
    "menu": "Menu",
    "close": "Close",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "theme": "Theme",
    "toggleTheme": "Switch between light and dark themes",
    "language": "Language",
    "chooseLanguage": "Choose language",
    "externalNote": "Opens an external site",
    "backTo": "Back to",
    "onThisPage": "On this page",
    "lastReviewed": "Evidence checked",
    "leads": "Scientific leads",
    "status": "Status",
    "privacy": "Privacy",
    "exploreQuestion": "Explore this question",
    "exploreThisPilot": "Explore this pilot project"
  },
  "status": {
    "publishedEvidence": "Published evidence",
    "databaseSnapshot": "Dated database snapshot",
    "proposedCaligoWork": "Proposed pilot project",
    "proposedPilot": "Proposed pilot project",
    "preprint": "Preprint",
    "externalContext": "Related external context"
  },
  "mediaViewer": {
    "previousImage": "Previous visual",
    "nextImage": "Next visual",
    "imageOfLabel": "Visual {n} of {total}",
    "documentaryType": "Documentary image",
    "aiConceptType": "Concept illustration",
    "codeNativeType": "Explanatory graphic",
    "imageDetailsLabel": "Image details",
    "sourceLinkLabel": "Source",
    "aiGeneratedCredit": "Generated with AI for Caligo",
    "caveats": {
      "fieldSite": "Illustrative field scene",
      "specimen": "Illustrative organism",
      "map": "Generalised landscape view",
      "laboratory": "Illustrative laboratory workflow",
      "data": "Explanatory data schematic",
      "repository": "Illustrative repository interface"
    }
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
    "exploreScience": "Explore the questions",
    "seeProposedPilots": "Meet the proposed pilot projects",
    "contact": "Contact Caligo",
    "join": "Start a conversation",
    "seeScience": "See how the science works",
    "howToTakePart": "Ways to take part",
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
    "questions": {
      "heading": "Four questions genomes can help answer",
      "intro": "Each starts from a published finding and leads to a proposed pilot project."
    },
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
    "pilotsTeaser": {
      "heading": "From questions to pilot projects",
      "intro": "Caligo is shaping four projects on chromosome change, threatened-population connectivity, crop pests and seasonal migration."
    },
    "intro": {
      "eyebrow": "Why butterflies and moths",
      "title": "Why butterflies and moths?",
      "body": [
        "Butterflies and moths live in nearly every terrestrial ecosystem and are especially diverse in the Neotropics. They are an ideal group for studying ecology, evolution and conservation, if the right information is available.",
        "Reference genomes and genetic markers are still missing for most species in this region. Caligo brings researchers and resources together across Latin America to answer questions about species identification, discovery and speciation."
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
          "body": "Link each sequence or assembly to a documented specimen in a collection so researchers can check which organism was sequenced and where it came from."
        },
        {
          "title": "Build regional capacity",
          "body": "Expand sequencing, sample banking and bioinformatics in Latin America, from country capitals to remote field sites in areas of high biodiversity."
        },
        {
          "title": "Training and fair credit",
          "body": "Support training, open data and shared publications while recognising everyone who contributes specimens, analysis or knowledge."
        }
      ]
    },
    "activity": {
      "eyebrow": "Recent and upcoming",
      "heading": "Caligo in action",
      "intro": "Workshops, hackathons and other events help us learn together and grow the network."
    },
    "pillars": {
      "eyebrow": "How the work is shaped",
      "title": "Guiding principles for regional genomics"
    },
    "closing": {
      "title": "Bring a question, an organism or a perspective",
      "body": "You can contribute specimens, sequencing capacity, taxonomic knowledge or a research question. Register with the network, join the conversation on Discord or contact us by email."
    },
    "stats": {
      "participants": "members",
      "facilities": "sequencing facilities",
      "countries": "Latin American countries",
      "pilots": "proposed pilot projects",
      "asOf": "as of September 2026",
      "participantsNote": "Counted in September 2026, and the form is still open.",
      "facilitiesNote": "In {n} countries, from Panama to Chile.",
      "countriesNote": "Plus {n} outside the region.",
      "pilotsNote": "Eight Heliconius species already sequenced in Bogotá.",
      "whenNow": "Happening now"
    }
  },
  "science": {
    "fission": {
      "title": "Chromosome fissions with and without a single centromere",
      "desc": "Twenty-one chromosomes, as in most Heliconius. A slider adds fissions, each splitting one chromosome in two, up to 39 fissions and 60 chromosomes, the highest count in the sapho group. When the division machinery can attach along the whole chromosome, every piece can still move into a daughter cell. With a single centromere, as in humans, each piece without the centromere would be lost.",
      "count": "{c} chromosomes",
      "slider": "Fissions",
      "unit": ["fission", "fissions"],
      "modeLegend": "Where the division machinery attaches",
      "modes": ["Along the chromosome, as in butterflies", "At one centromere, as in humans"],
      "start": "No fissions: 21 chromosomes, as in most <i>Heliconius</i>.",
      "holo": "{f}: {c} chromosomes. Every piece keeps part of the attachment line, so it can still move into a daughter cell.",
      "holoMax": "{f}: 60 chromosomes, the highest count in the sapho group. Every piece can still move into a daughter cell.",
      "mono": "{f}: only the 21 pieces with a centromere move into the daughter cells. The other {n} would be lost."
    },
    "tiers": {
      "heading": "Three tiers of genomic data",
      "intro": "Each tier answers different questions, at a different cost.",
      "tierLabel": "Tier",
      "replay": "Replay",
      "explore": {
        "barcode": {
          "label": "Choose a library row to compare",
          "match": "<i>{name}</i>: all 16 bases match, so the species is identified.",
          "miss": "<i>{name}</i>: {n} of 16 bases differ, ticked under the row. Not a match."
        },
        "resequencing": {
          "label": "Position along the genome",
          "same": "Position {i} of 21: every read has {base}. The populations agree.",
          "differ": "Position {i} of 21: {a} above, {b} below. The populations differ here."
        },
        "reference": {
          "label": "Reads sequenced",
          "partial": "{p}% of the genome covered, in {n} pieces. Each gap is a stretch no read reached.",
          "whole": "100% covered: 21 chromosomes, one continuous piece each."
        }
      },
      "items": [
        {
          "title": "DNA barcodes",
          "body": "A short, standard stretch of DNA, matched against a reference library, identifies the species. The same approach reads mixed samples, such as pollen carried on a proboscis."
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
          "desc": "A butterfly of unknown species gives a short, standard stretch of DNA. Each of its bases, A, C, G or T, becomes a coloured bar, forming a barcode. The barcode is compared with the barcodes of four Heliconius species in a reference library. Three differ at a few positions; the fourth is identical, so the specimen is identified as Heliconius cydno."
        },
        "resequencing": {
          "title": "How population resequencing compares populations",
          "desc": "Three butterflies from one population and three from another are sequenced as short reads. The reads line up along a reference genome, those of the first population above it and those of the second below. At one position every read from the first population carries an A and every read from the second carries a G: a site where the two populations differ."
        },
        "reference": {
          "title": "How a reference genome is assembled",
          "desc": "The DNA of one butterfly is sequenced as many fragments. The fragments are ordered and joined until each chromosome is one continuous sequence. The result is the karyotype of a typical Heliconius: 21 chromosomes.",
          "count": "21 chromosomes"
        }
      }
    },
    "metaTitle": "Science | Caligo",
    "metaDescription": "Reference genomes, shared analysis and training for Neotropical butterflies and moths, with published examples and Caligo’s research questions.",
    "title": "Questions genomes can help answer",
    "intro": "These four research findings lead directly to Caligo's proposed pilot projects. Each shows what earlier evidence resolved and what new samples or genomic data could reveal next.",
    "questionsHeading": "Questions genomes can help answer",
    "pilotContinuationLabel": "What Caligo proposes next",
    "chromosomeFigure": {
      "src": "media/figures-published/rueda-2024-fig1-chromosome-counts.jpg",
      "citation": "Rueda-M et al. 2024, PLOS Genetics, Fig 1",
      "sourceId": "rueda-2024",
      "licence": "CC0 1.0",
      "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "width": 1600,
      "height": 1187,
      "alt": "Phylogeny of the Heliconius sara/sapho clade. Grey boxes give haploid chromosome counts along the tree, ranging from 21 to 56–60. Three dashed arrows mark separate W–autosome fusion events, labelled W+4, W+9 and W+14. Range maps and wing photographs of each subspecies sit to the right.",
      "caption": "The published evidence behind this section. Read the grey boxes: haploid chromosome counts run from 21 in most of the clade to between 56 and 60 in the sapho and eleuchia lineages. The three dashed arrows mark the separate occasions on which an autosome fused to the W."
    },
    "questions": [
      {
        "heading": "How can butterfly chromosomes split and fuse, yet still work?",
        "teaser": "Most Heliconius have 21 chromosomes; five sapho-group species have up to 60.",
        "answer": [
          "Chromosome number remains stable for millions of years in many animal lineages. Some butterflies and moths are different. Most Heliconius species carry 21 chromosomes in the haploid set, but five species in the sapho group have between 21 and 60 after repeated fissions.",
          "Lepidopteran chromosomes are holocentric. During cell division, the machinery that moves them can attach along much of the chromosome instead of at one localised centromere. A broken fragment can therefore retain the machinery needed to move into a daughter cell. This may help chromosome fissions persist, but it does not explain why they spread through a population.",
          "In the Heliconius sapho group, genomic studies identified three W-autosome fusion events. The W fused with chromosome 4 in their common ancestor, followed by separate fusions with chromosomes 9 and 14 in two descendant lineages."
        ]
      },
      {
        "heading": "Are threatened butterfly populations still connected a decade later?",
        "teaser": "A 2016 study found most populations still connected. Are they today?",
        "answer": [
          "Parides ascanius is restricted to coastal restinga and wetlands in south-eastern Brazil. The IUCN assessed it as Vulnerable globally in 2018. Brazil's national assessment listed it as Endangered in 2021.",
          "Seraphim and colleagues used mitochondrial COI sequences and eight microsatellite markers to compare the surviving populations. Their 2016 study found little genetic structure, no evidence of inbreeding and high migration among most sampled sites, although one population was more isolated by the metropolitan landscape.",
          "The 2016 result provides a baseline but does not show whether the populations remain connected today. A chromosome-scale reference and new population sampling could measure how much diversity remains and whether habitat loss, drainage or fragmentation has interrupted gene flow. Precise localities should remain out of public communication."
        ]
      },
      {
        "heading": "How do crop pests move and evolve resistance across soybean landscapes?",
        "teaser": "Similar-looking moth species can differ in how they move and resist control.",
        "answer": [
          "Several closely related moth species occur in Brazilian soybean fields and can be difficult to distinguish during monitoring. Reliable identification matters because movement and resistance can differ among species.",
          "Brazilian studies have found changes in susceptibility to insecticidal proteins that require repeated, species-specific testing. Genomic data can distinguish the species, compare movement among populations and identify variants associated with resistance.",
          "Genomes do not measure crop damage or prove that a variant causes resistance by themselves. Field trials, bioassays, agronomy and growers’ observations are still needed to choose a management response."
        ]
      },
      {
        "heading": "Thousands of Panacea prola fly north-east. Where do they come from?",
        "teaser": "Researchers counted 2,509 Panacea prola flying north-east in south-eastern Peru.",
        "answer": [
          "In 2020, Gallice and colleagues recorded 2,509 Panacea prola during fifty one-hour observations in south-eastern Peru. Only 19 flew in another direction. They presented the observation as the first evidence of an Amazonian insect migration.",
          "The closest available genomic reference is from another member of the same subfamily, Batesia hypochlora. It cannot reveal where the moving Panacea came from, whether they belonged to one population or several, or whether the movement repeats each year.",
          "Comparing samples from different places, seasons and years could estimate ancestry and connectivity. Genomes would still need to be combined with field observations, environmental data or other movement evidence."
        ]
      }
    ],
    "ethics": {
      "heading": "Planning responsible sampling",
      "body": [
        "Sampling plans need permits, specimen records, agreements on how research results, training and other benefits will be shared, and a plan for managing data. Requirements differ among countries, so local collaborators need to be involved from the start."
      ]
    }
  },
  "pilots": {
    "metaTitle": "Proposed pilot projects | Caligo",
    "metaDescription": "Four proposed investigations linking chromosome evolution, threatened-population connectivity, sustainable agriculture and seasonal movement to documented genomic evidence.",
    "title": "Proposed pilot projects",
    "opening": "These four pilot projects begin where earlier studies leave off. Each asks what new samples and genomic data could reveal.",
    "fieldLabels": {
      "proposedQuestion": "What the proposed Caligo pilot project would test"
    }
  },
  "caligo": {
    "metaTitle": "Discover Caligo | Eye, eyespot and evidence",
    "metaDescription": "A popular-science story about the Caligo genus, compound eyes, wing eyespots, scales and how competing explanations are tested.",
    "meetTheNamesake": {
      "heading": "Meet the owl butterflies",
      "body": "Caligo is a Neotropical genus of owl butterflies, known for their beauty and the large eyespots on their wings.",
      "sourceNote": "Caligo is a Neotropical genus of owl butterflies."
    },
    "compoundEye": {
      "eyebrow": "Look at the right structure",
      "heading": "Compound eye, not wing eyespot",
      "body": "The bright round feature in the photograph is the butterfly’s compound eye, a visual organ built from many small units called ommatidia. The large ringed marks on the wings are eyespots: patterns formed by scales. They can resemble eyes in a photograph, but they are different structures with different functions. Keeping that distinction clear is the first step before asking what either feature does."
    },
    "hypotheses": {
      "heading": "What might a wing eyespot do?",
      "intro": "An eyespot can look obvious to us and still have several possible biological explanations. Each hypothesis makes a different prediction, and its importance can change with predator, light, behaviour and species.",
      "labels": {
        "prediction": "What we would expect",
        "limitation": "What this does not settle"
      },
      "rows": [
        {
          "hypothesis": "Resemble the eye of a larger animal",
          "prediction": "Some predators should hesitate or avoid attacking when the pattern is visible.",
          "limitation": "Avoidance must be tested against simpler effects of size, contrast and novelty. A human impression of “an eye” is not enough."
        },
        {
          "hypothesis": "Redirect an attack toward the wing",
          "prediction": "Strikes should land more often near the eyespot, potentially sparing the head or body.",
          "limitation": "More wing strikes do not automatically mean fewer attacks or higher survival, and outcomes depend on the predator and damage."
        },
        {
          "hypothesis": "Attract attention because it is conspicuous",
          "prediction": "High contrast, placement or motion should draw a predator’s attention even when the mark is not interpreted as an eye.",
          "limitation": "Conspicuousness alone does not say whether the effect helps the butterfly, harms it or changes with context."
        },
        {
          "hypothesis": "Play a role in signalling among butterflies",
          "prediction": "Responses should vary with sex, courtship, territorial behaviour or the light environment in which butterflies see one another.",
          "limitation": "Evidence must separate communication between butterflies from predator-related effects."
        }
      ],
      "resultNarrow": "In a 2024 field experiment with Caligo martia, damage patterns were consistent with attacks being redirected toward the wings, but the eyespots did not reduce overall attack risk. That supports deflection in this system. It does not establish one universal function for every Caligo species. [S18]",
      "sourceNote": "Primary source: Iserhard et al. 2024 [S18]."
    },
    "scales": {
      "heading": "A wing pattern is built from thousands of scales",
      "body": "Butterfly scales are tiny structures that overlap across the wing. Pigments absorb some wavelengths. Microscopic architecture can scatter, reflect or suppress light. A study of a dark eyespot region in Caligo memnon described nanoscale structures associated with its black appearance. Elsewhere in the Neotropics, the glasswing Greta oto achieves transparency through much lower scale density, narrow bristle-like scales and irregular wax nanopillars that reduce reflection. Similar-looking effects can arise from very different physical arrangements. That is another reason to connect visible traits with microscopy, development and comparative genomics. [S19][S12]"
    },
    "genomicsCould": {
      "heading": "From the visible butterfly to inherited information",
      "body": "A genome adds another layer of evidence beneath the visible organism. Researchers can compare genes and regulatory regions involved in scale development, pigmentation, vision or behaviour across related species, then investigate when those regions changed, crossed between lineages or evolved under different pressures. Experiments, microscopy, natural history and sensory biology remain essential for understanding perception and behaviour."
    }
  },
  "projects": {
    "rail": {
      "overview": "Overview",
      "heliconius": "Heliconius",
      "parides": "Parides ascanius",
      "soybean": "Soybean Lepidoptera",
      "panacea": "Panacea prola"
    },
    "metaTitle": "Proposed pilot projects | Caligo",
    "metaDescription": "Four proposed pilot projects linking published evidence to testable Neotropical genomics questions.",
    "title": "Proposed pilot projects",
    "intro": "These four pilot projects begin where earlier studies leave off. Each asks what new samples and genomic data could reveal.",
    "pilotProposal": {
      "heading": "The proposed Caligo pilot project",
      "leadsLabel": "Pilot project leads",
      "resourcesLabel": "Starting material and capacity",
      "backgroundLabel": "Published background and resources"
    }
  },
  "about": {
    "metaTitle": "About | Caligo",
    "metaDescription": "Caligo’s 1,000-genome goal, leadership team, sequencing facilities and principles for research led from Latin America.",
    "title": "About Caligo",
    "body": "Caligo is a Latin American-led effort to build reference genomes for Neotropical butterflies and moths. Each genome is linked to an identified specimen and the taxonomic expertise needed to verify it. Researchers can then use these genomes to study questions defined in the region.",
    "name": {
      "heading": "Why Caligo",
      "body": [
        "Caligo takes its name from a Neotropical genus of owl butterflies, known for their beauty and striking eyespots. In one species, these false eyes redirect bird attacks toward the wings and away from the body. Look closer and the pattern resolves into thousands of scales, whose pigments and microscopic structures create its colour. The name reflects the curiosity behind Caligo: beginning with the diversity we can see, then using genomes to understand how it evolved."
      ]
    },
    "workflow": {
      "eyebrow": "From specimen to shared evidence",
      "heading": "Keep every genome linked to its specimen",
      "projectName": "Project Psyche",
      "introAfter": " coordinates butterfly and moth sequencing across Europe through sampling hubs, shared standards and openly released genomes. Caligo draws on that model for a Latin American-led programme focused on Neotropical species.",
      "steps": [
        "Identify the organism and preserve a voucher specimen",
        "Agree permissions, roles, credit and benefit sharing",
        "Sequence the material with an appropriate regional facility",
        "Assemble the genome and check its quality and identity",
        "Deposit the sequence and connect it to specimen metadata",
        "Use the genome in comparative studies and update it when better data become available"
      ]
    },
    "leadership": {
      "heading": "Leadership",
      "intro": "The initiative is coordinated by researchers from institutions in Latin America and internationally."
    },
    "network": {
      "heading": "The Caligo network"
    },
    "facilities": {
      "heading": "Partner facilities",
      "intro": "Seven partner institutions in Colombia, Panama, Brazil, Ecuador and Chile provide sequencing platforms for Caligo projects."
    },
    "positioning": {
      "heading": "Connections and context",
      "body": "Caligo is engaged with EBP Latin America, the Earth BioGenome Project's regional initiative, and with Genotropics, a network working on the genomic diversity of tropical organisms."
    }
  },
  "participate": {
    "metaTitle": "Participate | Caligo",
    "metaDescription": "Ways for researchers, students, collections, educators, naturalists, institutions and supporters to begin a conversation with Caligo.",
    "title": "Help build Neotropical genomics from Latin America",
    "intro": "Caligo brings together people who want to understand, document and protect the diversity of Neotropical butterflies and moths.",
    "contact": {
      "heading": "Start a conversation",
      "body": "Email Caligo with your research interests, your connection to Neotropical butterflies or moths and the contribution you would like to discuss.",
      "email": "genomica.neotropical@gmail.com",
      "ariaLabel": "Email Caligo at genomica.neotropical@gmail.com"
    },
    "audiences": {
      "heading": "What you can bring",
      "intro": "Whether you work in taxonomy, ecology, evolution, conservation, genomics, bioinformatics, natural history, collections, sequencing, education or community engagement, there may be a place for you in Caligo.",
      "items": [
        {
          "title": "A question",
          "body": "Have a scientific or conservation question that genomics could help answer? Caligo connects ideas with specimens, expertise and sequencing capacity."
        },
        {
          "title": "An organism",
          "body": "Work on a butterfly or moth species, collection or taxonomic group that deserves genomic attention? Help us identify priorities for sequencing."
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
      "closing": "You do not need a genome project already planned. If you have an idea, a specimen, expertise or infrastructure, or simply want to contribute, we would like to hear from you.",
      "proposalLink": "Suggest a species or a research question"
    },
    "benefits": {
      "heading": "What participation can lead to",
      "intro": "Depending on the project and available funding, participants may take part in:",
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
      "body": "Official communications are in English and Spanish. Portuguese is also used in meetings, with informal translation among participants who understand both."
    }
  },
  "sourceDrawer": {
    "open": "Sources and methods",
    "close": "Close sources and methods",
    "citationLabel": "Evidence",
    "checkedDate": "Checked",
    "databaseAccessed": "Database accessed",
    "scopeLabel": "What this source supports",
    "limitsLabel": "Limits and exclusions",
    "methodNote": "Method note",
    "externalContext": "Related external context",
    "preprint": "Preprint. A peer-reviewed journal version was not found when this source was checked.",
    "sensitiveLocalities": "Precise sensitive-species localities are not shown.",
    "mutableData": "Mutable database or institutional record. The access date is shown."
  },
  "notFound": {
    "title": "This page hasn’t been sequenced yet",
    "body": "The address may have changed, or the page never existed. Like this moth, you may be circling the wrong light.",
    "homeLink": "Back to the home page"
  },
  "footer": {
    "tagline": "A Latin American network building reference genomes for the butterflies and moths of the Neotropics.",
    "rights": "Caligo",
    "contact": "Contact",
    "navHeading": "Explore",
    "languageHeading": "Language",
    "sources": "Sources and methods"
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
