const fs = require('fs');

const lines = fs.readFileSync('c:/Users/HP/orchids-projects/Zestora/src/data/products.ts', 'utf-8').split('\n');

const products = [];
let currentProduct = {};
let startIndex = -1;
let openBraces = 0;

// Find the start of the products array
let inProductsArray = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('export const products')) {
    inProductsArray = true;
    continue;
  }
  
  if (!inProductsArray) continue;
  
  // Count braces to find object boundaries
  const openCount = (line.match(/\{/g) || []).length;
  const closeCount = (line.match(/\}/g) || []).length;
  
  if (openCount > 0 && openBraces === 0) {
    startIndex = i;
    currentProduct = { startLine: i + 1 };
  }
  
  openBraces += openCount;
  openBraces -= closeCount;
  
  const idMatch = line.match(/"?id"?:\s*["']([^"']+)["']/);
  if (idMatch) {
    currentProduct.id = idMatch[1];
  }
  
  const nameMatch = line.match(/"?name"?:\s*["']([^"']+)["']/);
  if (nameMatch) {
    currentProduct.name = nameMatch[1];
  }
  
  if (openBraces === 0 && startIndex !== -1 && currentProduct.id) {
    currentProduct.endLine = i + 1;
    products.push(currentProduct);
    currentProduct = {};
    startIndex = -1;
  }
}

const nameMap = {};
const idMap = {};
const duplicates = [];

products.forEach(p => {
  if (nameMap[p.name]) {
    nameMap[p.name].push(p);
  } else {
    nameMap[p.name] = [p];
  }
  
  if (idMap[p.id]) {
    idMap[p.id].push(p);
  } else {
    idMap[p.id] = [p];
  }
});

console.log("--- Duplicate Names ---");
for (const [name, items] of Object.entries(nameMap)) {
  if (items.length > 1) {
    console.log(`Name: "${name}" (${items.length} times)`);
    items.forEach(item => {
      console.log(`  ID: ${item.id}, Lines: ${item.startLine}-${item.endLine}`);
      duplicates.push(item);
    });
  }
}

console.log("--- Duplicate IDs ---");
for (const [id, items] of Object.entries(idMap)) {
  if (items.length > 1) {
    console.log(`ID: "${id}" (${items.length} times)`);
    items.forEach(item => {
      console.log(`  Name: ${item.name}, Lines: ${item.startLine}-${item.endLine}`);
    });
  }
}
