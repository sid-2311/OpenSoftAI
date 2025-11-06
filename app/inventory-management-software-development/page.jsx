import HeroSection from "@/Compoents/IM/Hero"
import IMSection from "@/Compoents/IM/Intro"
import IMFeaturesSection from "@/Compoents/IM/Feature"
import IMImpactSection from "@/Compoents/IM/Benifits"
import WhyChooseSection from "@/Compoents/IM/WhyChooseUs"
import IMCTASection from "@/Compoents/IM/CTA"

export default function IM() {
  return (
    <>
    <div>
      <HeroSection />
      <IMSection />
      <IMFeaturesSection />
      <IMImpactSection />
      <WhyChooseSection />
      <IMCTASection />
    </div>
    </>
  )
}
