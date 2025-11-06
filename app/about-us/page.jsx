import Banner from "@/Compoents/About-us/Banner";
import IndustryProjectShowcase from "@/Compoents/About-us/ClientSuccess";
// import ClientSuccessStories from "@/Compoents/About-us/ClientSuccess";
import CompanySection from "@/Compoents/About-us/CompanySection";
import CallToActionCard from "@/Compoents/About-us/CTA";
import ExpertiseSection from "@/Compoents/About-us/ExpertSection";
import GlobalReach from "@/Compoents/About-us/GlobalReach";
import MissionVisionSection from "@/Compoents/About-us/MissonVision";
import ValuesSection from "@/Compoents/About-us/ValuesSection";
import WhyChoose from "@/Compoents/About-us/WhyChoose";

export const metadata = {
  title: "About Our Company | AI & Software Development Experts",
  description:
    "Opensoft AI is a professional AI and software development company dedicated to innovation, reliability, and building technology that drives business success.",
  keywords: [
    "About OpenSoftAI",
    "OpenSoftAI team",
    "company information",
    "software development company",
    "AI development company",
    "technology innovation",
    "digital transformation",
    "our mission",
  ],
  openGraph: {
    title: "About Our Company | AI & Software Development Experts",
    description:
      "Opensoft AI is a professional AI and software development company dedicated to innovation, reliability, and building technology that drives business success.",
    url: "https://opensoftai.com/about-us",
    type: "website",
   
  },
  robots: {
    index: true,
    follow: true,
  },
  // ✅ Canonical link here
  alternates: {
    canonical: "https://opensoftai.com/about-us",
  },
};

export default function AboutUs() {
  return (
    <>
      <Banner />
      <CompanySection />
      <MissionVisionSection />
      <ValuesSection />
      <ExpertiseSection />
      <WhyChoose />
      <GlobalReach />
      {/* <ClientSuccessStories /> */}
      <IndustryProjectShowcase />
      <CallToActionCard />
    </>
  );
}
