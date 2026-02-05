import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import HeroSection from "@/Compoents/IM/Hero"
import IMSection from "@/Compoents/IM/Intro"
import IMFeaturesSection from "@/Compoents/IM/Feature"
import IMImpactSection from "@/Compoents/IM/Benifits"
import WhyChooseSection from "@/Compoents/IM/WhyChooseUs"
import IMCTASection from "@/Compoents/IM/CTA"

const SLUG = 'inventory-management-software-development';

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
      <IMSection data={sections} />
      <IMFeaturesSection data={sections} />
      <IMImpactSection data={sections} />
      <WhyChooseSection data={sections} />
      <IMCTASection data={sections} />
    </div>
    </>
  );
}
