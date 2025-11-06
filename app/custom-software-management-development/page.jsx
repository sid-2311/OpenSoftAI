import HeroSection from "@/Compoents/CRM/Hero"
import CRMSection from "@/Compoents/CRM/Intro"
import CRMFeaturesSection from "@/Compoents/CRM/Feature"
import CRMImpactSection from "@/Compoents/CRM/Benifits"
import WhyChooseSection from "@/Compoents/CRM/WhyChooseUs"
import CRMCTASection from "@/Compoents/CRM/CTA"

export default function CRM() {
  return (
    <div>
      <HeroSection />
      <CRMSection />
      <CRMFeaturesSection />
      <CRMImpactSection />
      <WhyChooseSection />
      <CRMCTASection />
    </div>
  )
}
