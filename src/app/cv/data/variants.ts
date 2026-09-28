import { Array as A, type Option, pipe } from "effect";

export type CvVariantId =
  | "general"
  | "product_frontend"
  | "design_engineering"
  | "data_visualization"
  | "ai_dx_platform";

export type CvVariant = {
  id: CvVariantId;
  slug: string;
  label: string;
  pageTitle: string;
  headline: string;
  summary: string;
  highlights: readonly string[];
  skillOrder: readonly string[];
  featuredProjectIds: readonly number[];
  featuredOccupationIds?: readonly number[];
  occupationDescriptions?: Readonly<Record<number, string>>;
  projectDescriptions?: Readonly<Record<number, string>>;
  schemaJobTitle: string;
  schemaDescription: string;
  pdfFilename: string;
  pdfPageFormat?: "A4";
  markdownFilename: string;
};

export const defaultCvVariant = {
  id: "general",
  slug: "general",
  label: "General CV",
  pageTitle: "Curriculum Vitae",
  headline:
    "Multidisciplinary fullstack engineer building data-rich web applications.",
  summary:
    "Multidisciplinary Fullstack Engineer with 6+ years of experience building award-winning, data-rich web applications for public sector and Fortune 500 clients. Background in interaction design and data visualization, working end-to-end across data pipelines, component libraries, and production infrastructure.",
  highlights: [
    "Award-winning work across interactive data platforms",
    "End-to-end ownership from data architecture through D3 visualizations and CMS-driven sites",
    "Experienced in cross-functional collaboration with designers, researchers, and stakeholders",
  ],
  skillOrder: [
    "TypeScript",
    "React",
    "Next.js",
    "D3.js",
    "Storybook",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
    "Data Pipelines",
    "Data Visualization",
    "Design Systems",
    "Accessibility (WCAG)",
    "Figma",
  ],
  featuredProjectIds: [2601, 2600, 2403, 2402, 2401, 2400],
  schemaJobTitle: "Fullstack Engineer",
  schemaDescription:
    "Product-focused TypeScript and React engineer building responsive interfaces, data visualizations, shared component systems, and developer tools.",
  pdfFilename: "lloyd-richards-cv.pdf",
  markdownFilename: "lloyd-richards-cv.md",
} as const satisfies CvVariant;

export const cvVariants = [
  {
    id: "design_engineering",
    slug: "design-engineering",
    label: "Design Engineer",
    pageTitle: "Design Engineer CV",
    headline:
      "Design engineer turning complex data and product workflows into clear React interfaces.",
    summary:
      "Design engineer with 6+ years building data-rich web products. I turn supplied key screens into responsive, accessible flows by defining how components behave between breakpoints and advocating for mobile-first choices. I build React and TypeScript component systems that stay consistent across products.",
    highlights: [
      "Defined responsive behavior between key screens and checked interface decisions against WCAG requirements",
      "Built the OECD Competitiveness Data Hub, then developed a shared, themeable component system for a second policy platform",
      "Built charts with semantic HTML tables and D3 SVG, plus shared UI components, for Switzerland's Cancer Monitoring Dashboard",
    ],
    skillOrder: [
      "Interaction Design",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Design Systems",
      "TypeScript",
      "React",
      "Next.js",
      "D3.js",
      "Storybook",
      "Figma",
      "Tailwind",
      "Node.js",
    ],
    featuredProjectIds: [2401, 2601, 2402, 2400],
    projectDescriptions: {
      2401: "Built an interactive policy data hub with responsive D3 visualizations and an interface spanning 1100+ pages.",
      2601: "Extended the OECD interface into a second platform through semantic design tokens and shared components while preserving the first application.",
      2402: "Built semantic-table-backed D3 charts for public health data, balancing dense information with accessible navigation.",
      2400: "Built a local-time conference schedule and a submission and approval flow for attendee-led sessions.",
    },
    occupationDescriptions: {
      3: `Build interactive data products for public-sector and enterprise clients, working across frontend architecture, data, and UI with designers and researchers.

- Sole developer on the 1100+ page OECD Competitiveness Outlook Data Hub, recognized by the Swiss Viz Awards and German Design Award
- Defined responsive component behavior between supplied key screens, advocated for mobile-first layouts, and checked decisions against WCAG requirements
- Built a shared, themeable component library used across three OECD applications; advocated for design tokens and lint rules to keep overrides intentional
- Developed semantic-table-backed D3 charts for Switzerland's Cancer Monitoring Dashboard and mentored an intern through pairing and code review`,
      6: `Owned design and development of digital products for an IoT beekeeping platform serving 500 users and 10,000 connected hives.

- Built a cross-platform Flutter app to replace separate Swift and Kotlin apps, reducing feature delivery time from months to weeks
- Designed dashboards for beekeepers and internal research teams using daily sensor data
- Mentored a mobile developer while iterating on the app's UI and backend`,
      7: `First design-focused hire. Audited the web, Swift, and Kotlin apps and created the company's first design system to bring their UI patterns together. Worked with developers to implement consistent components.`,
      9: `Prototyped data interactions and developed visualizations for client-facing dashboards in collaboration with designers and engineers.`,
      14: `Ran an independent ecological design practice. Managed 26 projects from client brief through design and construction, and created visual plans to explain multi-year work to clients.`,
    },
    schemaJobTitle: "Design Engineer",
    schemaDescription:
      "Design engineer combining interaction design, React, TypeScript, accessible interfaces, and reusable component systems for complex web products.",
    pdfFilename: "lloyd-richards-design-engineering-cv.pdf",
    pdfPageFormat: "A4",
    markdownFilename: "lloyd-richards-design-engineering-cv.md",
  },
  {
    id: "product_frontend",
    slug: "product-frontend",
    label: "Product Frontend / Design Engineer",
    pageTitle: "Product Frontend CV",
    headline:
      "Product frontend engineer building responsive React interfaces for complex data and user workflows.",
    summary:
      "Product frontend engineer with 6+ years building React and TypeScript applications for data-heavy products. I turn supplied key screens into usable mobile layouts, decide how components behave between breakpoints, and build shared systems that keep interfaces accessible and consistent.",
    highlights: [
      "Sole developer on a 1100+ page OECD data platform recognized by Swiss Viz Awards and German Design Award",
      "Adapted key screens for mobile so content fit narrow viewports, and advocated for shorter mobile content",
      "Built a shared, themeable component system for OECD applications and checked UI decisions against WCAG requirements",
    ],
    skillOrder: [
      "TypeScript",
      "React",
      "Next.js",
      "Design Systems",
      "Storybook",
      "Tailwind",
      "D3.js",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
    ],
    featuredProjectIds: [2401, 2402, 2601, 2400],
    schemaJobTitle: "Product Frontend Engineer",
    schemaDescription:
      "Fullstack product engineer specializing in React, TypeScript, Next.js, design systems, frontend architecture, and polished data-rich user interfaces.",
    pdfFilename: "lloyd-richards-product-frontend-cv.pdf",
    markdownFilename: "lloyd-richards-product-frontend-cv.md",
  },
  {
    id: "data_visualization",
    slug: "data-visualization",
    label: "Data Visualization / Analytics Engineer",
    pageTitle: "Data Visualization CV",
    headline:
      "Data visualization engineer building award-winning D3, dashboard, and analytics platforms from data pipeline to UI.",
    summary:
      "Data visualization engineer with a fullstack foundation, building dashboards, maps, and analytics platforms that turn complex datasets into usable interfaces. My work spans D3 interactions, TypeScript data pipelines, PostgreSQL and Snowflake-backed products, and award-winning public-sector data platforms.",
    highlights: [
      "Built award-winning OECD and public-sector data products with D3, React, and Next.js",
      "Designed data pipelines that convert unstructured source material into structured datasets for visualization",
      "Organizes Data Visualization Zurich Meetup, a 2300+ member community",
    ],
    skillOrder: [
      "D3.js",
      "Data Visualization",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Snowflake",
      "Data Pipelines",
      "GraphQL",
      "REST APIs",
      "Design Systems",
    ],
    featuredProjectIds: [2401, 2402, 2403, 2201],
    schemaJobTitle: "Data Visualization Engineer",
    schemaDescription:
      "Data visualization engineer building D3, dashboard, mapping, analytics, and data platform interfaces from data pipeline to UI.",
    pdfFilename: "lloyd-richards-data-visualization-cv.pdf",
    markdownFilename: "lloyd-richards-data-visualization-cv.md",
  },
  {
    id: "ai_dx_platform",
    slug: "ai-dx-platform",
    label: "AI / DX / Platform Engineer",
    pageTitle: "AI DX Platform CV",
    headline:
      "Fullstack engineer with a design systems and developer tooling background, building structured, production-grade web platforms.",
    summary:
      "Fullstack engineer focused on typed systems, reusable architecture, and developer-facing product quality. I bring a design systems background, strong TypeScript practice, production platform delivery, and practical experience turning messy content and workflows into structured, maintainable web systems.",
    highlights: [
      "Built Effect Boxes, a functional terminal layout library for composable developer-facing interfaces",
      "Designed reusable architecture and shared component systems across production applications",
      "Ships fullstack platforms with TypeScript, React, Next.js, Node.js, CI/CD, Docker, and cloud deployment tooling",
    ],
    skillOrder: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Effect",
      "Developer Tooling",
      "Design Systems",
      "PostgreSQL",
      "CI/CD",
      "Docker",
      "Terraform",
      "Kubernetes",
      "Vercel",
    ],
    featuredProjectIds: [2600, 2401, 2400, 2601],
    schemaJobTitle: "AI DX Platform Engineer",
    schemaDescription:
      "Fullstack engineer with a design systems and developer tooling background, building typed, reusable, production-grade web platforms.",
    pdfFilename: "lloyd-richards-ai-dx-platform-cv.pdf",
    markdownFilename: "lloyd-richards-ai-dx-platform-cv.md",
  },
] as const satisfies readonly CvVariant[];

export const getCvVariantBySlug = (slug: string): Option.Option<CvVariant> =>
  pipe(
    cvVariants,
    A.findFirst((variant) => variant.slug === slug),
  );

export const generateCvVariantStaticParams = () =>
  pipe(
    cvVariants,
    A.map((variant) => ({ variant: variant.slug })),
  );
