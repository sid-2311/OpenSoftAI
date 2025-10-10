import AISolutionsSection from "@/Compoents/AiServices/AiSolutions";
import BusinessImpactSection from "@/Compoents/AiServices/BusinessImpact";
import CTAContactSection from "@/Compoents/AiServices/CTA";
import AIExpertiseSection from "@/Compoents/AiServices/Expertise";
import HeroSection from "@/Compoents/AiServices/Hero";
import TestimonialsSection from "@/Compoents/AiServices/Testimonails";
import WhyChooseSection from "@/Compoents/AiServices/WhyChoose";

export default function AiServices(){
    return(
        <>
        <HeroSection/>
        <AISolutionsSection/>
        <AIExpertiseSection/>
        <BusinessImpactSection/>
        <WhyChooseSection/>
        <TestimonialsSection/>
        <CTAContactSection/>
        
        </>
    )
}