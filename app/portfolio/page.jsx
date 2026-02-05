import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
import Portfolio from "@/Compoents/Portfolio/Portfolio";

const SLUG = "portfolio";

export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

export default async function PortfolioPage() {
  const pageData = await getPageData(SLUG);
  if (!pageData) return null;

  return <Portfolio sections={pageData.content.sections} />;
}
