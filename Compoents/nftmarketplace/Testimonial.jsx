import TestimonialsSection from "../ui/Testimonail";



const testimonialsData = [
  {
    name: "Ava Thompson",
    company: "Founder, Artify Marketplace",
    image: "/images/nft-marketplace-launch.jpg",
    alt: "creators launching NFT marketplace",
    quote:
      "OpenSoft AI built our NFT marketplace with custom minting and auction features. We onboarded 5,000 creators in our first month and processed over $2M in sales.",
  },
  {
    name: "Liam Chen",
    company: "CTO, MetaPlay Studios",
    image: "/images/multi-chain-gaming-marketplace.jpg",
    alt: "gaming marketplace with cross-chain trading",
    quote:
      "Their multi-chain architecture was perfect for our gaming marketplace. Players can seamlessly trade assets across different blockchain networks without thinking about technical complexity.",
  },
  {
    name: "Sophia Martinez",
    company: "Director, CreatorHub Network",
    image: "/images/nft-royalty-system.jpg",
    alt: "royalty management system for NFT creators",
    quote:
      "The royalty management system they built ensures our artists get paid automatically on every resale. It's created a sustainable creator economy that keeps growing.",
  },
];



export default function TestNFTDevelopment(){
  return(
   <main>
      <TestimonialsSection
        title="What people say about OpenSoft AI"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}