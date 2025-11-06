import AISolutionsSection from "@/Compoents/AiServices/AiSolutions";
import BusinessImpactSection from "@/Compoents/AiServices/BusinessImpact";
import CTAContactSection from "@/Compoents/AiServices/CTA";
import AIExpertiseSection from "@/Compoents/AiServices/Expertise";
import HeroSection from "@/Compoents/AiServices/Hero";
import IndustriesWeKnow from "@/Compoents/AiServices/Industries";
import TestAIServices from "@/Compoents/AiServices/Testimonails";
import WhyChooseSection from "@/Compoents/AiServices/WhyChoose";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "Custom AI Development Solutions | Build Smarter with Opensoft AI",
  description:
    "Accelerate innovation with Opensoft AI’s custom AI development solutions. We design intelligent software powered by automation, data, and machine learning.",
  keywords: [
    "AI services",
    "artificial intelligence",
    "machine learning",
    "business automation",
    "AI solutions",
    "AI consulting",
    "AI for business",
  ],
  alternates: {
    canonical: "https://opensoftai.com/ai-development-service", // ✅ Canonical URL
  },
  openGraph: {
    title: "Custom AI Development Solutions | Build Smarter with Opensoft AI",
    description: "Accelerate innovation with Opensoft AI’s custom AI development solutions. We design intelligent software powered by automation, data, and machine learning.",
    url: "https://opensoftai.com/ai-development-service",
   
    
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  
};

export default function AiServices() {
  return (
    <>
      <HeroSection />
      <AISolutionsSection />
      <AIExpertiseSection />
      <BusinessImpactSection />
      <WhyChooseSection />
      <IndustriesWeKnow />
      <TestAIServices />
      <CTAContactSection />
    </>
  );
}
