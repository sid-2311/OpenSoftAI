import BusinessBenefits from "@/Compoents/GenrativeAi/BusinessBenifits";
import CTASection from "@/Compoents/GenrativeAi/CTA";
import GenerativeAIExpertiseSection from "@/Compoents/GenrativeAi/Expertise";
import HeroSection from "@/Compoents/GenrativeAi/Hero";
import Industries from "@/Compoents/GenrativeAi/Industries";
import GenerativeAISection from "@/Compoents/GenrativeAi/Intro";
import GenerativeAICapabilities from "@/Compoents/GenrativeAi/Services";
import TestAIGenrative from "@/Compoents/GenrativeAi/Testimonails";
import WhyChooseUsSection from "@/Compoents/GenrativeAi/WhyChoose";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "Innovate with Generative AI Development Company in India | Opensoft AI",
  description: "Unlock creativity and automation with Opensoft AI’s Generative AI development services. Build intelligent models that design, create, and innovate smarter.",
  keywords: [
    "Generative AI",
    "AI content generation",
    "AI automation",
    "AI innovation",
    "machine learning",
    "AI for business",
    "AI models",
    "Generative AI development",
  ],
  alternates: {
    canonical: "https://opensoftai.com/genrative-ai-development-company", // ✅ Canonical URL
  },
  openGraph: {
    title: "Innovate with Generative AI Development Company in India | Opensoft AI",
    description: "Unlock creativity and automation with Opensoft AI’s Generative AI development services. Build intelligent models that design, create, and innovate smarter.",
    url: "https://opensoftai.com/genrative-ai-development-company",
   
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
 
 
};

export default function GenrativeAi() {
  return (
    <>
      <HeroSection />
      <GenerativeAISection />
      <GenerativeAIExpertiseSection />
      <GenerativeAICapabilities />
      <BusinessBenefits />
      <WhyChooseUsSection />
      <Industries />
      <TestAIGenrative />
      <CTASection />
    </>
  );
}
