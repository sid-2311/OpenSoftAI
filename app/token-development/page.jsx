import BusinessBenefitsSection from "@/Compoents/TokenDevelopment/Benifits";
import CapabilitiesSection from "@/Compoents/TokenDevelopment/Capablities";
import CTASection from "@/Compoents/TokenDevelopment/CTA";
import ExpertiseSection from "@/Compoents/TokenDevelopment/Expertise";
import HeroSection from "@/Compoents/TokenDevelopment/Hero";
import TokenDevelopmentSection from "@/Compoents/TokenDevelopment/Intro";
import TestTokenDevelopment from "@/Compoents/TokenDevelopment/Testimonial";
import WhyChooseUsSection from "@/Compoents/TokenDevelopment/WhyChooseus";


export const metadata = {
  title: "Token Development Services | ERC-20, BEP-20 & Custom Tokens | OpenSoftAI",
  description:
    "Create your own token with OpenSoftAI’s token development services. We build ERC-20, BEP-20 & custom blockchain tokens with robust security and smart contract audit.",
  alternates: {
    canonical: "https://opensoftai.com/token-development/",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function TokenDevelopment(){
    return(
        <>
        <HeroSection/>
        <TokenDevelopmentSection/>
        <ExpertiseSection/>
        <CapabilitiesSection/>
        <BusinessBenefitsSection/>
        <WhyChooseUsSection/>
        <TestTokenDevelopment/>
        <CTASection/>
        </>
    )
}