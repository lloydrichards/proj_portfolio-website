import { Array as A, type Option, pipe } from "effect";

export type CvVariantId =
  | "general"
  | "product_frontend"
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
  schemaJobTitle: string;
  schemaDescription: string;
  pdfFilename: string;
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
    "Web Components",
    "Node.js",
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "Snowflake",
    "Docker",
    "CI/CD",
    "Terraform",
    "Kubernetes",
    "Vercel",
    "Data Visualization",
    "Design Systems",
    "Flutter",
    "Figma",
  ],
  featuredProjectIds: [2601, 2600, 2403, 2402, 2401, 2400],
  schemaJobTitle: "Fullstack Engineer",
  schemaDescription:
    "Award-winning Fullstack Engineer specializing in TypeScript, React, Next.js, and D3.js with end-to-end ownership from data architecture through polished UI.",
  pdfFilename: "lloyd-richards-cv.pdf",
  markdownFilename: "lloyd-richards-cv.md",
} as const satisfies CvVariant;

export const cvVariants = [
  {
    id: "product_frontend",
    slug: "product-frontend",
    label: "Product Frontend / Design Engineer",
    pageTitle: "Product Frontend CV",
    headline:
      "Fullstack product engineer specializing in React, TypeScript, design systems, and polished data-rich interfaces.",
    summary:
      "Fullstack product engineer with 6+ years of experience shipping React, TypeScript, and Next.js applications where interface quality, component architecture, and product clarity matter. I bring an interaction design background, production fullstack delivery, and hands-on ownership across award-winning public-sector and enterprise data products.",
    highlights: [
      "Sole developer on a 1100+ page OECD data platform recognized by Swiss Viz Awards and German Design Award",
      "Built shared, themeable component libraries across OECD applications",
      "Collaborated with designers, researchers, clients, and stakeholders while mentoring through pairing and code review",
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
