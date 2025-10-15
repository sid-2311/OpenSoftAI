import BusinessBenefitsSection from "@/Compoents/AiChatbot/BusinessfitSection";
import ChatbotTypesSection from "@/Compoents/AiChatbot/ChatBotTypes";
import ExperienceSection from "@/Compoents/AiChatbot/Experience";
import TechnicalFeaturesSection from "@/Compoents/AiChatbot/Feature";
import HeroSection from "@/Compoents/AiChatbot/Hero";
import Industries from "@/Compoents/AiChatbot/Industries";
import ChatbotArticleSections from "@/Compoents/AiChatbot/Intro";
import ProcessSection from "@/Compoents/AiChatbot/Process";
import TestimonialsSection from "@/Compoents/AiChatbot/Testimonail";
import CTASection from "@/Compoents/Blockchain/CTASection";

export default function ChatBot(){
    return(
        <>
        <HeroSection/>
        <ChatbotArticleSections/>
        <ExperienceSection/>
        <ChatbotTypesSection/>
        <TechnicalFeaturesSection/>
        <BusinessBenefitsSection/>
        <Industries/>
        <TestimonialsSection/>
        <ProcessSection/>
        <CTASection/>

        </>
    )
}