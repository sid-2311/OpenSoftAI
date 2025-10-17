import BusinessBenefits from "@/Compoents/WorkflowAutomation/BusinessBenifits";
import CTASection from "@/Compoents/WorkflowAutomation/CTA";
import IntelligentAutomationExpertiseSection from "@/Compoents/WorkflowAutomation/Expertise";
import HeroSection from "@/Compoents/WorkflowAutomation/Hero";
import Industries from "@/Compoents/WorkflowAutomation/Industries";
import AIWorkflowAutomationSection from "@/Compoents/WorkflowAutomation/Intro";
import AIWorkflowAutomationCapabilities from "@/Compoents/WorkflowAutomation/Services";
import TestimonialsSection from "@/Compoents/WorkflowAutomation/Testimonal";
import WhyChooseUsSection from "@/Compoents/WorkflowAutomation/WhyChoose";

export default function AiWorkFlow(){
    return(
        <>
        <HeroSection/>
        <AIWorkflowAutomationSection/>
        <IntelligentAutomationExpertiseSection/>
        <AIWorkflowAutomationCapabilities/>
        <BusinessBenefits/>
        <WhyChooseUsSection/>
        <Industries/>
        <TestimonialsSection/>
        <CTASection/>

        </>
    )
}