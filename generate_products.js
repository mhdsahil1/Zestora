const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, 'src', 'data', 'products.ts');

let content = fs.readFileSync(PRODUCTS_FILE, 'utf8');

// Update Product interface
if (!content.includes('subCategory?: string;')) {
  content = content.replace(
    '  category: string;\n',
    '  category: string;\n  subCategory?: string;\n'
  );
}

// Group existing spice products into Daily Groceries -> Spices
content = content.replace(/category:\s*"([^"]+)",/g, (match, p1) => {
    if (p1 !== 'Daily Groceries' && p1 !== 'Products') {
        return `category: "Daily Groceries",\n    subCategory: "Spices",`;
    }
    return match;
});
content = content.replace(/"category":\s*"([^"]+)",/g, (match, p1) => {
    if (p1 !== 'Daily Groceries' && p1 !== 'Products') {
        return `"category": "Daily Groceries",\n    "subCategory": "Spices",`;
    }
    return match;
});

// ID generator
let nextId = 100;

function createProduct(name, category, subCategory, price, weight, description, shortDescription, origin, tags, imageFallback) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const id = (nextId++).toString();
    const isBestseller = Math.random() > 0.7;
    const isNew = Math.random() > 0.7;
    const rating = (Math.random() * 1 + 4).toFixed(1); // 4.0 to 5.0
    const reviews = Math.floor(Math.random() * 300) + 10;
    
    // Choose specific images based on category or fall back to general ones
    let img = imageFallback;
    if (category === 'Fruits') img = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80"; // Apple/fruits
    if (category === 'Vegetables') img = "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=600&q=80"; // Veggies
    if (category === 'Bakery') img = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"; // Bread
    if (category === 'Sweeteners' && subCategory === 'Forest Honey') img = "https://images.unsplash.com/photo-1587049352847-4d4b1274ce15?w=600&q=80"; // Honey
    
    let subStr = subCategory ? `\n    "subCategory": "${subCategory}",` : '';
    
    return `  {
    "id": "${id}",
    "name": "${name}",
    "slug": "${slug}",
    "category": "${category}",${subStr}
    "price": ${price},
    "weight": "${weight}",
    "image": "${img}",
    "images": ["${img}"],
    "description": "${description}",
    "shortDescription": "${shortDescription}",
    "origin": "${origin}",
    "healthBenefits": ["Rich in nutrients", "Good for digestion", "Boosts immunity"],
    "tags": ${JSON.stringify(tags)},
    "rating": ${rating},
    "reviewCount": ${reviews},
    "inStock": true,
    "featured": ${isBestseller},
    "isNew": ${isNew},
    "isBestseller": ${isBestseller}
  }`;
}

const newProducts = [];

// 1. Chakki Flours (Atta)
// - Wheat base Flour
newProducts.push(createProduct("Premium Sharbati Atta", "Chakki Flours (Atta)", "Wheat base Flour", 8.99, "5kg", "Stone ground sharbati wheat flour.", "Premium MP Sharbati whole wheat atta", "Madhya Pradesh", ["atta", "wheat", "sharbati"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Organic Whole Wheat Atta", "Chakki Flours (Atta)", "Wheat base Flour", 7.99, "5kg", "Certified organic whole wheat flour.", "100% Organic whole wheat flour", "Punjab", ["organic", "wheat", "atta"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Multigrain Atta", "Chakki Flours (Atta)", "Wheat base Flour", 10.99, "5kg", "Wheat mixed with 9 different grains for nutrition.", "Nutritious multigrain wheat flour", "India", ["multigrain", "wheat", "healthy"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Fiber Rich Wheat Atta", "Chakki Flours (Atta)", "Wheat base Flour", 9.49, "5kg", "Extra bran added for high dietary fiber.", "High fiber wheat atta", "India", ["fiber", "wheat", "digestion"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Emmer Wheat Atta", "Chakki Flours (Atta)", "Wheat base Flour", 12.99, "1kg", "Ancient grain emmer wheat flour (Khapli).", "Low GI Khapli wheat flour", "Maharashtra", ["emmer", "khapli", "wheat"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));

// - Millets base flours
newProducts.push(createProduct("Ragi Flour", "Chakki Flours (Atta)", "Millets base flours", 4.99, "1kg", "Finger millet flour rich in calcium.", "Calcium rich ragi atta", "Karnataka", ["ragi", "millet", "flour"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Jowar Flour", "Chakki Flours (Atta)", "Millets base flours", 4.49, "1kg", "Sorghum flour, gluten-free.", "Gluten-free jowar atta", "Maharashtra", ["jowar", "millet", "gluten-free"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Bajra Flour", "Chakki Flours (Atta)", "Millets base flours", 3.99, "1kg", "Pearl millet flour, great for winters.", "Warm and nutritious bajra atta", "Rajasthan", ["bajra", "millet", "flour"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Foxtail Millet Flour", "Chakki Flours (Atta)", "Millets base flours", 5.99, "1kg", "Nutritious foxtail millet flour.", "Healthy foxtail millet flour", "Andhra Pradesh", ["foxtail", "millet", "flour"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Barnyard Millet Flour", "Chakki Flours (Atta)", "Millets base flours", 6.49, "1kg", "Low carb barnyard millet flour.", "Fasting-friendly barnyard millet atta", "Uttarakhand", ["barnyard", "millet", "fasting"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));

// 2. Trail packs
newProducts.push(createProduct("Nutty Trail Mix Pack", "Trail packs", null, 3.49, "150g", "Sample pack of our premium mixed nuts.", "Trial pack of mixed nuts", "Various", ["trial", "nuts", "snack"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Berry & Seed Trail Pack", "Trail packs", null, 3.99, "150g", "Sample pack of dried berries and super seeds.", "Trial pack of berries and seeds", "Various", ["trial", "berries", "seeds"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Tropical Fruit Trail Pack", "Trail packs", null, 4.49, "150g", "Sample pack of dried tropical fruits.", "Trial pack of dried fruits", "India", ["trial", "fruits", "snack"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Spiced Nuts Trail Pack", "Trail packs", null, 3.99, "150g", "Sample pack of roasted and spiced nuts.", "Trial pack of spiced nuts", "India", ["trial", "nuts", "spicy"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Energy Booster Trail Pack", "Trail packs", null, 4.99, "150g", "Sample pack for quick energy.", "Trial pack for energy boosting", "Various", ["trial", "energy", "mix"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));

// 3. Fruits 
newProducts.push(createProduct("Premium Red Apples", "Fruits", null, 5.99, "1kg", "Crisp and sweet premium red apples.", "Fresh crunchy red apples", "Himachal Pradesh", ["apple", "fresh", "fruit"], "https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6?w=600&q=80"));
newProducts.push(createProduct("Cavendish Bananas", "Fruits", null, 2.99, "1kg", "Perfectly ripe and sweet yellow bananas.", "Daily fresh bananas", "Maharashtra", ["banana", "fresh", "fruit"], "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&q=80"));
newProducts.push(createProduct("Alphonso Mangoes", "Fruits", null, 15.99, "1kg", "The king of mangoes, rich and sweet.", "Premium Alphonso mangoes", "Ratnagiri", ["mango", "premium", "fruit"], "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80"));
newProducts.push(createProduct("Green Seedless Grapes", "Fruits", null, 6.49, "500g", "Sweet and crunchy seedless grapes.", "Fresh green grapes", "Nashik", ["grapes", "fresh", "fruit"], "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80"));
newProducts.push(createProduct("Pomegranates", "Fruits", null, 7.99, "1kg", "Ruby red juicy pomegranates.", "Antioxidant rich pomegranates", "Maharashtra", ["pomegranate", "fresh", "fruit"], "https://images.unsplash.com/photo-1615486171448-4cbab1ab67e1?w=600&q=80"));

// 4. Vegetables 
// - Exotic vegetables 
newProducts.push(createProduct("Hass Avocado", "Vegetables", "Exotic vegetables", 4.99, "2 pcs", "Creamy and rich Hass avocados.", "Premium Hass avocado", "Imported", ["avocado", "exotic", "veg"], "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&q=80"));
newProducts.push(createProduct("Asparagus", "Vegetables", "Exotic vegetables", 8.99, "250g", "Fresh green asparagus spears.", "Tender asparagus spears", "Local Farms", ["asparagus", "exotic", "veg"], "https://images.unsplash.com/photo-1512621820109-00995fa11fc0?w=600&q=80"));
newProducts.push(createProduct("Broccoli", "Vegetables", "Exotic vegetables", 3.49, "500g", "Fresh green broccoli heads.", "Nutrient dense broccoli", "Local Farms", ["broccoli", "exotic", "veg"], "https://images.unsplash.com/photo-1512621820109-00995fa11fc0?w=600&q=80"));
newProducts.push(createProduct("Zucchini (Green & Yellow)", "Vegetables", "Exotic vegetables", 4.49, "500g", "Mix of fresh green and yellow zucchinis.", "Fresh crisp zucchinis", "Local Farms", ["zucchini", "exotic", "veg"], "https://images.unsplash.com/photo-1512621820109-00995fa11fc0?w=600&q=80"));
newProducts.push(createProduct("Bell Peppers (Mixed)", "Vegetables", "Exotic vegetables", 5.99, "500g", "Red, yellow, and green bell peppers.", "Colorful bell peppers", "Local Farms", ["bellpeppers", "exotic", "veg"], "https://images.unsplash.com/photo-1512621820109-00995fa11fc0?w=600&q=80"));

// - Ugly harvest Vegetables 
newProducts.push(createProduct("Imperfect Tomatoes", "Vegetables", "Ugly harvest Vegetables", 1.99, "1kg", "Slightly misshapen but perfectly delicious tomatoes.", "Save food with ugly tomatoes", "Local Farms", ["ugly", "tomato", "sustainable"], "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80"));
newProducts.push(createProduct("Odd Carrots", "Vegetables", "Ugly harvest Vegetables", 1.49, "1kg", "Twisted and odd-shaped fresh carrots.", "Discounted odd carrots", "Local Farms", ["ugly", "carrot", "sustainable"], "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80"));
newProducts.push(createProduct("Bumpy Potatoes", "Vegetables", "Ugly harvest Vegetables", 1.29, "1kg", "Potatoes with bumps and bruises, great for mashing.", "Perfectly fine bumpy potatoes", "Local Farms", ["ugly", "potato", "sustainable"], "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80"));
newProducts.push(createProduct("Crooked Cucumbers", "Vegetables", "Ugly harvest Vegetables", 1.79, "1kg", "Curved cucumbers, same great taste.", "Curved imperfect cucumbers", "Local Farms", ["ugly", "cucumber", "sustainable"], "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80"));

// - Leafy Greens 
newProducts.push(createProduct("Fresh Spinach", "Vegetables", "Leafy Greens", 2.49, "250g", "Freshly harvested green spinach leaves.", "Iron packed spinach", "Local Farms", ["leafy", "spinach", "greens"], "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80"));
newProducts.push(createProduct("Coriander Leaves", "Vegetables", "Leafy Greens", 1.49, "100g", "Aromatic fresh coriander cilantro.", "Fresh garnish coriander", "Local Farms", ["leafy", "coriander", "greens"], "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80"));
newProducts.push(createProduct("Mint Leaves", "Vegetables", "Leafy Greens", 1.49, "100g", "Refreshing mint leaves.", "Fresh aromatic mint", "Local Farms", ["leafy", "mint", "greens"], "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80"));
newProducts.push(createProduct("Fenugreek (Methi)", "Vegetables", "Leafy Greens", 2.29, "250g", "Fresh methi leaves.", "Healthy fresh methi", "Local Farms", ["leafy", "methi", "greens"], "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80"));

// - Fresh vegetables
newProducts.push(createProduct("Red Onions", "Vegetables", "Fresh vegetables", 3.49, "1kg", "Staple red onions.", "Premium red onions", "Nasik", ["onions", "fresh", "veg"], "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80"));
newProducts.push(createProduct("Garlic", "Vegetables", "Fresh vegetables", 4.99, "250g", "Strong flavor garlic bulbs.", "Fresh garlic bulbs", "Local Farms", ["garlic", "fresh", "veg"], "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80"));
newProducts.push(createProduct("Cauliflower", "Vegetables", "Fresh vegetables", 2.99, "1 pc", "Fresh whole cauliflower head.", "Crisp cauliflower", "Local Farms", ["cauliflower", "fresh", "veg"], "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80"));
newProducts.push(createProduct("Lady Finger (Bhindi)", "Vegetables", "Fresh vegetables", 3.29, "500g", "Tender lady fingers.", "Fresh green lady fingers", "Local Farms", ["bhindi", "fresh", "veg"], "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80"));
newProducts.push(createProduct("Green Peas", "Vegetables", "Fresh vegetables", 4.49, "500g", "Sweet green peas in pod.", "Fresh sweet peas", "Local Farms", ["peas", "fresh", "veg"], "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80"));

// 5. Millets 
// - Millets Whole and Rava
newProducts.push(createProduct("Whole Ragi (Finger Millet)", "Millets", "Millets Whole and Rava", 3.99, "1kg", "Unpolished whole ragi grains.", "Nutritious whole ragi", "Karnataka", ["ragi", "millet", "whole"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Foxtail Millet Rava", "Millets", "Millets Whole and Rava", 5.49, "500g", "Coarsely ground foxtail millet for upma.", "Healthy foxtail millet rava", "Andhra Pradesh", ["foxtail", "millet", "rava"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Whole Little Millet", "Millets", "Millets Whole and Rava", 6.99, "1kg", "Unpolished whole little millet.", "Diet friendly little millet", "India", ["little", "millet", "whole"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Jowar Rava", "Millets", "Millets Whole and Rava", 4.99, "500g", "Sorghum semolina for healthy breakfast.", "Gluten-free jowar rava", "Maharashtra", ["jowar", "millet", "rava"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Proso Millet Whole", "Millets", "Millets Whole and Rava", 5.99, "1kg", "Premium proso millet grains.", "High protein proso millet", "India", ["proso", "millet", "whole"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));

// 6. Dry Fruits & Seeds
// - Dry Herbs 
newProducts.push(createProduct("Dried Oregano", "Dry Fruits & Seeds", "Dry Herbs", 4.99, "50g", "Aromatic dried oregano leaves.", "Premium dried oregano", "Turkey", ["oregano", "herb", "dried"], "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"));
newProducts.push(createProduct("Dried Basil", "Dry Fruits & Seeds", "Dry Herbs", 4.49, "50g", "Sweet dried basil leaves.", "Aromatic dried basil", "Egypt", ["basil", "herb", "dried"], "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"));
newProducts.push(createProduct("Dried Thyme", "Dry Fruits & Seeds", "Dry Herbs", 5.49, "50g", "Earthy dried thyme leaves.", "Premium dried thyme", "Spain", ["thyme", "herb", "dried"], "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"));
newProducts.push(createProduct("Mixed Italian Herbs", "Dry Fruits & Seeds", "Dry Herbs", 6.99, "100g", "Perfect blend of Italian dried herbs.", "Classic Italian herb mix", "Various", ["mixed", "herb", "italian"], "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"));

// - Dry Fruits 
newProducts.push(createProduct("Premium Almonds", "Dry Fruits & Seeds", "Dry Fruits", 14.99, "500g", "Crunchy California almonds.", "High grade almonds", "California", ["almond", "dryfruit", "nuts"], "https://images.unsplash.com/photo-1508061253366-f7da1580cc42?w=600&q=80"));
newProducts.push(createProduct("Cashew Nuts W320", "Dry Fruits & Seeds", "Dry Fruits", 16.99, "500g", "Whole white cashew nuts.", "Premium whole cashews", "Goa", ["cashew", "dryfruit", "nuts"], "https://images.unsplash.com/photo-1508061253366-f7da1580cc42?w=600&q=80"));
newProducts.push(createProduct("Afghan Raisins", "Dry Fruits & Seeds", "Dry Fruits", 8.99, "500g", "Sweet green raisins.", "Sweet Afghan raisins", "Afghanistan", ["raisin", "dryfruit", "sweet"], "https://images.unsplash.com/photo-1508061253366-f7da1580cc42?w=600&q=80"));
newProducts.push(createProduct("Walnut Kernels", "Dry Fruits & Seeds", "Dry Fruits", 18.99, "500g", "Brain-boosting walnut halves.", "Premium walnut halves", "Kashmir", ["walnut", "dryfruit", "nuts"], "https://images.unsplash.com/photo-1508061253366-f7da1580cc42?w=600&q=80"));
newProducts.push(createProduct("Dried Figs (Anjeer)", "Dry Fruits & Seeds", "Dry Fruits", 15.99, "500g", "Chewy and sweet dried figs.", "High fiber dried figs", "Afghanistan", ["fig", "dryfruit", "sweet"], "https://images.unsplash.com/photo-1508061253366-f7da1580cc42?w=600&q=80"));

// - Super Seeds
newProducts.push(createProduct("Chia Seeds", "Dry Fruits & Seeds", "Super Seeds", 8.99, "250g", "Omega-3 rich raw chia seeds.", "Nutrient dense chia seeds", "Mexico", ["chia", "seed", "superfood"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Pumpkin Seeds", "Dry Fruits & Seeds", "Super Seeds", 7.49, "250g", "Raw green pumpkin seeds.", "Zinc rich pumpkin seeds", "India", ["pumpkin", "seed", "superfood"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Sunflower Seeds", "Dry Fruits & Seeds", "Super Seeds", 5.99, "250g", "Hulled sunflower seeds.", "Vitamin E rich sunflower seeds", "India", ["sunflower", "seed", "superfood"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));
newProducts.push(createProduct("Flax Seeds", "Dry Fruits & Seeds", "Super Seeds", 4.99, "250g", "Roasted flax seeds for digestion.", "Omega-3 rich flax seeds", "India", ["flax", "seed", "superfood"], "https://images.unsplash.com/photo-1599557451034-7bb97bb83ce4?w=600&q=80"));

// 7. Bakery 
// - Condiments 
newProducts.push(createProduct("Tomato Ketchup", "Bakery", "Condiments", 3.99, "500g", "Classic sweet and tangy tomato ketchup.", "Classic tomato ketchup", "India", ["ketchup", "condiment"], "https://images.unsplash.com/photo-1558227691-41ea78d1ef78?w=600&q=80"));
newProducts.push(createProduct("Eggless Mayonnaise", "Bakery", "Condiments", 4.49, "250g", "Creamy veg mayonnaise.", "Thick & creamy mayo", "India", ["mayo", "condiment"], "https://images.unsplash.com/photo-1558227691-41ea78d1ef78?w=600&q=80"));
newProducts.push(createProduct("Kasundi Mustard Sauce", "Bakery", "Condiments", 5.99, "250g", "Spicy Bengali mustard sauce.", "Pungent mustard sauce", "West Bengal", ["mustard", "condiment"], "https://images.unsplash.com/photo-1558227691-41ea78d1ef78?w=600&q=80"));
newProducts.push(createProduct("Chilli Garlic Dip", "Bakery", "Condiments", 4.99, "200g", "Spicy dip for baked snacks.", "Spicy garlic dip", "India", ["dip", "condiment"], "https://images.unsplash.com/photo-1558227691-41ea78d1ef78?w=600&q=80"));

// - Cake & Cookies 
newProducts.push(createProduct("Chocolate Chip Cookies", "Bakery", "Cake & Cookies", 6.99, "200g", "Crunchy cookies with dark chocolate chips.", "Classic choco chip cookies", "In-house Bakery", ["cookie", "chocolate", "baked"], "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80"));
newProducts.push(createProduct("Oatmeal Raisin Cookies", "Bakery", "Cake & Cookies", 5.99, "200g", "Healthy oats and raisin cookies.", "Chewy oatmeal cookies", "In-house Bakery", ["cookie", "oats", "baked"], "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80"));
newProducts.push(createProduct("Dry Fruit Plum Cake", "Bakery", "Cake & Cookies", 12.99, "400g", "Rich plum cake loaded with dry fruits.", "Classic plum cake", "In-house Bakery", ["cake", "plum", "baked"], "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&q=80"));
newProducts.push(createProduct("Almond Biscotti", "Bakery", "Cake & Cookies", 8.99, "150g", "Twice baked crunchy almond biscotti.", "Italian style biscotti", "In-house Bakery", ["biscotti", "almond", "baked"], "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80"));

// - Breads And Buns 
newProducts.push(createProduct("100% Whole Wheat Bread", "Bakery", "Breads And Buns", 4.49, "400g", "Soft and fresh whole wheat bread.", "Healthy wheat bread", "In-house Bakery", ["bread", "wheat", "baked"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Multigrain Bread", "Bakery", "Breads And Buns", 5.49, "400g", "Seeded multigrain sourdough bread.", "Artisan multigrain bread", "In-house Bakery", ["bread", "multigrain", "baked"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Burger Buns (Pack of 4)", "Bakery", "Breads And Buns", 3.99, "200g", "Soft sesame seeded burger buns.", "Classic burger buns", "In-house Bakery", ["bun", "burger", "baked"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));
newProducts.push(createProduct("Garlic Loaf", "Bakery", "Breads And Buns", 6.49, "300g", "Herb and garlic infused bread loaf.", "Aromatic garlic bread", "In-house Bakery", ["bread", "garlic", "baked"], "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"));

// 8. Sweeteners 
// - Jaggery 
newProducts.push(createProduct("Organic Jaggery Powder", "Sweeteners", "Jaggery", 5.99, "500g", "Chemical-free powdered jaggery.", "Unrefined jaggery powder", "Maharashtra", ["jaggery", "sweetener", "organic"], "https://images.unsplash.com/photo-1620960555986-e7ddb54cb116?w=600&q=80"));
newProducts.push(createProduct("Palm Jaggery Block", "Sweeteners", "Jaggery", 7.99, "500g", "Traditional palm jaggery (Karupatti).", "Authentic palm jaggery", "Tamil Nadu", ["jaggery", "palm", "sweetener"], "https://images.unsplash.com/photo-1620960555986-e7ddb54cb116?w=600&q=80"));
newProducts.push(createProduct("Spiced Jaggery Cubes", "Sweeteners", "Jaggery", 6.49, "400g", "Jaggery cubes infused with ginger and cardamom.", "Spiced jaggery bites", "UP", ["jaggery", "spiced", "sweetener"], "https://images.unsplash.com/photo-1620960555986-e7ddb54cb116?w=600&q=80"));

// - Forest Honey
newProducts.push(createProduct("Wild Forest Honey", "Sweeteners", "Forest Honey", 14.99, "500g", "Raw, unfiltered honey collected from deep forests.", "Pure wild forest honey", "Jim Corbett", ["honey", "wild", "raw"], "https://images.unsplash.com/photo-1587049352847-4d4b1274ce15?w=600&q=80"));
newProducts.push(createProduct("Kashmir Acacia Honey", "Sweeteners", "Forest Honey", 18.99, "500g", "Light and sweet acacia flower honey.", "Premium clear acacia honey", "Kashmir", ["honey", "acacia", "premium"], "https://images.unsplash.com/photo-1587049352847-4d4b1274ce15?w=600&q=80"));
newProducts.push(createProduct("Tulsi Infused Honey", "Sweeteners", "Forest Honey", 12.99, "250g", "Raw honey infused with holy basil.", "Immunity boosting tulsi honey", "Himalayas", ["honey", "tulsi", "infused"], "https://images.unsplash.com/photo-1587049352847-4d4b1274ce15?w=600&q=80"));

// - jams 
newProducts.push(createProduct("Mixed Fruit Jam", "Sweeteners", "jams", 5.99, "350g", "Classic fruit jam made with real fruit pulp.", "Real mixed fruit jam", "India", ["jam", "fruit", "sweet"], "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"));
newProducts.push(createProduct("Strawberry Preserve", "Sweeteners", "jams", 7.49, "350g", "Chunky strawberry preserve with low sugar.", "Chunky strawberry preserve", "Mahabaleshwar", ["jam", "strawberry", "preserve"], "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"));
newProducts.push(createProduct("Mango Jalapeno Jam", "Sweeteners", "jams", 8.99, "250g", "Sweet and spicy artisan jam.", "Spicy sweet mango jam", "Artisan Made", ["jam", "mango", "spicy"], "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80"));

// - Sugars
newProducts.push(createProduct("Raw Brown Sugar", "Sweeteners", "Sugars", 4.99, "1kg", "Unrefined brown Demerara sugar.", "Crunchy raw brown sugar", "Mauritius", ["sugar", "brown", "raw"], "https://images.unsplash.com/photo-1620960555986-e7ddb54cb116?w=600&q=80"));
newProducts.push(createProduct("Coconut Sugar", "Sweeteners", "Sugars", 9.99, "500g", "Low GI sugar from coconut blossom sap.", "Healthy coconut sugar", "Kerala", ["sugar", "coconut", "low-gi"], "https://images.unsplash.com/photo-1620960555986-e7ddb54cb116?w=600&q=80"));
newProducts.push(createProduct("Sulphurless White Sugar", "Sweeteners", "Sugars", 3.49, "1kg", "Refined white sugar without sulphur treatment.", "Clean white sugar", "UP", ["sugar", "white", "clean"], "https://images.unsplash.com/photo-1620960555986-e7ddb54cb116?w=600&q=80"));

// 9. Cooking Oils & Ghee
// - Cooking Oils 
newProducts.push(createProduct("Cold Pressed Groundnut Oil", "Cooking Oils & Ghee", "Cooking Oils", 12.99, "1L", "Wood pressed unrefined peanut oil.", "Traditional cold pressed groundnut oil", "Gujarat", ["oil", "groundnut", "cold-pressed"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));
newProducts.push(createProduct("Cold Pressed Mustard Oil", "Cooking Oils & Ghee", "Cooking Oils", 10.99, "1L", "Pungent kacchi ghani mustard oil.", "Strong flavor mustard oil", "Rajasthan", ["oil", "mustard", "cold-pressed"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));
newProducts.push(createProduct("Extra Virgin Olive Oil", "Cooking Oils & Ghee", "Cooking Oils", 24.99, "500ml", "First cold press fine Italian olive oil.", "Premium EVOO", "Italy", ["oil", "olive", "premium"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));
newProducts.push(createProduct("Virgin Coconut Oil", "Cooking Oils & Ghee", "Cooking Oils", 14.99, "500ml", "Edible grade cold pressed coconut oil.", "Raw virgin coconut oil", "Kerala", ["oil", "coconut", "virgin"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));
newProducts.push(createProduct("Sesame (Gingelly) Oil", "Cooking Oils & Ghee", "Cooking Oils", 13.99, "1L", "Cold pressed black sesame oil.", "Aromatic sesame oil", "Tamil Nadu", ["oil", "sesame", "cold-pressed"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));

// - Desi Ghee
newProducts.push(createProduct("A2 Gir Cow Ghee", "Cooking Oils & Ghee", "Desi Ghee", 34.99, "500ml", "Bilona churned A2 ghee from Gir cows.", "Pure A2 Gir cow ghee", "Gujarat", ["ghee", "a2", "bilona"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));
newProducts.push(createProduct("Desi Buffalo Ghee", "Cooking Oils & Ghee", "Desi Ghee", 19.99, "1L", "Rich, grainy buffalo milk ghee.", "Aromatic buffalo ghee", "Punjab", ["ghee", "buffalo", "pure"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));
newProducts.push(createProduct("Infused Garlic Ghee", "Cooking Oils & Ghee", "Desi Ghee", 14.99, "250ml", "Clarified butter infused with roasted garlic.", "Garlic infused desi ghee", "India", ["ghee", "garlic", "infused"], "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"));

// 10. Daily Groceries 
// - Pulses Unpolished
newProducts.push(createProduct("Unpolished Toor Dal", "Daily Groceries", "Pulses Unpolished", 6.99, "1kg", "Natural pigeon pea lentils without shiny polish.", "Healthy unpolished toor dal", "Maharashtra", ["dal", "unpolished", "pulses"], "https://images.unsplash.com/photo-1585996020593-ba09307d4981?w=600&q=80"));
newProducts.push(createProduct("Unpolished Moong Dal", "Daily Groceries", "Pulses Unpolished", 7.49, "1kg", "Yellow split green gram, easy to digest.", "protein rich moong dal", "MP", ["dal", "moong", "pulses"], "https://images.unsplash.com/photo-1585996020593-ba09307d4981?w=600&q=80"));
newProducts.push(createProduct("Kabuli Chana", "Daily Groceries", "Pulses Unpolished", 8.99, "1kg", "Large premium white chickpeas.", "Premium kabuli chana", "Punjab", ["chana", "chickpeas", "pulses"], "https://images.unsplash.com/photo-1585996020593-ba09307d4981?w=600&q=80"));
newProducts.push(createProduct("Whole Masoor Dal", "Daily Groceries", "Pulses Unpolished", 5.99, "1kg", "Whole brown lentils.", "Earthy whole masoor", "UP", ["dal", "masoor", "pulses"], "https://images.unsplash.com/photo-1585996020593-ba09307d4981?w=600&q=80"));

// - Rice
newProducts.push(createProduct("Aged Basmati Rice", "Daily Groceries", "Rice", 18.99, "5kg", "Extra long grain basmati rice, aged 2 years.", "Premium aged basmati", "Dehradun", ["rice", "basmati", "aged"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Sona Masoori Rice", "Daily Groceries", "Rice", 12.99, "5kg", "Light and aromatic short grain daily rice.", "Daily use Sona Masoori", "Andhra Pradesh", ["rice", "sona-masoori", "daily"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Red Rice", "Daily Groceries", "Rice", 8.99, "1kg", "Nutritious unpolished Kerala Matta red rice.", "Healthy red matta rice", "Kerala", ["rice", "red", "matta"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));
newProducts.push(createProduct("Black Rice", "Daily Groceries", "Rice", 14.99, "1kg", "Antioxidant rich forbidden black rice.", "Superfood black rice", "Manipur", ["rice", "black", "superfood"], "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80"));

// - Pickles, Chutneys and Powders
newProducts.push(createProduct("Mango Pickle", "Daily Groceries", "Pickles, Chutneys and Powders", 5.99, "400g", "Tangy homemade style raw mango pickle.", "Spicy raw mango pickle", "Andhra Pradesh", ["pickle", "mango", "spicy"], "https://images.unsplash.com/photo-1626200419189-39ca17df9bd9?w=600&q=80"));
newProducts.push(createProduct("Mixed Veg Pickle", "Daily Groceries", "Pickles, Chutneys and Powders", 5.49, "400g", "Crunchy seasonal vegetables in mustard oil.", "Traditional mixed pickle", "Punjab", ["pickle", "mixed", "tangy"], "https://images.unsplash.com/photo-1626200419189-39ca17df9bd9?w=600&q=80"));
newProducts.push(createProduct("Gunpowder (Idli Podi)", "Daily Groceries", "Pickles, Chutneys and Powders", 4.99, "200g", "Spicy lentil powder for idli/dosa.", "Authentic idli podi", "Tamil Nadu", ["powder", "podi", "spicy"], "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"));
newProducts.push(createProduct("Garlic Chutney Powder", "Daily Groceries", "Pickles, Chutneys and Powders", 4.49, "200g", "Dry garlic and chili chutney for vada pav.", "Fiery garlic chutney powder", "Maharashtra", ["chutney", "garlic", "powder"], "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"));

// - Breakfast Cereals
newProducts.push(createProduct("Rolled Oats", "Daily Groceries", "Breakfast Cereals", 6.99, "1kg", "Thick cut 100% whole grain rolled oats.", "Healthy rolled oats", "Australia", ["oats", "cereal", "breakfast"], "https://images.unsplash.com/photo-1521550772718-4720d20dff2f?w=600&q=80"));
newProducts.push(createProduct("Millet Muesli", "Daily Groceries", "Breakfast Cereals", 8.99, "500g", "Crunchy muesli made with roasted millets, nuts, and fruits.", "Nutty millet muesli", "India", ["muesli", "millet", "breakfast"], "https://images.unsplash.com/photo-1521550772718-4720d20dff2f?w=600&q=80"));
newProducts.push(createProduct("Corn Flakes", "Daily Groceries", "Breakfast Cereals", 5.49, "500g", "Crispy golden corn flakes without added sugar.", "Classic corn flakes", "India", ["flakes", "corn", "breakfast"], "https://images.unsplash.com/photo-1521550772718-4720d20dff2f?w=600&q=80"));
newProducts.push(createProduct("Choco Cereals", "Daily Groceries", "Breakfast Cereals", 6.49, "400g", "Whole wheat chocolate flavor loops.", "Kids favorite choco loops", "India", ["choco", "cereal", "breakfast"], "https://images.unsplash.com/photo-1521550772718-4720d20dff2f?w=600&q=80"));

// - Pasta Noodles
newProducts.push(createProduct("Durum Wheat Penne", "Daily Groceries", "Pasta Noodles", 4.99, "500g", "100% durum wheat semolina penne pasta.", "Authentic penne pasta", "Italy", ["pasta", "penne", "italian"], "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=600&q=80"));
newProducts.push(createProduct("Whole Wheat Spaghetti", "Daily Groceries", "Pasta Noodles", 5.49, "500g", "High fiber whole wheat long spaghetti.", "Healthy whole wheat spaghetti", "Italy", ["pasta", "spaghetti", "wheat"], "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=600&q=80"));
newProducts.push(createProduct("Millet Hakka Noodles", "Daily Groceries", "Pasta Noodles", 3.99, "200g", "Healthy noodles made with multi-millets.", "Guilt-free hakka noodles", "India", ["noodles", "millet", "asian"], "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=600&q=80"));
newProducts.push(createProduct("Rice Vermicelli", "Daily Groceries", "Pasta Noodles", 3.49, "200g", "Thin rice noodles perfect for stir fry.", "Gluten-free rice noodles", "Vietnam", ["noodles", "rice", "asian"], "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=600&q=80"));


// Let's insert the new products right before the `];` that closes the products array.
const insertPos = content.indexOf('\n];\n\nexport const categories');
if (insertPos !== -1) {
    const productsString = ',\n' + newProducts.join(',\n');
    content = content.slice(0, insertPos) + productsString + content.slice(insertPos);
}

// Update the categories array
const newCategories = `export const categories = [
  {
    id: "chakki-flours",
    name: "Chakki Flours (Atta)",
    image: "https://images.unsplash.com/photo-1508609590740-1b7eb7ebf051?w=400&q=80",
    count: 10,
    color: "#D4AF37",
  },
  {
    id: "fruits",
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80",
    count: 5,
    color: "#E63946",
  },
  {
    id: "vegetables",
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&q=80",
    count: 18,
    color: "#2A9D8F",
  },
  {
    id: "daily-groceries",
    name: "Daily Groceries",
    image: "https://images.unsplash.com/photo-1585996020593-ba09307d4981?w=400&q=80",
    count: 81,
    color: "#C65A00",
  },
];`;

content = content.replace(/export const categories = \[\s*\{[\s\S]*?\];/m, newCategories);

fs.writeFileSync(PRODUCTS_FILE, content, 'utf8');
console.log('Successfully updated products.ts');
