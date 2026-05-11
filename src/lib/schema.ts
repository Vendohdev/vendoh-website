// Canonical JSON-LD graph for Vendoh.
// Imported into the root layout and serialized into a single <script type="application/ld+json">
// node so Google, Bing, ChatGPT, Claude, Perplexity and Gemini can extract
// a structured knowledge graph about Vendoh from any page on the site.

export const SITE_URL = "https://www.vendoh.io";

export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vendoh",
      alternateName: ["Vendoh Limited", "Vendoh.io"],
      legalName: "Vendoh Limited",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/vendoh-logo-main.png`,
        width: 1740,
        height: 1740,
      },
      image: `${SITE_URL}/og-image.png`,
      description:
        "Africa's first voice-powered service marketplace. Nigerian-founded, Africa-focused. Find verified plumbers, electricians, makeup artists, chefs, nannies, tailors and 300+ other services through natural-language voice search in English and Nigerian Pidgin. Escrow-protected bookings, three-tier vendor verification. Launching in Lagos, Abuja and Port Harcourt ahead of a planned expansion across West, East and Southern Africa.",
      foundingDate: "2026",
      founder: {
        "@type": "Person",
        "@id": `${SITE_URL}/about#alex-nwoko`,
        name: "Alex Nwoko",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/about`,
      },
      email: "hello@vendoh.io",
      address: {
        "@type": "PostalAddress",
        addressCountry: "NG",
        addressRegion: "Lagos",
        addressLocality: "Lagos",
      },
      areaServed: [
        { "@type": "City", name: "Lagos" },
        { "@type": "City", name: "Abuja" },
        { "@type": "City", name: "Port Harcourt" },
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Continent", name: "Africa" },
      ],
      knowsLanguage: ["en-NG", "en", "pcm", "yo", "ig", "ha", "sw"],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Nigerian RC Number",
        value: "1815446",
      },
      sameAs: [
        "https://www.instagram.com/vendoh_hq/",
        "https://www.linkedin.com/company/vendoh/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "hello@vendoh.io",
          areaServed: "NG",
          availableLanguage: ["English", "Nigerian Pidgin"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Vendoh",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-NG",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Vendoh",
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      description:
        "Voice-powered service marketplace for Nigeria. Speak to book verified plumbers, electricians, makeup artists, chefs and more.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NGN",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Vendoh Voice-Powered Service Marketplace",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Nigeria" },
      serviceType: "Online service marketplace",
      category: [
        "Beauty & Grooming",
        "Home Services",
        "Artisans",
        "Auto & Transport",
        "Cleaning",
        "Food & Catering",
        "Events & Lifestyle",
        "Logistics & Errands",
        "Childcare",
        "Education & Lessons",
        "Fashion & Tailoring",
        "Business Services",
        "Health & Wellness",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vendoh service categories",
        itemListElement: [
          { "@type": "OfferCatalog", name: "Plumbing" },
          { "@type": "OfferCatalog", name: "Electrical" },
          { "@type": "OfferCatalog", name: "Makeup Artist" },
          { "@type": "OfferCatalog", name: "Catering & Private Chef" },
          { "@type": "OfferCatalog", name: "Childcare & Nanny" },
          { "@type": "OfferCatalog", name: "AC Repair" },
          { "@type": "OfferCatalog", name: "Mobile Mechanic" },
          { "@type": "OfferCatalog", name: "House Cleaning" },
          { "@type": "OfferCatalog", name: "Tailoring (Ankara)" },
          { "@type": "OfferCatalog", name: "Event Planning" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Vendoh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendoh is Africa's first voice-powered service marketplace, Nigerian-founded and Africa-focused. Clients speak naturally in English or Nigerian Pidgin to find and book verified local vendors, including plumbers, electricians, makeup artists, chefs, nannies and more, with escrow-protected payments.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Vendoh available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendoh launches first in Lagos (Lekki, Surulere, Ikeja, Victoria Island, Yaba), Abuja and Port Harcourt, with nationwide Nigeria expansion to follow. Planned African expansion markets include Accra, Nairobi, Kigali, Kampala, Dar es Salaam, Cape Town and Johannesburg.",
          },
        },
        {
          "@type": "Question",
          name: "How are Vendoh vendors verified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendoh uses a three-tier verification system. Basic vendors complete phone confirmation. Verified vendors pass NIN/BVN identity verification and have at least one 4.0+ star booking. Certified vendors hold trade credentials and have at least 10 bookings averaging 4.5 stars from five or more reviews.",
          },
        },
        {
          "@type": "Question",
          name: "Is payment on Vendoh safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All payments are escrow-protected and held by CBN-licensed payment partners. Funds release to the vendor only after the client confirms job completion. Vendoh does not itself hold client funds.",
          },
        },
        {
          "@type": "Question",
          name: "What languages does Vendoh's voice search support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vendoh's voice AI is designed around how Africans actually speak. It supports natural English and Nigerian Pidgin at launch, with roadmap support for Yoruba, Igbo, Hausa and Swahili as the platform expands across the continent.",
          },
        },
        {
          "@type": "Question",
          name: "Is Vendoh an African startup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Vendoh is a Nigerian-founded, African-native technology company. It is headquartered in Lagos, Nigeria, built by an African team for African users, and designed around the realities of African informal commerce rather than adapted from a Western marketplace template.",
          },
        },
      ],
    },
  ],
} as const;

// Helper: build a BlogPosting JSON-LD node for individual blog posts.
export function blogPostingGraph(args: {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO date
  author?: string;
  readTimeMinutes?: number;
}) {
  const { slug, title, description, datePublished, author = "Alex Nwoko", readTimeMinutes } = args;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${slug}#article`,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "en-NG",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    author: {
      "@type": "Person",
      name: author,
      url: `${SITE_URL}/about`,
    },
    ...(readTimeMinutes ? { timeRequired: `PT${readTimeMinutes}M` } : {}),
    url: `${SITE_URL}/blog/${slug}`,
  };
}
