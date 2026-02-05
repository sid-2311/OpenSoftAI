import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import ERPBenefitsSection from "@/Compoents/ERP/Benifits";
import ERPCTASection from "@/Compoents/ERP/CTA";
import ERPFeaturesSection from "@/Compoents/ERP/Feature";
import HeroSection from "@/Compoents/ERP/Hero";
import ERPSection from "@/Compoents/ERP/Intro";
import WhyChooseSection from "@/Compoents/ERP/WhyChooseUs";

const SLUG = 'erp-software-development';

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
        <HeroSection data={sections} />
        <ERPSection data={sections} />
        <ERPFeaturesSection data={sections} />
        <ERPBenefitsSection data={sections} />
        <WhyChooseSection data={sections} />
        <ERPCTASection data={sections} />
        </>
  );
}
