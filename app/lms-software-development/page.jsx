import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/LMS/Hero"
import LMSSection from "@/Compoents/LMS/Intro"
import LMSFeaturesSection from "@/Compoents/LMS/Feature"
import LMSImpactSection from "@/Compoents/LMS/Benifits"
import WhyChooseSection from "@/Compoents/LMS/WhyChooseUs"
import LMSCTASection from "@/Compoents/LMS/CTA"

const SLUG = 'lms-software-development';

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
      <LMSSection data={sections} />
      <LMSFeaturesSection data={sections} />
      <LMSImpactSection data={sections} />
      <WhyChooseSection data={sections} />
      <LMSCTASection data={sections} />
    </div>
    </>
  );
}
