const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update the interface
const newInterface = `export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subCategory?: string;
  price: number;
  originalPrice?: number;
  weight: string;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  origin: string;
  healthBenefits: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  
  // Sensory Gap & Educational Features
  flavorProfile?: { aroma: number; freshness: number; spiciness: number; notes: string[] };
  recipe?: { name: string; ingredients: { name: string; quantity: string }[] };
  storageTips?: string;
  traceability?: { batchNo: string; harvestDate: string; farmName: string };
  grindingVideoUrl?: string;
  
  // Navigation Filters
  cuisine?: string[];
  dietary?: string[];
  
  subscribeAndSaveDiscount?: number;
}`;

content = content.replace(/export interface Product \{[\s\S]*?\}\n/, newInterface + "\n");

// 2. Extract the array string
const arrayMatch = content.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
  console.log("Could not find the products array");
  process.exit(1);
}

const arrayStr = arrayMatch[1];
// Evaluate it securely just by assigning
let products = eval(arrayStr);

// 3. Process each product
products.forEach((p) => {
  // Navigation & Discovery
  if (["Daily Groceries", "Premium Spices"].includes(p.category) || p.subCategory === "Spices") {
    p.cuisine = [];
    if (p.origin.includes("India")) p.cuisine.push("Indian");
    if (p.origin.includes("Spain") || p.origin.includes("Italy")) p.cuisine.push("Mediterranean");
    if (p.origin.includes("Mexico")) p.cuisine.push("Latin");
    if (p.cuisine.length === 0) p.cuisine.push("Global");

    p.dietary = ["Vegan", "Gluten-Free"];
    if (p.healthBenefits.some(b => b.toLowerCase().includes("anti-inflammatory"))) {
      p.dietary.push("Anti-inflammatory");
    }
  }

  // Sensory Gap & Educational Content
  p.storageTips = "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.";
  p.traceability = {
    batchNo: "BATCH-" + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
    harvestDate: "Oct 2025",
    farmName: p.origin + " Cooperative"
  };
  p.subscribeAndSaveDiscount = 15;

  // Specific overrides based on user prompt requirements
  if (p.name.includes("Thalassery Black Pepper") || p.slug === "Thalassery-black-pepper") {
    p.flavorProfile = { aroma: 4, freshness: 5, spiciness: 3, notes: ["Woody", "Piney", "Sharp"] };
  } else if (p.name.includes("Organic Turmeric")) {
    p.flavorProfile = { aroma: 3, freshness: 4, spiciness: 1, notes: ["Earthy", "Mustard-like", "Bright"] };
    p.recipe = {
      name: "Golden Milk Latte",
      ingredients: [
        { name: "Organic Turmeric", quantity: "1 tsp" },
        { name: "Cinnamon Sticks", quantity: "1 stick" },
        { name: "Thalassery Black Pepper", quantity: "A pinch" }
      ]
    };
  } else if (p.name.includes("Cayenne Pepper")) {
    p.flavorProfile = { aroma: 3, freshness: 4, spiciness: 5, notes: ["Pungent", "Fiery", "Sharp"] };
  } else if (p.name.includes("Kashmir Saffron")) {
    p.flavorProfile = { aroma: 5, freshness: 5, spiciness: 1, notes: ["Floral", "Honey-like", "Earthy"] };
    p.recipe = {
      name: "Saffron Risotto",
      ingredients: [
        { name: "Kashmir Saffron", quantity: "A pinch" }
      ]
    };
  }

  // Grinding process video
  if (p.name.includes("Turmeric") || p.name.includes("Pepper") || p.name.includes("Powder")) {
    p.grindingVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Placeholder small high quality milling video
  } else if (!p.images[0]) {
    p.grindingVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
  }
});

// Since some IDs might have quotes array might have formatting issues, JSON.stringify is safe
let newArrayStr = JSON.stringify(products, null, 2);

content = content.replace(arrayMatch[0], 'export const products: Product[] = ' + newArrayStr + ';');

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Successfully updated products.ts");
