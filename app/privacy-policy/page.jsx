import PrivacyPolicy from "@/Compoents/privacy/Privacy";


export const metadata = {
  title: "Privacy Policy | Opensoft AI – Data Security & Protection",
  description:
    "Read Opensoft AI’s Privacy Policy to understand how we collect, use, and protect your personal data. We ensure full transparency and data security compliance.",
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