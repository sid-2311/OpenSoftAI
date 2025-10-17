import AIConsultingServices from "@/Compoents/AIConsulting/AiConsultingServices";
import BusinessBenefitsSection from "@/Compoents/AIConsulting/Businessbenifis";
import AIConsultingcta from "@/Compoents/AIConsulting/CTA";
import AIConsultingExpertiseSection from "@/Compoents/AIConsulting/ExpertiseSection";
import HeroSection from "@/Compoents/AIConsulting/Hero";
import Industries from "@/Compoents/AIConsulting/Industries";
import AIConsultingSection from "@/Compoents/AIConsulting/Intro";
import TestimonialsSection from "@/Compoents/AIConsulting/Testimonail";
import WhyChooseUsSection from "@/Compoents/AIConsulting/WhyChooseUs";

export default function AIConsulting (){
    return(
        <>
        <HeroSection/>
        <AIConsultingSection/>
        <AIConsultingExpertiseSection/>
        <AIConsultingServices/>
        <BusinessBenefitsSection/>
        <WhyChooseUsSection/>
        <Industries/>
        <TestimonialsSection/>
        <AIConsultingcta/>
        </>
    )
}