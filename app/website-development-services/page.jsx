import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/WDS/Hero"
import WDSSection from "@/Compoents/WDS/Intro"
import WDSFeaturesSection from "@/Compoents/WDS/Feature"
import WDSBenefitsSection from "@/Compoents/WDS/Benifits"
import WhyChooseSection from "@/Compoents/WDS/WhyChooseUs"
import WDSCTASection from "@/Compoents/WDS/CTA"
import WebsiteTypesSection from "@/Compoents/WDS/Websites"

const SLUG = 'website-development-services';

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
      <WDSSection data={sections} />
      <WebsiteTypesSection data={sections} />
      <WDSFeaturesSection data={sections} />
      <WDSBenefitsSection data={sections} />
      <WhyChooseSection data={sections} />
      <WDSCTASection data={sections} />
    </div>
    </>
  );
}
