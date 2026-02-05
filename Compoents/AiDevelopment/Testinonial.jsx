"use client";

import TestimonialsSection from "../ui/Testimonail";

export default function TestAIAutomation({ data }) {
  if (!data) return null;

  return (
    <main>
      <TestimonialsSection
        title={data.title}
        testimonials={data.testimonials}
        darkMode={data.darkMode}
      />
    </main>
  );
}
