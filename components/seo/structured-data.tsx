import { FAQS, SERVICES, SITE, SITE_URL } from "@/lib/site";

/**
 * JSON-LD entity graph. Answer engines and rich results both lean on this to
 * work out who this business is, who runs it, what it sells and where.
 * Everything here must match what is visible on the page.
 */
export default function StructuredData() {
  const organizationId = `${SITE_URL}/#organization`;
  const founderId = `${SITE_URL}/#founder`;
  const websiteId = `${SITE_URL}/#website`;

  const graph = [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": organizationId,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      email: SITE.email,
      description: SITE.description,
      slogan: SITE.tagline,
      founder: { "@id": founderId },
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressRegion: SITE.region,
          addressCountry: "IN",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: SITE.region,
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "State", name: "Kerala" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Ayurveda marketing",
        "Patient acquisition",
        "Meta advertising for healthcare",
        "Google Ads for clinics",
        "Local SEO for clinics",
        "WhatsApp automation",
        "Malayalam content marketing",
      ],
      sameAs: [SITE.social.instagram, SITE.social.linkedin, SITE.social.youtube],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ayurveda marketing services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            serviceType: service.title,
            provider: { "@id": organizationId },
            areaServed: { "@type": "Country", name: "India" },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: SITE.founder.name,
      jobTitle: SITE.founder.role,
      description: SITE.founder.bio,
      worksFor: { "@id": organizationId },
      knowsAbout: [
        "Ayurveda marketing",
        "Patient acquisition",
        "Clinic growth strategy",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: SITE.region,
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.shortDescription,
      publisher: { "@id": organizationId },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      isPartOf: { "@id": websiteId },
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Content is authored by us, not user input — no injection surface here.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
