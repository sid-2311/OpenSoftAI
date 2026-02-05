import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";

import Banner from "@/Compoents/About-us/Banner";
import CompanySection from "@/Compoents/About-us/CompanySection";
import MissionVisionSection from "@/Compoents/About-us/MissonVision";
import ValuesSection from "@/Compoents/About-us/ValuesSection";
import ExpertiseSection from "@/Compoents/About-us/ExpertSection";
import WhyChoose from "@/Compoents/About-us/WhyChoose";
import GlobalReach from "@/Compoents/About-us/GlobalReach";
import IndustryProjectShowcase from "@/Compoents/About-us/ClientSuccess";
import CallToActionCard from "@/Compoents/About-us/CTA";

const SLUG = "about-us";

export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

export default async function Page() {
  const pageData = await getPageData(SLUG);
  const sections = pageData.content.sections;

  return (
    <>
      <Banner data={sections.banner} />
      <CompanySection data={sections.companySection} />
      <MissionVisionSection data={sections.missionVisionSection} />
      <ValuesSection data={sections.valuesSection} />
      <ExpertiseSection data={sections.expertiseSection} />
      <WhyChoose data={sections.whyChooseSection} />
      <GlobalReach data={sections.globalReachSection} />
      <IndustryProjectShowcase data={sections.industryProjectShowcaseSection} />
      <CallToActionCard data={sections.callToActionSection} />
    </>
  );
}
