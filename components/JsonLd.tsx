import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { siteConfig } from "@/lib/site";

/**
 * Structured data for the whole site. It describes the site that actually
 * exists: a person who builds business software, the services offered and the
 * projects in the portfolio.
 */
export default function JsonLd() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      email: `mailto:${siteConfig.email}`,
      knowsAbout: SERVICES.map((service) => service.title),
      sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `${siteConfig.name} | ${siteConfig.role}`,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#services`,
      name: "Software development for B2B businesses",
      description:
        "Business software, customer applications, workflow automation and AI assisted products, built as fixed price projects.",
      provider: { "@id": `${siteConfig.url}/#person` },
      serviceType: SERVICES.map((service) => service.title),
      areaServed: "Worldwide",
    },
    {
      "@type": "ItemList",
      "@id": `${siteConfig.url}/work#projects`,
      name: "Software projects",
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        description: project.summary,
        url: `${siteConfig.url}/work/${project.slug}`,
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
