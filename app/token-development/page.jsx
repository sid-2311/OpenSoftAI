import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefitsSection from "@/Compoents/TokenDevelopment/Benifits";
import CapabilitiesSection from "@/Compoents/TokenDevelopment/Capablities";
import CTASection from "@/Compoents/TokenDevelopment/CTA";
import ExpertiseSection from "@/Compoents/TokenDevelopment/Expertise";
import HeroSection from "@/Compoents/TokenDevelopment/Hero";
import TokenDevelopmentSection from "@/Compoents/TokenDevelopment/Intro";
import TestTokenDevelopment from "@/Compoents/TokenDevelopment/Testimonial";
import WhyChooseUsSection from "@/Compoents/TokenDevelopment/WhyChooseus";

const SLUG = 'token-development';

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
        <HeroSection data={sections} />
        <TokenDevelopmentSection data={sections} />
        <ExpertiseSection data={sections} />
        <CapabilitiesSection data={sections} />
        <BusinessBenefitsSection data={sections} />
        <WhyChooseUsSection data={sections} />
        <TestTokenDevelopment data={sections} />
        <CTASection data={sections} />
        </>
  );
}
