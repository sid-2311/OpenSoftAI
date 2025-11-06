import HeroSection from "@/Compoents/ADS/Hero"
import ADSSection from "@/Compoents/ADS/Intro"
import ADSFeaturesSection from "@/Compoents/ADS/Feature"
import ADSBenefitsSection from "@/Compoents/ADS/Benifits"
import WhyChooseSection from "@/Compoents/ADS/WhyChooseUs"
import ADSCTASection from "@/Compoents/ADS/CTA"

export default function ADS() {
  return (
    <>
    <div>
        <HeroSection />
        <ADSSection />
        <ADSFeaturesSection />
        <ADSBenefitsSection />
        <WhyChooseSection />
        <ADSCTASection />
    </div>
    </>
  )
}
