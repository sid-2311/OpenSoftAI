import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/SAAS/Hero"
import SaaSSection from "@/Compoents/SAAS/Intro"
import SaaSFeaturesSection from "@/Compoents/SAAS/Feature"
import SaaSBenefitsSection from "@/Compoents/SAAS/Benifits"
import WhyChooseSection from "@/Compoents/SAAS/WhyChooseUs"
import SaaSCTASection from "@/Compoents/SAAS/CTA"

const SLUG = 'saas-software-development';

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

  // Extract sections data
  const sections = pageData.content?.sections || pageData.content || {};

  return (
    <>
    <div>
      <HeroSection data={sections} />
      <SaaSSection data={sections} />
      <SaaSFeaturesSection data={sections} />
      <SaaSBenefitsSection data={sections} />
      <WhyChooseSection data={sections} />
      <SaaSCTASection data={sections} />
    </div>
    </>
  );
}
