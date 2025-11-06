import BusinessBenefitsSection from "@/Compoents/DefiDex/Benifits";
import CapabilitiesSection from "@/Compoents/DefiDex/Capablities";
import DeFiCTASection from "@/Compoents/DefiDex/CTA";
import DeFiExpertiseSection from "@/Compoents/DefiDex/Expertise";
import BlockchainHero from "@/Compoents/DefiDex/Hero";
import DeFiDEXIntroSection from "@/Compoents/DefiDex/Intro";
import TestDefiDexDevelopment from "@/Compoents/DefiDex/Testimonail";
import WhyChooseUsSection from "@/Compoents/DefiDex/WhyChooseUs";

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