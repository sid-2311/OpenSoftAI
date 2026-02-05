import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefitsSection from "@/Compoents/AiChatbot/BusinessfitSection";
import ChatbotTypesSection from "@/Compoents/AiChatbot/ChatBotTypes";
import ExperienceSection from "@/Compoents/AiChatbot/Experience";
import TechnicalFeaturesSection from "@/Compoents/AiChatbot/Feature";
import HeroSection from "@/Compoents/AiChatbot/Hero";
import Industries from "@/Compoents/AiChatbot/Industries";
import AIChatbotIntroSection from "@/Compoents/AiChatbot/Intro";
import ProcessSection from "@/Compoents/AiChatbot/Process";
import TestAIChatbot from "@/Compoents/AiChatbot/Testimonail";
import CTASection from "@/Compoents/AiChatbot/CTA";

const SLUG = "ai-chatbot-development-company";

export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

export default async function Page() {
  const pageData = await getPageData(SLUG);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Page data not found</p>
      </div>
    );
  }

  // ✅ THIS is the only variable you need
  const content = pageData.content || {};

  return (
    <>
      <HeroSection data={content} />
      <AIChatbotIntroSection data={content} />
      <ExperienceSection data={content} />
      <ChatbotTypesSection data={content} />
      <TechnicalFeaturesSection data={content} />
      <BusinessBenefitsSection data={content} />
      <Industries data={content} />
      <TestAIChatbot data={content} />
      <ProcessSection data={content} />
      <CTASection data={content} />
    </>
  );
}
