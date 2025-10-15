import AICopilotSection from "@/Compoents/AiCopoilot/AiCopilotSection";
import AiCopilot from "@/Compoents/AiCopoilot/Section";
import HeroSection from "@/Compoents/AiCopoilot/Hero";
import CopilotTypesSection from "@/Compoents/AiCopoilot/TypesSection";
import TechnicalMagicSection from "@/Compoents/AiCopoilot/Technical";
import HowTeamsWorkSection from "@/Compoents/AiCopoilot/HowteamWorks";
import TestimonialsSection from "@/Compoents/AiCopoilot/Testimonail";
import BuildCopilotSection from "@/Compoents/AiCopoilot/Steps";
import FinalCTACopilotSection from "@/Compoents/AiCopoilot/CTA";
// import TechnicalFeaturesSection from "@/Compoents/AiChatbot/Feature";

export default function AICopilot(){
    return(
        <>
        <HeroSection/>
        <AICopilotSection/>
        <AiCopilot/>
        <CopilotTypesSection/>
        <TechnicalMagicSection/>
        <HowTeamsWorkSection/>
        <TestimonialsSection/>
        <BuildCopilotSection/>
        <FinalCTACopilotSection/>
        </>
    )
}