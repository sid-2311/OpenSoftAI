import TestimonialsSection from "../ui/Testimonail";

export default function TestAIAutomation({ data }) {
  const section = data?.testimonials || {};
  const testimonialsData = section.items || [];

  if (!section.title) return null;

  return (
    <main>
      <TestimonialsSection
        title={section.title}
        testimonials={testimonialsData}
        darkMode={true}
      />
    </main>
  );
}
