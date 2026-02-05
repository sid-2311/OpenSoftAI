import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";

import ClientsPage from "@/Compoents/contact-us/Client";
import ContactSection from "@/Compoents/contact-us/ContactSection";
import ConsultationPage from "@/Compoents/contact-us/CTA";

const SLUG = "contact-us";

// ✅ Dynamic metadata from DB
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

export default async function Contact() {
  const pageData = await getPageData(SLUG);

  if (!pageData) return null;

  const content = pageData.content;

  return (
    <>
      <ContactSection data={content.contactSection} />
      <ConsultationPage data={content.consultationCTA} />
      <ClientsPage data={content.clientsSection} />
    </>
  );
}
