import TestimonialsSection from "../ui/Testimonail";

// Dynamic data from API - use data prop to access section data

export default function TestBlockChainCrypto({ data }) {
  // Extract section data
  const section = data?.testimonials || {};
  const itemsData = section.items || [];

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
        title={section.title || "What Our Clients Are Experiencing"}
        testimonials={testimonials}
        darkMode={section.darkMode ?? true}
      />
    </main>
  );
}
