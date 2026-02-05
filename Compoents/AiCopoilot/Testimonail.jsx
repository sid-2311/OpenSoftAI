"use client";

import TestimonialsSection from "../ui/Testimonail";

export default function TestAICopilot({ data }) {
  if (!data) return null;

  const heading = data?.heading || "Testimonials";
  const testimonials = data?.items || [];

  return (
    <main>
      <TestimonialsSection
        title={heading}
        testimonials={testimonials}
        darkMode={true}
      />
    </main>
  );
}
