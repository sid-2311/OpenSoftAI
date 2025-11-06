import TestimonialsSection from "../ui/Testimonail";


const testimonialsData = [
  {
    quote:
      "OpenSoft AI's outbound calling agent transformed our lead qualification process. We went from our sales team spending 60% of their time on cold calls to focusing entirely on warm, qualified prospects. Our conversion rate improved by 38% in the first quarter.",
    name: "Michael Thompson",
    position: "Sales Director",
    company: "TechStart Solutions",
    image: "/images/crop1.jpg",
    alt: "Michael Thompson from TechStart Solutions",
  },
  {
    quote:
      "The inbound AI agent handles 80% of our customer support calls without human intervention. Our customers love the instant response, and our support team can focus on complex issues that really need human expertise. It's a win-win.",
    name: "Laura Martinez",
    position: "Customer Success Manager",
    company: "FlowCommerce",
    image: "/images/crop3.jpg",
    alt: "Laura Martinez from FlowCommerce",
  },
  {
    quote:
      "What impressed us most was how quickly the AI learned our industry terminology and company processes. Within two weeks, it was handling patient calls better than some of our human staff. The 24/7 availability has been a game-changer for our practice.",
    name: "Dr. James Chen",
    position: "Medical Director",
    company: "Wellness First Clinic",
    image: "/images/crop2.jpg",
    alt: "Dr. James Chen from Wellness First Clinic",
  },
];


  export default function TestAICalling(){
    return(
     <main>
        <TestimonialsSection
          title="What Our Clients Experience"
          testimonials={testimonialsData}
          darkMode={true}
        />
      </main>
    )
  }


