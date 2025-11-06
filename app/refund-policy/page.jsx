import RefundPolicy from "@/Compoents/refund/Refund";



export const metadata = {
  title: "Refund Policy | Opensoft AI – Secure & Transparent Services",
  description:"Read Opensoft AI’s Refund Policy to learn how we handle payments, cancellations, and service refunds with transparency and customer satisfaction in mind.",
  keywords: [
    "OpenSoftAI refund policy",
    "OpenSoftAI cancellation policy",
    "software refund terms",
    "client agreement OpenSoftAI",
    "AI project refund policy",
    "blockchain project refund",
    "software company refund rules",
    "project cancellation OpenSoftAI",
  ],
  openGraph: {
    title: "Refund Policy | Opensoft AI – Secure & Transparent Services",
    description:"Read Opensoft AI’s Refund Policy to learn how we handle payments, cancellations, and service refunds with transparency and customer satisfaction in mind.",
    url: "https://opensoftai.com/refund-policy",
    type: "website",
    
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://opensoftai.com/refund-policy",
  },
};
export default function Refundpolicy(){
  return(
    <>
    <RefundPolicy/>
    </>
  )
}