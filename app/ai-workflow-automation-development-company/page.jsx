import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
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

const SLUG = 'ai-workflow-automation-development-company';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function Page() {
  const pageData = await getPageData(SLUG);
  
  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Page data not found</p>
    </div>;
  }

  // Extract content data
  const content =  pageData.content || {};

  return (
    <>
      <HeroSection data={content} />
      <AIWorkflowAutomationSection data={content} />
      <IntelligentAutomationExpertiseSection data={content} />
      <AIWorkflowAutomationCapabilities data={content} />
      <BusinessBenefits data={content} />
      <WhyChooseUsSection data={content} />
      <Industries data={content} />
      <TestAIAutomation data={content} />
      <CTASection data={content} />
    </>
  );
}
