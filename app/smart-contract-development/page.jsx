import BusinessBenefitsSection from "@/Compoents/SmartContract/Benifits";
import CapabilitiesSection from "@/Compoents/SmartContract/Capablities";
import SmartContractCTA from "@/Compoents/SmartContract/CTA";
import ExpertiseSection from "@/Compoents/SmartContract/Expertise";
import BlockchainHero from "@/Compoents/SmartContract/Hero";
import SmartContractSection from "@/Compoents/SmartContract/Intro";
import TestSmartContractDevelopment from "@/Compoents/SmartContract/Testimonial";
import WhyChooseUsSection from "@/Compoents/SmartContract/WhyChooseUs";


export const metadata = {
  title: "Smart Contract Development & Auditing | OpenSoftAI",
  description:
    "Develop secure, gas-optimized smart contracts with OpenSoftAI. We offer auditing, custom logic, and bug-free deployment across Ethereum, BSC, Polygon, and more.",
  alternates: {
    canonical: "https://opensoftai.com/smart-contract-development/",
  },
  robots: {
    index: true,
    follow: true,
  },
};




export default function SmartContract(){
    return(
        <>
        <BlockchainHero/>
        <SmartContractSection/>
        <ExpertiseSection/>
        <CapabilitiesSection/>
        <BusinessBenefitsSection/>
        <WhyChooseUsSection/>
        <TestSmartContractDevelopment/>
        <SmartContractCTA/>
        </>
    )
}