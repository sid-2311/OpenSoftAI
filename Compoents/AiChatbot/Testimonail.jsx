"use client";

import TestimonialsSection from "../ui/Testimonail";

export default function TestAIChatbot({ data }) {
  // ✅ Correct CMS mapping
  const section = data?.testimonials || {};
  const testimonials = section.items || [];

  if (!testimonials.length) return null;

  return (
    <main>
      <TestimonialsSection
        title={section.heading || "What People Actually Tell Us"}
        description={section.description}
        testimonials={testimonials}
        darkMode={true}
      />
    </main>
  );
}
