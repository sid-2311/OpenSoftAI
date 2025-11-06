import AIConsultingServices from "@/Compoents/AIConsulting/AiConsultingServices";
import BusinessBenefitsSection from "@/Compoents/AIConsulting/Businessbenifis";
import AIConsultingcta from "@/Compoents/AIConsulting/CTA";
import AIConsultingExpertiseSection from "@/Compoents/AIConsulting/ExpertiseSection";
import HeroSection from "@/Compoents/AIConsulting/Hero";
import Industries from "@/Compoents/AIConsulting/Industries";
import AIConsultingSection from "@/Compoents/AIConsulting/Intro";
import TestAIConsulting from "@/Compoents/AIConsulting/Testimonail";
import WhyChooseUsSection from "@/Compoents/AIConsulting/WhyChooseUs";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "Transform with AI Consulting & Development | Opensoft AI",
  description: "Unlock innovation with Opensoft AI’s consulting and development expertise. We design intelligent AI solutions that optimize workflows and boost business growth.",
  keywords: [
    "AI consulting",
    "artificial intelligence consulting",
    "AI strategy",
    "AI transformation",
    "AI integration",
    "machine learning consulting",
    "AI solutions for business",
    "AI development services",
  ],
  alternates: {
    canonical: "https://opensoftai.com/ai-consulting-development-company", // ✅ Canonical URL
  },
  openGraph: {
    title: "Transform with AI Consulting & Development | Opensoft AI",
    description: "Unlock innovation with Opensoft AI’s consulting and development expertise. We design intelligent AI solutions that optimize workflows and boost business growth.",
    url: "https://opensoftai.com/ai-consulting-development-company",
  
    locale: "en_US",
    type: "website",
  },
 robots: {
    index: true,
    follow: true,
  },
 
};

export default function AIConsulting() {
  return (
    <>
      <HeroSection />
      <AIConsultingSection />
      <AIConsultingExpertiseSection />
      <AIConsultingServices />
      <BusinessBenefitsSection />
      <WhyChooseUsSection />
      <Industries />
      <TestAIConsulting />
      <AIConsultingcta />
    </>
  );
}
