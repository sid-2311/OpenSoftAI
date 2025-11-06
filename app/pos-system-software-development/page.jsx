import HeroSection from "@/Compoents/POS/Hero";
import POSSection from "@/Compoents/POS/Intro";
import POSFeaturesSection from "@/Compoents/POS/Features";
import POSBenefitsSection from "@/Compoents/POS/Benifits";
import WhyChooseSection from "@/Compoents/POS/WhyChooseUs";
import POSCTASection from "@/Compoents/POS/CTA";

export default function POS() {
  return (
    <>
    <div>
      <HeroSection />
      <POSSection />
      <POSFeaturesSection />
      <POSBenefitsSection />
      <WhyChooseSection />
      <POSCTASection />
    </div>
    </>
  )
}

