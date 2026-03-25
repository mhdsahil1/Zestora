const fs = require("fs");
const path = require("path");
const https = require("https");
const process = require("process");

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }

      const file = fs.createWriteStream(filepath);
      res.pipe(file);

      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", reject);
  });
};

(async () => {
  const productsFilePath = path.join(__dirname, "../src/data/products.ts");
  let content = fs.readFileSync(productsFilePath, "utf-8");

  // Extract all http/https urls
  const urls = [...new Set([...content.matchAll(/https?:\/\/[^"'\s]+/g)].map(m => m[0]))];
  
  const publicDir = path.join(__dirname, "../public/products");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`Found ${urls.length} unique URLs to process.`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    // Create a safe, unique filename based on the URL hash or last part
    const extMatch = url.match(/\.(jpg|jpeg|png|webp|gif)/i);
    const ext = extMatch ? extMatch[1] : "jpg";
    const filename = `img_${i + 1}_${Date.now()}.${ext}`;
    const filepath = path.join(publicDir, filename);

    try {
      console.log(`[${i+1}/${urls.length}] Downloading ${url}...`);
      await downloadImage(url, filepath);
      
      const newUrl = `/products/${filename}`;
      // Replace all occurrences in the content globally
      // Note: Need to be careful about JSON vs normal quotes, but simple replace works.
      content = content.split(url).join(newUrl);
      successCount++;
    } catch (err) {
      console.error(`❌ Failed: ${url}`, err.message);
      failCount++;
    }
  }

  fs.writeFileSync(productsFilePath, content, "utf-8");

  console.log(`\nDONE 🚀`);
  console.log(`Successfully downloaded: ${successCount}`);
  console.log(`Failed: ${failCount}`);
})();
