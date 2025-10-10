const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// URLs of your site
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/AboutUs', changefreq: 'monthly', priority: 0.8 },
  { url: '/Contact-Us', changefreq: 'monthly', priority: 0.8 },
  { url: '/BlockChain', changefreq: 'monthly', priority: 0.8 },
  { url: '/Portfolio', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/refund-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/Term-Conditions', changefreq: 'monthly', priority: 0.8 },
  { url: '/SoftWare', changefreq: 'monthly', priority: 0.8 },
  { url: '/AiDevelopment', changefreq: 'monthly', priority: 0.8 },
  { url: '/Testimonals', changefreq: 'monthly', priority: 0.8 },
  { url: '/ai-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/ai-calling-agent', changefreq: 'monthly', priority: 0.8 },
];

async function generateSitemap() {
  try {
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    const sitemapStream = new SitemapStream({ hostname: 'https://opensoftai.com' });
    const writeStream = createWriteStream(sitemapPath);

    // Pipe sitemap to file
    sitemapStream.pipe(writeStream);

    // Write each URL
    urls.forEach((url) => sitemapStream.write(url));

    sitemapStream.end();

    // Wait for stream to finish properly
    await streamToPromise(sitemapStream);

    console.log('✅ Sitemap generated successfully at /public/sitemap.xml');
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
  }
}

generateSitemap();
