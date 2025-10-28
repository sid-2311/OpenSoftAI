import AdvancedFeaturesSection from "@/Compoents/AiCallingAgent/AdvanceFeature";
import GetStartedSection from "@/Compoents/AiCallingAgent/CTA";
import VoiceAIExpertiseSection from "@/Compoents/AiCallingAgent/Expertise";
import AICallingAgents from "@/Compoents/AiCallingAgent/Feature";
import HeroSection from "@/Compoents/AiCallingAgent/Hero";
import InboundOutboundAgentsSection from "@/Compoents/AiCallingAgent/InboundOutbound";
import IndustriesWeKnow from "@/Compoents/AiCallingAgent/Industries";
import AICallingIntroSection from "@/Compoents/AiCallingAgent/Intro";
import OpenSoftAIPartner from "@/Compoents/AiCallingAgent/Partner";
import TestAICalling from "@/Compoents/AiCallingAgent/Testimonail";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "Next-Gen AI Calling Agent Development | OpenSoftAI Solutions",
  description:"Transform your customer interactions with OpenSoftAI’s AI calling agents. Our intelligent, human-like AI handles calls efficiently, boosts engagement, and automates communication for businesses of all sizes.",
  keywords: [
    "AI calling agent",
    "voice AI",
    "AI voice assistant",
    "automated calling",
    "AI customer service",
    "AI call center",
    "conversational AI",
    "AI phone bot",
    "AI voice automation",
  ],
  alternates: {
    canonical: "https://opensoftai.com/ai-calling-agent-development-company", // ✅ Canonical URL
  },
  openGraph: {
    title: "Next-Gen AI Calling Agent Development | OpenSoftAI Solutions",
    description: "Transform your customer interactions with OpenSoftAI’s AI calling agents. Our intelligent, human-like AI handles calls efficiently, boosts engagement, and automates communication for businesses of all sizes.",
    url: "https://opensoftai.com/ai-calling-agent-development-company",
   
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
 
};

export default function AiCallingAgent() {
  return (
    <>
      <HeroSection />
      <AICallingIntroSection />
      <VoiceAIExpertiseSection />
      <InboundOutboundAgentsSection />
      <AdvancedFeaturesSection />
      <AICallingAgents />
      <OpenSoftAIPartner />
      <IndustriesWeKnow />
      <TestAICalling />
      <GetStartedSection />
    </>
  );
}
