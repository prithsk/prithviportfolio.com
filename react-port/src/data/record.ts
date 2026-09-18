/**
 * Single source of truth for every claim on this site.
 *
 * House rule: if an entry asserts something verifiable — a patent, a paper, a
 * broadcast, a number — it carries the identifier and the link to the primary
 * source. Anything that cannot be sourced is written as a plain description,
 * not as a metric.
 */

export const profile = {
  name: 'Prithvi Sairaj Krishnan',
  initials: 'PK',
  role: 'Electrical & Computer Engineering',
  school: 'The University of Texas at Austin',
  degree: 'B.S. Electrical & Computer Engineering, minor in Business Foundations',
  graduation: 'December 2028',
  location: 'Austin, Texas',
  /** The one-sentence claim the whole page exists to support. */
  statement:
    'I build machine-learning systems and put them on the public record.',
  /** Expanded for the About block. Written flat: no adjectives that a reader cannot check. */
  summary: [
    'At 18 I was granted a US patent for a convolutional network that reads chest radiographs for pneumonia. The same year, three papers I wrote went out through IEEE and Harvard’s Journal of Emerging Investigators.',
    'Between those, I taught 225 children to program, ran the nonprofit that did it, and built websites for the small businesses down the road. I am looking for a Summer 2027 internship in machine learning or software engineering.',
  ],
  seeking: 'Summer 2027 — machine learning, applied research, software engineering',
} as const

export const links = {
  email: 'prithvi.krishnan@utexas.edu',
  mailto: 'mailto:prithvi.krishnan@utexas.edu',
  phone: '512-796-8547',
  tel: 'tel:+15127968547',
  linkedin: 'https://www.linkedin.com/in/prithvi-sairaj-krishnan-262538279/',
  github: 'https://github.com/prithsk',
  resume: '/Prithvi-Krishnan-Resume.pdf',
  site: 'https://www.prithviportfolio.com/',
} as const

/* ------------------------------------------------------------------ */
/* The record: work with a public identifier attached.                 */
/* ------------------------------------------------------------------ */

export type RecordEntry = {
  id: string
  /** The citable identifier. This is the thing that makes the entry checkable. */
  ident: string
  identLabel: string
  title: string
  venue: string
  year: string
  href: string
  /** Two or three sentences. What it does, how, and what came of it. */
  body: string
  /** Only measurements that appear in the source document. */
  figures?: { value: string; label: string }[]
  role?: string
  span?: string
  stack?: string[]
  aside?: string
}

export const record: RecordEntry[] = [
  {
    id: 'patent',
    ident: 'US 12,190,518 B1',
    identLabel: 'United States patent',
    title: 'Image-processing pneumonia detection',
    venue: 'United States Patent and Trademark Office',
    year: '2025',
    href: 'https://patents.google.com/patent/US12190518B1/en',
    body:
      'A convolutional network that reads a chest radiograph and reports whether it shows pneumonia. I trained it in PyTorch, filed on the architecture, and the patent was granted while I was eighteen. The work was written up for IEEE Xplore, shown at science fair, and picked up by three inventor podcasts including Inventors Helping Inventors.',
    figures: [
      { value: '99%', label: 'detection accuracy' },
      { value: '18', label: 'age at grant' },
    ],
    role: 'Sole inventor',
    span: 'May 2023 — Jan 2025',
    stack: ['PyTorch', 'Python', 'CNN'],
    aside:
      'A second, smaller model built with students from Berkeley, Princeton and Harvard during the Inspirit AI internship reached 95%.',
  },
  {
    id: 'ieee-isncc',
    ident: 'IEEE 10759009',
    identLabel: 'IEEE Xplore document',
    title: 'Pneumonia detection presented to the network research community',
    venue: 'IEEE International Symposium on Networks, Computers and Communications',
    year: '2024',
    href: 'https://ieeexplore.ieee.org/document/10759009/citations?tabFilter=papers#citations',
    body:
      'I presented the detector and its training method at ISNCC 2024 and answered for it in front of the room. The paper is indexed on IEEE Xplore and has been cited since.',
    role: 'First author',
    stack: ['PyTorch', 'Medical imaging'],
  },
  {
    id: 'ieee-atv',
    ident: 'IEEE 10924990',
    identLabel: 'IEEE Xplore document',
    title: 'Long-term effects of autonomous vehicles on transportation',
    venue: 'IEEE Autonomous and Trusted Vehicles Conference',
    year: '2024',
    href: 'https://ieeexplore.ieee.org/document/10924990',
    body:
      'A modelling study, written in C++, of what happens to urban planning, traffic patterns and transport access as autonomous vehicles reach scale. It asks which of the promised effects survive contact with the infrastructure we already have.',
    role: 'First author',
    stack: ['C++', 'Simulation'],
  },
  {
    id: 'jei',
    ident: 'JEI 24-251',
    identLabel: 'Journal of Emerging Investigators',
    title: 'Predicting the cost of a medical procedure',
    venue: 'Harvard’s Journal of Emerging Investigators',
    year: '2024',
    href: 'https://emerginginvestigators.org/articles/24-251',
    body:
      'A regression model that estimates what a medical procedure will cost a patient, wrapped in a web app so the estimate is something a person can actually use. Built over a one-to-one research internship with Vivek Shankar, a senior ML engineer at YouTube, and taken through the full development lifecycle before publication.',
    role: 'First author',
    span: 'May 2023 — Jan 2025',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
  },
]

/** The live deployment of the JEI model. Linked from that entry. */
export const demo = {
  href: 'https://insurance-premium-predictor-pt.streamlit.app/',
  label: 'Run the cost model',
}

/* ------------------------------------------------------------------ */
/* Employment                                                          */
/* ------------------------------------------------------------------ */

export type Post = {
  org: string
  title: string
  span: string
  current?: boolean
  body: string
  points: string[]
  stack?: string[]
}

export const posts: Post[] = [
  {
    org: 'UT Austin · Dell Medical School',
    title: 'Undergraduate Research Assistant',
    span: 'Mar 2026 — present',
    current: true,
    body:
      'Robustness testing of Merlin, Stanford’s 3D CT vision-language foundation model, in Dr. John Virostko’s group. Merlin does phenotype classification across 1,692 conditions, five-year risk prediction and report generation; my job is to find where it breaks.',
    points: [
      'Built an edge-case suite across six categories, scored on cosine similarity, logit drift, KL divergence, top-3 rank retention, entropy and confidence gap',
      'Found the language channel has no measurable effect on phenotype output: across 15 text variants — wrong, empty, negated, adversarial, out-of-domain, non-English — logit drift and KL stayed at zero and top-3 rank held at 3/3, while image–text cosine similarity swung from 0.39 to −0.07',
      'Ran a Rician-noise sweep at 15 sigma levels × 10 Monte Carlo seeds (150 inferences); top-1 accuracy holds to σ≈0.05 and collapses by σ≈0.10, with top-5 surviving to σ≈0.15',
    ],
    stack: ['PyTorch', 'Python', '3D CT', 'NIfTI'],
  },
  {
    org: 'Deep24 Builder Fellowship',
    title: 'Builder Fellow',
    span: 'May — Aug 2026',
    body:
      'Built LedgrAI, an AI personal-finance coach for first-generation earners — people whose parents had no savings, investments or credit history to learn from, and who every existing budgeting app assumes already understand budgeting.',
    points: [
      'Connects a bank through Plaid, reads 30 days of transactions and scores them as a 0–100 “Money Pulse”',
      'Writes a short Sunday brief and, when a paycheck lands, generates a spending plan in dollars from real bills and real history',
      'Solo build, React Native on Expo, scoped from PRD to App Store submission in four weeks',
    ],
    stack: ['React Native', 'Expo', 'Plaid', 'iOS'],
  },
  {
    org: 'The Global Career Accelerator',
    title: 'Coding for Data Intern',
    span: 'Jan 2026 — present',
    current: true,
    body:
      'Data and product analytics projects run against real records from Intel, OpenAI and the Recording Academy, with certification at each stage.',
    points: [
      'Query, clean and read datasets drawn from YouTube, DoorDash, the NBA, Lyft and TikTok',
      'Turn the results into product recommendations rather than charts',
    ],
    stack: ['SQL', 'Python', 'Tableau', 'R'],
  },
  {
    org: 'Hey, Blue!',
    title: 'Web Application Engineering Intern',
    span: 'Jul 2024 — Aug 2025',
    body:
      'Hey, Blue! builds tools that get communities and police officers talking to each other. I worked the full stack of the product.',
    points: [
      'Built application features end to end in Angular',
      'Extended backend infrastructure and API endpoints, and reworked user authentication',
      'Delivered against technical requirements set with Walmart and Panasonic',
    ],
    stack: ['Angular', 'TypeScript', 'REST APIs'],
  },
  {
    org: 'Mathnasium',
    title: 'Mathematics Instructor',
    span: 'Jan 2024 — Jun 2025',
    body:
      'One-to-one and small-group mathematics teaching from first grade through eleventh.',
    points: [
      'Taught 200 students across ten grade levels',
      'Wrote the progress notes parents read each week',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Things founded                                                      */
/* ------------------------------------------------------------------ */

export type Venture = {
  name: string
  kind: string
  span: string
  body: string
  figures?: { value: string; label: string }[]
  proof?: string
}

export const ventures: Venture[] = [
  {
    name: 'Trail2Tech',
    kind: 'Nonprofit · founder and director',
    span: 'Jan 2023 — Aug 2025',
    body:
      'A coding and AI programme for children in first through sixth grade. I wrote the curriculum, ran the day-to-day, and took it to campuses outside Austin.',
    figures: [{ value: '225', label: 'students taught' }],
  },
  {
    name: 'Code Club Austin',
    kind: 'Nonprofit · founder and director',
    span: 'Jan 2023 — Aug 2025',
    body:
      'The Austin campus of the same programme. Python and Java for children, taught in a room, with the parents in the loop. KUT covered it on air.',
    proof: 'Featured on KUT Austin',
  },
  {
    name: 'Dev0ne Design',
    kind: 'Web development studio · founder',
    span: 'Jan 2023 — Aug 2025',
    body:
      'Custom websites for small businesses around Austin, taken from first conversation through design, build and deployment.',
  },
]

/* ------------------------------------------------------------------ */
/* Honours                                                             */
/* ------------------------------------------------------------------ */

export type Honor = {
  title: string
  year: string
  note: string
  weight?: 'major'
}

export const honors: Honor[] = [
  {
    title: 'USACO Gold Division',
    year: '2023',
    note: 'Promoted to Gold in the USA Computing Olympiad, out of roughly 4,000 competitors.',
    weight: 'major',
  },
  {
    title: 'Apple Swift Student Challenge',
    year: '2023',
    note: 'Winner. Apple selects entries worldwide on the strength of a playground built in three weeks.',
    weight: 'major',
  },
  {
    title: 'IEEE Technical Programme Committee reviewer',
    year: '2025',
    note: 'Invited to review submissions for IEEE Xplore conferences, including CICN 2025.',
    weight: 'major',
  },
  {
    title: 'AIME qualifier',
    year: '2023',
    note: 'Qualified for the American Invitational Mathematics Examination through the 2023 AMC.',
  },
  {
    title: 'Stanford International Logic Olympiad',
    year: '2023',
    note: 'Semi-finalist.',
  },
  {
    title: 'President’s Volunteer Service Award, Gold',
    year: '2022 — 2025',
    note: 'Received twice.',
  },
  {
    title: 'Jane Street probability puzzle',
    year: '2025',
    note: 'Solved by constructing the exact Markov chain rather than simulating it.',
  },
]

/* ------------------------------------------------------------------ */
/* Service                                                             */
/* ------------------------------------------------------------------ */

export const eagle = {
  title: 'Eagle Scout service project',
  org: 'Boy Scouts of America · project leader',
  span: 'Jul 2022 — Feb 2023',
  body:
    'Trail signage for a Cedar Park nature preserve: I scoped the work with Cedar Park Parks & Recreation so it met city guidelines, got Lowe’s to fund the whole thing, and ran the build.',
  figures: [
    { value: '20+', label: 'volunteers led' },
    { value: '5', label: 'miles of trail' },
    { value: '250+', label: 'service hours' },
  ],
}

/* ------------------------------------------------------------------ */
/* Capability                                                          */
/* ------------------------------------------------------------------ */

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: [
      'Python', 'Java', 'C++', 'C', 'TypeScript', 'JavaScript', 'SQL', 'R',
      'C#', 'Rust', 'ARM Assembly', 'LC-3', 'HTML', 'CSS',
    ],
  },
  {
    group: 'Machine learning',
    items: ['PyTorch', 'CNNs', 'Model evaluation', 'Prompt engineering', 'Applied research'],
  },
  {
    group: 'Building',
    items: ['React', 'Next.js', 'Angular', 'FastAPI', 'REST APIs', 'Git', 'AWS', 'Tableau'],
  },
  {
    group: 'Practice',
    items: ['SDLC', 'Agile', 'Product management', 'Technical writing', 'Curriculum design'],
  },
]

export const languages = ['English', 'Tamil', 'Spanish', 'Mandarin']

export const longHaul = [
  { name: 'Karate', detail: 'Black belt. Eleven years.' },
  { name: 'Scouting', detail: 'Eagle Scout. Eleven years.' },
]

/* ------------------------------------------------------------------ */
/* Coursework                                                          */
/* ------------------------------------------------------------------ */

export const coursework = [
  'Circuit Theory',
  'Intro to Embedded Systems',
  'Software Design & Implementation',
  'Application Development',
  'Intro to Computing',
  'Linear Algebra',
  'Multivariable Calculus',
  'Differential Equations',
  'Management Information Systems',
  'IB Computer Science HL',
]

export const gpa = '3.1'

/* ------------------------------------------------------------------ */
/* Counts used in the masthead. Each one is derivable from the entries */
/* above, so it cannot drift out of sync with them.                    */
/* ------------------------------------------------------------------ */

export const tally = [
  { value: '1', label: 'US patent' },
  { value: '3', label: 'papers published' },
  { value: '225', label: 'students taught' },
  { value: '3', label: 'organisations founded' },
]
