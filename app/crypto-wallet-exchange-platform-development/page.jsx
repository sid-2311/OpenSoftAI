import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefits from "@/Compoents/BlockchainCryptoWallet/Businessbenifit";
import CryptoCapabilitiesSection from "@/Compoents/BlockchainCryptoWallet/capablites";
import CryptoCTA from "@/Compoents/BlockchainCryptoWallet/CTA";
import CryptoExpertiseSection from "@/Compoents/BlockchainCryptoWallet/ExpertseSection";
import BlockchainHero from "@/Compoents/BlockchainCryptoWallet/Hero";
import CryptoTrustSection from "@/Compoents/BlockchainCryptoWallet/intro";
import TestBlockChainCrypto from "@/Compoents/BlockchainCryptoWallet/Testimonial";
import WhyChooseUsSection from "@/Compoents/BlockchainCryptoWallet/Whychooseus";

const SLUG = 'crypto-wallet-exchange-platform-development';

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
        <CryptoTrustSection data={sections} />
        <CryptoExpertiseSection data={sections} />
        <CryptoCapabilitiesSection data={sections} />\
        <BusinessBenefits data={sections} />
        <WhyChooseUsSection data={sections} />
        <TestBlockChainCrypto data={sections} />
        <CryptoCTA data={sections} />
        </>
  );
}
