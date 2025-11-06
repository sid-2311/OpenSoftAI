import ClientsPage from "@/Compoents/contact-us/Client";
import ContactSection from "@/Compoents/contact-us/ContactSection";
import ConsultationPage from "@/Compoents/contact-us/CTA";

export const metadata = {
  title: "Contact Us | AI Development & Automation Experts – Opensoft AI",
  description:"Contact Opensoft AI for professional AI development and automation services. Partner with our experts to innovate and scale your digital business solutions.",
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
    title: "Contact Us | AI Development & Automation Experts – Opensoft AI",
    description:
      "Contact Opensoft AI for professional AI development and automation services. Partner with our experts to innovate and scale your digital business solutions.",
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
