import AIBusinessSection from "@/Compoents/AiDevelopment/AiBusiness";
import AIExpertiseSection from "@/Compoents/AiDevelopment/AiExpertise";
import AIServicesBenefits from "@/Compoents/AiDevelopment/AiServicesBenifit";
import HeroSection from "@/Compoents/AiDevelopment/Hero";
import IndustriesWeKnow from "@/Compoents/AiDevelopment/Industries";
import TestimonialSection from "@/Compoents/AiDevelopment/Testinonial";
import WhyChooseUs from "@/Compoents/AiDevelopment/WhyChoose";


export const metadata = {
  title: "AI Software Development Services | Custom AI Company",
  description:"Unlock the power of artificial intelligence with our custom AI software development services. Build smart, scalable, and secure AI solutions for your business.",
  keywords: [
    "AI development",
    "machine learning",
    "NLP",
    "artificial intelligence",
    "OpenSoftAI",
    "AI solutions",
  ],
  openGraph: {
    title: "AI Software Development Services | Custom AI Company",
    description: "Unlock the power of artificial intelligence with our custom AI software development services. Build smart, scalable, and secure AI solutions for your business.",
    url: "https://opensoftai.com/ai-development-company",
    images: [
      {
        url: "https://opensoftai.com/artificial intelligence robot using laptop futuristic technology.webp",
        alt: "AI Development Banner",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
   alternates: {
    canonical: "https://opensoftai.com/ai-development-company",
  },
};

export default function AiDevelopment(){
    return(
        <>
        <HeroSection/>
        <AIBusinessSection/>
        <AIExpertiseSection/>
        <AIServicesBenefits/>
        <WhyChooseUs/>
        <IndustriesWeKnow/>
        <TestimonialSection/>
        </>
    )
}