type PersonJsonLdProps = {
  jobTitle?: string;
  description?: string;
  disambiguatingDescription?: string;
  knowsAbout?: readonly string[];
};

export const PersonJsonLd = ({
  jobTitle = "Fullstack Engineer",
  description = "Award-winning Fullstack Engineer recognized with Swiss Viz Awards (Silver, 2025) and German Design Award (2026) for interactive data platforms built for OECD and Fortune 500 clients. Specializes in TypeScript, React, Next.js, and D3.js with end-to-end ownership from data architecture through polished UI. Known for technical leadership, mentorship, and delivering complex, production-grade applications across public sector and enterprise environments.",
  disambiguatingDescription = "Multidisciplinary engineer combining interaction design, data visualization, and fullstack development. Proven ability to operate as sole technical lead on large-scale projects (1100+ page data hubs) as well as collaborate within cross-functional teams.",
  knowsAbout = [
    "TypeScript",
    "React",
    "Next.js",
    "D3.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Data Visualization",
    "Design Systems",
    "GraphQL",
  ],
}: PersonJsonLdProps = {}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Lloyd Richards",
      url: "https://lloydrichards.dev",
      email: "lloyd.d.richards@gmail.com",
      jobTitle,
      description,
      disambiguatingDescription,
      knowsAbout,
      award: ["Swiss Viz Awards 2025 - Silver", "German Design Award 2026"],
      sameAs: ["https://github.com/lloydrichards", "https://lloydrichards.dev"],
      worksFor: {
        "@type": "Organization",
        name: "Interactive Things",
        url: "https://www.interactivethings.com",
      },
    },
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
};
