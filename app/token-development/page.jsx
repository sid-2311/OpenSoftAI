import BusinessBenefitsSection from "@/Compoents/TokenDevelopment/Benifits";
import CapabilitiesSection from "@/Compoents/TokenDevelopment/Capablities";
import CTASection from "@/Compoents/TokenDevelopment/CTA";
import ExpertiseSection from "@/Compoents/TokenDevelopment/Expertise";
import HeroSection from "@/Compoents/TokenDevelopment/Hero";
import TokenDevelopmentSection from "@/Compoents/TokenDevelopment/Intro";
import TestTokenDevelopment from "@/Compoents/TokenDevelopment/Testimonial";
import WhyChooseUsSection from "@/Compoents/TokenDevelopment/WhyChooseus";

export default function TokenDevelopment(){
    return(
        <>
        <HeroSection/>
        <TokenDevelopmentSection/>
        <ExpertiseSection/>
        <CapabilitiesSection/>
        <BusinessBenefitsSection/>
        <WhyChooseUsSection/>
        <TestTokenDevelopment/>
        <CTASection/>
        </>
    )
}