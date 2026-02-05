import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/HMS/Hero";
import HMSSection from "@/Compoents/HMS/Intro";
import HMSFeaturesSection from "@/Compoents/HMS/Feature";
import HMSBenefitsSection from "@/Compoents/HMS/Benifits";
import WhyChooseSection from "@/Compoents/HMS/WhyChooseUs";
import ERPCTASection from "@/Compoents/HMS/CTA";
import HMSCTASection from "@/Compoents/HMS/CTA";

const SLUG = 'hospital-management-system';

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
    <> <div>
      <HeroSection data={sections} />
      <HMSSection data={sections} />
      <HMSFeaturesSection data={sections} />
      <HMSBenefitsSection data={sections} />
      <WhyChooseSection data={sections} />
      <HMSCTASection data={sections} />
    </div>
    </>
  );
}
