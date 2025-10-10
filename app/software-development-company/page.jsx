import BusinessTransformationSection from "@/Compoents/Software/BusinessTransformation";
import FinalCTA from "@/Compoents/Software/CTA";
import DevelopmentApproach from "@/Compoents/Software/DevlopmentApproch";
import HeroSection from "@/Compoents/Software/Hero";
import SoftwareIndustries from "@/Compoents/Software/SoftwareIndustries";
import SoftwareServices from "@/Compoents/Software/SoftwareServices";

export const metadata = {
  title: "Custom AI Software Development Company",
  description: "At OpenSoft AI, we provide custom software development services tailored to your business — web apps, mobile apps, enterprise systems, SaaS, ERP, inventory & HR software. Build solutions that scale, integrate, and deliver measurable value.",
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
    title: "Custom AI Software Development Company",
    description: "At OpenSoft AI, we provide custom software development services tailored to your business — web apps, mobile apps, enterprise systems, SaaS, ERP, inventory & HR software. Build solutions that scale, integrate, and deliver measurable value.",
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