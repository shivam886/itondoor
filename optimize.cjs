const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoriesToOptimize = [
  path.join(__dirname, 'src/assets/hero section images'),
  path.join(__dirname, 'src/assets/after herosection')
];

async function optimizeImages() {
  for (const dir of directoriesToOptimize) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const filePath = path.join(dir, file);
        const webpPath = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
        
        // Skip if already optimized
        if (fs.existsSync(webpPath)) continue;
        
        console.log(`Optimizing: ${file} to webp`);
        
        try {
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .webp({ quality: 80, effort: 6 })
            .toFile(webpPath);
            
          console.log(`Successfully created: ${webpPath}`);
        } catch (error) {
          console.error(`Error optimizing ${file}:`, error);
        }
      }
    }
  }
  console.log('Finished optimizing all images to WebP!');
}

optimizeImages();
