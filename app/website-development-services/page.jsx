import HeroSection from "@/Compoents/WDS/Hero"
import WDSSection from "@/Compoents/WDS/Intro"
import WDSFeaturesSection from "@/Compoents/WDS/Feature"
import WDSBenefitsSection from "@/Compoents/WDS/Benifits"
import WhyChooseSection from "@/Compoents/WDS/WhyChooseUs"
import WDSCTASection from "@/Compoents/WDS/CTA"
import WebsiteTypesSection from "@/Compoents/WDS/Websites"

export default function WDS() {
  return (
    <>
    <div>
      <HeroSection />
      <WDSSection />
      <WebsiteTypesSection/>
      <WDSFeaturesSection />
      <WDSBenefitsSection />
      <WhyChooseSection />
      <WDSCTASection />
    </div>
    </>
  )
}
