import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import AIConsultingServices from "@/Compoents/AIConsulting/AiConsultingServices";
import BusinessBenefitsSection from "@/Compoents/AIConsulting/Businessbenifis";
import AIConsultingcta from "@/Compoents/AIConsulting/CTA";
import AIConsultingExpertiseSection from "@/Compoents/AIConsulting/ExpertiseSection";
import HeroSection from "@/Compoents/AIConsulting/Hero";
import Industries from "@/Compoents/AIConsulting/Industries";
import AIConsultingSection from "@/Compoents/AIConsulting/Intro";
import TestAIConsulting from "@/Compoents/AIConsulting/Testimonail";
import WhyChooseUsSection from "@/Compoents/AIConsulting/WhyChooseUs";

// ✅ SEO Metadata with Canonical URL

const SLUG = 'ai-consulting-development-company';

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
      <AIConsultingSection data={content} />
      <AIConsultingExpertiseSection data={content} />
      <AIConsultingServices data={content} />
      <BusinessBenefitsSection data={content} />
      <WhyChooseUsSection data={content} />
      <Industries data={content} />
      <TestAIConsulting data={content} />
      <AIConsultingcta data={content} />
    </>
  );
}
