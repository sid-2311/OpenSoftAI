import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefitsSection from "@/Compoents/DefiDex/Benifits";
import CapabilitiesSection from "@/Compoents/DefiDex/Capablities";
import DeFiCTASection from "@/Compoents/DefiDex/CTA";
import DeFiExpertiseSection from "@/Compoents/DefiDex/Expertise";
import BlockchainHero from "@/Compoents/DefiDex/Hero";
import DeFiDEXIntroSection from "@/Compoents/DefiDex/Intro";
import TestDefiDexDevelopment from "@/Compoents/DefiDex/Testimonail";
import WhyChooseUsSection from "@/Compoents/DefiDex/WhyChooseUs";

const SLUG = 'defi-dex-development';

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
        <BlockchainHero data={sections} />
        <DeFiDEXIntroSection data={sections} />
        <DeFiExpertiseSection data={sections} />
        <CapabilitiesSection data={sections} />
        <BusinessBenefitsSection data={sections} />
        <WhyChooseUsSection data={sections} />
        <TestDefiDexDevelopment data={sections} />
        <DeFiCTASection data={sections} />
        </>
  );
}
