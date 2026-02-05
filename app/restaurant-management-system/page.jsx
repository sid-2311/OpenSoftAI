import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/RMS/Hero"
import RMSSection from "@/Compoents/RMS/Intro"
import RMSFeaturesSection from "@/Compoents/RMS/Feature"
import RMSImpactSection from "@/Compoents/RMS/Benifits"
import WhyChooseSection from "@/Compoents/RMS/WhyChooseUs"
import RMSCTASection from "@/Compoents/RMS/CTA"

const SLUG = 'restaurant-management-system';

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
      <RMSSection data={sections} />
      <RMSFeaturesSection data={sections} />
      <RMSImpactSection data={sections} />
      <WhyChooseSection data={sections} />
      <RMSCTASection data={sections} />
    </div>
    </>
  );
}
