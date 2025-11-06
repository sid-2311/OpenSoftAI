import TestimonialHero from "@/Compoents/Testimonail/Hero";
import TestimonialsSection from "@/Compoents/Testimonail/TestimonialsSection";

export const metadata = {
  title: "OpenSoftAI Testimonials – Client Success Stories from Jaipur’s AI & Blockchain Innovator",
  description:
    "Discover how OpenSoftAI’s AI‑, Blockchain‑ and custom software solutions have transformed businesses. Read real client testimonials from our Jaipur‑based team.",
  keywords: [
    "OpenSoftAI testimonials",
    "client reviews",
    "OpenSoftAI success stories",
    "customer feedback",
    "AI development reviews",
    "software company testimonials",
    "OpenSoftAI projects",
    "blockchain development reviews",
  ],
  openGraph: {
    title: "OpenSoftAI Testimonials – Client Success Stories from Jaipur’s AI & Blockchain Innovator",
    description:
      "Discover how OpenSoftAI’s AI‑, Blockchain‑ and custom software solutions have transformed businesses. Read real client testimonials from our Jaipur‑based team.",
    url: "https://opensoftai.com/testimonials",
    type: "website",
    // images: [
    //   {
    //     url: "https://opensoftai.com/images/testimonials-banner.jpg",
    //     alt: "OpenSoftAI Client Testimonials Banner",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://opensoftai.com/testimonals",
  },
};

export default function Testimonals() {
  return (
    <>
      <TestimonialHero />
      <TestimonialsSection />
    </>
  );
}
