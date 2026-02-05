import TestimonialHero from "@/Compoents/Testimonail/Hero";
import TestimonialsSection from "@/Compoents/Testimonail/TestimonialsSection";

import { getPageData,generateMetadataFromPageData } from "@/lib/pageData";

/* ✅ Dynamic SEO from MongoDB */
export async function generateMetadata() {
  const pageData = await getPageData("testimonals");
  return generateMetadataFromPageData(pageData);
}

export default async function TestimonalsPage() {
  const pageData = await getPageData("testimonals");

  if (!pageData) return null;

  const { hero, testimonials } = pageData.content;

  return (
    <>
      <TestimonialHero data={hero} />
      <TestimonialsSection data={testimonials} />
    </>
  );
}
