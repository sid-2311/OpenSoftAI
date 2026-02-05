"use client";
import TestimonialsSection from "../ui/Testimonail";

export default function TestAIConsulting({ data }) {
  const section = data?.testimonials || {};
  const testimonialsData = section.list || [];

  if (!section.heading) return null;

  return (
    <main>
      <TestimonialsSection
        title={section.heading}
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  );
}
