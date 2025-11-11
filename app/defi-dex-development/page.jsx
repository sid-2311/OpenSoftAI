import BusinessBenefitsSection from "@/Compoents/DefiDex/Benifits";
import CapabilitiesSection from "@/Compoents/DefiDex/Capablities";
import DeFiCTASection from "@/Compoents/DefiDex/CTA";
import DeFiExpertiseSection from "@/Compoents/DefiDex/Expertise";
import BlockchainHero from "@/Compoents/DefiDex/Hero";
import DeFiDEXIntroSection from "@/Compoents/DefiDex/Intro";
import TestDefiDexDevelopment from "@/Compoents/DefiDex/Testimonail";
import WhyChooseUsSection from "@/Compoents/DefiDex/WhyChooseUs";



export const metadata = {
  title: "DeFi & Decentralized Exchange (DEX) Development | OpenSoftAI",
  description:
    "Launch a DeFi protocol or decentralized exchange (DEX) with OpenSoftAI. Get liquidity pool integration, AMM architecture, yield farming, and security audits.",
  alternates: {
    canonical: "https://opensoftai.com/defi-dex-development/",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function DefiDex(){
    return(
        <>
        <BlockchainHero/>
        <DeFiDEXIntroSection/>
        <DeFiExpertiseSection/>
        <CapabilitiesSection/>
        <BusinessBenefitsSection/>
        <WhyChooseUsSection/>
        <TestDefiDexDevelopment/>
        <DeFiCTASection/>
        </>
    )
}