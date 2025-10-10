import TermsPage from "@/Compoents/Terms/Terms";


export const metadata = {
  title: "Terms & Conditions | OpenSoftAI Software Development Agreement",
  description: "Explore the Terms & Conditions for OpenSoftAI's software development services. Understand our role, your responsibilities, and legal compliance requirements. This agreement outlines our commitment to delivering quality technical solutions tailored to your business needs.",
  keywords: [
    "OpenSoftAI Terms and Conditions",
    "software development agreement",
    "OpenSoftAI legal policy",
    "development services terms",
    "client agreement",
    "AI software terms",
    "OpenSoftAI policies",
    "website development contract",
  ],
  openGraph: {
    title: "Terms & Conditions | OpenSoftAI Software Development Agreement",
    description:"Explore the Terms & Conditions for OpenSoftAI's software development services. Understand our role, your responsibilities, and legal compliance requirements. This agreement outlines our commitment to delivering quality technical solutions tailored to your business needs.",
    url: "https://opensoftai.com/term-conditions",
    type: "website",
    
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://opensoftai.com/term-conditions",
  },
};


export default function Terms(){
  return(
    <>
    <TermsPage/>
    </>
  )
}