import type { Project } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

/**
 * Structured data for a single project page: the work itself plus the trail a
 * visitor followed to reach it.
 */
export function ProjectJsonLd({ project }: { project: Project }) {
  const url = `${siteConfig.url}/work/${project.slug}`;

  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/work` },
        { "@type": "ListItem", position: 3, name: project.name, item: url },
      ],
    },
    {
      "@type": "CreativeWork",
      name: project.name,
      headline: project.summary,
      description: project.problem,
      url,
      image: `${siteConfig.url}${project.image.src}`,
      author: { "@id": `${siteConfig.url}/#person` },
      creator: { "@id": `${siteConfig.url}/#person` },
      keywords: [project.category, "B2B software", "software development"],
      sameAs: [project.liveUrl, project.repoUrl],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
