import HeroSection from "@/Compoents/WDS/Hero"
import WDSSection from "@/Compoents/WDS/Intro"
import WDSFeaturesSection from "@/Compoents/WDS/Feature"
import WDSBenefitsSection from "@/Compoents/WDS/Benifits"
import WhyChooseSection from "@/Compoents/WDS/WhyChooseUs"
import WDSCTASection from "@/Compoents/WDS/CTA"

export default function WDS() {
  return (
    <>
    <div>
      <HeroSection />
      <WDSSection />
      <WDSFeaturesSection />
      <WDSBenefitsSection />
      <WhyChooseSection />
      <WDSCTASection />
    </div>
    </>
  )
}
