export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Tanveer Abbas",
    url: "https://muhammadtanveerabbas.vercel.app/",
    email: "muhammadtanveerabbas.contact@gmail.com",
    jobTitle: "SaaS MVP Builder",
    description:
      "I help early stage SaaS founders validate ideas and build MVPs in 2-3 weeks",
    knowsAbout: [
      "SaaS Development",
      "MVP Building",
      "Startup Consulting",
      "Web Development",
    ],
    sameAs: [
      "https://twitter.com/m_tanveerabbas",
      "https://linkedin.com/in/muhammadtanveerabbas",
      "https://github.com/muhammadtanveerabbas",
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
