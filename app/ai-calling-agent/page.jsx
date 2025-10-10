import AdvancedFeaturesSection from "@/Compoents/AiCallingAgent/AdvanceFeature";
import GetStartedSection from "@/Compoents/AiCallingAgent/CTA";
import VoiceAIExpertiseSection from "@/Compoents/AiCallingAgent/Expertise";
import AICallingAgents from "@/Compoents/AiCallingAgent/Feature";
import HeroSection from "@/Compoents/AiCallingAgent/Hero";
import InboundOutboundAgentsSection from "@/Compoents/AiCallingAgent/InboundOutbound";
import AICallingIntroSection from "@/Compoents/AiCallingAgent/Intro";
import OpenSoftAIPartner from "@/Compoents/AiCallingAgent/Partner";
import ClientTestimonials from "@/Compoents/AiCallingAgent/Testimonail";

export default function AiCallingAgent(){
    return(
        <>
        <HeroSection/>
        <AICallingIntroSection/>
        <VoiceAIExpertiseSection/>
        <InboundOutboundAgentsSection/>
        <AdvancedFeaturesSection/>
        <AICallingAgents/>
        <OpenSoftAIPartner/>
        <ClientTestimonials/>
        <GetStartedSection/>

        </>
    )
}