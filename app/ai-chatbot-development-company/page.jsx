import BusinessBenefitsSection from "@/Compoents/AiChatbot/BusinessfitSection";
import ChatbotTypesSection from "@/Compoents/AiChatbot/ChatBotTypes";
import ExperienceSection from "@/Compoents/AiChatbot/Experience";
import TechnicalFeaturesSection from "@/Compoents/AiChatbot/Feature";
import HeroSection from "@/Compoents/AiChatbot/Hero";
import Industries from "@/Compoents/AiChatbot/Industries";
import AIChatbotIntroSection from "@/Compoents/AiChatbot/Intro";
import ProcessSection from "@/Compoents/AiChatbot/Process";
import TestAIChatbot from "@/Compoents/AiChatbot/Testimonail";
import CTASection from "@/Compoents/Blockchain/CTASection";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "Build Smart AI Chatbots for Business Growth | Opensoft AI",
  description: "Enhance customer experience with Opensoft AI’s smart chatbot solutions. We design intelligent AI chatbots that boost engagement and automate conversations.",
  keywords: [
    "AI chatbot",
    "chatbot development",
    "AI assistant",
    "conversational AI",
    "chatbot for business",
    "customer support automation",
    "intelligent chatbot",
    "AI conversation bot",
  ],
  alternates: {
    canonical: "https://opensoftai.com/ai-chatbot-development-company", // ✅ Canonical URL
  },
  openGraph: {
    title: "Build Smart AI Chatbots for Business Growth | Opensoft AI",
    description: "Enhance customer experience with Opensoft AI’s smart chatbot solutions. We design intelligent AI chatbots that boost engagement and automate conversations. ",
    url: "https://opensoftai.com/ai-chatbot-development-company",
   
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
 
};

export default function ChatBot() {
  return (
    <>
      <HeroSection />
      <AIChatbotIntroSection />
      <ExperienceSection />
      <ChatbotTypesSection />
      <TechnicalFeaturesSection />
      <BusinessBenefitsSection />
      <Industries />
      <TestAIChatbot />
      <ProcessSection />
      <CTASection />
    </>
  );
}
