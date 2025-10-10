import BlockchainBenefits from "@/Compoents/Blockchain/BlockChainBenifits";
import BlockchainTabs from "@/Compoents/Blockchain/BlockChainIndustries";
import BlockchainSection from "@/Compoents/Blockchain/BlockchainSection";
import BlockchainServices from "@/Compoents/Blockchain/BlockChainServices";
import CTASection from "@/Compoents/Blockchain/CTASection";
import BlockchainExpertise from "@/Compoents/Blockchain/Expertise";
import BlockchainHero from "@/Compoents/Blockchain/Hero";
import Testimonials from "@/Compoents/Blockchain/Testimonail";
import WhyChooseUs from "@/Compoents/Blockchain/WhyChoose";


export const metadata = {
  title: "Enterprise Blockchain Development Company | Custom DLT Solutions",
  description: "We provide enterprise-grade custom blockchain development services. From DeFi apps to supply chain and identity, we build secure, scalable blockchain solutions.",
  keywords: [
    "blockchain development",
    "smart contracts",
    "DeFi",
    "NFT",
    "Web3 development",
    "OpenSoftAI",
    "crypto solutions",
    "distributed ledger",
  ],
  openGraph: {
  title: "Enterprise Blockchain Development Company | Custom DLT Solutions",
     description: "We provide enterprise-grade custom blockchain development services. From DeFi apps to supply chain and identity, we build secure, scalable blockchain solutions.",

    url: "https://opensoftai.com/blockchain-development-service",
    
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://opensoftai.com/blockchain-development-service",
  }
};


export default function BlockChain(){
    return(
        <>
        <BlockchainHero/>
        <BlockchainSection/>
        <BlockchainExpertise/>
        <BlockchainServices/>
        <BlockchainBenefits/>
        <WhyChooseUs/>
        <BlockchainTabs/>
        <Testimonials/>
        <CTASection/>
        </>
    )
}