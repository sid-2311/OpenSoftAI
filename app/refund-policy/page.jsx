import RefundPolicy from "@/Compoents/refund/Refund";



export const metadata = {
  title: "OpenSoftAI Refund Policy | Cancellations & Payment Terms",
  description:"Review OpenSoftAI’s refund and cancellation policy for software and AI services. Learn when refunds apply, non-refundable cases, and company-initiated cancellation terms.",
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
    title: "OpenSoftAI Refund Policy | Cancellations & Payment Terms",
    description:"Review OpenSoftAI’s refund and cancellation policy for software and AI services. Learn when refunds apply, non-refundable cases, and company-initiated cancellation terms.",
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