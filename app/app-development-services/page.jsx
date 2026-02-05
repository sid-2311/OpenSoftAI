import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/ADS/Hero"
import ADSSection from "@/Compoents/ADS/Intro"
import ADSFeaturesSection from "@/Compoents/ADS/Feature"
import ADSBenefitsSection from "@/Compoents/ADS/Benifits"
import WhyChooseSection from "@/Compoents/ADS/WhyChooseUs"
import ADSCTASection from "@/Compoents/ADS/CTA"
import AppTypesSection from "@/Compoents/ADS/Apps"

const SLUG = 'app-development-services';

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
        <ADSSection data={sections} />
        <AppTypesSection data={sections} />
        <ADSFeaturesSection data={sections} />
        <ADSBenefitsSection data={sections} />
        <WhyChooseSection data={sections} />
        <ADSCTASection data={sections} />
    </div>
    </>
  );
}
