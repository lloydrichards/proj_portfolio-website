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
    "Product-focused TypeScript engineer building clear interfaces for complex data and workflows.",
  summary:
    "Product-focused engineer with 6+ years building React and TypeScript interfaces, data visualizations, and developer tools. I combine interaction design with frontend architecture, adapt complex products for mobile and accessibility, and build the data pipelines and shared components behind them.",
  highlights: [
    "Sole developer on an award-winning OECD data platform spanning 1100+ pages",
    "Built a validated WordPress content pipeline for IPEN and semantic-table-backed D3 charts for Swiss public health data",
    "Built open source developer tools including Effect Boxes and Stack Effect",
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
    occupationDescriptions: {
      3: `Built React and TypeScript data products with designers, researchers, and public-sector clients.

- Sole developer on the 1100+ page OECD Competitiveness Outlook Data Hub, recognized by the Swiss Viz Awards and German Design Award
- Adapted supplied key screens for mobile, keeping content readable within narrow screens and advocating for shorter mobile content
- Defined component behavior between breakpoints and checked interface decisions against WCAG requirements
- Built a themeable component library across three OECD applications, using design tokens and lint rules to keep overrides consistent`,
    },
    schemaJobTitle: "Product Frontend Engineer",
    schemaDescription:
      "Product frontend engineer building responsive, accessible React and TypeScript interfaces and shared component systems for data-rich products.",
    pdfFilename: "lloyd-richards-product-frontend-cv.pdf",
    markdownFilename: "lloyd-richards-product-frontend-cv.md",
  },
  {
    id: "data_visualization",
    slug: "data-visualization",
    label: "Data Visualization Engineer",
    pageTitle: "Data Visualization CV",
    headline:
      "Data visualization engineer building D3 charts, maps, and data products people can explore.",
    summary:
      "Data visualization engineer with 6+ years turning complex datasets into interactive charts, maps, and public-facing tools. I build D3 and React interfaces, shape source data for the frontend, and make dense information usable on mobile and with assistive technology.",
    highlights: [
      "Built award-winning OECD and public-sector data products with D3, React, and Next.js",
      "Designed and built IPEN’s WordPress content pipeline, with a validated schema and actionable errors for editors",
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
    projectDescriptions: {
      2403: "Built IPEN’s interactive plastic pollution map and a validated WordPress-to-frontend content pipeline with actionable errors for editors.",
    },
    schemaJobTitle: "Data Visualization Engineer",
    schemaDescription:
      "Data visualization engineer building D3, dashboard, mapping, analytics, and data platform interfaces from data pipeline to UI.",
    pdfFilename: "lloyd-richards-data-visualization-cv.pdf",
    markdownFilename: "lloyd-richards-data-visualization-cv.md",
  },
  {
    id: "ai_dx_platform",
    slug: "ai-dx-platform",
    label: "Developer Experience / Platform Engineer",
    pageTitle: "Developer Experience / Platform CV",
    headline:
      "TypeScript engineer building developer tools, protocol adapters, and reusable application systems.",
    summary:
      "Developer tooling and platform engineer with 6+ years building TypeScript products. I rebuilt Effect’s McpServer around versioned protocol adapters, including the stateless 2026-07-28 runtime. My open source work also includes Effect Boxes for terminal layouts and Stack Effect for application scaffolding.",
    highlights: [
      "Rebuilt Effect’s McpServer with versioned protocol adapters, including the stateless 2026-07-28 runtime",
      "Built Effect Boxes, a composable terminal layout library, and Stack Effect, an application scaffolding CLI",
      "Designed the IPEN WordPress content schema and a validated pipeline that reports actionable errors to editors",
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
    featuredProjectIds: [2600, 2403, 2401, 2601],
    projectDescriptions: {
      2600: "Built an open source library for composable terminal layouts, used in the Stack Effect scaffolding CLI.",
      2403: "Designed IPEN’s WordPress content schema and built a validated pipeline for the frontend with actionable errors for editors.",
    },
    schemaJobTitle: "Developer Experience Engineer",
    schemaDescription:
      "TypeScript engineer building developer tools, versioned MCP protocol adapters, terminal interfaces, and content pipelines.",
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
