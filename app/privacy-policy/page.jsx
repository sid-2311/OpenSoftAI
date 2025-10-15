import PrivacyPolicy from "@/Compoents/privacy/Privacy";


export const metadata = {
  title: "OpenSoftAI Privacy Policy | Data Protection & Your Rights",
  description:
    "At OpenSoftAI, your privacy is our priority. Discover our policies on personal data collection, cookies, analytics, security, and how you can control your information.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "cookies",
    "personal data",
    "learnhtmlcss.online",
  ],
  openGraph: {
    type: "website",
    url: "https://opensoftai.com/privacy-policy",
    // images: ["/privacy-preview.jpg"], // Uncomment if you have a preview image
  },
  alternates: {
    canonical: "https://opensoftai.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Privacypolicy(){
  return(
    <>
    <PrivacyPolicy/>
    </>
  )
}