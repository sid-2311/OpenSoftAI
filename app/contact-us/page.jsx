import ClientsPage from "@/Compoents/contact-us/Client";
import ContactSection from "@/Compoents/contact-us/ContactSection";
import ConsultationPage from "@/Compoents/contact-us/CTA";

export const metadata = {
  title: "Contact OpenSoftAI — Get in Touch with Our Team",
  description:"Have a question or want to start a project? Reach out to OpenSoftAI today. We're here to help you with AI, software solutions, and custom development needs.",
  keywords: [
    "Contact OpenSoftAI",
    "OpenSoftAI contact",
    "AI development consultation",
    "software development company India",
    "blockchain development company",
    "hire AI developers",
    "custom software consultation",
  ],
  openGraph: {
    title: "Contact OpenSoftAI — Get in Touch with Our Team",
    description:
      "Reach out to OpenSoftAI for custom AI, blockchain, and software solutions. Let's collaborate to bring your ideas to life with innovation and technology.",
    url: "https://opensoftai.com/contact-us",
    type: "website",
    images: [
      {
        url: "https://opensoftai.com/watercolor floral elements hand painted flowers design.jpg",
        alt: "Contact OpenSoftAI Banner",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://opensoftai.com/contact-us",
  },
};

export default function Contact() {
  return (
    <>
      <ContactSection />
      <ConsultationPage />
      <ClientsPage />
    </>
  );
}
