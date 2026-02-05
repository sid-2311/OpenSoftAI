import TestimonialsSection from "../ui/Testimonail";

// Dynamic data from API - use data prop to access section data

export default function TestSmartContractDevelopment({ data }) {
  // Extract section data
  const section = data?.testimonialsSection || {};
  const itemsData = section.testimonials || [];

  const testimonials = itemsData.map(item => ({
    name: item.name,
    company: item.company,
    image: item.image,
    alt: item.alt,
    quote: item.quote,
  }));

  if (testimonials.length === 0) return null;

  return (
    <main>
      <TestimonialsSection
        title={section.title || "What Our Clients Achieve"}
        testimonials={testimonials}
        darkMode={section.theme === 'dark'}
      />
    </main>
  );
}