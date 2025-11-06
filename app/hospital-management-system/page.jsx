import HeroSection from "@/Compoents/HMS/Hero";
import HMSSection from "@/Compoents/HMS/Intro";
import HMSFeaturesSection from "@/Compoents/HMS/Feature";
import HMSBenefitsSection from "@/Compoents/HMS/Benifits";
import WhyChooseSection from "@/Compoents/HMS/WhyChooseUs";
import ERPCTASection from "@/Compoents/HMS/CTA";
import HMSCTASection from "@/Compoents/HMS/CTA";

export default function HMS() {
  return (
   <> <div>
      <HeroSection/>
      <HMSSection/>
      <HMSFeaturesSection/>
      <HMSBenefitsSection/>
      <WhyChooseSection/>
      <HMSCTASection/>
    </div>
    </>
  )
}
