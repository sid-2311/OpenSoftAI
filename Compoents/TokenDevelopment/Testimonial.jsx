import TestimonialsSection from "../ui/Testimonail";

const testimonialsData = [
  {
    name: "Daniel Hayes",
    company: "Co-Founder, Finova Labs",
    image: "/images/Smiling-man-in-black-and-white-portrait.jpg",
    alt: "blockchain developers reviewing token architecture",
    quote:
      "OpenSoftAI developed our ERC-20 token with full compliance and seamless exchange integration, helping us raise $5M in funding. Their tokenomics strategy was spot-on for our business model.",
  },
  {
    name: "Elena Patel",
    company: "CTO, ChainSphere Technologies",
    image: "/images/Professional-woman-in-office-chair.jpg",
    alt: "multi-chain blockchain dashboard interface",
    quote:
      "The team understood our complex requirements for a multi-chain utility token and delivered exactly what we needed. Six months later, we're processing thousands of transactions daily with zero issues.",
  },
];






export default function TestTokenDevelopment(){
  return(
   <main>
      <TestimonialsSection
        title="What people say about OpenSoftAI"
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  )
}