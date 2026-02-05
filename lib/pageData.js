/**
 * Utility function to fetch page data from MongoDB API
 * @param {string} slug - The page slug to fetch data for
 * @returns {Promise<Object|null>} Page data or null if not found
 */
export async function getPageData(slug) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000';
    const res = await fetch(`${apiUrl}/api/pages/slug/${slug}`, {
      next: { revalidate: 60 }, // ISR with 60-second revalidation
    });

    if (!res.ok) {
      console.error(`Failed to fetch page data for slug: ${slug}`);
      return null;
    }

    const response = await res.json();
    return response?.data || null;
  } catch (error) {
    console.error(`Error fetching page data for slug "${slug}":`, error);
    return null;
  }
}

/**
 * Generate metadata from page data
 * @param {Object} pageData - Page data from API
 * @returns {Object} Next.js metadata object
 */
export function generateMetadataFromPageData(pageData) {
  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  // Check for metadata in different locations (home vs other pages)
  const metadata = pageData.content?.metadata || pageData.content?.seo || {};

  return {
    title: metadata.title || pageData.title || 'OpenSoftAI',
    description: metadata.description || '',
    keywords: metadata.keywords || [],
    alternates: {
      canonical: metadata.canonical || metadata.alternates?.canonical,
    },
    openGraph: {
      title: metadata.openGraph?.title || metadata.title,
      description: metadata.openGraph?.description || metadata.description,
      url: metadata.openGraph?.url,
      locale: metadata.openGraph?.locale,
      type: metadata.openGraph?.type || 'website',
    },
    robots: metadata.robots || {
      index: true,
      follow: true,
    },
  };
}
