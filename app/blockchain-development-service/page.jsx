import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BlockchainBenefits from "@/Compoents/Blockchain/BlockChainBenifits";
import BlockchainTabs from "@/Compoents/Blockchain/BlockChainIndustries";
import BlockchainSection from "@/Compoents/Blockchain/BlockchainSection";
import BlockchainServices from "@/Compoents/Blockchain/BlockChainServices";
import CTASection from "@/Compoents/Blockchain/CTASection";
import BlockchainExpertise from "@/Compoents/Blockchain/Expertise";
import BlockchainHero from "@/Compoents/Blockchain/Hero";
import TestBlockChain from "@/Compoents/Blockchain/Testimonail";
import WhyChooseUs from "@/Compoents/Blockchain/WhyChoose";

const SLUG = 'blockchain-development-service';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function BlockChain() {
  const pageData = await getPageData(SLUG);

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Page data not found</p>
    </div>;
  }

  // Extract sections data (blockchain pages use content.sections structure)
  const sections = pageData.content?.sections || {};

  return (
    <>
      <BlockchainHero data={sections} />
      <BlockchainSection data={sections} />
      <BlockchainExpertise data={sections} />
      <BlockchainServices data={sections} />
      <BlockchainBenefits data={sections} />
      <WhyChooseUs data={sections} />
      <BlockchainTabs data={sections.blockchainIndustriesSection} />

      <TestBlockChain data={sections} />
      <CTASection data={sections} />
    </>
  );
}