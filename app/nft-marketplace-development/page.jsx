import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefitsSection from "@/Compoents/nftmarketplace/Benifits";
import CapabilitiesSection from "@/Compoents/nftmarketplace/Capablities";
import NFTCTASection from "@/Compoents/nftmarketplace/CTA";
import NFTExpertiseSection from "@/Compoents/nftmarketplace/Expertise";
import BlockchainHero from "@/Compoents/nftmarketplace/Hero";
import NFTInfrastructureSection from "@/Compoents/nftmarketplace/Intro";
import TestNFTDevelopment from "@/Compoents/nftmarketplace/Testimonial";
import WhyChooseUsSection from "@/Compoents/nftmarketplace/WhyChooseUs";

const SLUG = 'nft-marketplace-development';

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
      <NFTInfrastructureSection data={sections} />
      <NFTExpertiseSection data={sections} />
      <CapabilitiesSection data={sections} />
      <BusinessBenefitsSection data={sections} />
      <WhyChooseUsSection data={sections} />
      <TestNFTDevelopment data={sections} />
      <NFTCTASection data={sections} />
    </>
  );
}
