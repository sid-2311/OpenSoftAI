import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import AIBusinessSection from "@/Compoents/AiDevelopment/AiBusiness";
import AIExpertiseSection from "@/Compoents/AiDevelopment/AiExpertise";
import AIServicesBenefits from "@/Compoents/AiDevelopment/AiServicesBenifit";
import HeroSection from "@/Compoents/AiDevelopment/Hero";
import IndustriesWeKnow from "@/Compoents/AiDevelopment/Industries";
import TestimonialSection from "@/Compoents/AiDevelopment/Testinonial";
import WhyChooseUs from "@/Compoents/AiDevelopment/WhyChoose";

const SLUG = 'ai-development-company';

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

  // Extract sections data
  const sections = pageData.content?.sections || pageData.content || {};

  return (
    <>
        <HeroSection data={sections.heroSection} />
        <AIBusinessSection data={sections.aiBusinessSection} />
        <AIExpertiseSection data={sections.aiExpertiseSection} />
        <AIServicesBenefits data={sections.aiServicesBenefitsSection} />
        <WhyChooseUs data={sections.aiWhyChooseUsSection} />
        <IndustriesWeKnow data={sections.aiIndustriesSection} />
        <TestimonialSection data={sections.aiAutomationTestimonialsSection} />
        </>
  );
}
