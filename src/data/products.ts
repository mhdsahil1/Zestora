export interface Product {
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
}

export const products: Product[] = [
  {
    "id": "1",
    "name": "Kashmir Saffron",
    "slug": "kashmir-saffron",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 24.99,
    "originalPrice": 32.99,
    "weight": "5g",
    "image": "/products/img_1_1774022331147.jpg",
    "images": [
      "/products/img_1_1774022331147.jpg",
      "/products/img_2_1774022333054.webp"
    ],
    "description": "Hand-harvested from the pristine valleys of Kashmir, our premium saffron threads carry the world's most luxurious spice flavor. Each strand is carefully selected for its deep crimson hue and intoxicating aroma.",
    "shortDescription": "Hand-harvested premium saffron from Kashmir's pristine valleys",
    "origin": "Kashmir, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Mood enhancement",
      "Anti-inflammatory properties",
      "Supports heart health"
    ],
    "tags": [
      "exotic",
      "premium",
      "antioxidant"
    ],
    "rating": 4.9,
    "reviewCount": 128,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free",
      "Anti-inflammatory"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6639",
      "harvestDate": "Oct 2025",
      "farmName": "Kashmir, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "flavorProfile": {
      "aroma": 5,
      "freshness": 5,
      "spiciness": 1,
      "notes": [
        "Floral",
        "Honey-like",
        "Earthy"
      ]
    },
    "recipe": {
      "name": "Saffron Risotto",
      "ingredients": [
        {
          "name": "Kashmir Saffron",
          "quantity": "A pinch"
        }
      ]
    }
  },
  {
    "id": "2",
    "name": "Organic Turmeric",
    "slug": "organic-turmeric",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "originalPrice": 11.99,
    "weight": "200g",
    "image": "/products/img_3_1774022333690.jpg",
    "images": [
      "/products/img_4_1774022334157.jpg",
      "/products/img_5_1774022335166.jpg"
    ],
    "description": "Stone-ground from organically grown turmeric roots sourced from Erode, India—the turmeric capital of the world. Our turmeric boasts 5%+ curcumin content, far exceeding standard market turmeric.",
    "shortDescription": "Stone-ground organic turmeric with 5%+ curcumin content",
    "origin": "Erode, Tamil Nadu, India",
    "healthBenefits": [
      "Powerful anti-inflammatory",
      "Antioxidant-rich",
      "Supports brain function",
      "Boosts immunity"
    ],
    "tags": [
      "organic",
      "roots",
      "anti-inflammatory"
    ],
    "rating": 4.8,
    "reviewCount": 342,
    "inStock": true,
    "featured": true,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free",
      "Anti-inflammatory"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4907",
      "harvestDate": "Oct 2025",
      "farmName": "Erode, Tamil Nadu, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "flavorProfile": {
      "aroma": 3,
      "freshness": 4,
      "spiciness": 1,
      "notes": [
        "Earthy",
        "Mustard-like",
        "Bright"
      ]
    },
    "recipe": {
      "name": "Golden Milk Latte",
      "ingredients": [
        {
          "name": "Organic Turmeric",
          "quantity": "1 tsp"
        },
        {
          "name": "Cinnamon Sticks",
          "quantity": "1 stick"
        },
        {
          "name": "Thalassery Black Pepper",
          "quantity": "A pinch"
        }
      ]
    },
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "3",
    "name": "Green Cardamom",
    "slug": "green-cardamom",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 12.99,
    "originalPrice": 15.99,
    "weight": "100g",
    "image": "/products/img_7_1774022337265.jpg",
    "images": [
      "/products/img_8_1774022337886.jpg",
      "/products/img_9_1774022338102.webp"
    ],
    "description": "Plucked from misty hillside plantations in Kerala, our green cardamom pods are intensely aromatic. Known as the 'Queen of Spices', each pod is handpicked at peak ripeness to preserve its floral, minty fragrance.",
    "shortDescription": "Handpicked premium green cardamom from Kerala's hillside farms",
    "origin": "Idukki, Kerala, India",
    "healthBenefits": [
      "Aids digestion",
      "Freshens breath",
      "Antimicrobial properties",
      "Rich in antioxidants"
    ],
    "tags": [
      "seeds",
      "aromatic",
      "premium"
    ],
    "rating": 4.7,
    "reviewCount": 215,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5595",
      "harvestDate": "Oct 2025",
      "farmName": "Idukki, Kerala, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "4",
    "name": "Thalassery Black Pepper",
    "slug": "Thalassery-black-pepper",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 9.99,
    "originalPrice": 12.99,
    "weight": "150g",
    "image": "/products/img_10_1774022338537.jpg",
    "images": [
      "/products/img_10_1774022338537.jpg",
      "/products/img_11_1774022338996.jpg"
    ],
    "description": "The finest black pepper in the world, sourced from Tellicherry on Kerala's Malabar Coast. Left on the vine longer than standard pepper, our Tellicherry peppercorns develop complex, fruity notes alongside their bold heat.",
    "shortDescription": "Premium Tellicherry peppercorns with complex fruity notes",
    "origin": "Tellicherry, Kerala, India",
    "healthBenefits": [
      "Enhances nutrient absorption",
      "Rich in piperine",
      "Antioxidant properties",
      "Digestive aid"
    ],
    "tags": [
      "pepper",
      "malabar",
      "premium"
    ],
    "rating": 4.8,
    "reviewCount": 189,
    "inStock": true,
    "featured": true,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5962",
      "harvestDate": "Oct 2025",
      "farmName": "Tellicherry, Kerala, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "flavorProfile": {
      "aroma": 4,
      "freshness": 5,
      "spiciness": 3,
      "notes": [
        "Woody",
        "Piney",
        "Sharp"
      ]
    },
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "5",
    "name": "Byadagi Chilli",
    "slug": "byadagi-chilli",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "200g",
    "image": "/products/img_12_1774022340991.jpg",
    "images": [
      "/products/img_13_1774022341222.png"
    ],
    "description": "Famous for their rich red color rather than intense heat, Byadagi chillies from Karnataka are prized by chefs worldwide. They impart a deep, vibrant red color to curries and dishes without overwhelming spiciness.",
    "shortDescription": "Deep color, mild heat - Karnataka's famous Byadagi chilli",
    "origin": "Byadagi, Karnataka, India",
    "healthBenefits": [
      "Rich in Vitamin C",
      "Metabolism booster",
      "Antioxidant properties",
      "Supports heart health"
    ],
    "tags": [
      "chilli",
      "mild",
      "color"
    ],
    "rating": 4.6,
    "reviewCount": 97,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2931",
      "harvestDate": "Oct 2025",
      "farmName": "Byadagi, Karnataka, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "6",
    "name": "Cinnamon Sticks",
    "slug": "cinnamon-sticks",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 10.99,
    "weight": "100g",
    "image": "/products/img_14_1774022342261.jpg",
    "images": [
      "/products/img_15_1774022343831.jpg"
    ],
    "description": "True Ceylon cinnamon (Cinnamomum verum) from Sri Lanka—the world's finest. Our hand-rolled cinnamon quills have a delicate, sweet flavor and are softer and easier to grind than Cassia cinnamon sold by most brands.",
    "shortDescription": "True Ceylon cinnamon hand-rolled quills from Sri Lanka",
    "origin": "Kandy, Sri Lanka",
    "healthBenefits": [
      "Blood sugar regulation",
      "Anti-inflammatory",
      "Antimicrobial",
      "Heart health support"
    ],
    "tags": [
      "bark",
      "ceylon",
      "sweet"
    ],
    "rating": 4.7,
    "reviewCount": 156,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free",
      "Anti-inflammatory"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2363",
      "harvestDate": "Oct 2025",
      "farmName": "Kandy, Sri Lanka Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "7",
    "name": "Star Anise",
    "slug": "star-anise",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 11.99,
    "weight": "75g",
    "image": "/products/img_16_1774022344727.jpeg",
    "images": [
      "/products/img_16_1774022344727.jpeg",
      "/products/img_17_1774022345814.jpg"
    ],
    "description": "Star-shaped beauties from Vietnam's Lang Son province, our star anise is whole-dried to preserve maximum volatile oils. The intensely aromatic eight-pointed pods are indispensable in Asian cooking and spiced drinks.",
    "shortDescription": "Whole-dried star anise from Vietnam with intense aroma",
    "origin": "Lang Son, Vietnam",
    "healthBenefits": [
      "Antimicrobial properties",
      "Digestive support",
      "Rich in antioxidants",
      "Anti-fungal"
    ],
    "tags": [
      "exotic",
      "aromatic",
      "whole"
    ],
    "rating": 4.5,
    "reviewCount": 73,
    "inStock": true,
    "featured": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0202",
      "harvestDate": "Oct 2025",
      "farmName": "Lang Son, Vietnam Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "8",
    "name": "Smoked Paprika",
    "slug": "smoked-paprika",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.49,
    "weight": "100g",
    "image": "/products/img_18_1774022347273.jpg",
    "images": [
      "/products/img_18_1774022347273.jpg"
    ],
    "description": "Oak-smoked paprika from La Vera, Spain—a protected designation of origin product. Our sweet smoked paprika undergoes traditional drying over oak fires for two weeks, developing its signature smoky-sweet complexity.",
    "shortDescription": "Authentic oak-smoked paprika from La Vera, Spain",
    "origin": "La Vera, Extremadura, Spain",
    "healthBenefits": [
      "Rich in Vitamin A",
      "Antioxidant-rich",
      "Anti-inflammatory",
      "Supports eye health"
    ],
    "tags": [
      "chilli",
      "smoked",
      "european"
    ],
    "rating": 4.6,
    "reviewCount": 134,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "cuisine": [
      "Mediterranean"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free",
      "Anti-inflammatory"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2865",
      "harvestDate": "Oct 2025",
      "farmName": "La Vera, Extremadura, Spain Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "9",
    "name": "Coriander Seeds",
    "slug": "coriander-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.99,
    "weight": "100g",
    "image": "/products/img_19_1774022347702.jpg",
    "images": [
      "/products/img_20_1774022348366.jpeg"
    ],
    "description": "Premium quality coriander seeds sourced directly from Rajasthan, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality coriander seeds from Rajasthan, India",
    "origin": "Rajasthan, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4,
    "reviewCount": 144,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8487",
      "harvestDate": "Oct 2025",
      "farmName": "Rajasthan, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "10",
    "name": "Cumin Seeds",
    "slug": "cumin-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "/products/img_21_1774022348794.jpg",
    "images": [
      "/products/img_22_1774022350242.jpg"
    ],
    "description": "Premium quality cumin seeds sourced directly from Gujarat, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality cumin seeds from Gujarat, India",
    "origin": "Gujarat, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 174,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7734",
      "harvestDate": "Oct 2025",
      "farmName": "Gujarat, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "11",
    "name": "Cloves",
    "slug": "cloves",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 14.99,
    "weight": "100g",
    "image": "/products/img_23_1774022351336.png",
    "images": [
      "/products/img_24_1774022351902.webp"
    ],
    "description": "Premium quality cloves sourced directly from Zanzibar, Tanzania. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality cloves from Zanzibar, Tanzania",
    "origin": "Zanzibar, Tanzania",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "exotic",
      "premium",
      "authentic"
    ],
    "rating": 4.8,
    "reviewCount": 121,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5857",
      "harvestDate": "Oct 2025",
      "farmName": "Zanzibar, Tanzania Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "12",
    "name": "Nutmeg",
    "slug": "nutmeg",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 18.99,
    "weight": "100g",
    "image": "/products/img_25_1774022353016.jpg",
    "images": [
      "/products/img_26_1774022353821.jpg"
    ],
    "description": "Premium quality nutmeg sourced directly from Banda Islands, Indonesia. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality nutmeg from Banda Islands, Indonesia",
    "origin": "Banda Islands, Indonesia",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "exotic",
      "premium",
      "authentic"
    ],
    "rating": 4,
    "reviewCount": 168,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9649",
      "harvestDate": "Oct 2025",
      "farmName": "Banda Islands, Indonesia Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "13",
    "name": "Mace",
    "slug": "mace",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 21.99,
    "weight": "100g",
    "image": "/products/img_27_1774022354314.jpg",
    "images": [
      "/products/img_28_1774022354913.jpg"
    ],
    "description": "Premium quality mace sourced directly from Banda Islands, Indonesia. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality mace from Banda Islands, Indonesia",
    "origin": "Banda Islands, Indonesia",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "exotic",
      "premium",
      "authentic"
    ],
    "rating": 4.4,
    "reviewCount": 27,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2069",
      "harvestDate": "Oct 2025",
      "farmName": "Banda Islands, Indonesia Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "14",
    "name": "Fenugreek Seeds",
    "slug": "fenugreek-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 5.99,
    "weight": "100g",
    "image": "/products/img_29_1774022355231.jpg",
    "images": [
      "/products/img_30_1774022356641.jpg"
    ],
    "description": "Premium quality fenugreek seeds sourced directly from Rajasthan, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality fenugreek seeds from Rajasthan, India",
    "origin": "Rajasthan, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.7,
    "reviewCount": 126,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4882",
      "harvestDate": "Oct 2025",
      "farmName": "Rajasthan, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "15",
    "name": "Mustard Seeds",
    "slug": "mustard-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 4.99,
    "weight": "100g",
    "image": "/products/img_31_1774022357371.jpg",
    "images": [
      "/products/img_32_1774022358136.jpg"
    ],
    "description": "Premium quality mustard seeds sourced directly from Punjab, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality mustard seeds from Punjab, India",
    "origin": "Punjab, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.8,
    "reviewCount": 205,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1766",
      "harvestDate": "Oct 2025",
      "farmName": "Punjab, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "16",
    "name": "Fennel Seeds",
    "slug": "fennel-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.49,
    "weight": "100g",
    "image": "/products/img_33_1774022358819.jpg",
    "images": [
      "/products/img_34_1774022360782.jpg"
    ],
    "description": "Premium quality fennel seeds sourced directly from Uttar Pradesh, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality fennel seeds from Uttar Pradesh, India",
    "origin": "Uttar Pradesh, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 180,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9767",
      "harvestDate": "Oct 2025",
      "farmName": "Uttar Pradesh, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "17",
    "name": "Ajwain (Carom Seeds)",
    "slug": "ajwain-carom-seeds-",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.49,
    "weight": "100g",
    "image": "https://c.ndtvimg.com/2024-10/v60c4ovo_ajwain_625x300_03_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    "images": [
      "/products/img_36_1774022361606.webp"
    ],
    "description": "Premium quality ajwain (carom seeds) sourced directly from Madhya Pradesh, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality ajwain (carom seeds) from Madhya Pradesh, India",
    "origin": "Madhya Pradesh, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.8,
    "reviewCount": 23,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8005",
      "harvestDate": "Oct 2025",
      "farmName": "Madhya Pradesh, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "18",
    "name": "Asafoetida (Hing)",
    "slug": "asafoetida-hing-",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 19.99,
    "weight": "100g",
    "image": "/products/img_37_1774022361971.jpg",
    "images": [
      "/products/img_38_1774022365257.jpg"
    ],
    "description": "Premium quality asafoetida (hing) sourced directly from Afghanistan. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality asafoetida (hing) from Afghanistan",
    "origin": "Afghanistan",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "resins",
      "premium",
      "authentic"
    ],
    "rating": 4.6,
    "reviewCount": 41,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0046",
      "harvestDate": "Oct 2025",
      "farmName": "Afghanistan Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "19",
    "name": "Cayenne Pepper",
    "slug": "cayenne-pepper",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "100g",
    "image": "/products/img_39_1774022367666.jpeg",
    "images": [
      "/products/img_40_1774022368951.jpg"
    ],
    "description": "Premium quality cayenne pepper sourced directly from French Guiana. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality cayenne pepper from French Guiana",
    "origin": "French Guiana",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 86,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0390",
      "harvestDate": "Oct 2025",
      "farmName": "French Guiana Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "flavorProfile": {
      "aroma": 3,
      "freshness": 4,
      "spiciness": 5,
      "notes": [
        "Pungent",
        "Fiery",
        "Sharp"
      ]
    },
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "20",
    "name": "Sweet Paprika",
    "slug": "sweet-paprika",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.49,
    "weight": "100g",
    "image": "/products/img_41_1774022369470.jpg",
    "images": [
      "/products/img_42_1774022369937.png"
    ],
    "description": "Premium quality sweet paprika sourced directly from Hungary. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality sweet paprika from Hungary",
    "origin": "Hungary",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4.6,
    "reviewCount": 72,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9289",
      "harvestDate": "Oct 2025",
      "farmName": "Hungary Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "21",
    "name": "White Peppercorns",
    "slug": "white-peppercorns",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 11.99,
    "weight": "100g",
    "image": "/products/img_43_1774022370926.webp",
    "images": [
      "/products/img_44_1774022371514.jpg"
    ],
    "description": "Premium quality white peppercorns sourced directly from Muntok, Indonesia. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality white peppercorns from Muntok, Indonesia",
    "origin": "Muntok, Indonesia",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pepper",
      "premium",
      "authentic"
    ],
    "rating": 4.7,
    "reviewCount": 141,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4276",
      "harvestDate": "Oct 2025",
      "farmName": "Muntok, Indonesia Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "22",
    "name": "Green Peppercorns",
    "slug": "green-peppercorns",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 13.99,
    "weight": "100g",
    "image": "/products/img_45_1774022373451.jpg",
    "images": [
      "/products/img_46_1774022374097.png"
    ],
    "description": "Premium quality green peppercorns sourced directly from Malabar, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality green peppercorns from Malabar, India",
    "origin": "Malabar, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pepper",
      "premium",
      "authentic"
    ],
    "rating": 4.3,
    "reviewCount": 87,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5627",
      "harvestDate": "Oct 2025",
      "farmName": "Malabar, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "23",
    "name": "Pink Peppercorns",
    "slug": "pink-peppercorns",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 16.99,
    "weight": "100g",
    "image": "/products/img_47_1774022374972.webp",
    "images": [
      "/products/img_48_1774022375687.jpg"
    ],
    "description": "Premium quality pink peppercorns sourced directly from Madagascar. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality pink peppercorns from Madagascar",
    "origin": "Madagascar",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pepper",
      "premium",
      "authentic"
    ],
    "rating": 4.9,
    "reviewCount": 126,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6621",
      "harvestDate": "Oct 2025",
      "farmName": "Madagascar Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "24",
    "name": "Szechuan Pepper",
    "slug": "szechuan-pepper",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 15.99,
    "weight": "100g",
    "image": "/products/img_49_1774022377052.jpg",
    "images": [
      "/products/img_49_1774022377052.jpg"
    ],
    "description": "Premium quality szechuan pepper sourced directly from Sichuan, China. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality szechuan pepper from Sichuan, China",
    "origin": "Sichuan, China",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pepper",
      "premium",
      "authentic"
    ],
    "rating": 4.8,
    "reviewCount": 83,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2745",
      "harvestDate": "Oct 2025",
      "farmName": "Sichuan, China Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "25",
    "name": "Ghost Pepper (Bhut Jolokia)",
    "slug": "ghost-pepper-bhut-jolokia-",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 25.99,
    "weight": "100g",
    "image": "https://shop.westlandpeppers.com/wp-content/uploads/2020/01/Naga-Jolokia_Westlandpeppers-1-scaled.jpg",
    "images": [
      "/products/img_51_1774022380223.jpg"
    ],
    "description": "Premium quality ghost pepper (bhut jolokia) sourced directly from Assam, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality ghost pepper (bhut jolokia) from Assam, India",
    "origin": "Assam, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4.4,
    "reviewCount": 66,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6994",
      "harvestDate": "Oct 2025",
      "farmName": "Assam, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "26",
    "name": "Habanero Powder",
    "slug": "habanero-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 18.99,
    "weight": "100g",
    "image": "/products/img_52_1774022380655.jpg",
    "images": [
      "/products/img_53_1774022381024.jpg"
    ],
    "description": "Premium quality habanero powder sourced directly from Yucatan, Mexico. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality habanero powder from Yucatan, Mexico",
    "origin": "Yucatan, Mexico",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4.7,
    "reviewCount": 80,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Latin"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6445",
      "harvestDate": "Oct 2025",
      "farmName": "Yucatan, Mexico Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "27",
    "name": "Kashmiri Chilli Powder",
    "slug": "kashmiri-chilli-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 10.99,
    "weight": "100g",
    "image": "/products/img_54_1774022381542.jpg",
    "images": [
      "/products/img_55_1774022382224.jpg"
    ],
    "description": "Premium quality kashmiri chilli powder sourced directly from Kashmir, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality kashmiri chilli powder from Kashmir, India",
    "origin": "Kashmir, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4,
    "reviewCount": 118,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8657",
      "harvestDate": "Oct 2025",
      "farmName": "Kashmir, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "28",
    "name": "Guntur Sannam Chilli",
    "slug": "guntur-sannam-chilli",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "/products/img_56_1774022382667.jpg",
    "images": [
      "/products/img_57_1774022383073.jpg"
    ],
    "description": "Premium quality guntur sannam chilli sourced directly from Andhra Pradesh, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality guntur sannam chilli from Andhra Pradesh, India",
    "origin": "Andhra Pradesh, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4.4,
    "reviewCount": 207,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1925",
      "harvestDate": "Oct 2025",
      "farmName": "Andhra Pradesh, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "29",
    "name": "Bird's Eye Chilli",
    "slug": "bird-s-eye-chilli",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 12.99,
    "weight": "100g",
    "image": "/products/img_58_1774022383367.jpg",
    "images": [
      "/products/img_59_1774022384374.webp"
    ],
    "description": "Premium quality bird's eye chilli sourced directly from Kerala, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality bird's eye chilli from Kerala, India",
    "origin": "Kerala, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chilli",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 152,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8657",
      "harvestDate": "Oct 2025",
      "farmName": "Kerala, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "30",
    "name": "Dry Ginger Root",
    "slug": "dry-ginger-root",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 9.99,
    "weight": "100g",
    "image": "/products/img_60_1774022384652.jpg",
    "images": [
      "/products/img_61_1774022384878.jpg"
    ],
    "description": "Premium quality dry ginger root sourced directly from Kerala, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dry ginger root from Kerala, India",
    "origin": "Kerala, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "roots",
      "premium",
      "authentic"
    ],
    "rating": 4.9,
    "reviewCount": 207,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5927",
      "harvestDate": "Oct 2025",
      "farmName": "Kerala, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "31",
    "name": "Galangal Root",
    "slug": "galangal-root",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 14.99,
    "weight": "100g",
    "image": "/products/img_62_1774022385821.jpeg",
    "images": [
      "/products/img_63_1774022386276.jpg"
    ],
    "description": "Premium quality galangal root sourced directly from Thailand. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality galangal root from Thailand",
    "origin": "Thailand",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "roots",
      "premium",
      "authentic"
    ],
    "rating": 4.3,
    "reviewCount": 126,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3864",
      "harvestDate": "Oct 2025",
      "farmName": "Thailand Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "32",
    "name": "Garlic Powder",
    "slug": "garlic-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "100g",
    "image": "/products/img_64_1774022390260.jpg",
    "images": [
      "/products/img_65_1774022390470.jpeg"
    ],
    "description": "Premium quality garlic powder sourced directly from California, USA. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality garlic powder from California, USA",
    "origin": "California, USA",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "roots",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 157,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6956",
      "harvestDate": "Oct 2025",
      "farmName": "California, USA Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "33",
    "name": "Onion Powder",
    "slug": "onion-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.49,
    "weight": "100g",
    "image": "/products/img_66_1774022390827.jpg",
    "images": [
      "/products/img_67_1774022391319.jpg"
    ],
    "description": "Premium quality onion powder sourced directly from California, USA. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality onion powder from California, USA",
    "origin": "California, USA",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "roots",
      "premium",
      "authentic"
    ],
    "rating": 4.8,
    "reviewCount": 106,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3714",
      "harvestDate": "Oct 2025",
      "farmName": "California, USA Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "34",
    "name": "Cassia Bark",
    "slug": "cassia-bark",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "/products/img_68_1774022391668.jpg",
    "images": [
      "/products/img_69_1774022391974.jpeg"
    ],
    "description": "Premium quality cassia bark sourced directly from Vietnam. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality cassia bark from Vietnam",
    "origin": "Vietnam",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bark",
      "premium",
      "authentic"
    ],
    "rating": 4.2,
    "reviewCount": 155,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3353",
      "harvestDate": "Oct 2025",
      "farmName": "Vietnam Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "35",
    "name": "Vanilla Bean",
    "slug": "vanilla-bean",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 35.99,
    "weight": "100g",
    "image": "/products/img_70_1774022392433.jpg",
    "images": [
      "/products/img_71_1774022394008.webp"
    ],
    "description": "Premium quality vanilla bean sourced directly from Madagascar. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality vanilla bean from Madagascar",
    "origin": "Madagascar",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "exotic",
      "premium",
      "authentic"
    ],
    "rating": 4.3,
    "reviewCount": 96,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7443",
      "harvestDate": "Oct 2025",
      "farmName": "Madagascar Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "36",
    "name": "Tonka Bean",
    "slug": "tonka-bean",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 28.99,
    "weight": "100g",
    "image": "/products/img_72_1774022394913.jpg",
    "images": [
      "/products/img_73_1774022395384.jpeg"
    ],
    "description": "Premium quality tonka bean sourced directly from Venezuela. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality tonka bean from Venezuela",
    "origin": "Venezuela",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "exotic",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 195,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2546",
      "harvestDate": "Oct 2025",
      "farmName": "Venezuela Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "37",
    "name": "Ground Sumac",
    "slug": "ground-sumac",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 12.49,
    "weight": "100g",
    "image": "/products/img_74_1774022396353.png",
    "images": [
      "/products/img_75_1774022397878.jpg"
    ],
    "description": "Premium quality ground sumac sourced directly from Turkey. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality ground sumac from Turkey",
    "origin": "Turkey",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "berries",
      "premium",
      "authentic"
    ],
    "rating": 4.9,
    "reviewCount": 104,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7828",
      "harvestDate": "Oct 2025",
      "farmName": "Turkey Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "38",
    "name": "Za'atar Blend",
    "slug": "za-atar-blend",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 14.99,
    "weight": "100g",
    "image": "/products/img_76_1774022398061.jpg",
    "images": [
      "/products/img_77_1774022398468.jpg"
    ],
    "description": "Premium quality za'atar blend sourced directly from Lebanon. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality za'atar blend from Lebanon",
    "origin": "Lebanon",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "blends",
      "premium",
      "authentic"
    ],
    "rating": 5,
    "reviewCount": 196,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6096",
      "harvestDate": "Oct 2025",
      "farmName": "Lebanon Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "39",
    "name": "Ras el Hanout",
    "slug": "ras-el-hanout",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 16.99,
    "weight": "100g",
    "image": "/products/img_78_1774022398863.jpg",
    "images": [
      "/products/img_79_1774022399340.jpg"
    ],
    "description": "Premium quality ras el hanout sourced directly from Morocco. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality ras el hanout from Morocco",
    "origin": "Morocco",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "blends",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 66,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8421",
      "harvestDate": "Oct 2025",
      "farmName": "Morocco Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "40",
    "name": "Garam Masala",
    "slug": "garam-masala",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 11.99,
    "weight": "100g",
    "image": "/products/img_80_1774022401451.jpg",
    "images": [
      "/products/img_81_1774022401573.jpg"
    ],
    "description": "Premium quality garam masala sourced directly from Punjab, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality garam masala from Punjab, India",
    "origin": "Punjab, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "blends",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 196,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5713",
      "harvestDate": "Oct 2025",
      "farmName": "Punjab, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "41",
    "name": "Madras Curry Powder",
    "slug": "madras-curry-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 9.99,
    "weight": "100g",
    "image": "/products/img_82_1774022402137.png",
    "images": [
      "/products/img_83_1774022402643.jpg"
    ],
    "description": "Premium quality madras curry powder sourced directly from Tamil Nadu, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality madras curry powder from Tamil Nadu, India",
    "origin": "Tamil Nadu, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "blends",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 62,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7258",
      "harvestDate": "Oct 2025",
      "farmName": "Tamil Nadu, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "42",
    "name": "Chinese Five Spice",
    "slug": "chinese-five-spice",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 10.49,
    "weight": "100g",
    "image": "/products/img_84_1774022403418.jpg",
    "images": [
      "/products/img_85_1774022403528.jpg"
    ],
    "description": "Premium quality chinese five spice sourced directly from China. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality chinese five spice from China",
    "origin": "China",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "blends",
      "premium",
      "authentic"
    ],
    "rating": 4.8,
    "reviewCount": 79,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8114",
      "harvestDate": "Oct 2025",
      "farmName": "China Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "43",
    "name": "Herbes de Provence",
    "slug": "herbes-de-provence",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 13.99,
    "weight": "100g",
    "image": "/products/img_86_1774022404863.jpg",
    "images": [
      "/products/img_87_1774022405968.jpeg"
    ],
    "description": "Premium quality herbes de provence sourced directly from Provence, France. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality herbes de provence from Provence, France",
    "origin": "Provence, France",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "blends",
      "premium",
      "authentic"
    ],
    "rating": 4.6,
    "reviewCount": 123,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2263",
      "harvestDate": "Oct 2025",
      "farmName": "Provence, France Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "44",
    "name": "Dried Oregano",
    "slug": "dried-oregano",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "/products/img_88_1774022406823.jpg",
    "images": [
      "/products/img_89_1774022407286.webp"
    ],
    "description": "Premium quality dried oregano sourced directly from Greece. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried oregano from Greece",
    "origin": "Greece",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.9,
    "reviewCount": 81,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5092",
      "harvestDate": "Oct 2025",
      "farmName": "Greece Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "45",
    "name": "Dried Basil",
    "slug": "dried-basil",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "100g",
    "image": "/products/img_90_1774022408934.jpg",
    "images": [
      "/products/img_91_1774022409304.jpg"
    ],
    "description": "Premium quality dried basil sourced directly from Italy. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried basil from Italy",
    "origin": "Italy",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 208,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Mediterranean"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2879",
      "harvestDate": "Oct 2025",
      "farmName": "Italy Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "46",
    "name": "Dried Thyme",
    "slug": "dried-thyme",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.49,
    "weight": "100g",
    "image": "/products/img_92_1774022410015.jpg",
    "images": [
      "/products/img_93_1774022410676.jpg"
    ],
    "description": "Premium quality dried thyme sourced directly from Spain. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried thyme from Spain",
    "origin": "Spain",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.7,
    "reviewCount": 205,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Mediterranean"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8581",
      "harvestDate": "Oct 2025",
      "farmName": "Spain Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "47",
    "name": "Dried Rosemary",
    "slug": "dried-rosemary",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "100g",
    "image": "/products/img_94_1774022410840.png",
    "images": [
      "/products/img_95_1774022411512.jpg"
    ],
    "description": "Premium quality dried rosemary sourced directly from Spain. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried rosemary from Spain",
    "origin": "Spain",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.2,
    "reviewCount": 173,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Mediterranean"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3564",
      "harvestDate": "Oct 2025",
      "farmName": "Spain Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "48",
    "name": "Dried Sage",
    "slug": "dried-sage",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "/products/img_96_1774022412303.jpeg",
    "images": [
      "/products/img_97_1774022412564.jpg"
    ],
    "description": "Premium quality dried sage sourced directly from Albania. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried sage from Albania",
    "origin": "Albania",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 34,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9260",
      "harvestDate": "Oct 2025",
      "farmName": "Albania Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "49",
    "name": "Dried Peppermint",
    "slug": "dried-peppermint",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.99,
    "weight": "100g",
    "image": "/products/img_98_1774022412902.jpg",
    "images": [
      "/products/img_99_1774022414009.jpg"
    ],
    "description": "Premium quality dried peppermint sourced directly from Washington, USA. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried peppermint from Washington, USA",
    "origin": "Washington, USA",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.6,
    "reviewCount": 66,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0165",
      "harvestDate": "Oct 2025",
      "farmName": "Washington, USA Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "50",
    "name": "Dried Parsley",
    "slug": "dried-parsley",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.49,
    "weight": "100g",
    "image": "/products/img_100_1774022414184.jpg",
    "images": [
      "/products/img_101_1774022414553.jpg"
    ],
    "description": "Premium quality dried parsley sourced directly from Israel. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried parsley from Israel",
    "origin": "Israel",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 28,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7694",
      "harvestDate": "Oct 2025",
      "farmName": "Israel Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "51",
    "name": "Dill Weed",
    "slug": "dill-weed",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "100g",
    "image": "/products/img_102_1774022416388.jpg",
    "images": [
      "/products/img_103_1774022418554.jpeg"
    ],
    "description": "Premium quality dill weed sourced directly from California, USA. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dill weed from California, USA",
    "origin": "California, USA",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 187,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5136",
      "harvestDate": "Oct 2025",
      "farmName": "California, USA Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "52",
    "name": "Bay Leaves",
    "slug": "bay-leaves",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 5.99,
    "weight": "100g",
    "image": "/products/img_104_1774022419869.jpg",
    "images": [
      "/products/img_105_1774022420106.png"
    ],
    "description": "Premium quality bay leaves sourced directly from Turkey. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality bay leaves from Turkey",
    "origin": "Turkey",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4.7,
    "reviewCount": 172,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3580",
      "harvestDate": "Oct 2025",
      "farmName": "Turkey Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "53",
    "name": "Curry Leaves",
    "slug": "curry-leaves",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.99,
    "weight": "100g",
    "image": "/products/img_106_1774022420685.jpg",
    "images": [
      "/products/img_107_1774022420784.webp"
    ],
    "description": "Premium quality curry leaves sourced directly from Tamil Nadu, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality curry leaves from Tamil Nadu, India",
    "origin": "Tamil Nadu, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 4,
    "reviewCount": 55,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9236",
      "harvestDate": "Oct 2025",
      "farmName": "Tamil Nadu, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "54",
    "name": "Dried Lemongrass",
    "slug": "dried-lemongrass",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "/products/img_108_1774022422204.jpg",
    "images": [
      "/products/img_109_1774022422412.jpg"
    ],
    "description": "Premium quality dried lemongrass sourced directly from Thailand. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality dried lemongrass from Thailand",
    "origin": "Thailand",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "herbs",
      "premium",
      "authentic"
    ],
    "rating": 5,
    "reviewCount": 92,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3799",
      "harvestDate": "Oct 2025",
      "farmName": "Thailand Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "55",
    "name": "Black Cardamom",
    "slug": "black-cardamom",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 15.99,
    "weight": "100g",
    "image": "/products/img_110_1774022422790.jpg",
    "images": [
      "/products/img_111_1774022422897.jpg"
    ],
    "description": "Premium quality black cardamom sourced directly from Sikkim, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality black cardamom from Sikkim, India",
    "origin": "Sikkim, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.6,
    "reviewCount": 146,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4081",
      "harvestDate": "Oct 2025",
      "farmName": "Sikkim, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "56",
    "name": "Nigella Seeds (Kalonji)",
    "slug": "nigella-seeds-kalonji-",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "100g",
    "image": "/products/img_112_1774022423249.jpg",
    "images": [
      "/products/img_113_1774022423568.jpg"
    ],
    "description": "Premium quality nigella seeds (kalonji) sourced directly from India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality nigella seeds (kalonji) from India",
    "origin": "India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.9,
    "reviewCount": 67,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0978",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "57",
    "name": "Poppy Seeds",
    "slug": "poppy-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 9.99,
    "weight": "100g",
    "image": "/products/img_114_1774022423666.jpg",
    "images": [
      "/products/img_115_1774022423884.jpg"
    ],
    "description": "Premium quality poppy seeds sourced directly from Turkey. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality poppy seeds from Turkey",
    "origin": "Turkey",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.6,
    "reviewCount": 167,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9155",
      "harvestDate": "Oct 2025",
      "farmName": "Turkey Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "58",
    "name": "Sesame Seeds",
    "slug": "sesame-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 5.99,
    "weight": "100g",
    "image": "/products/img_116_1774022424172.jpg",
    "images": [
      "/products/img_117_1774022424344.jpg"
    ],
    "description": "Premium quality sesame seeds sourced directly from India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality sesame seeds from India",
    "origin": "India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.1,
    "reviewCount": 182,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9291",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "59",
    "name": "Caraway Seeds",
    "slug": "caraway-seeds",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.99,
    "weight": "100g",
    "image": "/products/img_118_1774022426714.jpg",
    "images": [
      "/products/img_119_1774022429415.jpg"
    ],
    "description": "Premium quality caraway seeds sourced directly from Netherlands. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality caraway seeds from Netherlands",
    "origin": "Netherlands",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "seeds",
      "premium",
      "authentic"
    ],
    "rating": 4.2,
    "reviewCount": 38,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0765",
      "harvestDate": "Oct 2025",
      "farmName": "Netherlands Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "60",
    "name": "Amchoor (Mango Powder)",
    "slug": "amchoor-mango-powder-",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 11.99,
    "weight": "100g",
    "image": "/products/img_120_1774022429778.jpg",
    "images": [
      "/products/img_121_1774022430256.jpg"
    ],
    "description": "Premium quality amchoor (mango powder) sourced directly from Uttar Pradesh, India. Hand-selected for exceptional flavor and aroma.",
    "shortDescription": "Premium quality amchoor (mango powder) from Uttar Pradesh, India",
    "origin": "Uttar Pradesh, India",
    "healthBenefits": [
      "Rich in antioxidants",
      "Great for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "exotic",
      "premium",
      "authentic"
    ],
    "rating": 4.5,
    "reviewCount": 196,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8114",
      "harvestDate": "Oct 2025",
      "farmName": "Uttar Pradesh, India Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "100",
    "name": "Premium Sharbati Atta",
    "slug": "premium-sharbati-atta",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Wheat base Flour",
    "price": 8.99,
    "weight": "5kg",
    "image": "/products/img_122_1774022430588.jpg",
    "images": [
      "/products/img_123_1774022430960.jpg"
    ],
    "description": "Stone ground sharbati wheat flour.",
    "shortDescription": "Premium MP Sharbati whole wheat atta",
    "origin": "Madhya Pradesh",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "atta",
      "wheat",
      "sharbati"
    ],
    "rating": 4.4,
    "reviewCount": 291,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4332",
      "harvestDate": "Oct 2025",
      "farmName": "Madhya Pradesh Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "101",
    "name": "Organic Whole Wheat Atta",
    "slug": "organic-whole-wheat-atta",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Wheat base Flour",
    "price": 7.99,
    "weight": "5kg",
    "image": "/products/img_124_1774022431030.png",
    "images": [
      "/products/img_125_1774022431555.jpg"
    ],
    "description": "Certified organic whole wheat flour.",
    "shortDescription": "100% Organic whole wheat flour",
    "origin": "Punjab",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "organic",
      "wheat",
      "atta"
    ],
    "rating": 4.2,
    "reviewCount": 142,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5328",
      "harvestDate": "Oct 2025",
      "farmName": "Punjab Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "102",
    "name": "Multigrain Atta",
    "slug": "multigrain-atta",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Wheat base Flour",
    "price": 10.99,
    "weight": "5kg",
    "image": "/products/img_126_1774022431715.jpg",
    "images": [
      "/products/img_126_1774022431715.jpg"
    ],
    "description": "Wheat mixed with 9 different grains for nutrition.",
    "shortDescription": "Nutritious multigrain wheat flour",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "multigrain",
      "wheat",
      "healthy"
    ],
    "rating": 4.6,
    "reviewCount": 75,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8691",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "103",
    "name": "Fiber Rich Wheat Atta",
    "slug": "fiber-rich-wheat-atta",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Wheat base Flour",
    "price": 9.49,
    "weight": "5kg",
    "image": "/products/img_127_1774022431977.jpg",
    "images": [
      "/products/img_127_1774022431977.jpg"
    ],
    "description": "Extra bran added for high dietary fiber.",
    "shortDescription": "High fiber wheat atta",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "fiber",
      "wheat",
      "digestion"
    ],
    "rating": 4.1,
    "reviewCount": 115,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5660",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "104",
    "name": "Emmer Wheat Atta",
    "slug": "emmer-wheat-atta",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Wheat base Flour",
    "price": 12.99,
    "weight": "1kg",
    "image": "/products/img_128_1774022432170.jpg",
    "images": [
      "/products/img_128_1774022432170.jpg"
    ],
    "description": "Ancient grain emmer wheat flour (Khapli).",
    "shortDescription": "Low GI Khapli wheat flour",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "emmer",
      "khapli",
      "wheat"
    ],
    "rating": 4.1,
    "reviewCount": 144,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2539",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "105",
    "name": "Ragi Flour",
    "slug": "ragi-flour",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Millets base flours",
    "price": 4.99,
    "weight": "1kg",
    "image": "/products/img_129_1774022432334.jpg",
    "images": [
      "/products/img_129_1774022432334.jpg"
    ],
    "description": "Finger millet flour rich in calcium.",
    "shortDescription": "Calcium rich ragi atta",
    "origin": "Karnataka",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ragi",
      "millet",
      "flour"
    ],
    "rating": 4.8,
    "reviewCount": 105,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7190",
      "harvestDate": "Oct 2025",
      "farmName": "Karnataka Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "106",
    "name": "Jowar Flour",
    "slug": "jowar-flour",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Millets base flours",
    "price": 4.49,
    "weight": "1kg",
    "image": "/products/img_130_1774022432965.jpg",
    "images": [
      "/products/img_130_1774022432965.jpg"
    ],
    "description": "Sorghum flour, gluten-free.",
    "shortDescription": "Gluten-free jowar atta",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jowar",
      "millet",
      "gluten-free"
    ],
    "rating": 4.6,
    "reviewCount": 170,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9702",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "107",
    "name": "Bajra Flour",
    "slug": "bajra-flour",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Millets base flours",
    "price": 3.99,
    "weight": "1kg",
    "image": "/products/img_131_1774022435308.jpg",
    "images": [
      "/products/img_132_1774022435500.jpg"
    ],
    "description": "Pearl millet flour, great for winters.",
    "shortDescription": "Warm and nutritious bajra atta",
    "origin": "Rajasthan",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bajra",
      "millet",
      "flour"
    ],
    "rating": 4.1,
    "reviewCount": 68,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5501",
      "harvestDate": "Oct 2025",
      "farmName": "Rajasthan Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "108",
    "name": "Foxtail Millet Flour",
    "slug": "foxtail-millet-flour",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Millets base flours",
    "price": 5.99,
    "weight": "1kg",
    "image": "/products/img_133_1774022437023.jpg",
    "images": [
      "/products/img_133_1774022437023.jpg"
    ],
    "description": "Nutritious foxtail millet flour.",
    "shortDescription": "Healthy foxtail millet flour",
    "origin": "Andhra Pradesh",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "foxtail",
      "millet",
      "flour"
    ],
    "rating": 4.4,
    "reviewCount": 223,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2508",
      "harvestDate": "Oct 2025",
      "farmName": "Andhra Pradesh Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "109",
    "name": "Barnyard Millet Flour",
    "slug": "barnyard-millet-flour",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Millets base flours",
    "price": 6.49,
    "weight": "1kg",
    "image": "/products/img_134_1774022442624.jpg",
    "images": [
      "/products/img_134_1774022442624.jpg"
    ],
    "description": "Low carb barnyard millet flour.",
    "shortDescription": "Fasting-friendly barnyard millet atta",
    "origin": "Uttarakhand",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "barnyard",
      "millet",
      "fasting"
    ],
    "rating": 4.1,
    "reviewCount": 239,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5880",
      "harvestDate": "Oct 2025",
      "farmName": "Uttarakhand Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "110",
    "name": "Nutty Trail Mix Pack",
    "slug": "nutty-trail-mix-pack",
    "category": "Trail packs",
    "price": 3.49,
    "weight": "150g",
    "image": "/products/img_135_1774022443534.jpg",
    "images": [
      "/products/img_136_1774022443935.jpeg"
    ],
    "description": "Sample pack of our premium mixed nuts.",
    "shortDescription": "Trial pack of mixed nuts",
    "origin": "Various",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "trial",
      "nuts",
      "snack"
    ],
    "rating": 4.3,
    "reviewCount": 89,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6647",
      "harvestDate": "Oct 2025",
      "farmName": "Various Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "111",
    "name": "Berry & Seed Trail Pack",
    "slug": "berry-seed-trail-pack",
    "category": "Trail packs",
    "price": 3.99,
    "weight": "150g",
    "image": "/products/img_137_1774022444373.webp",
    "images": [
      "/products/img_138_1774022444655.jpg",
      "/products/img_137_1774022444373.webp",
      "/products/img_139_1774022445107.jpg"
    ],
    "description": "Sample pack of dried berries and super seeds.",
    "shortDescription": "Trial pack of berries and seeds",
    "origin": "Various",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "trial",
      "berries",
      "seeds"
    ],
    "rating": 4.3,
    "reviewCount": 186,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8001",
      "harvestDate": "Oct 2025",
      "farmName": "Various Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "112",
    "name": "Tropical Fruit Trail Pack",
    "slug": "tropical-fruit-trail-pack",
    "category": "Trail packs",
    "price": 4.49,
    "weight": "150g",
    "image": "/products/img_140_1774022445522.jpg",
    "images": [
      "/products/img_141_1774022447675.jpg",
      "/products/img_142_1774022447985.jpeg"
    ],
    "description": "Sample pack of dried tropical fruits.",
    "shortDescription": "Trial pack of dried fruits",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "trial",
      "fruits",
      "snack"
    ],
    "rating": 4.3,
    "reviewCount": 98,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9080",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "113",
    "name": "Spiced Nuts Trail Pack",
    "slug": "spiced-nuts-trail-pack",
    "category": "Trail packs",
    "price": 3.99,
    "weight": "150g",
    "image": "/products/img_143_1774022450552.jpg",
    "images": [
      "/products/img_144_1774022453380.jpg",
      "/products/img_145_1774022453951.jpg"
    ],
    "description": "Sample pack of roasted and spiced nuts.",
    "shortDescription": "Trial pack of spiced nuts",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "trial",
      "nuts",
      "spicy"
    ],
    "rating": 4.1,
    "reviewCount": 248,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0628",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "114",
    "name": "Energy Booster Trail Pack",
    "slug": "energy-booster-trail-pack",
    "category": "Trail packs",
    "price": 4.99,
    "weight": "150g",
    "image": "/products/img_146_1774022456578.jpg",
    "images": [
      "/products/img_147_1774022457022.jpg"
    ],
    "description": "Sample pack for quick energy.",
    "shortDescription": "Trial pack for energy boosting",
    "origin": "Various",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "trial",
      "energy",
      "mix"
    ],
    "rating": 4.2,
    "reviewCount": 60,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3080",
      "harvestDate": "Oct 2025",
      "farmName": "Various Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "115",
    "name": "Premium Red Apples",
    "slug": "premium-red-apples",
    "category": "Fruits",
    "price": 5.99,
    "weight": "1kg",
    "image": "/products/img_148_1774022457306.jpg",
    "images": [
      "/products/img_149_1774022457871.jpg",
      "/products/img_150_1774022458136.jpg"
    ],
    "description": "Crisp and sweet premium red apples.",
    "shortDescription": "Fresh crunchy red apples",
    "origin": "Himachal Pradesh",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "apple",
      "fresh",
      "fruit"
    ],
    "rating": 4.7,
    "reviewCount": 124,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3650",
      "harvestDate": "Oct 2025",
      "farmName": "Himachal Pradesh Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "116",
    "name": "Cavendish Bananas",
    "slug": "cavendish-bananas",
    "category": "Fruits",
    "price": 2.99,
    "weight": "1kg",
    "image": "/products/img_151_1774022459219.jpg",
    "images": [
      "/products/img_152_1774022459809.jpg",
      "/products/img_153_1774022460196.jpg",
      "/products/img_154_1774022460577.jpg"
    ],
    "description": "Perfectly ripe and sweet yellow bananas.",
    "shortDescription": "Daily fresh bananas",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "banana",
      "fresh",
      "fruit"
    ],
    "rating": 4.8,
    "reviewCount": 291,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0135",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "117",
    "name": "Alphonso Mangoes",
    "slug": "alphonso-mangoes",
    "category": "Fruits",
    "price": 15.99,
    "weight": "1kg",
    "image": "/products/img_155_1774022460940.jpg",
    "images": [
      "/products/img_156_1774022461220.jpg",
      "/products/img_157_1774022462041.webp"
    ],
    "description": "The king of mangoes, rich and sweet.",
    "shortDescription": "Premium Alphonso mangoes",
    "origin": "Ratnagiri",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "mango",
      "premium",
      "fruit"
    ],
    "rating": 4.5,
    "reviewCount": 190,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9763",
      "harvestDate": "Oct 2025",
      "farmName": "Ratnagiri Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "118",
    "name": "Green Seedless Grapes",
    "slug": "green-seedless-grapes",
    "category": "Fruits",
    "price": 6.49,
    "weight": "500g",
    "image": "/products/img_158_1774022463475.jpg",
    "images": [
      "/products/img_159_1774022463787.webp",
      "/products/img_160_1774022464057.jpeg"
    ],
    "description": "Sweet and crunchy seedless grapes.",
    "shortDescription": "Fresh green grapes",
    "origin": "Nashik",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "grapes",
      "fresh",
      "fruit"
    ],
    "rating": 4.9,
    "reviewCount": 45,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1835",
      "harvestDate": "Oct 2025",
      "farmName": "Nashik Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "119",
    "name": "Pomegranates",
    "slug": "pomegranates",
    "category": "Fruits",
    "price": 7.99,
    "weight": "1kg",
    "image": "/products/img_161_1774022464441.jpg",
    "images": [
      "/products/img_162_1774022464511.jpg",
      "/products/img_163_1774022465236.jpg",
      "/products/img_164_1774022465660.jpg"
    ],
    "description": "Ruby red juicy pomegranates.",
    "shortDescription": "Antioxidant rich pomegranates",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pomegranate",
      "fresh",
      "fruit"
    ],
    "rating": 4.5,
    "reviewCount": 221,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2903",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "120",
    "name": "Hass Avocado",
    "slug": "hass-avocado",
    "category": "Vegetables",
    "subCategory": "Exotic vegetables",
    "price": 4.99,
    "weight": "2 pcs",
    "image": "/products/img_165_1774022466371.jpg",
    "images": [
      "/products/img_166_1774022466649.jpg",
      "/products/img_167_1774022467246.webp"
    ],
    "description": "Creamy and rich Hass avocados.",
    "shortDescription": "Premium Hass avocado",
    "origin": "Imported",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "avocado",
      "exotic",
      "veg"
    ],
    "rating": 5,
    "reviewCount": 208,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9013",
      "harvestDate": "Oct 2025",
      "farmName": "Imported Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "121",
    "name": "Asparagus",
    "slug": "asparagus",
    "category": "Vegetables",
    "subCategory": "Exotic vegetables",
    "price": 8.99,
    "weight": "250g",
    "image": "/products/img_168_1774022467783.jpg",
    "images": [
      "/products/img_169_1774022470107.jpg",
      "/products/img_170_1774022470764.jpg"
    ],
    "description": "Fresh green asparagus spears.",
    "shortDescription": "Tender asparagus spears",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "asparagus",
      "exotic",
      "veg"
    ],
    "rating": 4.2,
    "reviewCount": 247,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4743",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "122",
    "name": "Broccoli",
    "slug": "broccoli",
    "category": "Vegetables",
    "subCategory": "Exotic vegetables",
    "price": 3.49,
    "weight": "500g",
    "image": "/products/img_171_1774022471395.jpeg",
    "images": [
      "/products/img_172_1774022473495.jpg",
      "/products/img_173_1774022473977.jpg"
    ],
    "description": "Fresh green broccoli heads.",
    "shortDescription": "Nutrient dense broccoli",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "broccoli",
      "exotic",
      "veg"
    ],
    "rating": 4.8,
    "reviewCount": 138,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0791",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "123",
    "name": "Zucchini (Green & Yellow)",
    "slug": "zucchini-green-yellow-",
    "category": "Vegetables",
    "subCategory": "Exotic vegetables",
    "price": 4.49,
    "weight": "500g",
    "image": "/products/img_174_1774022475225.jpg",
    "images": [
      "/products/img_175_1774022477940.jpg",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/12/0/FN_squash-zucchini-getty-stock_s6x4.jpg.rend.hgtvcom.1280.1280.85.suffix/1568296273121.webp"
    ],
    "description": "Mix of fresh green and yellow zucchinis.",
    "shortDescription": "Fresh crisp zucchinis",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "zucchini",
      "exotic",
      "veg"
    ],
    "rating": 4.5,
    "reviewCount": 103,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4228",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "124",
    "name": "Bell Peppers (Mixed)",
    "slug": "bell-peppers-mixed-",
    "category": "Vegetables",
    "subCategory": "Exotic vegetables",
    "price": 5.99,
    "weight": "500g",
    "image": "/products/img_177_1774022479726.jpg",
    "images": [
      "/products/img_178_1774022480092.jpg",
      "/products/img_179_1774022481776.jpg"
    ],
    "description": "Red, yellow, and green bell peppers.",
    "shortDescription": "Colorful bell peppers",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bellpeppers",
      "exotic",
      "veg"
    ],
    "rating": 4.4,
    "reviewCount": 154,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7445",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "125",
    "name": "Imperfect Tomatoes",
    "slug": "imperfect-tomatoes",
    "category": "Vegetables",
    "subCategory": "Ugly harvest Vegetables",
    "price": 1.99,
    "weight": "1kg",
    "image": "/products/img_180_1774022482156.jpg",
    "images": [
      "/products/img_180_1774022482156.jpg",
      "/products/img_181_1774022484672.jpg"
    ],
    "description": "Slightly misshapen but perfectly delicious tomatoes.",
    "shortDescription": "Save food with ugly tomatoes",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ugly",
      "tomato",
      "sustainable"
    ],
    "rating": 4.2,
    "reviewCount": 247,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4359",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "126",
    "name": "Odd Carrots",
    "slug": "odd-carrots",
    "category": "Vegetables",
    "subCategory": "Ugly harvest Vegetables",
    "price": 1.49,
    "weight": "1kg",
    "image": "/products/img_182_1774022484924.jpg",
    "images": [
      "/products/img_183_1774022486176.jpg"
    ],
    "description": "Twisted and odd-shaped fresh carrots.",
    "shortDescription": "Discounted odd carrots",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ugly",
      "carrot",
      "sustainable"
    ],
    "rating": 4.3,
    "reviewCount": 55,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2011",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "127",
    "name": "Bumpy Potatoes",
    "slug": "bumpy-potatoes",
    "category": "Vegetables",
    "subCategory": "Ugly harvest Vegetables",
    "price": 1.29,
    "weight": "1kg",
    "image": "/products/img_184_1774022486861.jpg",
    "images": [
      "/products/img_184_1774022486861.jpg",
      "/products/img_185_1774022489300.jpg"
    ],
    "description": "Potatoes with bumps and bruises, great for mashing.",
    "shortDescription": "Perfectly fine bumpy potatoes",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ugly",
      "potato",
      "sustainable"
    ],
    "rating": 4.2,
    "reviewCount": 117,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6236",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "128",
    "name": "Crooked Cucumbers",
    "slug": "crooked-cucumbers",
    "category": "Vegetables",
    "subCategory": "Ugly harvest Vegetables",
    "price": 1.79,
    "weight": "1kg",
    "image": "/products/img_186_1774022490622.jpg",
    "images": [
      "/products/img_186_1774022490622.jpg",
      "/products/img_187_1774022491266.jpg"
    ],
    "description": "Curved cucumbers, same great taste.",
    "shortDescription": "Curved imperfect cucumbers",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ugly",
      "cucumber",
      "sustainable"
    ],
    "rating": 4.1,
    "reviewCount": 254,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4657",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "129",
    "name": "Fresh Spinach",
    "slug": "fresh-spinach",
    "category": "Vegetables",
    "subCategory": "Leafy Greens",
    "price": 2.49,
    "weight": "250g",
    "image": "/products/img_188_1774022493746.jpg",
    "images": [
      "/products/img_189_1774022494319.jpg",
      "/products/img_190_1774022494584.jpg"
    ],
    "description": "Freshly harvested green spinach leaves.",
    "shortDescription": "Iron packed spinach",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "leafy",
      "spinach",
      "greens"
    ],
    "rating": 4.5,
    "reviewCount": 143,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9124",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "130",
    "name": "Coriander Leaves",
    "slug": "coriander-leaves",
    "category": "Vegetables",
    "subCategory": "Leafy Greens",
    "price": 1.49,
    "weight": "100g",
    "image": "/products/img_191_1774022494976.jpg",
    "images": [
      "/products/img_192_1774022495398.webp",
      "/products/img_193_1774022495906.jpg"
    ],
    "description": "Aromatic fresh coriander cilantro.",
    "shortDescription": "Fresh garnish coriander",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "leafy",
      "coriander",
      "greens"
    ],
    "rating": 4.6,
    "reviewCount": 257,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4420",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "131",
    "name": "Mint Leaves",
    "slug": "mint-leaves",
    "category": "Vegetables",
    "subCategory": "Leafy Greens",
    "price": 1.49,
    "weight": "100g",
    "image": "https://www.jiomart.com/images/product/original/590000532/mint-leaves-1-bunch-approx-80-g-130-g-product-images-o590000532-p590000532-0-202506101652.jpg?im=Resize=(1000,1000)",
    "images": [
      "/products/img_195_1774022496686.jpg",
      "/products/img_196_1774022497677.jpg"
    ],
    "description": "Refreshing mint leaves.",
    "shortDescription": "Fresh aromatic mint",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "leafy",
      "mint",
      "greens"
    ],
    "rating": 4.4,
    "reviewCount": 292,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5154",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "132",
    "name": "Fenugreek (Methi)",
    "slug": "fenugreek-methi-",
    "category": "Vegetables",
    "subCategory": "Leafy Greens",
    "price": 2.29,
    "weight": "250g",
    "image": "https://www.jiomart.com/images/product/original/590003520/fenugreek-leaves-methi-250-g-product-images-o590003520-p613341442-0-202601091618.jpg?im=Resize=(420,420)",
    "images": [
      "/products/img_198_1774022498529.jpg",
      "/products/img_199_1774022499216.jpg"
    ],
    "description": "Fresh methi leaves.",
    "shortDescription": "Healthy fresh methi",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "leafy",
      "methi",
      "greens"
    ],
    "rating": 4.2,
    "reviewCount": 209,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9446",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "133",
    "name": "Red Onions",
    "slug": "red-onions",
    "category": "Vegetables",
    "subCategory": "Fresh vegetables",
    "price": 3.49,
    "weight": "1kg",
    "image": "/products/img_200_1774022499547.jpg",
    "images": [
      "/products/img_201_1774022499967.jpg",
      "/products/img_202_1774022500277.jpg"
    ],
    "description": "Staple red onions.",
    "shortDescription": "Premium red onions",
    "origin": "Nasik",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "onions",
      "fresh",
      "veg"
    ],
    "rating": 4.9,
    "reviewCount": 12,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5227",
      "harvestDate": "Oct 2025",
      "farmName": "Nasik Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "134",
    "name": "Garlic",
    "slug": "garlic",
    "category": "Vegetables",
    "subCategory": "Fresh vegetables",
    "price": 4.99,
    "weight": "250g",
    "image": "/products/img_203_1774022500652.jpg",
    "images": [
      "/products/img_204_1774022500856.jpg",
      "https://www.jiomart.com/images/product/original/590003532/indian-garlic-200-g-product-images-o590003532-p590003532-0-202408070949.jpg?im=Resize=(1000,1000)"
    ],
    "description": "Strong flavor garlic bulbs.",
    "shortDescription": "Fresh garlic bulbs",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "garlic",
      "fresh",
      "veg"
    ],
    "rating": 4.4,
    "reviewCount": 281,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2390",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "135",
    "name": "Cauliflower",
    "slug": "cauliflower",
    "category": "Vegetables",
    "subCategory": "Fresh vegetables",
    "price": 2.99,
    "weight": "1 pc",
    "image": "/products/img_206_1774022501176.jpg",
    "images": [
      "/products/img_207_1774022502970.jpg"
    ],
    "description": "Fresh whole cauliflower head.",
    "shortDescription": "Crisp cauliflower",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "cauliflower",
      "fresh",
      "veg"
    ],
    "rating": 5,
    "reviewCount": 106,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4887",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "136",
    "name": "Lady Finger (Bhindi)",
    "slug": "lady-finger-bhindi-",
    "category": "Vegetables",
    "subCategory": "Fresh vegetables",
    "price": 3.29,
    "weight": "500g",
    "image": "/products/img_208_1774022503351.webp",
    "images": [
      "/products/img_209_1774022504066.jpg",
      "/products/img_210_1774022504622.png"
    ],
    "description": "Tender lady fingers.",
    "shortDescription": "Fresh green lady fingers",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bhindi",
      "fresh",
      "veg"
    ],
    "rating": 4.4,
    "reviewCount": 24,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2155",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "137",
    "name": "Green Peas",
    "slug": "green-peas",
    "category": "Vegetables",
    "subCategory": "Fresh vegetables",
    "price": 4.49,
    "weight": "500g",
    "image": "/products/img_211_1774022505448.png",
    "images": [
      "/products/img_212_1774022505967.jpg"
    ],
    "description": "Sweet green peas in pod.",
    "shortDescription": "Fresh sweet peas",
    "origin": "Local Farms",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "peas",
      "fresh",
      "veg"
    ],
    "rating": 4.2,
    "reviewCount": 172,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9264",
      "harvestDate": "Oct 2025",
      "farmName": "Local Farms Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "138",
    "name": "Whole Ragi (Finger Millet)",
    "slug": "whole-ragi-finger-millet-",
    "category": "Millets",
    "subCategory": "Millets Whole and Rava",
    "price": 3.99,
    "weight": "1kg",
    "image": "/products/img_213_1774022506142.png",
    "images": [
      "/products/img_214_1774022507772.jpg",
      "/products/img_215_1774022508227.jpg"
    ],
    "description": "Unpolished whole ragi grains.",
    "shortDescription": "Nutritious whole ragi",
    "origin": "Karnataka",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ragi",
      "millet",
      "whole"
    ],
    "rating": 4.4,
    "reviewCount": 106,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2526",
      "harvestDate": "Oct 2025",
      "farmName": "Karnataka Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "139",
    "name": "Foxtail Millet Rava",
    "slug": "foxtail-millet-rava",
    "category": "Millets",
    "subCategory": "Millets Whole and Rava",
    "price": 5.49,
    "weight": "500g",
    "image": "/products/img_216_1774022508595.jpeg",
    "images": [
      "/products/img_217_1774022508889.jpg",
      "/products/img_218_1774022509027.jpg"
    ],
    "description": "Coarsely ground foxtail millet for upma.",
    "shortDescription": "Healthy foxtail millet rava",
    "origin": "Andhra Pradesh",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "foxtail",
      "millet",
      "rava"
    ],
    "rating": 4.1,
    "reviewCount": 269,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5826",
      "harvestDate": "Oct 2025",
      "farmName": "Andhra Pradesh Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "140",
    "name": "Whole Little Millet",
    "slug": "whole-little-millet",
    "category": "Millets",
    "subCategory": "Millets Whole and Rava",
    "price": 6.99,
    "weight": "1kg",
    "image": "/products/img_219_1774022509386.png",
    "images": [
      "/products/img_220_1774022510941.jpg",
      "/products/img_221_1774022511906.png"
    ],
    "description": "Unpolished whole little millet.",
    "shortDescription": "Diet friendly little millet",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "little",
      "millet",
      "whole"
    ],
    "rating": 4.3,
    "reviewCount": 226,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4148",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "141",
    "name": "Jowar Rava",
    "slug": "jowar-rava",
    "category": "Millets",
    "subCategory": "Millets Whole and Rava",
    "price": 4.99,
    "weight": "500g",
    "image": "/products/img_222_1774022514988.jpg",
    "images": [
      "/products/img_222_1774022514988.jpg"
    ],
    "description": "Sorghum semolina for healthy breakfast.",
    "shortDescription": "Gluten-free jowar rava",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jowar",
      "millet",
      "rava"
    ],
    "rating": 4,
    "reviewCount": 185,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7696",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "142",
    "name": "Proso Millet Whole",
    "slug": "proso-millet-whole",
    "category": "Millets",
    "subCategory": "Millets Whole and Rava",
    "price": 5.99,
    "weight": "1kg",
    "image": "/products/img_223_1774022515529.webp",
    "images": [
      "/products/img_224_1774022515596.jpg"
    ],
    "description": "Premium proso millet grains.",
    "shortDescription": "High protein proso millet",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "proso",
      "millet",
      "whole"
    ],
    "rating": 4.4,
    "reviewCount": 268,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7737",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "146",
    "name": "Mixed Italian Herbs",
    "slug": "mixed-italian-herbs",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Dry Herbs",
    "price": 6.99,
    "weight": "100g",
    "image": "/products/img_225_1774022515838.jpg",
    "images": [
      "/products/img_226_1774022516982.jpg",
      "/products/img_227_1774022517694.jpg",
      "/products/img_228_1774022518628.jpg"
    ],
    "description": "Perfect blend of Italian dried herbs.",
    "shortDescription": "Classic Italian herb mix",
    "origin": "Various",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "mixed",
      "herb",
      "italian"
    ],
    "rating": 4.5,
    "reviewCount": 273,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1107",
      "harvestDate": "Oct 2025",
      "farmName": "Various Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "147",
    "name": "Premium Almonds",
    "slug": "premium-almonds",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Dry Fruits",
    "price": 14.99,
    "weight": "500g",
    "image": "/products/img_229_1774022519507.png",
    "images": [
      "/products/img_230_1774022520112.jpg",
      "/products/img_231_1774022520562.jpg",
      "/products/img_232_1774022521522.jpg",
      "/products/img_233_1774022522253.jpg",
      "/products/img_234_1774022522977.webp"
    ],
    "description": "Crunchy California almonds.",
    "shortDescription": "High grade almonds",
    "origin": "California",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "almond",
      "dryfruit",
      "nuts"
    ],
    "rating": 4.2,
    "reviewCount": 112,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4280",
      "harvestDate": "Oct 2025",
      "farmName": "California Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "148",
    "name": "Cashew Nuts W320",
    "slug": "cashew-nuts-w320",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Dry Fruits",
    "price": 16.99,
    "weight": "500g",
    "image": "/products/img_235_1774022523729.jpg",
    "images": [
      "/products/img_236_1774022523960.png",
      "/products/img_237_1774022524648.webp",
      "/products/img_238_1774022526383.jpg",
      "/products/img_239_1774022527047.jpg"
    ],
    "description": "Whole white cashew nuts.",
    "shortDescription": "Premium whole cashews",
    "origin": "Goa",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "cashew",
      "dryfruit",
      "nuts"
    ],
    "rating": 4.6,
    "reviewCount": 175,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5935",
      "harvestDate": "Oct 2025",
      "farmName": "Goa Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "149",
    "name": "Afghan Raisins",
    "slug": "afghan-raisins",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Dry Fruits",
    "price": 8.99,
    "weight": "500g",
    "image": "/products/img_240_1774022527389.jpg",
    "images": [
      "/products/img_241_1774022527996.png",
      "/products/img_242_1774022528575.jpg"
    ],
    "description": "Sweet green raisins.",
    "shortDescription": "Sweet Afghan raisins",
    "origin": "Afghanistan",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "raisin",
      "dryfruit",
      "sweet"
    ],
    "rating": 5,
    "reviewCount": 43,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1493",
      "harvestDate": "Oct 2025",
      "farmName": "Afghanistan Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "150",
    "name": "Walnut Kernels",
    "slug": "walnut-kernels",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Dry Fruits",
    "price": 18.99,
    "weight": "500g",
    "image": "/products/img_243_1774022531103.jpg",
    "images": [
      "/products/img_244_1774022531746.webp",
      "/products/img_245_1774022532619.jpg",
      "/products/img_246_1774022533019.png"
    ],
    "description": "Brain-boosting walnut halves.",
    "shortDescription": "Premium walnut halves",
    "origin": "Kashmir",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "walnut",
      "dryfruit",
      "nuts"
    ],
    "rating": 4.1,
    "reviewCount": 303,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6603",
      "harvestDate": "Oct 2025",
      "farmName": "Kashmir Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "151",
    "name": "Dried Figs (Anjeer)",
    "slug": "dried-figs-anjeer-",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Dry Fruits",
    "price": 15.99,
    "weight": "500g",
    "image": "/products/img_247_1774022534703.jpg",
    "images": [
      "/products/img_248_1774022535117.jpg",
      "/products/img_249_1774022535778.png",
      "/products/img_250_1774022536844.png"
    ],
    "description": "Chewy and sweet dried figs.",
    "shortDescription": "High fiber dried figs",
    "origin": "Afghanistan",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "fig",
      "dryfruit",
      "sweet"
    ],
    "rating": 4.4,
    "reviewCount": 241,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4152",
      "harvestDate": "Oct 2025",
      "farmName": "Afghanistan Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "152",
    "name": "Chia Seeds",
    "slug": "chia-seeds",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Super Seeds",
    "price": 8.99,
    "weight": "250g",
    "image": "/products/img_251_1774022537247.jpg",
    "images": [
      "/products/img_252_1774022538279.jpg",
      "/products/img_253_1774022538648.jpg"
    ],
    "description": "Omega-3 rich raw chia seeds.",
    "shortDescription": "Nutrient dense chia seeds",
    "origin": "Mexico",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chia",
      "seed",
      "superfood"
    ],
    "rating": 4,
    "reviewCount": 173,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0679",
      "harvestDate": "Oct 2025",
      "farmName": "Mexico Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "153",
    "name": "Pumpkin Seeds",
    "slug": "pumpkin-seeds",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Super Seeds",
    "price": 7.49,
    "weight": "250g",
    "image": "/products/img_254_1774022539500.jpg",
    "images": [
      "/products/img_255_1774022540022.jpg",
      "/products/img_256_1774022540622.jpg",
      "/products/img_257_1774022540959.jpg"
    ],
    "description": "Raw green pumpkin seeds.",
    "shortDescription": "Zinc rich pumpkin seeds",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pumpkin",
      "seed",
      "superfood"
    ],
    "rating": 4.2,
    "reviewCount": 293,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3041",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "154",
    "name": "Sunflower Seeds",
    "slug": "sunflower-seeds",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Super Seeds",
    "price": 5.99,
    "weight": "250g",
    "image": "https://www.theenglishgarden.co.uk/_gatsby/file/ef6b9cdbd214434de399c03057e6c4de/37442_shutterstock_1903211632.jpg",
    "images": [
      "/products/img_259_1774022543311.jpg",
      "/products/img_260_1774022548072.jpeg"
    ],
    "description": "Hulled sunflower seeds.",
    "shortDescription": "Vitamin E rich sunflower seeds",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "sunflower",
      "seed",
      "superfood"
    ],
    "rating": 4.8,
    "reviewCount": 276,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2474",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "155",
    "name": "Flax Seeds",
    "slug": "flax-seeds",
    "category": "Dry Fruits & Seeds",
    "subCategory": "Super Seeds",
    "price": 4.99,
    "weight": "250g",
    "image": "/products/img_261_1774022548528.jpg",
    "images": [
      "/products/img_262_1774022548772.jpg"
    ],
    "description": "Roasted flax seeds for digestion.",
    "shortDescription": "Omega-3 rich flax seeds",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "flax",
      "seed",
      "superfood"
    ],
    "rating": 5,
    "reviewCount": 40,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3375",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "156",
    "name": "Tomato Ketchup",
    "slug": "tomato-ketchup",
    "category": "Bakery",
    "subCategory": "Condiments",
    "price": 3.99,
    "weight": "500g",
    "image": "/products/img_263_1774022550993.jpg",
    "images": [
      "/products/img_264_1774022552865.jpg",
      "/products/img_265_1774022553424.png"
    ],
    "description": "Classic sweet and tangy tomato ketchup.",
    "shortDescription": "Classic tomato ketchup",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ketchup",
      "condiment"
    ],
    "rating": 4.4,
    "reviewCount": 224,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2368",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "157",
    "name": "Eggless Mayonnaise",
    "slug": "eggless-mayonnaise",
    "category": "Bakery",
    "subCategory": "Condiments",
    "price": 4.49,
    "weight": "250g",
    "image": "/products/img_266_1774022554990.jpg",
    "images": [
      "/products/img_267_1774022555759.jpg"
    ],
    "description": "Creamy veg mayonnaise.",
    "shortDescription": "Thick & creamy mayo",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "mayo",
      "condiment"
    ],
    "rating": 4.5,
    "reviewCount": 232,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7737",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "158",
    "name": "Kasundi Mustard Sauce",
    "slug": "kasundi-mustard-sauce",
    "category": "Bakery",
    "subCategory": "Condiments",
    "price": 5.99,
    "weight": "250g",
    "image": "/products/img_268_1774022557739.jpg",
    "images": [
      "/products/img_269_1774022558275.JPG",
      "/products/img_270_1774022560945.jpg"
    ],
    "description": "Spicy Bengali mustard sauce.",
    "shortDescription": "Pungent mustard sauce",
    "origin": "West Bengal",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "mustard",
      "condiment"
    ],
    "rating": 4.9,
    "reviewCount": 192,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8687",
      "harvestDate": "Oct 2025",
      "farmName": "West Bengal Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "159",
    "name": "Chilli Garlic Dip",
    "slug": "chilli-garlic-dip",
    "category": "Bakery",
    "subCategory": "Condiments",
    "price": 4.99,
    "weight": "200g",
    "image": "/products/img_271_1774022565896.jpg",
    "images": [
      "/products/img_272_1774022567627.jpg"
    ],
    "description": "Spicy dip for baked snacks.",
    "shortDescription": "Spicy garlic dip",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "dip",
      "condiment"
    ],
    "rating": 4.7,
    "reviewCount": 142,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1629",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "160",
    "name": "Chocolate Chip Cookies",
    "slug": "chocolate-chip-cookies",
    "category": "Bakery",
    "subCategory": "Cake & Cookies",
    "price": 6.99,
    "weight": "200g",
    "image": "/products/img_273_1774022568288.jpg",
    "images": [
      "/products/img_274_1774022569602.jpg"
    ],
    "description": "Crunchy cookies with dark chocolate chips.",
    "shortDescription": "Classic choco chip cookies",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "cookie",
      "chocolate",
      "baked"
    ],
    "rating": 4,
    "reviewCount": 213,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5076",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "161",
    "name": "Oatmeal Raisin Cookies",
    "slug": "oatmeal-raisin-cookies",
    "category": "Bakery",
    "subCategory": "Cake & Cookies",
    "price": 5.99,
    "weight": "200g",
    "image": "/products/img_275_1774022569961.jpg",
    "images": [
      "/products/img_276_1774022570394.jpg",
      "/products/img_277_1774022571373.jpg"
    ],
    "description": "Healthy oats and raisin cookies.",
    "shortDescription": "Chewy oatmeal cookies",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "cookie",
      "oats",
      "baked"
    ],
    "rating": 4.1,
    "reviewCount": 43,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5590",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "162",
    "name": "Dry Fruit Plum Cake",
    "slug": "dry-fruit-plum-cake",
    "category": "Bakery",
    "subCategory": "Cake & Cookies",
    "price": 12.99,
    "weight": "400g",
    "image": "/products/img_278_1774022572059.jpg",
    "images": [
      "/products/img_279_1774022575484.jpg"
    ],
    "description": "Rich plum cake loaded with dry fruits.",
    "shortDescription": "Classic plum cake",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "cake",
      "plum",
      "baked"
    ],
    "rating": 4.7,
    "reviewCount": 138,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0373",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "163",
    "name": "Almond Biscotti",
    "slug": "almond-biscotti",
    "category": "Bakery",
    "subCategory": "Cake & Cookies",
    "price": 8.99,
    "weight": "150g",
    "image": "/products/img_280_1774022577180.jpg",
    "images": [
      "/products/img_281_1774022578320.jpg",
      "/products/img_282_1774022578952.jpg"
    ],
    "description": "Twice baked crunchy almond biscotti.",
    "shortDescription": "Italian style biscotti",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "biscotti",
      "almond",
      "baked"
    ],
    "rating": 4.8,
    "reviewCount": 11,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3679",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "164",
    "name": "100% Whole Wheat Bread",
    "slug": "100-whole-wheat-bread",
    "category": "Bakery",
    "subCategory": "Breads And Buns",
    "price": 4.49,
    "weight": "400g",
    "image": "/products/img_283_1774022579640.jpg",
    "images": [
      "/products/img_284_1774022580405.jpg"
    ],
    "description": "Soft and fresh whole wheat bread.",
    "shortDescription": "Healthy wheat bread",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bread",
      "wheat",
      "baked"
    ],
    "rating": 4.8,
    "reviewCount": 213,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3167",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "165",
    "name": "Multigrain Bread",
    "slug": "multigrain-bread",
    "category": "Bakery",
    "subCategory": "Breads And Buns",
    "price": 5.49,
    "weight": "400g",
    "image": "/products/img_285_1774022580889.jpg",
    "images": [
      "/products/img_286_1774022581758.jpg",
      "/products/img_287_1774022582571.webp"
    ],
    "description": "Seeded multigrain sourdough bread.",
    "shortDescription": "Artisan multigrain bread",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bread",
      "multigrain",
      "baked"
    ],
    "rating": 4.4,
    "reviewCount": 138,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9065",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "166",
    "name": "Burger Buns (Pack of 4)",
    "slug": "burger-buns-pack-of-4-",
    "category": "Bakery",
    "subCategory": "Breads And Buns",
    "price": 3.99,
    "weight": "200g",
    "image": "/products/img_288_1774022584696.png",
    "images": [
      "/products/img_289_1774022585555.jpg",
      "/products/img_290_1774022586253.jpg"
    ],
    "description": "Soft sesame seeded burger buns.",
    "shortDescription": "Classic burger buns",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bun",
      "burger",
      "baked"
    ],
    "rating": 4.2,
    "reviewCount": 48,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6697",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "167",
    "name": "Garlic Loaf",
    "slug": "garlic-loaf",
    "category": "Bakery",
    "subCategory": "Breads And Buns",
    "price": 6.49,
    "weight": "300g",
    "image": "/products/img_291_1774022586537.jpg",
    "images": [
      "/products/img_292_1774022586834.jpg",
      "/products/img_293_1774022587762.jpg"
    ],
    "description": "Herb and garlic infused bread loaf.",
    "shortDescription": "Aromatic garlic bread",
    "origin": "In-house Bakery",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "bread",
      "garlic",
      "baked"
    ],
    "rating": 4.2,
    "reviewCount": 225,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7085",
      "harvestDate": "Oct 2025",
      "farmName": "In-house Bakery Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "168",
    "name": "Organic Jaggery Powder",
    "slug": "organic-jaggery-powder",
    "category": "Sweeteners",
    "subCategory": "Jaggery",
    "price": 5.99,
    "weight": "500g",
    "image": "/products/img_294_1774022588101.jpg",
    "images": [
      "/products/img_295_1774022588791.jpg",
      "/products/img_296_1774022589115.jpg"
    ],
    "description": "Chemical-free powdered jaggery.",
    "shortDescription": "Unrefined jaggery powder",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jaggery",
      "sweetener",
      "organic"
    ],
    "rating": 4.4,
    "reviewCount": 179,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6935",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "169",
    "name": "Palm Jaggery Block",
    "slug": "palm-jaggery-block",
    "category": "Sweeteners",
    "subCategory": "Jaggery",
    "price": 7.99,
    "weight": "500g",
    "image": "/products/img_297_1774022589536.jpg",
    "images": [
      "/products/img_298_1774022589771.jpg",
      "/products/img_299_1774022590037.png"
    ],
    "description": "Traditional palm jaggery (Karupatti).",
    "shortDescription": "Authentic palm jaggery",
    "origin": "Tamil Nadu",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jaggery",
      "palm",
      "sweetener"
    ],
    "rating": 4,
    "reviewCount": 229,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9883",
      "harvestDate": "Oct 2025",
      "farmName": "Tamil Nadu Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "170",
    "name": "Spiced Jaggery Cubes",
    "slug": "spiced-jaggery-cubes",
    "category": "Sweeteners",
    "subCategory": "Jaggery",
    "price": 6.49,
    "weight": "400g",
    "image": "/products/img_300_1774022592618.webp",
    "images": [
      "/products/img_300_1774022592618.webp",
      "/products/img_301_1774022592819.jpg"
    ],
    "description": "Jaggery cubes infused with ginger and cardamom.",
    "shortDescription": "Spiced jaggery bites",
    "origin": "UP",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jaggery",
      "spiced",
      "sweetener"
    ],
    "rating": 4.9,
    "reviewCount": 237,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4071",
      "harvestDate": "Oct 2025",
      "farmName": "UP Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "171",
    "name": "Wild Forest Honey",
    "slug": "wild-forest-honey",
    "category": "Sweeteners",
    "subCategory": "Forest Honey",
    "price": 14.99,
    "weight": "500g",
    "image": "/products/img_302_1774022593135.jpg",
    "images": [
      "/products/img_303_1774022593671.jpg"
    ],
    "description": "Raw, unfiltered honey collected from deep forests.",
    "shortDescription": "Pure wild forest honey",
    "origin": "Jim Corbett",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "honey",
      "wild",
      "raw"
    ],
    "rating": 4.5,
    "reviewCount": 176,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8090",
      "harvestDate": "Oct 2025",
      "farmName": "Jim Corbett Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "172",
    "name": "Kashmir Acacia Honey",
    "slug": "kashmir-acacia-honey",
    "category": "Sweeteners",
    "subCategory": "Forest Honey",
    "price": 18.99,
    "weight": "500g",
    "image": "/products/img_304_1774022593912.jpg",
    "images": [
      "/products/img_305_1774022594167.jpg"
    ],
    "description": "Light and sweet acacia flower honey.",
    "shortDescription": "Premium clear acacia honey",
    "origin": "Kashmir",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "honey",
      "acacia",
      "premium"
    ],
    "rating": 4.6,
    "reviewCount": 166,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9959",
      "harvestDate": "Oct 2025",
      "farmName": "Kashmir Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "173",
    "name": "Tulsi Infused Honey",
    "slug": "tulsi-infused-honey",
    "category": "Sweeteners",
    "subCategory": "Forest Honey",
    "price": 12.99,
    "weight": "250g",
    "image": "/products/img_306_1774022594333.jpeg",
    "images": [
      "/products/img_307_1774022594826.jpg"
    ],
    "description": "Raw honey infused with holy basil.",
    "shortDescription": "Immunity boosting tulsi honey",
    "origin": "Himalayas",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "honey",
      "tulsi",
      "infused"
    ],
    "rating": 4.3,
    "reviewCount": 71,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0567",
      "harvestDate": "Oct 2025",
      "farmName": "Himalayas Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "174",
    "name": "Mixed Fruit Jam",
    "slug": "mixed-fruit-jam",
    "category": "Sweeteners",
    "subCategory": "jams",
    "price": 5.99,
    "weight": "350g",
    "image": "/products/img_308_1774022595059.jpeg",
    "images": [
      "/products/img_309_1774022596725.jpg",
      "/products/img_310_1774022597260.jpg"
    ],
    "description": "Classic fruit jam made with real fruit pulp.",
    "shortDescription": "Real mixed fruit jam",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jam",
      "fruit",
      "sweet"
    ],
    "rating": 4.8,
    "reviewCount": 61,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4284",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "175",
    "name": "Strawberry Preserve",
    "slug": "strawberry-preserve",
    "category": "Sweeteners",
    "subCategory": "jams",
    "price": 7.49,
    "weight": "350g",
    "image": "/products/img_311_1774022598284.jpg",
    "images": [
      "/products/img_312_1774022600879.jpg",
      "https://tastefullygrace.com/wp-content/uploads/2022/05/Homemade-Srawberry-Preserves-1-scaled.jpg"
    ],
    "description": "Chunky strawberry preserve with low sugar.",
    "shortDescription": "Chunky strawberry preserve",
    "origin": "Mahabaleshwar",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jam",
      "strawberry",
      "preserve"
    ],
    "rating": 4.9,
    "reviewCount": 58,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6456",
      "harvestDate": "Oct 2025",
      "farmName": "Mahabaleshwar Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "176",
    "name": "Mango Jalapeno Jam",
    "slug": "mango-jalapeno-jam",
    "category": "Sweeteners",
    "subCategory": "jams",
    "price": 8.99,
    "weight": "250g",
    "image": "/products/img_314_1774022601714.png",
    "images": [
      "/products/img_315_1774022602954.jpg"
    ],
    "description": "Sweet and spicy artisan jam.",
    "shortDescription": "Spicy sweet mango jam",
    "origin": "Artisan Made",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "jam",
      "mango",
      "spicy"
    ],
    "rating": 4.6,
    "reviewCount": 77,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8266",
      "harvestDate": "Oct 2025",
      "farmName": "Artisan Made Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "177",
    "name": "Raw Brown Sugar",
    "slug": "raw-brown-sugar",
    "category": "Sweeteners",
    "subCategory": "Sugars",
    "price": 4.99,
    "weight": "1kg",
    "image": "/products/img_316_1774022603709.jpg",
    "images": [
      "/products/img_317_1774022604085.jpg",
      "/products/img_318_1774022604226.jpeg",
      "/products/img_319_1774022604516.jpg"
    ],
    "description": "Unrefined brown Demerara sugar.",
    "shortDescription": "Crunchy raw brown sugar",
    "origin": "Mauritius",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "sugar",
      "brown",
      "raw"
    ],
    "rating": 4.5,
    "reviewCount": 61,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6091",
      "harvestDate": "Oct 2025",
      "farmName": "Mauritius Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "178",
    "name": "Coconut Sugar",
    "slug": "coconut-sugar",
    "category": "Sweeteners",
    "subCategory": "Sugars",
    "price": 9.99,
    "weight": "500g",
    "image": "/products/img_320_1774022606476.jpg",
    "images": [
      "/products/img_321_1774022606575.jpg",
      "/products/img_322_1774022607181.jpg"
    ],
    "description": "Low GI sugar from coconut blossom sap.",
    "shortDescription": "Healthy coconut sugar",
    "origin": "Kerala",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "sugar",
      "coconut",
      "low-gi"
    ],
    "rating": 4.1,
    "reviewCount": 199,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8655",
      "harvestDate": "Oct 2025",
      "farmName": "Kerala Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "179",
    "name": "Sulphurless White Sugar",
    "slug": "sulphurless-white-sugar",
    "category": "Sweeteners",
    "subCategory": "Sugars",
    "price": 3.49,
    "weight": "1kg",
    "image": "/products/img_323_1774022608651.jpg",
    "images": [
      "/products/img_324_1774022608835.jpeg",
      "/products/img_325_1774022609608.jpg"
    ],
    "description": "Refined white sugar without sulphur treatment.",
    "shortDescription": "Clean white sugar",
    "origin": "UP",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "sugar",
      "white",
      "clean"
    ],
    "rating": 4,
    "reviewCount": 304,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2627",
      "harvestDate": "Oct 2025",
      "farmName": "UP Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "180",
    "name": "Cold Pressed Groundnut Oil",
    "slug": "cold-pressed-groundnut-oil",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Cooking Oils",
    "price": 12.99,
    "weight": "1L",
    "image": "/products/img_326_1774022609886.jpg",
    "images": [
      "/products/img_327_1774022610395.jpg",
      "/products/img_328_1774022610874.jpg"
    ],
    "description": "Wood pressed unrefined peanut oil.",
    "shortDescription": "Traditional cold pressed groundnut oil",
    "origin": "Gujarat",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "oil",
      "groundnut",
      "cold-pressed"
    ],
    "rating": 4.5,
    "reviewCount": 182,
    "inStock": true,
    "featured": false,
    "isNew": true,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7619",
      "harvestDate": "Oct 2025",
      "farmName": "Gujarat Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "181",
    "name": "Cold Pressed Mustard Oil",
    "slug": "cold-pressed-mustard-oil",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Cooking Oils",
    "price": 10.99,
    "weight": "1L",
    "image": "/products/img_329_1774022612247.jpg",
    "images": [
      "/products/img_330_1774022612731.png",
      "/products/img_331_1774022613691.jpg"
    ],
    "description": "Pungent kacchi ghani mustard oil.",
    "shortDescription": "Strong flavor mustard oil",
    "origin": "Rajasthan",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "oil",
      "mustard",
      "cold-pressed"
    ],
    "rating": 4.7,
    "reviewCount": 31,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7183",
      "harvestDate": "Oct 2025",
      "farmName": "Rajasthan Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "182",
    "name": "Extra Virgin Olive Oil",
    "slug": "extra-virgin-olive-oil",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Cooking Oils",
    "price": 24.99,
    "weight": "500ml",
    "image": "/products/img_332_1774022613832.jpg",
    "images": [
      "/products/img_333_1774022615841.jpg",
      "/products/img_334_1774022616076.png"
    ],
    "description": "First cold press fine Italian olive oil.",
    "shortDescription": "Premium EVOO",
    "origin": "Italy",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "oil",
      "olive",
      "premium"
    ],
    "rating": 4.3,
    "reviewCount": 302,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8690",
      "harvestDate": "Oct 2025",
      "farmName": "Italy Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "183",
    "name": "Virgin Coconut Oil",
    "slug": "virgin-coconut-oil",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Cooking Oils",
    "price": 14.99,
    "weight": "500ml",
    "image": "/products/img_335_1774022616543.jpg",
    "images": [
      "/products/img_336_1774022616791.jpg",
      "/products/img_337_1774022617530.jpg"
    ],
    "description": "Edible grade cold pressed coconut oil.",
    "shortDescription": "Raw virgin coconut oil",
    "origin": "Kerala",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "oil",
      "coconut",
      "virgin"
    ],
    "rating": 4.2,
    "reviewCount": 124,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8062",
      "harvestDate": "Oct 2025",
      "farmName": "Kerala Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "184",
    "name": "Sesame (Gingelly) Oil",
    "slug": "sesame-gingelly-oil",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Cooking Oils",
    "price": 13.99,
    "weight": "1L",
    "image": "/products/img_338_1774022617637.jpg",
    "images": [
      "/products/img_339_1774022617881.jpg"
    ],
    "description": "Cold pressed black sesame oil.",
    "shortDescription": "Aromatic sesame oil",
    "origin": "Tamil Nadu",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "oil",
      "sesame",
      "cold-pressed"
    ],
    "rating": 4.4,
    "reviewCount": 294,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3962",
      "harvestDate": "Oct 2025",
      "farmName": "Tamil Nadu Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "185",
    "name": "A2 Gir Cow Ghee",
    "slug": "a2-gir-cow-ghee",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Desi Ghee",
    "price": 34.99,
    "weight": "500ml",
    "image": "/products/img_340_1774022618759.png",
    "images": [
      "/products/img_340_1774022618759.png"
    ],
    "description": "Bilona churned A2 ghee from Gir cows.",
    "shortDescription": "Pure A2 Gir cow ghee",
    "origin": "Gujarat",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ghee",
      "a2",
      "bilona"
    ],
    "rating": 5,
    "reviewCount": 105,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3070",
      "harvestDate": "Oct 2025",
      "farmName": "Gujarat Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "186",
    "name": "Desi Buffalo Ghee",
    "slug": "desi-buffalo-ghee",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Desi Ghee",
    "price": 19.99,
    "weight": "1L",
    "image": "/products/img_341_1774022619716.jpeg",
    "images": [
      "https://www.dial4trade.com/uploaded_files/product_images/thumbs/buffalo-ghee-u-1351922029640042133.jpg"
    ],
    "description": "Rich, grainy buffalo milk ghee.",
    "shortDescription": "Aromatic buffalo ghee",
    "origin": "Punjab",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ghee",
      "buffalo",
      "pure"
    ],
    "rating": 4.3,
    "reviewCount": 50,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-1712",
      "harvestDate": "Oct 2025",
      "farmName": "Punjab Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "187",
    "name": "Infused Garlic Ghee",
    "slug": "infused-garlic-ghee",
    "category": "Cooking Oils & Ghee",
    "subCategory": "Desi Ghee",
    "price": 14.99,
    "weight": "250ml",
    "image": "/products/img_343_1774022620327.jpg",
    "images": [
      "/products/img_344_1774022620949.jpg"
    ],
    "description": "Clarified butter infused with roasted garlic.",
    "shortDescription": "Garlic infused desi ghee",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "ghee",
      "garlic",
      "infused"
    ],
    "rating": 4.2,
    "reviewCount": 17,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8627",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "188",
    "name": "Unpolished Toor Dal",
    "slug": "unpolished-toor-dal",
    "category": "Daily Groceries",
    "subCategory": "Pulses Unpolished",
    "price": 6.99,
    "weight": "1kg",
    "image": "/products/img_345_1774022621150.webp",
    "images": [
      "/products/img_346_1774022622096.webp"
    ],
    "description": "Natural pigeon pea lentils without shiny polish.",
    "shortDescription": "Healthy unpolished toor dal",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "dal",
      "unpolished",
      "pulses"
    ],
    "rating": 5,
    "reviewCount": 91,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8008",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "189",
    "name": "Unpolished Moong Dal",
    "slug": "unpolished-moong-dal",
    "category": "Daily Groceries",
    "subCategory": "Pulses Unpolished",
    "price": 7.49,
    "weight": "1kg",
    "image": "https://ifestore.com/wp-content/uploads/2024/03/green-mug-6.jpg",
    "images": [
      "https://ifestore.com/wp-content/uploads/2024/03/green-mug-6.jpg"
    ],
    "description": "Yellow split green gram, easy to digest.",
    "shortDescription": "protein rich moong dal",
    "origin": "MP",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "dal",
      "moong",
      "pulses"
    ],
    "rating": 4.9,
    "reviewCount": 127,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3972",
      "harvestDate": "Oct 2025",
      "farmName": "MP Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "190",
    "name": "Kabuli Chana",
    "slug": "kabuli-chana",
    "category": "Daily Groceries",
    "subCategory": "Pulses Unpolished",
    "price": 8.99,
    "weight": "1kg",
    "image": "/products/img_348_1774022622658.jpg",
    "images": [
      "/products/img_349_1774022623129.jpg"
    ],
    "description": "Large premium white chickpeas.",
    "shortDescription": "Premium kabuli chana",
    "origin": "Punjab",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chana",
      "chickpeas",
      "pulses"
    ],
    "rating": 5,
    "reviewCount": 172,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9047",
      "harvestDate": "Oct 2025",
      "farmName": "Punjab Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "191",
    "name": "Whole Masoor Dal",
    "slug": "whole-masoor-dal",
    "category": "Daily Groceries",
    "subCategory": "Pulses Unpolished",
    "price": 5.99,
    "weight": "1kg",
    "image": "/products/img_350_1774022623500.png",
    "images": [
      "/products/img_351_1774022623911.jpg"
    ],
    "description": "Whole brown lentils.",
    "shortDescription": "Earthy whole masoor",
    "origin": "UP",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "dal",
      "masoor",
      "pulses"
    ],
    "rating": 4.4,
    "reviewCount": 137,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9074",
      "harvestDate": "Oct 2025",
      "farmName": "UP Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "192",
    "name": "Aged Basmati Rice",
    "slug": "aged-basmati-rice",
    "category": "Daily Groceries",
    "subCategory": "Rice",
    "price": 18.99,
    "weight": "5kg",
    "image": "/products/img_352_1774022624507.jpg",
    "images": [
      "/products/img_353_1774022624757.jpg"
    ],
    "description": "Extra long grain basmati rice, aged 2 years.",
    "shortDescription": "Premium aged basmati",
    "origin": "Dehradun",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "rice",
      "basmati",
      "aged"
    ],
    "rating": 4.9,
    "reviewCount": 126,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-8961",
      "harvestDate": "Oct 2025",
      "farmName": "Dehradun Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "193",
    "name": "Sona Masoori Rice",
    "slug": "sona-masoori-rice",
    "category": "Daily Groceries",
    "subCategory": "Rice",
    "price": 12.99,
    "weight": "5kg",
    "image": "/products/img_354_1774022624905.jpg",
    "images": [
      "/products/img_355_1774022627992.jpg",
      "/products/img_356_1774022628143.jpg"
    ],
    "description": "Light and aromatic short grain daily rice.",
    "shortDescription": "Daily use Sona Masoori",
    "origin": "Andhra Pradesh",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "rice",
      "sona-masoori",
      "daily"
    ],
    "rating": 4.2,
    "reviewCount": 48,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-3906",
      "harvestDate": "Oct 2025",
      "farmName": "Andhra Pradesh Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "194",
    "name": "Red Rice",
    "slug": "red-rice",
    "category": "Daily Groceries",
    "subCategory": "Rice",
    "price": 8.99,
    "weight": "1kg",
    "image": "/products/img_357_1774022628451.jpg",
    "images": [
      "/products/img_358_1774022628822.jpg",
      "/products/img_359_1774022629142.jpg"
    ],
    "description": "Nutritious unpolished Kerala Matta red rice.",
    "shortDescription": "Healthy red matta rice",
    "origin": "Kerala",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "rice",
      "red",
      "matta"
    ],
    "rating": 5,
    "reviewCount": 240,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6173",
      "harvestDate": "Oct 2025",
      "farmName": "Kerala Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "195",
    "name": "Black Rice",
    "slug": "black-rice",
    "category": "Daily Groceries",
    "subCategory": "Rice",
    "price": 14.99,
    "weight": "1kg",
    "image": "/products/img_360_1774022629567.jpg",
    "images": [
      "/products/img_361_1774022631337.jpg",
      "/products/img_362_1774022631658.jpg"
    ],
    "description": "Antioxidant rich forbidden black rice.",
    "shortDescription": "Superfood black rice",
    "origin": "Manipur",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "rice",
      "black",
      "superfood"
    ],
    "rating": 4.7,
    "reviewCount": 89,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2392",
      "harvestDate": "Oct 2025",
      "farmName": "Manipur Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "196",
    "name": "Mango Pickle",
    "slug": "mango-pickle",
    "category": "Daily Groceries",
    "subCategory": "Pickles, Chutneys and Powders",
    "price": 5.99,
    "weight": "400g",
    "image": "/products/img_363_1774022635278.jpg",
    "images": [
      "/products/img_364_1774022635916.jpg",
      "/products/img_365_1774022636110.jpg"
    ],
    "description": "Tangy homemade style raw mango pickle.",
    "shortDescription": "Spicy raw mango pickle",
    "origin": "Andhra Pradesh",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pickle",
      "mango",
      "spicy"
    ],
    "rating": 4.1,
    "reviewCount": 110,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-4589",
      "harvestDate": "Oct 2025",
      "farmName": "Andhra Pradesh Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "197",
    "name": "Mixed Veg Pickle",
    "slug": "mixed-veg-pickle",
    "category": "Daily Groceries",
    "subCategory": "Pickles, Chutneys and Powders",
    "price": 5.49,
    "weight": "400g",
    "image": "/products/img_366_1774022639813.jpg",
    "images": [
      "/products/img_367_1774022640112.jpg"
    ],
    "description": "Crunchy seasonal vegetables in mustard oil.",
    "shortDescription": "Traditional mixed pickle",
    "origin": "Punjab",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pickle",
      "mixed",
      "tangy"
    ],
    "rating": 4.3,
    "reviewCount": 66,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-0590",
      "harvestDate": "Oct 2025",
      "farmName": "Punjab Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "198",
    "name": "Gunpowder (Idli Podi)",
    "slug": "gunpowder-idli-podi-",
    "category": "Daily Groceries",
    "subCategory": "Pickles, Chutneys and Powders",
    "price": 4.99,
    "weight": "200g",
    "image": "/products/img_368_1774022640870.jpg",
    "images": [
      "/products/img_369_1774022641607.jpg",
      "/products/img_370_1774022642697.jpg"
    ],
    "description": "Spicy lentil powder for idli/dosa.",
    "shortDescription": "Authentic idli podi",
    "origin": "Tamil Nadu",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "powder",
      "podi",
      "spicy"
    ],
    "rating": 5,
    "reviewCount": 257,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2208",
      "harvestDate": "Oct 2025",
      "farmName": "Tamil Nadu Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "199",
    "name": "Garlic Chutney Powder",
    "slug": "garlic-chutney-powder",
    "category": "Daily Groceries",
    "subCategory": "Pickles, Chutneys and Powders",
    "price": 4.49,
    "weight": "200g",
    "image": "/products/img_371_1774022643277.jpg",
    "images": [
      "/products/img_372_1774022644580.jpg",
      "/products/img_373_1774022646803.png"
    ],
    "description": "Dry garlic and chili chutney for vada pav.",
    "shortDescription": "Fiery garlic chutney powder",
    "origin": "Maharashtra",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "chutney",
      "garlic",
      "powder"
    ],
    "rating": 4.4,
    "reviewCount": 92,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-5645",
      "harvestDate": "Oct 2025",
      "farmName": "Maharashtra Cooperative"
    },
    "subscribeAndSaveDiscount": 15,
    "grindingVideoUrl": "/products/img_6_1774022336765.jpg"
  },
  {
    "id": "200",
    "name": "Rolled Oats",
    "slug": "rolled-oats",
    "category": "Daily Groceries",
    "subCategory": "Breakfast Cereals",
    "price": 6.99,
    "weight": "1kg",
    "image": "/products/img_374_1774022648767.webp",
    "images": [
      "/products/img_375_1774022649612.jpg",
      "/products/img_376_1774022650092.png"
    ],
    "description": "Thick cut 100% whole grain rolled oats.",
    "shortDescription": "Healthy rolled oats",
    "origin": "Australia",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "oats",
      "cereal",
      "breakfast"
    ],
    "rating": 4.4,
    "reviewCount": 298,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-7762",
      "harvestDate": "Oct 2025",
      "farmName": "Australia Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "201",
    "name": "Millet Muesli",
    "slug": "millet-muesli",
    "category": "Daily Groceries",
    "subCategory": "Breakfast Cereals",
    "price": 8.99,
    "weight": "500g",
    "image": "/products/img_377_1774022650698.png",
    "images": [
      "/products/img_378_1774022651373.png"
    ],
    "description": "Crunchy muesli made with roasted millets, nuts, and fruits.",
    "shortDescription": "Nutty millet muesli",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "muesli",
      "millet",
      "breakfast"
    ],
    "rating": 4.7,
    "reviewCount": 195,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6876",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "202",
    "name": "Corn Flakes",
    "slug": "corn-flakes",
    "category": "Daily Groceries",
    "subCategory": "Breakfast Cereals",
    "price": 5.49,
    "weight": "500g",
    "image": "/products/img_379_1774022652077.jpg",
    "images": [
      "/products/img_380_1774022652666.jpg",
      "/products/img_381_1774022652922.jpg"
    ],
    "description": "Crispy golden corn flakes without added sugar.",
    "shortDescription": "Classic corn flakes",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "flakes",
      "corn",
      "breakfast"
    ],
    "rating": 4.1,
    "reviewCount": 216,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6527",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "203",
    "name": "Choco Cereals",
    "slug": "choco-cereals",
    "category": "Daily Groceries",
    "subCategory": "Breakfast Cereals",
    "price": 6.49,
    "weight": "400g",
    "image": "/products/img_382_1774022653522.jpeg",
    "images": [
      "/products/img_383_1774022653883.jpg"
    ],
    "description": "Whole wheat chocolate flavor loops.",
    "shortDescription": "Kids favorite choco loops",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "choco",
      "cereal",
      "breakfast"
    ],
    "rating": 4.4,
    "reviewCount": 47,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9561",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "204",
    "name": "Durum Wheat Penne",
    "slug": "durum-wheat-penne",
    "category": "Daily Groceries",
    "subCategory": "Pasta Noodles",
    "price": 4.99,
    "weight": "500g",
    "image": "/products/img_384_1774022654097.jpg",
    "images": [
      "/products/img_385_1774022654862.jpg"
    ],
    "description": "100% durum wheat semolina penne pasta.",
    "shortDescription": "Authentic penne pasta",
    "origin": "Italy",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pasta",
      "penne",
      "italian"
    ],
    "rating": 4.6,
    "reviewCount": 58,
    "inStock": true,
    "featured": true,
    "isNew": false,
    "isBestseller": true,
    "cuisine": [
      "Mediterranean"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6602",
      "harvestDate": "Oct 2025",
      "farmName": "Italy Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "205",
    "name": "Whole Wheat Spaghetti",
    "slug": "whole-wheat-spaghetti",
    "category": "Daily Groceries",
    "subCategory": "Pasta Noodles",
    "price": 5.49,
    "weight": "500g",
    "image": "/products/img_386_1774022655338.png",
    "images": [
      "/products/img_387_1774022655623.jpg"
    ],
    "description": "High fiber whole wheat long spaghetti.",
    "shortDescription": "Healthy whole wheat spaghetti",
    "origin": "Italy",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "pasta",
      "spaghetti",
      "wheat"
    ],
    "rating": 4.2,
    "reviewCount": 211,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Mediterranean"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-2842",
      "harvestDate": "Oct 2025",
      "farmName": "Italy Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "206",
    "name": "Millet Hakka Noodles",
    "slug": "millet-hakka-noodles",
    "category": "Daily Groceries",
    "subCategory": "Pasta Noodles",
    "price": 3.99,
    "weight": "200g",
    "image": "/products/img_388_1774022656752.png",
    "images": [
      "/products/img_389_1774022657573.jpg"
    ],
    "description": "Healthy noodles made with multi-millets.",
    "shortDescription": "Guilt-free hakka noodles",
    "origin": "India",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "noodles",
      "millet",
      "asian"
    ],
    "rating": 4.4,
    "reviewCount": 137,
    "inStock": true,
    "featured": false,
    "isNew": false,
    "isBestseller": false,
    "cuisine": [
      "Indian"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-9047",
      "harvestDate": "Oct 2025",
      "farmName": "India Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  },
  {
    "id": "207",
    "name": "Rice Vermicelli",
    "slug": "rice-vermicelli",
    "category": "Daily Groceries",
    "subCategory": "Pasta Noodles",
    "price": 3.49,
    "weight": "200g",
    "image": "/products/img_390_1774022658203.jpg",
    "images": [
      "/products/img_391_1774022659064.jpg",
      "/products/img_392_1774022659974.jpg"
    ],
    "description": "Thin rice noodles perfect for stir fry.",
    "shortDescription": "Gluten-free rice noodles",
    "origin": "Vietnam",
    "healthBenefits": [
      "Rich in nutrients",
      "Good for digestion",
      "Boosts immunity"
    ],
    "tags": [
      "noodles",
      "rice",
      "asian"
    ],
    "rating": 4.4,
    "reviewCount": 273,
    "inStock": true,
    "featured": true,
    "isNew": true,
    "isBestseller": true,
    "cuisine": [
      "Global"
    ],
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ],
    "storageTips": "Store in an airtight container in a cool, dark place away from direct sunlight and heat to preserve aromatic essential oils.",
    "traceability": {
      "batchNo": "BATCH-6570",
      "harvestDate": "Oct 2025",
      "farmName": "Vietnam Cooperative"
    },
    "subscribeAndSaveDiscount": 15
  }
];

export const categories = [
  {
    id: "chakki-flours",
    name: "Chakki Flours (Atta)",
    image: "/products/img_393_1774022660584.jpg",
    count: 10,
    color: "#D4AF37",
  },
  {
    id: "fruits",
    name: "Fruits",
    image: "/products/img_394_1774022661038.jpg",
    count: 5,
    color: "#E63946",
  },
  {
    id: "vegetables",
    name: "Vegetables",
    image: "/products/img_395_1774022661313.jpg",
    count: 18,
    color: "#2A9D8F",
  },
  {
    id: "daily-groceries",
    name: "Daily Groceries",
    image: "/products/img_396_1774022661374.jpg",
    count: 81,
    color: "#C65A00",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Professional Chef",
    avatar: "/products/img_397_1774022661665.jpg",
    review: "Zestora's spices have completely transformed my cooking. The Kashmir saffron is unlike anything I've used before — deeply aromatic and luxuriously vibrant. My clients notice the difference immediately.",
    rating: 5,
    product: "Kashmir Saffron",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Food Blogger",
    avatar: "/products/img_398_1774022661715.jpg",
    review: "I've tried dozens of spice brands over my years of food writing. Zestora stands in a category of its own. The freshness, the purity, the provenance — everything about this brand speaks to genuine quality.",
    rating: 5,
    product: "Tellicherry Pepper",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Home Cook & Wellness Coach",
    avatar: "/products/img_399_1774022661764.jpg",
    review: "Finally found an organic turmeric that actually tastes like turmeric should. The curcumin content is incredible, and I love knowing exactly where my spices come from. Zestora is my go-to for everything now.",
    rating: 5,
    product: "Organic Turmeric",
  },
];

export const stats = [
  { value: "50+", label: "Spice Varieties" },
  { value: "15+", label: "Farm Partners" },
  { value: "10K+", label: "Happy Customers" },
  { value: "8", label: "Countries Sourced" },
];
