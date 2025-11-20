import AICopilotSection from "@/Compoents/AiCopoilot/AiCopilotSection";
import AiCopilot from "@/Compoents/AiCopoilot/Section";
import HeroSection from "@/Compoents/AiCopoilot/Hero";
import CopilotTypesSection from "@/Compoents/AiCopoilot/TypesSection";
import TechnicalMagicSection from "@/Compoents/AiCopoilot/Technical";
import HowTeamsWorkSection from "@/Compoents/AiCopoilot/HowteamWorks";
import BuildCopilotSection from "@/Compoents/AiCopoilot/Steps";
import FinalCTACopilotSection from "@/Compoents/AiCopoilot/CTA";
import AICopilotIntroSection from "@/Compoents/AiCopoilot/AiCopilotSection";
import TestAICopilot from "@/Compoents/AiCopoilot/Testimonail";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "Build Smarter AI Copilot Solutions for Business | Opensoft AI",
  description: "Partner with OpenSoftAI to create AI copilots that optimize workflows, enhance productivity, and drive business growth with intelligent automation.",
  keywords: [
    "AI copilot",
    "AI assistant",
    "productivity automation",
    "AI for teams",
    "workflow automation",
    "AI integration",
    "intelligent copilot",
    "AI business solutions",
  ],
  alternates: {
    canonical: "https://opensoftai.com/ai-copilot-development-company", // ✅ Canonical URL
  },
  openGraph: {
    title: "Build Smarter AI Copilot Solutions for Business | Opensoft AI",
    description: "Partner with OpenSoftAI to create AI copilots that optimize workflows, enhance productivity, and drive business growth with intelligent automation.",
    url: "https://opensoftai.com/ai-copilot-development-company",
   
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
 
};

export default function AICopilot() {
  return (
    <>
      <HeroSection />
      <AICopilotIntroSection />
      <AiCopilot />
      <CopilotTypesSection />
      <TechnicalMagicSection />
      <HowTeamsWorkSection />
      <TestAICopilot />
      <BuildCopilotSection />
      <FinalCTACopilotSection />
    </>
  );
}
