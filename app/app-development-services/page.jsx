import HeroSection from "@/Compoents/ADS/Hero"
import ADSSection from "@/Compoents/ADS/Intro"
import ADSFeaturesSection from "@/Compoents/ADS/Feature"
import ADSBenefitsSection from "@/Compoents/ADS/Benifits"
import WhyChooseSection from "@/Compoents/ADS/WhyChooseUs"
import ADSCTASection from "@/Compoents/ADS/CTA"
import AppTypesSection from "@/Compoents/ADS/Apps"

export default function ADS() {
  return (
    <>
    <div>
        <HeroSection />
        <ADSSection />
        <AppTypesSection/>
        <ADSFeaturesSection />
        <ADSBenefitsSection />
        <WhyChooseSection />
        <ADSCTASection />
    </div>
    </>
  )
}
