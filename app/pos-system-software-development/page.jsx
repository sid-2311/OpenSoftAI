import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/POS/Hero";
import POSSection from "@/Compoents/POS/Intro";
import POSFeaturesSection from "@/Compoents/POS/Features";
import POSBenefitsSection from "@/Compoents/POS/Benifits";
import WhyChooseSection from "@/Compoents/POS/WhyChooseUs";
import POSCTASection from "@/Compoents/POS/CTA";

const SLUG = 'pos-system-software-development';

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
      <POSSection data={sections} />
      <POSFeaturesSection data={sections} />
      <POSBenefitsSection data={sections} />
      <WhyChooseSection data={sections} />
      <POSCTASection data={sections} />
    </div>
    </>
  );
}
