import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
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

const SLUG = 'ai-copilot-development-company';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function Page() {
  const pageData = await getPageData(SLUG);
  
  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Page data not found</p>
    </div>;
  }

  // Extract content data
  const content =  pageData.content || {};

  return (
    <>
      <HeroSection data={content} />
      <AICopilotIntroSection data={content} />
      <AiCopilot data={content.statsSection} />
      <CopilotTypesSection data={content.types} />
      <TechnicalMagicSection data={content.technical} />
      <HowTeamsWorkSection data={content.howItWorks} />
      <TestAICopilot data={content.testimonials} />
      <BuildCopilotSection data={content.steps} />
      <FinalCTACopilotSection data={content.cta} />
    </>
  );
}
