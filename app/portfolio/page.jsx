import Portfolio from "@/Compoents/Portfolio/Portfolio";

export const metadata = {
  title: "Explore Our AI & Software Project Portfolio | Opensoft AI",
  description:
    "Discover Opensoft AI’s successful AI and automation projects. See how we build intelligent, high-performance software solutions that drive business growth.",
  keywords: [
    "web development company",
    "blockchain development",
    "mobile app development",
    "AI solutions",
    "custom software",
    "ERP systems",
    "e-commerce development",
    "healthcare software",
    "React Native",
    "Next.js",
    "OpenSoftAI",
  ],
  authors: [{ name: "OpenSoftAI" }],
  robots: "index, follow",
  openGraph: {
    title: "Explore Our AI & Software Project Portfolio | Opensoft AI",
    description:
      "Discover Opensoft AI’s successful AI and automation projects. See how we build intelligent, high-performance software solutions that drive business growth.",
    type: "website",
    url: "https://opensoftai.com/portfolio",
    images: ["/opensoftai-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSoftAI - Web Development & Blockchain Experts",
    description:
      "50+ successful projects in web development, blockchain, AI, and mobile apps. Your trusted IT partner.",
    images: ["/opensoftai-og-image.jpg"],
  },
  alternates: {
    canonical: "https://opensoftai.com/portfolio",
  },
  viewport: "width=device-width, initial-scale=1.0",
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "OpenSoftAI",
      url: "https://opensoftai.com/portfolio",
      logo: "https://opensoftai.com/logo.png",
      description:
        "Leading Web Development, Blockchain & AI Solutions Company",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9256497999",
        contactType: "customer service",
      },
      sameAs: [],
    }),
  },
};


export default function PortFolio(){
  return(
    <>
    <Portfolio/>
    </>
  )
}