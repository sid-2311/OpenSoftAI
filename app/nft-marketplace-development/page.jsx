import BusinessBenefitsSection from "@/Compoents/nftmarketplace/Benifits";
import CapabilitiesSection from "@/Compoents/nftmarketplace/Capablities";
import NFTCTASection from "@/Compoents/nftmarketplace/CTA";
import NFTExpertiseSection from "@/Compoents/nftmarketplace/Expertise";
import BlockchainHero from "@/Compoents/nftmarketplace/Hero";
import NFTInfrastructureSection from "@/Compoents/nftmarketplace/Intro";
import TestNFTDevelopment from "@/Compoents/nftmarketplace/Testimonial";
import WhyChooseUsSection from "@/Compoents/nftmarketplace/WhyChooseUs";


export const metadata = {
  title: "NFT Marketplace Development Services | OpenSoftAI",
  description:
    "Build a robust NFT marketplace with OpenSoftAI. We provide features like minting, bidding, auctions, IPFS integration, and royalties for creators.",
  alternates: {
    canonical: "https://opensoftai.com/nft-marketplace-development/",
  },
  robots: {
    index: true,
    follow: true,
  },
};




export default function NFTMarketplace(){
    return(
        <>
        <BlockchainHero/>
        <NFTInfrastructureSection/>
        <NFTExpertiseSection/>
        <CapabilitiesSection/>
        <BusinessBenefitsSection/>
        <WhyChooseUsSection/>
        <TestNFTDevelopment/>
        <NFTCTASection/>
        </>
    )
}