import TestimonialsSection from "../ui/Testimonail";

export default function TestAICalling({ data }) {
  if (!data) return null;

  return (
    <main>
      <TestimonialsSection
        title={data.heading}
        testimonials={data.items}
        darkMode={true}
      />
    </main>
  );
}
