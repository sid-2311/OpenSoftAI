
import ContactSection from "@/Compoents/Home/Contact";
import CoreServices from "@/Compoents/Home/CoreServices";
import Hero from "@/Compoents/Home/Hero";
import Industries from "@/Compoents/Home/Industries";
import TestimonialsSection from "@/Compoents/Home/Testimonail";
import WhoWeAre from "@/Compoents/Home/WhoweAre";
import WhyChooseOpenSoftAI from "@/Compoents/Home/WhyChoose";

async function getHomeData() {
  const res = await fetch("http://localhost:9000/api/pages/slug/home", { cache: "no-store" });
  const apiData = await res.json();
  if (apiData && apiData.data && apiData.data.content) {
    return apiData.data.content;
  }
  return null;
}

export default async function Home() {
  const homeData = await getHomeData();
  if (!homeData) return <div>Loading...</div>;
  const { hero, whoweare, coreservices, whychoose, testimonials, industries, contact } = homeData;
  return (
    <>
      <Hero data={hero} />
      <WhoWeAre data={whoweare} />
      <CoreServices data={coreservices} />
      <WhyChooseOpenSoftAI data={whychoose} />
      <TestimonialsSection data={testimonials} />
      <Industries data={industries} />
      <ContactSection data={contact} />
    </>
  );
}
