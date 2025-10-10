import ContactSection from "@/Compoents/Home/Contact";
import CoreServices from "@/Compoents/Home/CoreServices";
import Hero from "@/Compoents/Home/Hero";
import Industries from "@/Compoents/Home/Industries";
import TestimonialsSection from "@/Compoents/Home/Testimonail";
import WhoWeAre from "@/Compoents/Home/WhoweAre";
import WhyChooseOpenSoftAI from "@/Compoents/Home/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <WhoWeAre/>
    <CoreServices/>
    <WhyChooseOpenSoftAI/>
    <TestimonialsSection/>
    <Industries/>
    <ContactSection/>
    
    </>
  );
}
