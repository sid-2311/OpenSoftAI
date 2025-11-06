import HeroSection from "@/Compoents/SAAS/Hero"
import SaaSSection from "@/Compoents/SAAS/Intro"
import SaaSFeaturesSection from "@/Compoents/SAAS/Feature"
import SaaSBenefitsSection from "@/Compoents/SAAS/Benifits"
import WhyChooseSection from "@/Compoents/SAAS/WhyChooseUs"
import SaaSCTASection from "@/Compoents/SAAS/CTA"


export default function SaaS() {
  return (
    <>
    <div>
      <HeroSection />
      <SaaSSection />
      <SaaSFeaturesSection />
      <SaaSBenefitsSection />
      <WhyChooseSection />
      <SaaSCTASection />
    </div>
    </>
  )
}
