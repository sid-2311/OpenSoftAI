import TestimonialsSection from "../ui/Testimonail";


const testimonialsData = [
  {
    name: "Sarah Chen",
    company: "CEO, CryptoTrade Pro",
    image: "/images/crypto-exchange-ai.jpg",
    alt: "crypto exchange dashboard showing transactions",
    quote:
      "OpenSoft AI built our multi-currency crypto exchange from the ground up, and it's been flawless. We're processing over 10,000 transactions daily with zero downtime. Their security architecture gave us confidence to launch, and their ongoing support keeps us running smoothly. We've grown from zero to 100,000+ users in eight months.",
  },
  {
    name: "Michael Rodriguez",
    company: "CTO, Digital Asset Custody",
    image: "/images/crypto-custody-ai.jpg",
    alt: "team managing digital asset custody system",
    quote:
      "The institutional wallet solution OpenSoft AI developed for us exceeded all expectations. The multi-signature security, compliance features, and API integration have made us the preferred custody solution for several major crypto funds. We're now managing over $500M in digital assets with complete confidence.",
  },
  {
    name: "David Park",
    company: "Founder, DefiSwap Exchange",
    image: "/images/defi-exchange-ai.jpg",
    alt: "defi exchange dashboard with liquidity metrics",
    quote:
      "Working with OpenSoft AI on our DeFi exchange was exceptional. They understood the complexity of AMM protocols and built a platform that's both user-friendly and technically sophisticated. Our total value locked has grown to $50M, and the platform has never had a security incident.",
  },
  {
    name: "Jennifer Walsh",
    company: "COO, Global Crypto Solutions",
    image: "/images/compliance-kyc-aml-ai.jpg",
    alt: "compliance team reviewing KYC/AML dashboard",
    quote:
      "OpenSoft AI's compliance integration saved us months of development time and regulatory headaches. Their KYC/AML system is comprehensive yet user-friendly, and we've passed every regulatory audit since launch. We couldn't have achieved our growth without their expertise.",
  },
];


export default function TestBlockChainCrypto(){
  return(
   <main>
      <TestimonialsSection
        title="What Our Clients Are Experiencing"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}
