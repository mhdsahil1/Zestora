const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimize() {
  console.log('Optimizing images and generating favicons...');

  // 1. Create a beautiful SVG favicon for Zestora
  const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="16" fill="#2B1B12"/>
  <circle cx="32" cy="32" r="24" fill="#C65A00" fill-opacity="0.2"/>
  <path d="M32 12C32 12 44 24 44 34C44 40.6274 38.6274 46 32 46C25.3726 46 20 40.6274 20 34C20 24 32 12 32 12Z" fill="#C65A00"/>
  <path d="M32 16C32 16 41 26 41 34C41 38.9706 36.9706 43 32 43C27.0294 43 23 38.9706 23 34C23 26 32 16 32 16Z" fill="#D4AF37"/>
  <path d="M32 20V40M32 28L37 24M32 34L37 30M32 28L27 24M32 34L27 30" stroke="#2B1B12" stroke-width="2" stroke-linecap="round"/>
  <circle cx="45" cy="45" r="4" fill="#FF3B30"/>
</svg>`;

  fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svgFavicon);
  fs.writeFileSync(path.join(__dirname, '../public/icon.svg'), svgFavicon);
  fs.writeFileSync(path.join(__dirname, '../src/app/icon.svg'), svgFavicon);

  // 2. Read existing icon.png to create compressed versions
  const sourceIcon = path.join(__dirname, '../public/icon.png');
  const svgBuffer = Buffer.from(svgFavicon);

  // Generate 192x192 PNG
  await sharp(svgBuffer)
    .resize(192, 192)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/icon.png'));

  fs.copyFileSync(
    path.join(__dirname, '../public/icon.png'),
    path.join(__dirname, '../src/app/icon.png')
  );

  // Generate apple-touch-icon 180x180
  await sharp(svgBuffer)
    .resize(180, 180)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/apple-icon.png'));

  // Generate 32x32 PNG for favicon.ico conversion
  const icon32Buffer = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  const icon16Buffer = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();

  // Create standard ICO file header containing 16x16 and 32x32 PNG frames
  function createIco(images) {
    const numImages = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // 1 = ICO
    header.writeUInt16LE(numImages, 4);

    const dirSize = 16 * numImages;
    let offset = 6 + dirSize;
    const dirEntries = [];

    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color palette count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // image size
      entry.writeUInt32LE(offset, 12); // image offset
      dirEntries.push(entry);
      offset += img.buffer.length;
    }

    return Buffer.concat([
      header,
      ...dirEntries,
      ...images.map(img => img.buffer)
    ]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: icon16Buffer },
    { width: 32, height: 32, buffer: icon32Buffer }
  ]);

  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icoBuffer);

  // 3. Compress opengraph-image (originally 913KB)
  const ogSourcePath = path.join(__dirname, '../public/opengraph-image.jpg');
  const ogSourceBuffer = fs.readFileSync(ogSourcePath);

  const ogCompressedJpg = await sharp(ogSourceBuffer)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/opengraph-image.jpg'), ogCompressedJpg);
  fs.writeFileSync(path.join(__dirname, '../src/app/opengraph-image.jpg'), ogCompressedJpg);

  const ogCompressedPng = await sharp(ogSourceBuffer)
    .resize(1200, 630, { fit: 'cover' })
    .png({ quality: 80, compressionLevel: 9, palette: true })
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/opengraph-image.png'), ogCompressedPng);
  fs.writeFileSync(path.join(__dirname, '../src/app/opengraph-image.png'), ogCompressedPng);

  console.log('Images optimized successfully!');
  console.log('favicon.ico size:', fs.statSync(path.join(__dirname, '../public/favicon.ico')).size, 'bytes');
  console.log('icon.png size:', fs.statSync(path.join(__dirname, '../public/icon.png')).size, 'bytes');
  console.log('opengraph-image.jpg size:', fs.statSync(path.join(__dirname, '../public/opengraph-image.jpg')).size, 'bytes');
  console.log('opengraph-image.png size:', fs.statSync(path.join(__dirname, '../public/opengraph-image.png')).size, 'bytes');
}

optimize().catch(console.error);
