import BusinessBenefits from "@/Compoents/WorkflowAutomation/BusinessBenifits";
import CTASection from "@/Compoents/WorkflowAutomation/CTA";
import IntelligentAutomationExpertiseSection from "@/Compoents/WorkflowAutomation/Expertise";
import HeroSection from "@/Compoents/WorkflowAutomation/Hero";
import Industries from "@/Compoents/WorkflowAutomation/Industries";
import AIWorkflowAutomationSection from "@/Compoents/WorkflowAutomation/Intro";
import AIWorkflowAutomationCapabilities from "@/Compoents/WorkflowAutomation/Services";
import TestAIAutomation from "@/Compoents/WorkflowAutomation/Testimonal";
import WhyChooseUsSection from "@/Compoents/WorkflowAutomation/WhyChoose";

// ✅ SEO Metadata with Canonical URL
export const metadata = {
  title: "AI Workflow Automation Development Company",
  description: "OpenSoftAI is a leading AI workflow automation development company helping businesses streamline operations, reduce manual tasks, and boost productivity with intelligent automation solutions",
  keywords: [
    "AI workflow automation",
    "intelligent automation",
    "process automation",
    "business automation",
    "machine learning automation",
    "AI integration",
    "digital transformation",
    "automation solutions",
  ],
  alternates: {
    canonical: "https://opensoftai.com/ai-workflow-automation-development-company", // ✅ Canonical URL
  },
  openGraph: {
    title: "AI Workflow Automation Development Company",
    description: "OpenSoftAI is a leading AI workflow automation development company helping businesses streamline operations, reduce manual tasks, and boost productivity with intelligent automation solutions",
    url: "https://opensoftai.com/ai-workflow-automation-development-company",
   
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
  
};

export default function AiWorkFlow() {
  return (
    <>
      <HeroSection />
      <AIWorkflowAutomationSection />
      <IntelligentAutomationExpertiseSection />
      <AIWorkflowAutomationCapabilities />
      <BusinessBenefits />
      <WhyChooseUsSection />
      <Industries />
      <TestAIAutomation />
      <CTASection />
    </>
  );
}
