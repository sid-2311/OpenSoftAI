import HeroSection from "@/Compoents/RMS/Hero"
import RMSSection from "@/Compoents/RMS/Intro"
import RMSFeaturesSection from "@/Compoents/RMS/Feature"
import RMSImpactSection from "@/Compoents/RMS/Benifits"
import WhyChooseSection from "@/Compoents/RMS/WhyChooseUs"
import RMSCTASection from "@/Compoents/RMS/CTA"

export default function RMS() {
  return (
    <>
    <div>
      <HeroSection />
      <RMSSection />
      <RMSFeaturesSection />
      <RMSImpactSection />
      <WhyChooseSection />
      <RMSCTASection />
    </div>
    </>
  )
}
