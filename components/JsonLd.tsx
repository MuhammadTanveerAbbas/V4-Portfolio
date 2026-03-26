export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Tanveer Abbas",
    url: "https://muhammadtanveerabbas.vercel.app",
    image: "https://muhammadtanveerabbas.vercel.app/OG.png",
    sameAs: [
      "https://linkedin.com/in/muhammadtanveerabbas",   // ⚠️ Confirm URL — see setup.md
      "https://github.com/muhammadtanveerabbas",
      "https://twitter.com/m_tanveerabbas",              // ⚠️ Confirm handle — see setup.md
      "https://dev.to/muhammadtanveerabbas",
    ],
    jobTitle: "SaaS Developer & MVP Builder",
    description:
      "Muhammad Tanveer Abbas is a SaaS Developer helping early-stage founders build and launch MVPs in 2–3 weeks.",
    knowsAbout: [
      "SaaS Development",
      "MVP Building",
      "Next.js",
      "TypeScript",
      "Startup Product Development",
      "Idea Validation",
    ],
    worksFor: {
      "@type": "Organization",
      name: "The MVP Guy",
      url: "https://themvpguy.vercel.app",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "muhammadtanveerabbas.contact@gmail.com",
      contactType: "Business Inquiries",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
