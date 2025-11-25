"use client";

import { Quote } from "lucide-react";
import TestimonialsSection from "../ui/Testimonail";


const testimonialsData=[
 
  
    {
      "name": "Manoj Sharma",
      "company": "CTO at Zennox",
      "image": "/images/testimonials/manoj-sharma.jpg",
      "alt": "Manoj Sharma - CTO at Zennox",
      "quote": "OpenSoftAI delivered an intelligent chatbot that truly understands user intent. Unlike traditional bots, it responds naturally, asks smart follow-up questions, and significantly reduced our support load."
    },
   
  ]



export default function TestAIAutomation() {
  return (
    <main>
         <TestimonialsSection
           title="Real Stories From Real Client "
           testimonials={testimonialsData}
           darkMode={true}
         />
       </main>
  );
}
