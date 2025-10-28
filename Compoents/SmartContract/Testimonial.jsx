import TestimonialsSection from "../ui/Testimonail";


const testimonialsData = [
  {
    name: "Liam Carter",
    company: "Founder, DeFiNova Protocol",
    image: "/images/defi-smart-contracts.jpg",
    alt: "developers auditing DeFi smart contracts",
    quote:
      "OpenSoft AI built and audited our DeFi smart contracts, ensuring zero vulnerabilities and a seamless launch. Their attention to economic attack vectors saved our protocol from potential exploits.",
  },
  {
    name: "Sophia Nguyen",
    company: "Product Lead, MetaMint NFT",
    image: "/images/nft-smart-contracts.jpg",
    alt: "NFT trading dashboard with blockchain analytics",
    quote:
      "The NFT smart contracts they developed handle millions in trading volume daily without any issues. Their gas optimization work keeps our users happy even during network congestion.",
  },
  {
    name: "Ethan Brooks",
    company: "CTO, ChainTrust Labs",
    image: "/images/smart-contract-architecture.jpg",
    alt: "blockchain team reviewing smart contract architecture",
    quote:
      "Working with OpenSoft AI felt like having senior smart contract architects on our team. They anticipated edge cases we never would have thought of.",
  },
];



export default function TestSmartContractDevelopment(){
  return(
   <main>
      <TestimonialsSection
        title="What Our Clients Achieve"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}