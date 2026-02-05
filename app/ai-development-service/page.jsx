import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import AISolutionsSection from "@/Compoents/AiServices/AiSolutions";
import BusinessImpactSection from "@/Compoents/AiServices/BusinessImpact";
import CTAContactSection from "@/Compoents/AiServices/CTA";
import AIExpertiseSection from "@/Compoents/AiServices/Expertise";
import HeroSection from "@/Compoents/AiServices/Hero";
import IndustriesWeKnow from "@/Compoents/AiServices/Industries";
import TestAIServices from "@/Compoents/AiServices/Testimonails";
import WhyChooseSection from "@/Compoents/AiServices/WhyChoose";

const SLUG = 'ai-development-service';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function AIServicesPage() {
  const pageData = await getPageData(SLUG);

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Page data not found</p>
    </div>;
  }

  // Extract sections data
  const sections = pageData.content?.sections || {};

  return (
    <>
      <HeroSection data={sections} />
      <AISolutionsSection data={sections} />
      <AIExpertiseSection data={sections} />
      <BusinessImpactSection data={sections} />
      <WhyChooseSection data={sections} />
      <IndustriesWeKnow data={sections} />
      <TestAIServices data={sections} />
      <CTAContactSection data={sections} />
    </>
  );
}
