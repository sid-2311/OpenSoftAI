const fs = require('fs');
const path = require('path');

// Component directories to process
const componentDirs = [
  'Blockchain',
  'AiServices',
  'SmartContract',
  'Software',
  'nftmarketplace',
  'BlockchainCryptoWallet',
  'TokenDevelopment',
  'DefiDex',
  // Add more as needed
];

const componentsDir = path.join(__dirname, '..', 'Compoents');

console.log('Starting component refactoring...\n');

let refactoredCount = 0;
let skippedCount = 0;

componentDirs.forEach(dir => {
  const dirPath = path.join(componentsDir, dir);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if already refactored (has data prop)
      if (content.includes('{ data }') || content.includes('{data}')) {
        console.log(`⏭️  Already refactored: ${dir}/${file}`);
        skippedCount++;
        return;
      }

      // Skip if it's a client component without export default
      if (!content.includes('export default')) {
        console.log(`⏭️  No default export: ${dir}/${file}`);
        skippedCount++;
        return;
      }

      // Add data prop to function signature
      // Match: export default function ComponentName()
      content = content.replace(
        /(export\s+default\s+function\s+\w+\s*)\(\s*\)/g,
        '$1({ data })'
      );

      // Also handle: export default function ComponentName({ })
      content = content.replace(
        /(export\s+default\s+function\s+\w+\s*)\(\s*\{\s*\}\s*\)/g,
        '$1({ data })'
      );

      // Add a comment at the top about dynamic data
      if (!content.includes('// Dynamic data from API')) {
        const importEndIndex = content.lastIndexOf('import ');
        if (importEndIndex !== -1) {
          const nextLineIndex = content.indexOf('\n', importEndIndex);
          if (nextLineIndex !== -1) {
            content = content.slice(0, nextLineIndex + 1) + 
                     '\n// Dynamic data from API - use data prop to access section data\n' +
                     content.slice(nextLineIndex + 1);
          }
        }
      }

      // Write back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Refactored: ${dir}/${file}`);
      refactoredCount++;
      
    } catch (error) {
      console.log(`❌ Error processing ${dir}/${file}:`, error.message);
    }
  });
});

console.log(`\n✨ Refactoring complete!`);
console.log(`   ✅ Refactored: ${refactoredCount} components`);
console.log(`   ⏭️  Skipped: ${skippedCount} components`);
console.log(`\n⚠️  Note: Components now accept data prop, but you may need to manually update`);
console.log(`   the component logic to use data instead of hardcoded values.`);
