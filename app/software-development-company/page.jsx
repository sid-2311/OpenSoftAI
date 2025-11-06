import BusinessTransformationSection from "@/Compoents/Software/BusinessTransformation";
import FinalCTA from "@/Compoents/Software/CTA";
import DevelopmentApproach from "@/Compoents/Software/DevlopmentApproch";
import HeroSection from "@/Compoents/Software/Hero";
import SoftwareIndustries from "@/Compoents/Software/SoftwareIndustries";
import SoftwareServices from "@/Compoents/Software/SoftwareServices";

export const metadata = {
  title: "Software Development Solution Company in India | Opensoft AI",
  description: "Opensoft AI is a leading software development  solution company in India offering custom web, mobile, and AI-driven solutions to help businesses innovate and scale.",
  keywords: [
    "custom software development",
    "enterprise software solutions",
    "web application development",
    "software consulting",
    "OpenSoftAI",
    "business automation",
    "SaaS development",
    "software engineering",
  ],
  openGraph: {
    title: "Software Development Solution Company in India | Opensoft AI",
    description: "Opensoft AI is a leading software development  solution company in India offering custom web, mobile, and AI-driven solutions to help businesses innovate and scale.",
    url: "https://opensoftai.com/software-development-company",
    type: "website",
    images: [
      {
        url: "https://opensoftai.com/soft.avif",
        alt: "Custom Software Development Banner",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },

   alternates: {
    canonical: "https://opensoftai.com/software-development-company",
  },
};


export default function Software(){
    return(
        <>
        <HeroSection/>
        <BusinessTransformationSection/>
        <SoftwareServices/>
        <SoftwareIndustries/>
        <DevelopmentApproach/>
        <FinalCTA/>
        </>
    )
}