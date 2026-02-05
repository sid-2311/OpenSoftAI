const fs = require('fs');
const path = require('path');

// List of pages to update with their slugs
const pagesToUpdate = [
  { dir: 'nft-marketplace-development', slug: 'nft-marketplace-development' },
  { dir: 'crypto-wallet-exchange-platform-development', slug: 'crypto-wallet-exchange-platform-development' },
  { dir: 'token-development', slug: 'token-development' },
  { dir: 'defi-dex-development', slug: 'defi-dex-development' },
  { dir: 'ai-chatbot-development-company', slug: 'ai-chatbot-development-company' },
  { dir: 'ai-calling-agent-development-company', slug: 'ai-calling-agent-development-company' },
  { dir: 'ai-copilot-development-company', slug: 'ai-copilot-development-company' },
  { dir: 'ai-consulting-development-company', slug: 'ai-consulting-development-company' },
  { dir: 'ai-development-company', slug: 'ai-development-company' },
  { dir: 'ai-workflow-automation-development-company', slug: 'ai-workflow-automation-development-company' },
  { dir: 'genrative-ai-development-company', slug: 'genrative-ai-development-company' },
  { dir: 'app-development-services', slug: 'app-development-services' },
  { dir: 'website-development-services', slug: 'website-development-services' },
  { dir: 'saas-software-development', slug: 'saas-software-development' },
  { dir: 'erp-software-development', slug: 'erp-software-development' },
  { dir: 'hospital-management-system', slug: 'hospital-management-system' },
  { dir: 'restaurant-management-system', slug: 'restaurant-management-system' },
  { dir: 'inventory-management-software-development', slug: 'inventory-management-software-development' },
  { dir: 'lms-software-development', slug: 'lms-software-development' },
  { dir: 'pos-system-software-development', slug: 'pos-system-software-development' },
  { dir: 'custom-software-management-development', slug: 'custom-software-management-development' },
];

const appDir = path.join(__dirname, '..', 'app');

console.log('Starting page migration...\n');

pagesToUpdate.forEach(({ dir, slug }) => {
  const pagePath = path.join(appDir, dir, 'page.jsx');
  
  if (!fs.existsSync(pagePath)) {
    console.log(`⚠️  Skipping ${dir} - file not found`);
    return;
  }

  try {
    // Read the existing file
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Extract component imports (everything before 'export const metadata' or 'export default')
    const importMatch = content.match(/^([\s\S]*?)(?=export\s+(?:const\s+metadata|default))/);
    if (!importMatch) {
      console.log(`⚠️  Skipping ${dir} - couldn't parse imports`);
      return;
    }
    
    const imports = importMatch[1].trim();
    
    // Extract component names from the default export
    const componentMatch = content.match(/export\s+default\s+(?:async\s+)?function\s+\w+\s*\(\)\s*\{[\s\S]*?return\s*\([\s\S]*?<>([\s\S]*?)<\/>/);
    if (!componentMatch) {
      console.log(`⚠️  Skipping ${dir} - couldn't parse components`);
      return;
    }
    
    const componentsJSX = componentMatch[1];
    
    // Create new file content
    const newContent = `import { getPageData, generateMetadataFromPageData } from "@/lib/pageData";
${imports}

const SLUG = '${slug}';

// Generate dynamic metadata from database
export async function generateMetadata() {
  const pageData = await getPageData(SLUG);
  return generateMetadataFromPageData(pageData);
}

// Fetch and render page with database content
export default async function Page() {
  const pageData = await getPageData(SLUG);
  
  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Page data not found</p>
    </div>;
  }

  // Extract sections data
  const sections = pageData.content?.sections || pageData.content || {};

  return (
    <>${componentsJSX.replace(/<(\w+)\s*\/>/g, '<$1 data={sections} />')}</>
  );
}
`;

    // Write the new content
    fs.writeFileSync(pagePath, newContent, 'utf8');
    console.log(`✅ Updated ${dir}`);
    
  } catch (error) {
    console.log(`❌ Error updating ${dir}:`, error.message);
  }
});

console.log('\n✨ Migration complete!');
