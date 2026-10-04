# Design

## Source of truth

- Status: Active
- Last refreshed: 2026-08-06
- Primary product surfaces: bilingual public website at `/en/` and `/es/`
- Evidence reviewed: `README.md`, `src/styles/tokens.css`, `src/styles/global.css`, `src/components/pages/HomePage.astro`, `src/components/HeroMedia.astro`, `src/components/MediaCandidateViewer.astro`, `refs/plan-mejora/04_DIRECCION_VISUAL.md`, and desktop/mobile screenshots supplied during review

## Brand

- Personality: scientifically rigorous, regional, collaborative, confident, and visually grounded in living specimens
- Trust signals: named sources, image credits, clear evidence status, real institutional context, and consistent bilingual presentation
- Avoid: generic technology styling, decorative scientific notation, invented claims, weak caveats, heavy shadows, glow, and text placed over biologically important image detail

## Product goals

- Goals: invite researchers and institutions to understand, trust, and join Caligo
- Non-goals: present unapproved governance as final, imply commitments that do not exist, or turn the site into a publication database
- Success signals: users can understand the initiative, proposed pilot projects, selected scientific questions, leadership, and participation routes without losing source context

## Personas and jobs

- Primary personas: Lepidoptera researchers, taxonomists, genomic facilities, students, funders, collection staff, and potential collaborators
- User jobs: understand the scientific case, inspect proposed work, assess credibility, find collaborators, and join the network
- Key contexts of use: desktop research environments, narrow desktop windows, tablets, and mobile phones in English or Spanish

## Information architecture

- Primary navigation: Home, Science, Pilot projects, About, Participate
- Core routes/screens: `/`, `/science`, `/projects`, `/about`, and `/participate`
- Content hierarchy: Home presents the initiative thesis, priorities, four selected published findings linked to proposed work, and current activity; About explains the name, workflow, principles, leadership, facilities, and wider network context; Science, Pilot projects, and Participate carry their named tasks

## Design principles

- Let biological evidence lead: specimen imagery and scientific diagrams carry meaning, not decoration
- Keep provenance visible: sources, credits, licences, and proposal status remain readable
- Separate content territories: image focal subjects, copy, controls, and attribution must not compete for the same space
- Preserve bilingual parity: English and Spanish use the same hierarchy and equivalent layout quality
- Remove ornamental repetition: navigation already supplies page context, so a page label must not repeat the H1; complete content modules belong on one canonical page
- Make every paragraph earn its place by stating a result, mechanism, question, evidence requirement, or action
- Keep card metadata subordinate: concise image details may collapse when the scientific question and next actions are the primary task
- Tradeoff: preserve a clear subject/copy boundary before maximizing image area or headline width

## Visual language

- Color: Caligo’s warm neutral palette with a burnt-orange accent; hero copy uses fixed ivory on a matte near-black field
- Brand emblem: the extracted mark is transparent on light surfaces; dark mode supplies the logo’s original ivory matte so its negative-space wing markings keep the same colour in both modes
- Social previews: use the dedicated 1200 x 630 text-free share card, with the complete emblem centred inside a square crop-safe area; never rely on a favicon, touch icon, or full logo lockup as a platform fallback
- Typography: Space Grotesk for display, Inter for prose and UI, JetBrains Mono for labels and provenance. Shared editorial roles in `global.css` define one cross-page hierarchy: heading (`--step-2`), lead and body (`--step-0`), metadata (`--step--1`), and uppercase labels (`--step--2`). Page components own layout and emphasis, not independent type scales. Home editorial sections remain an intentional restrained local exception so ordinary laptop viewports do not feel browser-zoomed.
- Spacing/layout rhythm: wide specimen-plate compositions followed by restrained content sections
- Shape/radius/elevation: hairlines, small radii, and minimal elevation
- Motion: user-controlled only when sequence matters; final-state comparison diagrams remain static; no generic entrance animation
- Imagery/iconography: credited documentary imagery and code-native diagrams; icons must encode a recognizable concept or action, not merely repeat a type already established by the surrounding heading and content

## Components

- Existing components to reuse: `Base`, `Header`, `HeroMedia`, `CommunityStats`, `PrincipleGrid`, `MediaCandidateViewer`, and shared CTA/button styles
- New/changed components: Home includes a compact three-priority grid, four evidence-to-pilot cards, and a restrained recent/upcoming activity timeline; About presents principles as an open numbered editorial index, retains profile cards for people, keeps the six-step specimen-to-shared-evidence workflow, and consolidates leadership, facilities, and external context under one Caligo network section; Participate includes a concise participation-outcomes list; Home research cards use the compact `MediaCandidateViewer` disclosure so image provenance remains available without competing with the scientific hook; Science pairs Caligo concept diagrams with the corresponding published figures, side by side only when both remain legible; the Home hero may change its internal CSS geometry without creating a parallel hero component; Header and Footer share the transparent, text-free emblem, and the Header uses a responsive brand lockup
- Variants and states: desktop split composition; mobile stacked composition; light/dark page modes do not alter hero contrast
- Token/component ownership: global tokens remain in `src/styles/tokens.css`; reusable editorial type roles remain in `src/styles/global.css`; page-specific CSS owns geometry, spacing exceptions, and accents; hero geometry stays in `HomePage.astro`

## Accessibility

- Target standard: WCAG 2.2 AA
- Keyboard/focus behavior: every CTA, source link, image selector, and image-details disclosure remains keyboard reachable with visible focus
- Contrast/readability: hero text uses the photograph’s naturally dark right side, never the butterfly’s head or eye; no overlay, filter, clipping edge, or added panel may alter the specimen
- Screen-reader semantics: one page `h1`, meaningful photo alternative text, and visible attribution
- Reduced motion and sensory considerations: the hero remains static; explanatory motion respects `prefers-reduced-motion`

## Responsive behavior

- Supported breakpoints/devices: approximately 390 px mobile through wide desktop; the critical narrow-desktop boundary is immediately above 60 rem
- Desktop layout above 60 rem: the landscape photograph remains full bleed at its original brightness and composition; copy occupies a stable right-side column over the image’s own dark field, and hero height follows the photograph’s ratio until its wide-screen cap
- Mobile layout at or below 60 rem: the same landscape composition appears first at its intrinsic aspect ratio, followed by a dedicated dark copy field; no alternate crop, overlay, or copy obscures the specimen
- Header lockup: on desktop, the descriptor sits to the right of “Caligo” to keep the sticky header shallow; below the desktop-navigation breakpoint it stacks beneath the name, and at the narrowest mobile width it may be hidden to preserve room for controls
- Intermediate widths: title, body, actions, and attribution may wrap or increase hero height, but they must not cross into the specimen territory
- Validation widths: 390, 960, 961, 1024, 1280, 1440, and 1920 CSS pixels
- Touch/hover differences: full-width mobile CTAs; hover styling is supplemental and never the only state cue

## Interaction states

- Loading: eager hero image with intrinsic dimensions to limit layout shift
- Empty: missing canonical hero media fails at build time
- Error: broken or absent factual media records must not silently render placeholder claims
- Success: primary and secondary hero actions remain visually distinct
- Disabled: not applicable to the static hero
- Offline/slow network: responsive image sources and static copy preserve the page structure

## Content voice

- Tone: direct, concise, scientifically literate, and inviting
- Terminology: use “pilot project” in English and “proyecto piloto” in Spanish
- Microcopy rules: no internal editorial language, no defensive disclaimers that weaken the public presentation, and no facts without a documented source; distinguish current capacity from aspirational outcomes without presenting either as a guarantee
- Scientific copy: prefer a measured result or named biological mechanism over metaphors about genomes as maps, blueprints, instructions, or books

## Implementation constraints

- Framework/styling system: Astro, plain CSS, and vanilla JavaScript
- Design-token constraints: use existing variables unless a cross-site token is genuinely required
- Performance constraints: no new dependencies and no additional hero asset unless the current responsive sources cannot satisfy the composition
- Compatibility constraints: modern evergreen browsers and CSS without DOM/focus reordering
- Test/screenshot expectations: automated geometry contracts plus browser review in EN/ES at wide desktop, narrow desktop, and 390 px mobile

## Open questions

- None currently block the responsive hero contract.

## Homepage and participation update, 7 September 2026

The homepage uses the accepted shorter bilingual headline and serif accents, a wider desktop copy column, and mobile gutters on a black background matching the photograph. Statistics use framed cards and desktop icons. Research cards combine topic labels with light framing. Introductory and priority body text share a size and line height; the desktop introduction uses a narrow column gap and divider. Registration and community actions lead the Join page and appear directly on Home alongside copyable email. The original concept diagram and timed Play/Replay behavior are preserved. See `docs/design-experiment.md` for the final design and validation commands.

## September Science review

Use a single meaningful heading rather than an eyebrow repeating it. Training copy follows its heading in one reading column. Show the 1,000 target once across its number and heading. External web links open new tabs; external action icons differ from internal horizontal arrows. Science questions use single photographs and omit the chromosome concept diagram and duplicate Rueda figure, per the user's latest review.

Pilot project cards also use one photograph. About omits the goals/principles/network eyebrow labels and repeated supplied-photo captions, and keeps the leadership heading close to its parent section heading. The visible etymology source link is omitted at the user's request; provenance remains in source data.

## September layout polish

Home question cards align with the page container, use plain "1. Topic" labels, and name each link's destination ("Science: …", "Pilot project: …"). Every single-image viewer (Home, Science, Pilot projects) keeps its caption and credit behind an (i) button on the image corner. The Colombia call shows a live countdown chip (`DeadlineChip`) on Home, Funding and Pilot projects, plus a dismissible site-wide banner that disappears after the deadline. Half-empty two-column sections now pair their text with related content: the funding call beside the pilot introduction, training events beside "Learn by analysing together", and the goals and name essays side by side on About. Pilot-project reasons use Lucide icons (ISC). Each pilot shows its question, proposal and leads, with published background, resources and sources in one shared disclosure that opens automatically when linked by hash. Published figures open in a shared lightbox (`FigureLightbox`). Leadership portraits share one crop anchor and a light warm grade.

## Network map, 30 September 2026

A Home section, `NetworkMap`, places the eight partner facilities and two network events on a static Natural Earth map generated by `scripts/build-network-map.py`; the numbered list and map highlight each other on hover and focus, and the list carries every fact without JavaScript. Facility cities are the institutions' main campuses, except the Peru facility, placed at the Alliance for a Sustainable Amazon's Finca Las Piedras field lab near Puerto Maldonado. The map is static: no entrance animation, no glow.

## Data-tier diagrams, October 2026

Science adds "Three tiers of genomic data" from Nicol's vision document, after "What is a reference genome?". Each tier has a small didactic SVG diagram (`TierDiagram`): a barcode matched row by row against a reference library until it identifies *H. cydno*; short reads from two populations aligning to a reference with one differing site highlighted; fragments assembling into 21 chromosome-length sequences. Each plays once when it enters the viewport, ends on a lasting final state, offers Replay, and shows only the final state under reduced motion or without JavaScript. Home is unchanged. The network map shows facilities and events without connecting lines, because the lines implied collaborations that are not documented. The 404 page shows a moth circling a lamp.
