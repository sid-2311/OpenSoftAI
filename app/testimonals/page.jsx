import TestimonialHero from "@/Compoents/Testimonail/Hero";
import TestimonialsSection from "@/Compoents/Testimonail/TestimonialsSection";

export const metadata = {
  title: "Client Testimonials | OpenSoftAI Success Stories & Reviews",
  description:
    "Explore real client testimonials and success stories about OpenSoftAI’s AI, blockchain, and software development services. See how our innovative solutions help businesses grow and succeed.",
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
    title: "Client Testimonials | See What Our Clients Say - OpenSoftAI",
    description:
      "Discover client feedback and success stories from businesses that partnered with OpenSoftAI for AI, blockchain, and software development solutions.",
    url: "https://opensoftai.com/testimonials",
    type: "website",
    images: [
      {
        url: "https://opensoftai.com/images/testimonials-banner.jpg",
        alt: "OpenSoftAI Client Testimonials Banner",
      },
    ],
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
