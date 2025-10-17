import AISolutionsSection from "@/Compoents/AiServices/AiSolutions";
import BusinessImpactSection from "@/Compoents/AiServices/BusinessImpact";
import CTAContactSection from "@/Compoents/AiServices/CTA";
import AIExpertiseSection from "@/Compoents/AiServices/Expertise";
import HeroSection from "@/Compoents/AiServices/Hero";
import IndustriesWeKnow from "@/Compoents/AiServices/Industries";
import TestAIServices from "@/Compoents/AiServices/Testimonails";
// import TestimonialsSection from "@/Compoents/AiServices/Testimonails";
import WhyChooseSection from "@/Compoents/AiServices/WhyChoose";

export default function AiServices(){
    return(
        <>
        <HeroSection/>
        <AISolutionsSection/>
        <AIExpertiseSection/>
        <BusinessImpactSection/>
        <WhyChooseSection/>
        <IndustriesWeKnow/>
        {/* <TestimonialsSection/> */}
        <TestAIServices/>
        <CTAContactSection/>
        
        </>
    )
}