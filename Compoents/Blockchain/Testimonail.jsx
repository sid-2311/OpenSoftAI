"use client";

import TestimonialsSection from "../ui/Testimonail";
import DynamicIcon from "@/Compoents/DynamicIcon";


// Dynamic data from API - use data prop to access section data

export default function TestBlockChain({ data }) {
  const section = data?.blockchainTestimonialsSection || {};
  const testimonials = section.testimonials || [];


  return (
    <main>
      <TestimonialsSection
        title={section.title || "What Our Clients Experience"}
        testimonials={testimonials}
        darkMode={section.darkMode !== false}
      />

    </main>
  );
}
