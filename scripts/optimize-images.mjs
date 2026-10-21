import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  const illDir = 'public/images/illustrations';
  const brandDir = 'public/images/brand';
  const gifDir = 'public/images/gifs';

  console.log('Optimizing illustrations...');
  const illFiles = fs.readdirSync(illDir);
  for (const file of illFiles) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const inputPath = path.join(illDir, file);
      const outputPath = path.join(illDir, `${name}.webp`);

      // Optimize to max 900px wide, high quality webp
      await sharp(inputPath)
        .resize({ width: 960, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const before = fs.statSync(inputPath).size;
      const after = fs.statSync(outputPath).size;
      console.log(`Converted ${file} (${Math.round(before/1024)}KB) -> ${name}.webp (${Math.round(after/1024)}KB)`);
    }
  }

  // Optimize brand logo for header & footer (display width is ~100-140px, so 360px is 3x retina)
  const logoInput = path.join(brandDir, 'spendly-logo-original.png');
  if (fs.existsSync(logoInput)) {
    const logoOutput = path.join(brandDir, 'spendly-logo-optimized.webp');
    await sharp(logoInput)
      .resize({ width: 360, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(logoOutput);
    console.log('Optimized logo created: spendly-logo-optimized.webp (' + Math.round(fs.statSync(logoOutput).size/1024) + 'KB)');
  }

  // Generate lightweight static poster from the video or GIF for video demo
  const gifInput = path.join(gifDir, 'spendly-dashboard-live.gif');
  if (fs.existsSync(gifInput)) {
    const posterOutput = path.join(gifDir, 'spendly-dashboard-poster.webp');
    await sharp(gifInput, { pages: 1 })
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(posterOutput);
    console.log('Created static video poster: spendly-dashboard-poster.webp (' + Math.round(fs.statSync(posterOutput).size/1024) + 'KB)');
  }
}

optimizeImages().catch(console.error);
