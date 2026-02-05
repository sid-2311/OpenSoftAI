import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import BusinessTransformationSection from "@/Compoents/Software/BusinessTransformation";
import FinalCTA from "@/Compoents/Software/CTA";
import DevelopmentApproach from "@/Compoents/Software/DevlopmentApproch";
import HeroSection from "@/Compoents/Software/Hero";
import SoftwareIndustries from "@/Compoents/Software/SoftwareIndustries";
import SoftwareServices from "@/Compoents/Software/SoftwareServices";

const SLUG = 'software-development-company';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function Software() {
  const pageData = await getPageData(SLUG);

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Page data not found</p>
    </div>;
  }

  // Extract sections data
  const sections = pageData.content?.sections || {};

  return (
    <>
      <HeroSection data={sections} />
      <BusinessTransformationSection data={sections} />
      <SoftwareServices data={sections} />
      <SoftwareIndustries data={sections} />
      <DevelopmentApproach data={sections} />
      <FinalCTA data={sections} />
    </>
  );
}