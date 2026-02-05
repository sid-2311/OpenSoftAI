import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefitsSection from "@/Compoents/SmartContract/Benifits";
import CapabilitiesSection from "@/Compoents/SmartContract/Capablities";
import SmartContractCTA from "@/Compoents/SmartContract/CTA";
import ExpertiseSection from "@/Compoents/SmartContract/Expertise";
import BlockchainHero from "@/Compoents/SmartContract/Hero";
import SmartContractSection from "@/Compoents/SmartContract/Intro";
import TestSmartContractDevelopment from "@/Compoents/SmartContract/Testimonial";
import WhyChooseUsSection from "@/Compoents/SmartContract/WhyChooseUs";

const SLUG = 'smart-contract-development';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function SmartContract() {
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
      <BlockchainHero data={sections} />
      <SmartContractSection data={sections} />
      <ExpertiseSection data={sections} />
      <CapabilitiesSection data={sections} />
      <BusinessBenefitsSection data={sections} />
      <WhyChooseUsSection data={sections} />
      <TestSmartContractDevelopment data={sections} />
      <SmartContractCTA data={sections} />
    </>
  );
}