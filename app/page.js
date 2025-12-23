import ContactSection from "@/Compoents/Home/Contact";
import CoreServices from "@/Compoents/Home/CoreServices";
import Hero from "@/Compoents/Home/Hero";
import Industries from "@/Compoents/Home/Industries";
import TestimonialsSection from "@/Compoents/Home/Testimonail";
import WhoWeAre from "@/Compoents/Home/WhoweAre";
import WhyChooseOpenSoftAI from "@/Compoents/Home/WhyChoose";
import homeData from "@/data/homeData.json";

export default function Home() {
  const {hero,whoweare,coreservices,whychoose,testimonials,industries,contact} = homeData
  return (
    <>
    <Hero data={hero}/>
    <WhoWeAre data={whoweare}/>
    <CoreServices data={coreservices}/>
    <WhyChooseOpenSoftAI data={whychoose}/>
    <TestimonialsSection data={testimonials}/>
    <Industries data={industries}/>
    <ContactSection data={contact}/>
    
    </>
  );
}
