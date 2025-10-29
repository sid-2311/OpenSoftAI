import ERPBenefitsSection from "@/Compoents/ERP/Benifits";
import ERPCTASection from "@/Compoents/ERP/CTA";
import ERPFeaturesSection from "@/Compoents/ERP/Feature";
import HeroSection from "@/Compoents/ERP/Hero";
import ERPSection from "@/Compoents/ERP/Intro";
import WhyChooseSection from "@/Compoents/ERP/WhyChooseUs";

export default function ERP(){
    return(
        <>
        <HeroSection/>
        <ERPSection/>
        <ERPFeaturesSection/>
        <ERPBenefitsSection/>
        <WhyChooseSection/>
        <ERPCTASection/>
        </>
    )
}