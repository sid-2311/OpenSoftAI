import HeroSection from "@/Compoents/LMS/Hero"
import LMSSection from "@/Compoents/LMS/Intro"
import LMSFeaturesSection from "@/Compoents/LMS/Feature"
import LMSImpactSection from "@/Compoents/LMS/Benifits"
import WhyChooseSection from "@/Compoents/LMS/WhyChooseUs"
import LMSCTASection from "@/Compoents/LMS/CTA"

export default function LMS() {
  return (
  <>
    <div>
      <HeroSection />
      <LMSSection />
      <LMSFeaturesSection />
      <LMSImpactSection />
      <WhyChooseSection />
      <LMSCTASection />
    </div>
    </>
  )
}
