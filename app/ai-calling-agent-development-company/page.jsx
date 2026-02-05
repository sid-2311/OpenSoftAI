import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";

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

const SLUG = "ai-calling-agent-development-company";

// ✅ Dynamic Metadata from DB
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

  // ❗ This page uses FLAT CMS (no sections)
  const content = pageData.content || {};

  return (
    <>
      <HeroSection data={content.hero} />

    <AICallingIntroSection data={content.intro} />

    <VoiceAIExpertiseSection data={content.expertise} />

    <InboundOutboundAgentsSection data={content.inboundOutbound} />

    <AdvancedFeaturesSection data={content.advancedFeatures} />

    <AICallingAgents data={content.features} />

    <OpenSoftAIPartner data={content.partner} />

    <IndustriesWeKnow data={content.industries} />

    <TestAICalling data={content.testimonials} />

    <GetStartedSection data={content.cta} />

    </>
  );
}
