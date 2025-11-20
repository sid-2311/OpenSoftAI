import TestimonialsSection from "../ui/Testimonail";

const testimonialsData = [
  {
    name: "Arjun Mehta",
    company: "CEO, NovaDEX",
    image: "/images/defi-exchange-yield-farming.jpg",
    alt: "decentralized exchange platform interface",
    quote:
      "OpenSoftAI built our decentralized exchange with integrated yield farming, and we reached $10M TVL within three months of launch. Their economic modeling was crucial for our sustainable tokenomics.",
  },
  {
    name: "Sophia Nguyen",
    company: "Founder, LendFi Protocol",
    image: "/images/defi-lending-protocol.jpg",
    alt: "defi lending dashboard with analytics",
    quote:
      "The lending protocol they developed has processed over $50M in loans with zero security incidents. Their audit preparation saved us weeks and thousands in audit costs.",
  },
  {
    name: "Ethan Park",
    company: "Head of Product, DeFinance Labs",
    image: "/images/defi-architecture-team.jpg",
    alt: "defi architects collaborating on project",
    quote:
      "Working with OpenSoftAI felt like having a senior DeFi architect on our team. They understood our vision and built exactly what we needed to compete in the market.",
  },
];


export default function TestDefiDexDevelopment(){
  return(
   <main>
      <TestimonialsSection
        title="What Clients Experience says about OpenSoftAI"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}