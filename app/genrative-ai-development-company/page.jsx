import BusinessBenefits from "@/Compoents/GenrativeAi/BusinessBenifits";
import CTASection from "@/Compoents/GenrativeAi/CTA";
import GenerativeAIExpertiseSection from "@/Compoents/GenrativeAi/Expertise";
import HeroSection from "@/Compoents/GenrativeAi/Hero";
import Industries from "@/Compoents/GenrativeAi/Industries";
import GenerativeAISection from "@/Compoents/GenrativeAi/Intro";
import GenerativeAICapabilities from "@/Compoents/GenrativeAi/Services";
import TestimonialsSection from "@/Compoents/GenrativeAi/Testimonails";
import WhyChooseUsSection from "@/Compoents/GenrativeAi/WhyChoose";
// import GenerativeAISolutions from "@/Compoents/GenrativeAi/Intro";

export default function GenrativeAi(){
    return(
        <>
        <HeroSection/>
        <GenerativeAISection/>
        <GenerativeAIExpertiseSection/>
        <GenerativeAICapabilities/>
        <BusinessBenefits/>
        <WhyChooseUsSection/>
        <Industries/>
        <TestimonialsSection/>
        <CTASection/>
        </>
    )
}