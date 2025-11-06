import TermsPage from "@/Compoents/Terms/Terms";


export const metadata = {
  title: "Opensoft AI Terms & Conditions | Legal Use Policy",
  description: "Read the official Terms & Conditions of Opensoft AI. Learn about user rights, responsibilities, and our policies for AI and software development services.",
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
    title: "Opensoft AI Terms & Conditions | Legal Use Policy",
    description:"Read the official Terms & Conditions of Opensoft AI. Learn about user rights, responsibilities, and our policies for AI and software development services.",
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