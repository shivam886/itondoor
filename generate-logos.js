import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoDir = path.join(__dirname, 'src', 'assets', 'logo');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
}

const getSvg = (variant) => {
  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';
  
  const textITon = isDark ? '#FFFFFF' : (isMono ? '#000000' : '#0F172A');
  const textDoor = isMono ? '#000000' : '#2563EB';
  const iconColor = isMono ? '#000000' : '#2563EB';

  const iconOnlySvg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="70" height="50" rx="4" stroke="${iconColor}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 30 85 L 70 85" stroke="${iconColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 50 70 L 50 85" stroke="${iconColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;

  const horizontalSvg = `<svg viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 0)">
      <rect x="15" y="20" width="70" height="50" rx="4" stroke="${iconColor}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 30 85 L 70 85" stroke="${iconColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 50 70 L 50 85" stroke="${iconColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <text x="100" y="66" font-family="Inter, sans-serif" font-weight="800" font-size="52" letter-spacing="-1" fill="${textITon}">ITon</text>
    <text x="210" y="66" font-family="Inter, sans-serif" font-weight="800" font-size="52" letter-spacing="-0.5" fill="${textDoor}">Door</text>
  </svg>`;
  
  const squareSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${isDark ? '#0F172A' : '#FFFFFF'}" />
    <g transform="translate(50, 40)">
      <rect x="15" y="20" width="70" height="50" rx="4" stroke="${iconColor}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 30 85 L 70 85" stroke="${iconColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 50 70 L 50 85" stroke="${iconColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <text x="100" y="150" text-anchor="middle" font-family="Inter, sans-serif" font-weight="800" font-size="32" letter-spacing="-1" fill="${textITon}">ITon<tspan fill="${textDoor}">Door</tspan></text>
  </svg>`;

  return { iconOnlySvg, horizontalSvg, squareSvg };
};

async function generate() {
  console.log('Generating SVG files...');
  const light = getSvg('light');
  const dark = getSvg('dark');
  const mono = getSvg('monochrome');

  fs.writeFileSync(path.join(logoDir, 'logo-light.svg'), light.horizontalSvg);
  fs.writeFileSync(path.join(logoDir, 'logo-dark.svg'), dark.horizontalSvg);
  fs.writeFileSync(path.join(logoDir, 'logo-monochrome.svg'), mono.horizontalSvg);
  fs.writeFileSync(path.join(logoDir, 'logo-icon.svg'), light.iconOnlySvg);
  fs.writeFileSync(path.join(logoDir, 'logo-square.svg'), light.squareSvg);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), light.iconOnlySvg);

  console.log('Generating PNG files...');
  // Transparent PNG (Horizontal)
  await sharp(Buffer.from(light.horizontalSvg))
    .png()
    .toFile(path.join(logoDir, 'logo-primary-transparent.png'));
    
  await sharp(Buffer.from(dark.horizontalSvg))
    .png()
    .toFile(path.join(logoDir, 'logo-dark-transparent.png'));

  // Favicon (32x32 and 192x192)
  await sharp(Buffer.from(light.iconOnlySvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
    
  // App Icon (512x512 with padding)
  await sharp(Buffer.from(light.squareSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(logoDir, 'app-icon-512.png'));
    
  console.log('All logo assets generated successfully!');
}

generate().catch(console.error);
