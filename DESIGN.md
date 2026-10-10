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

Science adds "Three tiers of genomic data" from Nicol's vision document, after "What is a reference genome?". Each tier has a small didactic SVG diagram (`TierDiagram`): a barcode matched row by row against a reference library until it identifies *H. cydno*; short reads from two populations aligning to a reference with one differing site highlighted; fragments assembling into 21 chromosome-length sequences. Each plays whenever it comes back into view, ends on a lasting final state, offers Replay, and shows only the final state under reduced motion or without JavaScript. Home is unchanged. The network map shows facilities and events without connecting lines, because the lines implied collaborations that are not documented. The 404 page shows a moth circling a lamp.

## Playful data cards, October 2026 (variant `insp/cards`)

Borrowed from codex-resets.com, with PostHog and Gumroad as the tasteful limit: cream paper, ink outlines, hard offset shadows, pastel fills, one yellow highlighter per page, and short factual footnotes with a light human touch. The reading is a collection drawer: each card is a specimen label on cream paper.

- Tokens (`tokens.css`, by mode, shared by every palette): `--ink-line`, `--ink-shadow`, `--card`, `--on-pastel`, `--marker` and four pastels taken from Neotropical wings. Sun (*Heliconius* yellow band) is the highlighter. Leaf (*Passiflora*) marks places and facilities. Sky (*Morpho*) marks countries and upcoming events. Rose (*Heliconius* red, softened toward the logo orange) marks pilot projects and the funding call. Caligo light now uses the cream `#FCF6EA` and the label paper `#FFFDF7`. In dark mode, cards keep a cream outline, the shadow is a dim offset print (`#4A4038`) because black would vanish on charcoal, and pastels darken to mid tones with ink text.
- Shared classes (`global.css`): `.ink-card` with tones `--sun/--leaf/--sky/--rose`. A pastel card switches every text, link and line role to ink. `--flat` drops the shadow. `.chip` is the ink pill, and `.chip--done` is the dashed pill for something that has ended. `.marker` is the highlighter. Buttons share the outline and sink into their shadow when pressed.
- The rule: an outline means a card. A hard shadow means data or something you can press. People and notes are outlined only. Lists such as priorities, principles and ways to contribute keep their hairlines. Photographs get at most a thin ink frame and never a shadow. The hero is unchanged.
- Motion: the highlighter draws once, left to right, the first time it enters the view. Buttons and linked cards press in. Nothing else moves. With reduced motion or without JavaScript, the highlighter is already drawn.
- Home: the stats row is four data cards. Members stay on cream with the highlighter. Facilities are leaf, countries sky and pilot projects rose. Each card has one footnote from the data ("In 6 countries, from Panama to Chile", "Plus 12 outside the region"). Label, number and footnote share subgrid rows, so the numbers line up. "Caligo in action" is now chronological, and each card shows how long ago or how soon it is in the visitor's calendar (`WhenChip`, `Intl.RelativeTimeFormat`, EN/ES).
- Funding call: the deadline chip is a sun pill while the call is open. Once it closes, it becomes a dashed "Closed 9 days ago" pill. The closed note now points to the planned Ecuador call instead of repeating the date.
- Join: the three routes are sun, sky and leaf cards with stamped step numbers. Language pills use the same chips.
- Pilot projects: the funding callout is rose, each pilot project is a card, the taxon is a rose chip, and the background disclosure is an ink button.
- Science: the "1,000" goal carries the highlighter. Tier and publication cards are ink cards, and the training events use the same when-chips as Home.
- About: the facility table sits in an ink frame with a leaf caption bar and one tag per instrument. The total row is gone because the paragraph above already states it.
- Not done on purpose: no tilted cards (edges must align), no dotted textures, no rounded display font, no new copy beyond footnotes drawn from existing data.
## Interactive explainers, October 2026

Inspired by Bartosz Ciechanowski (a sentence sets up one control; the figure itself shows the answer), Distill (a line that says what the reader now sees) and Explorable Explanations (direct manipulation). Each explainer teaches one idea, and the test is that a reader gets it in under ten seconds.

Shared rules, for `TierDiagram` and `FissionExplainer`:

- One panel layout (`.explorable-*` in `global.css`): a prompt phrased as a question, one native control, one result line with a reserved height (two lines; three in the fission explainer), and a round Replay button at the right of the prompt. Nothing changes height when the reader interacts.
- The autoplay drives the figure's own control, so the reader sees which control caused the change. It plays each time the figure scrolls back into view until the reader touches a control; from then on the figure stays as they left it. Replay restores the default and plays again.
- After the autoplay, one ring spreads once from the control ("your turn"). It never repeats.
- Small rewards, once each: the butterfly flaps when it is identified or its genome is complete; the chromosomes pop when the last gap closes. No loops, no confetti, no sound.
- Controls wear the cards look: an ink-outlined track, a marker-yellow thumb or pill with a hard shadow that sinks when pressed. Figure colours stay at full strength in both modes; nothing is dimmed to show state.
- Shape, letters and symbols carry every difference as well as colour. Controls are native inputs with labels, results are `<output>` elements, and each slider's `aria-valuetext` repeats the result. The control comes before Replay in the tab order.
- Without JavaScript the controls are hidden and the final state is shown. Under reduced motion there is no autoplay, cue or reward, but the controls still work.

The four explainers:

- Tier 1, barcode. Prompt: "Which species is this butterfly?" Control: a "Try another butterfly" button that cycles through four unknown specimens. The comparison frame visits every library row, ticks the bases that differ, and settles on the row with none. The idea: the same method names any specimen. A note in the figure says that 16 of about 650 bases (COI gene) are shown.
- Tier 2, resequencing. Prompt: "Where do the two populations differ?" Control: a five-stop slider (or a tap or drag along the reads). Each row of reads is one butterfly. Sites come in three kinds, marked on the slider track and above the column: `=` the same letter in all six, `≈` both letters in both populations (no help), `≠` one letter above and another below. The result gives counts ("T in 3 of 3 above, C in 3 of 3 below"). The idea: only sites where the letters split by population tell populations apart.
- Tier 3, reference genome. Prompt: "How many reads until the gaps close?" Control: a reads slider over a small seeded coverage simulation. Gaps are hatched outlines; the figure counts the pieces. The result uses the site's vocabulary: a "draft genome" with gaps, then a "chromosome-scale reference" of 21 chromosomes. The slider starts where pieces only merge from then on, and the build fails unless the count falls at every step and ends at 21.
- Science question 1, chromosome fissions (`FissionExplainer`). It spans the prose column: karyotype on the left, two questions and the result on the right, stacked when narrow. The slider runs from no fissions to 39, and its ends are labelled with the two real anchors: 21 (most *Heliconius*) and 60 (the sapho-group maximum). The toggle compares "Along the whole chromosome (butterflies and moths)" with "One centromere (most animals)". With one centromere, pieces left without it are drawn as tilted dashed outlines and counted as lost; the result labels this as simplified. Here the "your turn" ring goes to the unchosen toggle answer, because the slider has just moved by itself.
