import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessBenefits from "@/Compoents/GenrativeAi/BusinessBenifits";
import CTASection from "@/Compoents/GenrativeAi/CTA";
import GenerativeAIExpertiseSection from "@/Compoents/GenrativeAi/Expertise";
import HeroSection from "@/Compoents/GenrativeAi/Hero";
import Industries from "@/Compoents/GenrativeAi/Industries";
import GenerativeAISection from "@/Compoents/GenrativeAi/Intro";
import GenerativeAICapabilities from "@/Compoents/GenrativeAi/Services";
import TestAIGenrative from "@/Compoents/GenrativeAi/Testimonails";
import WhyChooseUsSection from "@/Compoents/GenrativeAi/WhyChoose";

// ✅ SEO Metadata with Canonical URL

const SLUG = 'genrative-ai-development-company';

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
      <GenerativeAISection data={content} />
      <GenerativeAIExpertiseSection data={content} />
      <GenerativeAICapabilities data={content} />
      <BusinessBenefits data={content} />
      <WhyChooseUsSection data={content} />
      <Industries data={content} />
      <TestAIGenrative data={content} />
      <CTASection data={content} />
    </>
  );
}
