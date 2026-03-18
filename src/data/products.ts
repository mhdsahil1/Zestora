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
    "image": "https://gannug.com/wp-content/uploads/2024/02/Saffron.jpg",
    "images": [
      "https://gannug.com/wp-content/uploads/2024/02/Saffron.jpg",
      "https://puresethi.com/wp-content/uploads/2025/04/premium-kashmiri-saffron.webp"
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
    "image": "https://5.imimg.com/data5/QM/FR/MY-4377631/organic-turmeric-powder.jpg",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEKSnrKqVS_XqfoRoBOzJLYXaJHBuFOvLNw&s",
      "https://lh5.googleusercontent.com/proxy/d_EksvBcO1khUpZFc8ytHMLH6qEfjPcR3W7nenkYuHPwPa7NV7l85DSe7FlN81r11bQz8CiLxs1LLoXsFaSdzjWYGDoYzqnuFtVd3GLEcWSw5vjA5KfyLvQCBEoNge69Z9TZ66EI"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
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
    "image": "https://www.emperorakbar.com/cdn/shop/articles/cardamom_800x.jpg?v=1754639238",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2023/4/298595847/GP/EB/KY/116099135/kerala-green-cardamom.jpg",
      "https://storage.googleapis.com/dawaadost.appspot.com/main_images/Elaichi%20khane%20ke%20fayde_1b1027d1-da33-442c-ad14-468b63578e11_resize.webp"
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
    "image": "https://sanatanaorganicfarms.com/cdn/shop/files/black_pepper_b80f4360-9312-47ba-a33e-0a26505957d7.jpg?v=1760279067",
    "images": [
      "https://sanatanaorganicfarms.com/cdn/shop/files/black_pepper_b80f4360-9312-47ba-a33e-0a26505957d7.jpg?v=1760279067",
      "https://assets.clevelandclinic.org/transform/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "5",
    "name": "Byadagi Chilli",
    "slug": "byadagi-chilli",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.99,
    "weight": "200g",
    "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378339077/JN/JD/KO/180049984/byadagi-chilli-super-fine.jpg",
    "images": [
      "https://i0.wp.com/s3.ap-south-1.amazonaws.com/media.florafoods.in/wp-content/uploads/2022/02/24015539/Byadagi-Red-chilli.png?fit=800%2C800&ssl=1"
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
    "image": "https://media.post.rvohealth.io/wp-content/uploads/2020/08/8_Health_Foods_That_are_Harmful_if_You_Eat_Too_Much-732x549-thumbnail-1-732x549.jpg",
    "images": [
      "https://images-cdn.ubuy.co.in/654af88ba5bcde118435e911-cinnamon-sticks.jpg"
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
    "image": "https://blog.bigbasket.com/wp-content/uploads/2020/12/star-anise.jpeg",
    "images": [
      "https://blog.bigbasket.com/wp-content/uploads/2020/12/star-anise.jpeg",
      "https://images-prod.healthline.com/hlcmsresource/images/AN_images/star-anise-1296x728-feature.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMY0rV97Rgf8Ekh5RIhPFD5SJr7qpMPQDOQ&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMY0rV97Rgf8Ekh5RIhPFD5SJr7qpMPQDOQ&s"
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
    "image": "https://www.neonaturalindustries.com/wp-content/uploads/2022/06/coriander-seed.jpg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/8/534850806/XL/PT/VO/196307877/fresh-coriander-seeds-500x500.jpeg"
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
    "image": "https://www.viralspices.com/wp-content/uploads/2021/09/cummin-624x312.jpg",
    "images": [
      "https://www.viralspices.com/wp-content/uploads/2025/02/Health-Benefits-of-Cumin-Seeds.jpg"
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
    "image": "https://image.cdn.shpy.in/67951/1630421972477_cloves.png?width=600&format=webp",
    "images": [
      "https://www.namagro.com/wp-content/uploads/2024/07/cloves-native-595844.webp"
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
    "image": "https://www.viralspices.com/wp-content/uploads/2023/08/Nutmeg-Exporters-in-India-624x312.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51yXZQen9TL._AC_UF894,1000_QL80_.jpg"
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
    "image": "https://jothiherbals.com/cdn/shop/files/U1A9893.jpg?v=1700486442&width=1445",
    "images": [
      "https://tiimg.tistatic.com/fp/1/009/926/mace-spices--442.jpg"
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
    "image": "https://lh5.googleusercontent.com/proxy/N3RgtFPZCGzG1kLnWGU3idZfQOginrajigtiJMTCh8l1vVi_XmEi8FZlvcTuLnKHqC4hFEbuAwVPArq2xoW5IwT_XbVYmuArrs9nGKUL66up9eP9lfPbwnA0dLCG",
    "images": [
      "https://www.viralspices.com/wp-content/uploads/2025/01/Fenugreek-seeds.jpg"
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
    "image": "https://sharmaglobletrade.com/wp-content/uploads/2024/08/Mustard-Seeds.jpg",
    "images": [
      "https://vedicnutraceuticals.com/wp-content/uploads/2021/02/Mustard-Seed-5.jpg"
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
    "image": "https://lh6.googleusercontent.com/proxy/AHGa9Hf1hh7UyN4Po8XrwnOcBio3jvdKInZ_yfXIAWiaKu9dWFngXGBmUpSdVYqDQBthFiI_9jvEmtf4YSooyw",
    "images": [
      "https://m.media-amazon.com/images/I/61g8+rfmmVL._AC_UF894,1000_QL80_.jpg"
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
      "https://images.apollo247.in/pd-cms/cms/2025-11/Ajwain%20(Carom%20Seeds)%20Health%20Benefits,%20Uses,%20and%20Side%20Effects.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w"
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
    "image": "https://www.jaindryfruits.com/image/cache/catalog/Berry/Hing-800x800-product_popup.jpg",
    "images": [
      "https://royalfantasy.in/cdn/shop/products/2.jpg?v=1642406654"
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
    "image": "https://lirp.cdn-website.com/e6c1c81e/dms3rep/multi/opt/pexels-photo-11318048-640w.jpeg",
    "images": [
      "https://urbancuisine.io/cdn/shop/articles/img-1739201625285.jpg?v=1739201635"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "20",
    "name": "Sweet Paprika",
    "slug": "sweet-paprika",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.49,
    "weight": "100g",
    "image": "https://www.happyvalleyseeds.com.au/cdn/shop/products/capsicum-hungarian-sweet-paprika-seeds-199254.jpg?v=1701577514",
    "images": [
      "https://static.wixstatic.com/media/067d06_1f974d4064d14f08a0cb19733439b916~mv2.png/v1/fill/w_520,h_578,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/067d06_1f974d4064d14f08a0cb19733439b916~mv2.png"
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
    "image": "https://thenaturespalm.in/cdn/shop/files/sabut-safed-mirchi-jpg.webp?v=1744833334&width=1445",
    "images": [
      "https://lh3.googleusercontent.com/proxy/ZeEkxrE7RGcCPvTtV9F2Ywc3b8IdMZyU17BBGek2uRgWmJaE0C0UWLbaH-zqtYNQi7oAZvF2aus9iwKHiDUreYOIFeGgI3On9pIpTbrznEMwO8h6Hy0"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "22",
    "name": "Green Peppercorns",
    "slug": "green-peppercorns",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 13.99,
    "weight": "100g",
    "image": "https://cdn.shopify.com/s/files/1/0858/1205/2304/files/Get_to_Know_Green_Peppercorn1.jpg?v=1726609580",
    "images": [
      "https://microgreens.co.in/cdn/shop/files/green-peppercorn.png?v=1740557378"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "23",
    "name": "Pink Peppercorns",
    "slug": "pink-peppercorns",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 16.99,
    "weight": "100g",
    "image": "https://www.pureindianfoods.com/cdn/shop/articles/pink-peppercorns.webp?v=1769619825",
    "images": [
      "https://vanyaorganic.com/media/csafspaa/pink_pepper.jpg?width=708&height=472"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "24",
    "name": "Szechuan Pepper",
    "slug": "szechuan-pepper",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 15.99,
    "weight": "100g",
    "image": "https://cdn.britannica.com/11/227511-050-382F06B5/dried-Sichuan-peppercorns-Zanthoxylum.jpg",
    "images": [
      "https://cdn.britannica.com/11/227511-050-382F06B5/dried-Sichuan-peppercorns-Zanthoxylum.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
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
      "https://m.media-amazon.com/images/I/91Gu5LDiieL._AC_UF894,1000_QL80_.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "26",
    "name": "Habanero Powder",
    "slug": "habanero-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 18.99,
    "weight": "100g",
    "image": "https://img.freepik.com/free-photo/bottom-view-red-pepper-powder-wooden-spoon-dark-surface_140725-102775.jpg?semt=ais_hybrid&w=740&q=80",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTv_f9KwXPAgEsS3FkSpbakDKSJSS2hT28gA&s"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "27",
    "name": "Kashmiri Chilli Powder",
    "slug": "kashmiri-chilli-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 10.99,
    "weight": "100g",
    "image": "https://chheda.store/wp-content/uploads/2021/04/kashmiri-chilli-powder-concept.jpg",
    "images": [
      "https://tiimg.tistatic.com/fp/1/009/197/kashmiri-red-chilli-powder-454.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "28",
    "name": "Guntur Sannam Chilli",
    "slug": "guntur-sannam-chilli",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/7/328205488/KN/OP/BW/193653999/sannam1-1-jpg-500x500.jpg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/431867448/DL/TU/NE/5478647/organic-guntur-dry-red-chilli.jpg"
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
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/32/Thai_peppers.jpg",
    "images": [
      "https://cdn.shopify.com/s/files/1/0750/9190/2779/files/Birds-Eye-Chilli-003-700x575.webp?v=1689655498"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/10/357165257/YC/YO/KN/4859852/ginger-dry-500x500.jpg",
    "images": [
      "https://i.etsystatic.com/26840043/r/il/e23a4c/5254387670/il_fullxfull.5254387670_2byy.jpg"
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
    "image": "https://i.cdn.newsbytesapp.com/images/l92720251121143659.jpeg",
    "images": [
      "https://www.florapharm.de/fileadmin/_processed_/7/6/csm_shutterstock_1058007686_8d56bf3590.jpg"
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
    "image": "https://tiimg.tistatic.com/fp/1/008/632/natural-garlic-powder-145.jpg",
    "images": [
      "https://2.wlimg.com/product_images/bc-full/2025/9/12736420/dehydrated-garlic-powder-1758880903-8355255.jpeg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "33",
    "name": "Onion Powder",
    "slug": "onion-powder",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 7.49,
    "weight": "100g",
    "image": "https://cpimg.tistatic.com/11106328/b/4/Red-Onion-Powder..jpg",
    "images": [
      "https://images.jdmagicbox.com/quickquotes/images_main/mtc2njixmju4mq-1766212581-wft4lei6.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "34",
    "name": "Cassia Bark",
    "slug": "cassia-bark",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 8.99,
    "weight": "100g",
    "image": "https://m.media-amazon.com/images/I/51hFOgUXCNL._AC_UF894,1000_QL80_.jpg",
    "images": [
      "https://image.cdn.shpy.in/347649/indian-cassia-cinnamon-bark-50g-1707728436244_SKU-0363_0.jpeg?width=600&format=webp"
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
    "image": "https://www.beanilla.com/wp/wp-content/uploads/2023/05/Grade-A-vs-Grade-B-Beans.jpg",
    "images": [
      "https://onlinekeralaspices.com/wp-content/uploads/2023/09/Vannila-Beans.webp"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2025/2/491457343/HJ/IL/OI/2004466/tonka-beans-resinoid.jpg",
    "images": [
      "https://substackcdn.com/image/fetch/$s_!OAKS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6a055543-8aa7-45c9-b57b-8b69549b975a_1536x2048.jpeg"
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
    "image": "https://ellaspantry.ca/cdn/shop/products/Sumac.png?v=1643154471",
    "images": [
      "https://m.media-amazon.com/images/I/81+F1h5KdsL._AC_UF350,350_QL80_.jpg"
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
    "image": "https://www.foodandwine.com/thmb/hJ9hzLVO22tiCGNoeHqe0Tbkjy4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/What-is-Zaatar-FT-BLOG0324-c8c83b10cf5749f1a13d91778b665ba9.jpg",
    "images": [
      "https://www.marthastewart.com/thmb/3ocfgsjxyegJljIWCF3O3o2cAXU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-dukkah-spices-getty-0123-2000-a782a5f24a2b454284c35123bc127851.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3ZDXFhWIwxOxe9U-C6fYR4cSI4W7be6Stg&s",
    "images": [
      "https://www.simplyquinoa.com/wp-content/uploads/2023/05/ras-el-hanout-5.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlV2rOy5kojRFMGqffRrQnEyBxw88pkrG4A&s",
    "images": [
      "https://lh5.googleusercontent.com/proxy/90Vwbi5WquxmaSthe4gTE3L-FBdTGf84oK7YFIMkP572ZRYQMgy-M336imjKj5xayY9IPj6Ctvjg4DQ99H4f_SG33VDp_sfUy8-yJoolzM00YcCeGAY5bT7rQhsIEGda"
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
    "image": "https://cdn.shopify.com/s/files/1/0399/8128/5538/files/make-madras-curry-powder-at-home.png?v=1680953367",
    "images": [
      "https://www.nonguiltypleasures.com/wp-content/uploads/2023/03/madras-curry-powder.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "42",
    "name": "Chinese Five Spice",
    "slug": "chinese-five-spice",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 10.49,
    "weight": "100g",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVJRTDiAB47aUWbSp4mLyTouS5Bc0QrbDnQ&s",
    "images": [
      "https://tammycirceo.com/wp-content/uploads/2021/08/IMG_6907-W.jpg"
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
    "image": "https://www.botanicalinterests.com/community/blog/wp-content/uploads/2024/08/Herbes-de-Provence.jpg",
    "images": [
      "https://i0.wp.com/twinflamelavender.farm/wp-content/uploads/2023/10/herbs-de-provence-scaled.jpeg?fit=2560%2C1711&ssl=1"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2024/9/452718160/TZ/SE/KR/222607550/dried-oregano-leaves.jpg",
    "images": [
      "https://www.meviveinternational.com/data/storage/app/images/product/dried-oregano-leaves-3719.webp"
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
    "image": "https://m.media-amazon.com/images/I/71n7Hw4p-1L._AC_UF894,1000_QL80_.jpg",
    "images": [
      "https://healthybuddha.in/image/cache/catalog/Dried%20Basil-500x515.jpg"
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
    "image": "https://thewholesaler.in/cdn/shop/products/Dry-Thyme-Thymus-vulgaris-Ajavaayan-ke-phool-TheWholesaler-35697218_460x@2x.jpg?v=1756870449",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2021/7/PR/PJ/AT/24250671/dried-thyme-herb-powder-500x500.jpg"
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
    "image": "https://suspire.in/cdn/shop/files/best_vriksha_veda_pahadi_rosemary_leaves_1080x.png?v=1745930858",
    "images": [
      "https://missnatura.in/wp-content/uploads/2023/02/IMG-20230222-WA0003.jpg"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2024/8/445708858/FH/HB/RR/114188093/how-to-dry-sage-main-1.jpeg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2024/9/452714047/TL/CM/LV/222607550/dried-sage-leaves.jpg"
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
    "image": "https://m.media-amazon.com/images/I/41rf1pAHEWL.jpg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2022/12/WF/QC/FI/6334659/dry-peppermint-leaf-mentha-piperita-dried-leaves-for-tea.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "50",
    "name": "Dried Parsley",
    "slug": "dried-parsley",
    "category": "Daily Groceries",
    "subCategory": "Spices",
    "price": 6.49,
    "weight": "100g",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jIi5bOmTHAK6dJOfLuT5dsfiEk9XfLWbTg&s",
    "images": [
      "https://www.attainable-sustainable.net/wp-content/uploads/2024/02/parsley_8948.jpg"
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
    "image": "https://www.thepurposefulpantry.com/wp-content/uploads/2019/05/dry-dill-feat1.jpg",
    "images": [
      "https://images.ctfassets.net/3s5io6mnxfqz/2SqsC7KrwBh9LjA9mXJQhi/33d5c9a1adf55159af5dca452606dcfd/is-dill-weed-the-same-as-dill.jpeg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu9sN57we1IDy_mJpOaGYbYYk_fBN4UXAkA&s",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/478545549/QP/NX/IX/227650010/bay-leaf-500x500.png"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45LMAMtViYdKuBMFfDqpm8eWs2Uqrit7DcQ&s",
    "images": [
      "https://elanthalir.com/wp-content/uploads/2023/03/curryleaf.webp"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYq0rHHbOfgJCj_uB00gxPiruhzYApN0QSg&s",
    "images": [
      "https://m.media-amazon.com/images/I/51hVAggc+hL.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ckf-f871rveVKLMUn1Eo4chcSVf4dgzt4Q&s",
    "images": [
      "https://i0.wp.com/elmarspices.com/wp-content/uploads/2022/09/thao-qua-3.jpg?resize=800%2C500&ssl=1"
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
    "image": "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/black_seed_are_there_health_benefits_bigbead/1800x1200_black_seed_are_there_health_benefits_bigbead.jpg",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsZUJRJ_pMZA-vX__cpCQ3KlzMmhl0ICpUQ&s"
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
    "image": "https://images.jdmagicbox.com/quickquotes/images_main/poppy-seed-2221136941-o98ksp3h.jpg",
    "images": [
      "https://images.jdmagicbox.com/quickquotes/images_main/poppy-seed-2212939185-75qsfmuo.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ogZKzmP7PzCd0d-qIYHxdXxraYIYf2zKog&s",
    "images": [
      "https://cdn.wikifarmer.com/images/thumbnail/2024/11/Information-Uses-Health-Benefits-and-Nutritional-Value-of-Sesame-1200x630.jpg"
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
    "image": "https://draxe.com/wp-content/uploads/2019/01/Caraway_1230_630_Facebook.jpg",
    "images": [
      "https://d3awvtnmmsvyot.cloudfront.net/api/file/2guswWryT86MBaJeG6n9/convert?fit=max&w=570&cache=true"
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
    "image": "https://lh5.googleusercontent.com/proxy/rWK4tiIodqnPtH_pzclqJ_lTXsdQje9DoHTkaSHzD0k0pwfk--tTzR8xjf1SL7lj7_zDbQudSswNPbWMcpPffiTKm2K9NbWyJMe1KEY0QhCUB1a0nbEV25IhtQ",
    "images": [
      "https://m.media-amazon.com/images/I/61vnBhUQOxL.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "100",
    "name": "Premium Sharbati Atta",
    "slug": "premium-sharbati-atta",
    "category": "Chakki Flours (Atta)",
    "subCategory": "Wheat base Flour",
    "price": 8.99,
    "weight": "5kg",
    "image": "https://www.earthytales.in/uploads/products/1x/ae11b2b90d3217375251e90ceeb9e7d8.jpg?v=140320263",
    "images": [
      "https://www.earthytales.in/uploads/products/1x/8ff3810f09a2147cf60210ef6e912a2e.jpg?v=140320263"
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
    "image": "https://5.imimg.com/data5/FB/WD/FQ/SELLER-36095519/organic-whole-wheat-atta-500x500.png",
    "images": [
      "https://5.imimg.com/data5/TI/PR/IJ/SELLER-12994489/utb8npo7gnzixkjksafvq6ywgxxay-250x250.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWh-qvyFwYtvF4dHtSSBemSBD2vDKYuo6uQ&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWh-qvyFwYtvF4dHtSSBemSBD2vDKYuo6uQ&s"
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
    "image": "https://lh5.googleusercontent.com/proxy/SUW1nWp6TtIBXZ_0uqVy-3PQ26-Uq_lGSFyGo9e1iKuYHSg0G__E_kAqNpAOp_sypRjiclxYi_gNagXPVrI3ZRL7POqQM0x-6PsUbQLq5NX00JqFwDyIBzOeKcD0_4reQGOV5vnxiM1d0Q",
    "images": [
      "https://lh5.googleusercontent.com/proxy/SUW1nWp6TtIBXZ_0uqVy-3PQ26-Uq_lGSFyGo9e1iKuYHSg0G__E_kAqNpAOp_sypRjiclxYi_gNagXPVrI3ZRL7POqQM0x-6PsUbQLq5NX00JqFwDyIBzOeKcD0_4reQGOV5vnxiM1d0Q"
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
    "image": "https://m.media-amazon.com/images/I/51Jn66H50sL.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51Jn66H50sL.jpg"
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
    "image": "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-122504979/122504979.jpg",
    "images": [
      "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-122504979/122504979.jpg"
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
    "image": "https://www.naturespring.in/uploads/jowar_flour.jpg",
    "images": [
      "https://www.naturespring.in/uploads/jowar_flour.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSUEjyN3BKspTXndfacjdR5ikLxT_9R2zjw&s",
    "images": [
      "https://chakkiwalle.com/cdn/shop/files/bajra_atta_Poshtik_52d93756-5573-4265-8cd8-db88a9b77306.jpg?v=1707313569"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-tUiWNfOAKlfX7GlZV_DChBWUDSiobYAcg&s",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-tUiWNfOAKlfX7GlZV_DChBWUDSiobYAcg&s"
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
    "image": "https://milletskhao.com/wp-content/uploads/2021/09/BYM-FLR-1.jpg",
    "images": [
      "https://milletskhao.com/wp-content/uploads/2021/09/BYM-FLR-1.jpg"
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
    "image": "https://www.nutraj.com/cdn/shop/files/the-power-of-trail-mix-top-8-reasons-to-include-trail-mix-in-your-diet-Desktop-View_copy.jpg?v=1692598372",
    "images": [
      "https://rukminim2.flixcart.com/image/480/480/knni7ww0/snack-savourie/o/p/a/50-nutty-trail-mix-pack-of-3-3x50gm-box-snackible-original-imag2a8s5p3a8f7b.jpeg?q=90"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2023/12/369817328/QW/WB/DA/128728173/berries-n-seeds-trail-mix-500x500.webp",
    "images": [
      "https://m.media-amazon.com/images/I/81ihgP36VLL.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/12/369817328/QW/WB/DA/128728173/berries-n-seeds-trail-mix-500x500.webp",
      "https://5.imimg.com/data5/ANDROID/Default/2022/2/UR/XG/KB/16351671/product-jpeg.jpg"
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
    "image": "https://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/15107730.jpg",
    "images": [
      "https://cdn11.bigcommerce.com/s-ctvq7kqm7h/images/stencil/1280x1280/products/221/605/TrailMixTropical1036__41732.1510706020.jpg?c=2",
      "https://hellolittlehome.com/wp-content/uploads/2018/09/tropical-trail-mix-19.jpeg"
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
    "image": "https://nutritionstripped.com/wp-content/uploads/2013/12/spicy-sweet-nut-seed-mix9.jpg",
    "images": [
      "https://www.easycheesyvegetarian.com/wp-content/uploads/2017/02/Cajun-spiced-savoury-trail-mix-5-650x476.jpg",
      "https://2nerdsinatruck.com/wp-content/uploads/2025/09/Pumpkin-Spice-Trail-Mix-5-scaled.jpg"
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
    "image": "https://m.media-amazon.com/images/I/71AIl46qVwL.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71klSnhqOfL.jpg"
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
    "image": "https://img.freepik.com/premium-photo/juicy-red-apples-bowl-plate-table-top-view-copy-space_79075-15913.jpg",
    "images": [
      "https://t3.ftcdn.net/jpg/01/97/74/06/360_F_197740683_DKN7suJCRufWcDL8k7OOS6PGWa5no6qs.jpg",
      "https://images2.alphacoders.com/719/719435.jpg"
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
    "image": "https://media.istockphoto.com/id/925190686/photo/banana-bunch-on-the-wooden-table.jpg?s=612x612&w=0&k=20&c=houjpv4nNP5LF3MeUr1tih2sftpLcAe17K5RNkF2FfU=",
    "images": [
      "https://media.istockphoto.com/id/1858678169/photo/large-group-of-banana-bunch-of-cavendish-banana-on-display-at-market-bananas-hanging-on.jpg?s=612x612&w=0&k=20&c=LNdJwzXOoc5JtiT0N0e9Gjg-GXYqOpBqsoYnuPPbW5o=",
      "https://media.istockphoto.com/id/1288537189/photo/organic-bananas-on-display-at-farmers-market.jpg?s=612x612&w=0&k=20&c=3l41lx57u32w6PojsksOFDzak5K--Hp6w_dnWSpxdzE=",
      "https://media.istockphoto.com/id/2148472646/photo/peeled-banana-on-a-bunch-of-unpeeled-isolated-on-wooden-table.jpg?s=612x612&w=0&k=20&c=OQim9axjU3fqkLsNITNmIWiOPZG-lZDx7RvjiHQe_dg="
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
    "image": "https://i.pinimg.com/736x/4f/e6/5d/4fe65d6093e678da39c7f945e6aa5297.jpg",
    "images": [
      "https://farmerscraft.in/cdn/shop/files/image0_f9213da8-c1ca-4a26-b27b-5052630cd8df.jpg?v=1772735603&width=1445",
      "https://aamrai.com/wp-content/uploads/2023/12/BLOG-POTEDDDD-06-06.webp"
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
    "image": "https://m.media-amazon.com/images/I/61R1uQad6rL._AC_UF1000,1000_QL80_.jpg",
    "images": [
      "https://services.kpnfresh.com/media/v1/products/images/0f8ffc42-c288-4d66-a14d-e1ef0b7d61de/green-grapes-seedless.webp?c_type=C1",
      "https://5.imimg.com/data5/SELLER/Default/2023/12/367720566/LW/UA/NC/60419166/long-fresh-sonaka-seedless-grapes.jpeg"
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
    "image": "https://media.istockphoto.com/id/1371169841/photo/pomegranates-on-the-cutting-board-on-the-old-wooden-kitchen-table-vegan-and-vegetarian-food.jpg?s=612x612&w=0&k=20&c=ZjOSMficGnxV9vKYoCcgFYIOtTSEOtRWGJv0j2LQkuk=",
    "images": [
      "https://afoodcentriclife.com/wp-content/uploads/2012/11/pomegranates-1.jpg",
      "https://afoodcentriclife.com/wp-content/uploads/2012/11/pomegranates.jpg",
      "https://ca-times.brightspotcdn.com/dims4/default/097e7e1/2147483647/strip/true/crop/600x413+0+0/resize/1200x826!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F96%2Ff5%2F3c1ca72e20ae5f1080ad87afeb58%2Flat-pomegranate-kpg5bwnc20091027133800"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFysbeTJXVPgNot1h83cjXnp4gA6WHHtOrA&s",
    "images": [
      "https://exoticflora.in/cdn/shop/files/WhatsAppImage2020-11-11at9.23.29AM_900x.jpg?v=1709789718",
      "https://hasiruagro.com/wp-content/uploads/2023/07/avocado-haas-fruit-fruit-image-Hasiruagro.webp"
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
    "image": "https://foxeslovelemons.com/wp-content/uploads/2022/04/Balsamic-Asparagus-3.jpg",
    "images": [
      "https://www.simplyrecipes.com/thmb/nw6mLCW2JFWbVV54E7iqHDLJMqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Asparagus-LEAD-ef819b5eef8b449eabaa739ee540203c.jpg",
      "https://www.mygourmetconnection.com/wp-content/uploads/2025/04/lemon-roasted-asparagus.jpg"
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
    "image": "https://vegiroot.in/wp-content/uploads/2022/12/broccoli-for-immunity-.jpeg",
    "images": [
      "https://distrapi.blob.core.windows.net/strapi-uploads/assets/Broccoli_advantages_and_Side_effects_8be807c48e.jpg",
      "https://images.squarespace-cdn.com/content/v1/5b5aa0922487fd1ce32c117a/1547765015801-FSR1DVSKCZU3PAYWIRQG/broccoli.jpg"
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
    "image": "https://www.noelwilson.ca/wp-content/uploads/2016/12/All-Zucchini.jpg",
    "images": [
      "https://cayugahealth.org/wp-content/uploads/2023/07/bigstock-Green-And-Yellow-Squash-In-A-L-325291501-scaled.jpg",
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
    "image": "https://m.media-amazon.com/images/I/51yw+Tw11BL._AC_UF1000,1000_QL80_.jpg",
    "images": [
      "https://www.simplyseed.co.uk/user/products/Pepper%20Rainbow%20Mixed.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPrBNX5rk7gg__3z2qIxuvsXYmqp3ToZ9fA&s"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "125",
    "name": "Imperfect Tomatoes",
    "slug": "imperfect-tomatoes",
    "category": "Vegetables",
    "subCategory": "Ugly harvest Vegetables",
    "price": 1.99,
    "weight": "1kg",
    "image": "https://ediblemanhattan.com/wp-content/uploads/2018/08/Ugly-Heirloom-Tomatoes_Hepworth_LS.jpg",
    "images": [
      "https://ediblemanhattan.com/wp-content/uploads/2018/08/Ugly-Heirloom-Tomatoes_Hepworth_LS.jpg",
      "https://media.istockphoto.com/id/1226585391/photo/ugly-tomatoes.jpg?s=612x612&w=0&k=20&c=NRa-UcZDQfryukDfIcWqeBAHDADS5ve8Z-NuJawhIdI="
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
    "image": "https://gardenerspath.com/wp-content/uploads/2020/02/Odd-Shaped-Carrots-in-the-Kitchen-2.jpg",
    "images": [
      "https://thumbs.dreamstime.com/b/odd-looking-weird-mutant-uneven-carrots-hand-outdoors-green-grass-background-rejected-food-markets-stores-concept-low-158255169.jpg"
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
    "image": "https://www.extension.iastate.edu/news/files/eo-news/images/potatoes2.jpg",
    "images": [
      "https://www.extension.iastate.edu/news/files/eo-news/images/potatoes2.jpg",
      "https://img.freepik.com/premium-photo/trendy-ugly-curved-potatoes-white-wooden-background_73966-1691.jpg"
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
    "image": "https://cdn.mos.cms.futurecdn.net/NpqMV49dwMGKxPuUV5EWgS.jpg",
    "images": [
      "https://cdn.mos.cms.futurecdn.net/NpqMV49dwMGKxPuUV5EWgS.jpg",
      "https://static.goetheanum.ch/assets/medias/Nachrichten/_1000x1000_crop_center-center_75_none/Gurken_Bruno-Neurath-Wilson-_-Unsplash_Das_Goetheanum.jpg"
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
    "image": "https://storage.googleapis.com/pluckk/uploads/22876-14.jpg",
    "images": [
      "https://5.imimg.com/data5/NJ/BM/MY-24691404/fresh-spinach-500x500.jpg",
      "https://gardenerspath.com/wp-content/uploads/2024/03/How-to-Grow-Spinach-Feature.jpg"
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
    "image": "https://www.greendna.in/cdn/shop/files/coriander22_1200x1200.jpg?v=1715603409",
    "images": [
      "https://www.pepperhub.in/wp-content/uploads/2024/02/Coriander-leaves-Malliyila-Seeds-DIY-Kit-Grow-bagPot-mix-Seeds.webp",
      "https://kkstar.in/wp-content/uploads/2025/02/Coriander-vs-cilantro-FT-BLOG0624-cc8f8172b07b49e7ad435157a846dc16.jpg"
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
      "https://assets.hyperpure.com/data/images/products/018bc634dc207d0fc02e583432e99bf7.jpg",
      "https://zamaorganics.com/cdn/shop/files/Untitled_design_23.jpg?v=1752750104"
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
      "https://images.squarespace-cdn.com/content/v1/5cef7b136434550001a53d10/98da7dcd-df30-448b-aa23-9d656700321e/Methi+Salad-6.jpg",
      "https://www.goinggreens.in/cdn/shop/files/Methi-Fenugreek-seeds1.jpg?v=1719833285"
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
    "image": "https://cpimg.tistatic.com/5214778/b/1/red-onion.jpg",
    "images": [
      "https://tiimg.tistatic.com/fp/1/008/008/spherical-commonly-cultivated-naturals-fresh-raw-healthy-red-onion-396.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2025/1/484855154/JQ/IE/IX/160347834/product-jpeg.jpg"
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
    "image": "https://www.greendna.in/cdn/shop/products/garlic-1_800x.jpg?v=1555938714",
    "images": [
      "https://tiimg.tistatic.com/fp/1/007/701/100-organic-high-allicin-whole-indian-garlic-for-cooking-medicinal-use-381.jpg",
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
    "image": "https://www.neoflam.com.au/cdn/shop/articles/cauliflower_image_a7647855-dc53-427b-9c64-4a6f23762733.jpg?v=1744344281",
    "images": [
      "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg"
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
    "image": "https://myhealth-redcliffelabs.redcliffelabs.com/media/blogcard-images/None/ea804f59-64d5-4f92-9b80-a97f5eb59dee.webp",
    "images": [
      "https://img.freepik.com/premium-photo/okra-ladys-finger-bhindi-fresh-green-vegetable-arranged-basket-with-wooden-textured-backgroundisolated-selective-focuscloseup_527904-3160.jpg",
      "https://kashmir-food.com/cdn/shop/files/14109170-175B-410A-A8EE-F72CFBD90AA2_30afd9ef-c312-47ab-9767-03352475af1c.png?v=1766241545"
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
    "image": "https://zamaorganics.com/cdn/shop/files/Untitleddesign-2024-01-05T124104.768.png?v=1752750783&width=1080",
    "images": [
      "https://m.media-amazon.com/images/I/612O377T9FL._AC_UF894,1000_QL80_.jpg"
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
    "image": "https://justorganik.com/wp-content/uploads/2024/04/RAgi-2.png",
    "images": [
      "https://khuvi.com/cdn/shop/files/Ragi.jpg?v=1736407866",
      "https://images.jdmagicbox.com/quickquotes/images_main/finger-millet-whole-ragi-1-kg-377263136-9y8kf.jpg"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2020/11/GZ/MJ/AB/43093269/foxtail-millet-rava.jpeg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2021/2/JY/JC/VN/21363253/foxtail-millet-rava-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZ6SLyhO-WZWg03hxDxEqA8ZEGVDdrFsQEQ&s"
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
    "image": "https://vibrantliving.in/cdn/shop/files/LittleMillet.png?v=1731059508&width=2048",
    "images": [
      "https://dhatuorganics.com/wp-content/uploads/2024/09/Stock-Iamges-04.jpg",
      "https://cdn-dadkn.nitrocdn.com/sorWINhCcXSSLHEaMuKyjzsQObOaRIwB/assets/images/optimized/rev-69158a6/shopgulab.com/wp-content/uploads/2022/08/067A1964.png"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2025/1/484292191/AG/YG/WX/8716819/yellow-jowar-rava.jpg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/1/484292191/AG/YG/WX/8716819/yellow-jowar-rava.jpg"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2025/8/538082357/XP/VC/HB/220207591/yellow-organic-foxtail-millet-500x500.webp",
    "images": [
      "https://tiimg.tistatic.com/fp/1/007/550/vitamin-potassium-enriched-100-pure-organic-brown-whole-proso-millet-674.jpg"
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
    "image": "https://thepeskyvegan.com/wp-content/uploads/2024/01/italian-style-seasoning-dried-mixed-herbs-bowl.jpg",
    "images": [
      "https://www.themediterraneandish.com/wp-content/uploads/2022/09/Italian-seasoning-recipe-2-500x500.jpg",
      "https://easylowcarb.com/wp-content/uploads/2025/07/IG-Italian-Seasoning-Mix-EasyLowCarb2.jpg",
      "https://cdn.loveandlemons.com/wp-content/uploads/2022/08/italian-seasoning-recipe.jpg"
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
    "image": "https://www.inayva.com/cdn/shop/files/BestQualityAlmondsinIndia.png?v=1729753735",
    "images": [
      "https://opensecret.in/cdn/shop/products/Almonds-ingredients-1_99028190-baef-4268-b8bd-92460e69a2e9.jpg?v=1672759701",
      "https://www.hamiast.com/cdn/shop/files/hamiast-premium-kashmiri-mamra-almonds_front.jpg?v=1740487671",
      "https://www.greendna.in/cdn/shop/products/almond_653x.jpg?v=1564303629",
      "https://tiimg.tistatic.com/fp/1/007/958/pack-of-1-kg-pure-natural-premium-quality-dried-almond-nuts-with-rich-oil-content-382.jpg",
      "https://cdn.shopify.com/s/files/1/0569/6867/5527/files/benefits-of-eating-almonds.webp?v=1744863685"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2024/11/465520790/MC/PJ/NX/144182618/cashew-nuts-250x250.jpg",
    "images": [
      "https://www.inayva.com/cdn/shop/files/premiumkajuprice.png?v=1729838454",
      "https://danielmachine.co/wp-content/uploads/2023/07/nut-ws320.webp",
      "https://vihaba.global/wp-content/uploads/2021/04/Cashew-Nuts-W320.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0D7_mDmHmhO21sanEEdlehBd6VPD9Idzdg&s"
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
    "image": "https://cdn.shopaccino.com/adfs/products/afghan-raisins-kismis-503244_l.jpg?v=681",
    "images": [
      "https://www.ahlandates.com/cdn/shop/products/100033.png?v=1680860397",
      "https://neelkanthsweets.com/cdn/shop/files/product-name-483933.jpg?v=1723422338"
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
    "image": "https://www.greendna.in/cdn/shop/products/walnut-sha6_1200x.jpg?v=1667041643",
    "images": [
      "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/premium-walnut-kernels-250g-2pc-halves-coorg-dryfruits.20240824022559.webp",
      "https://5.imimg.com/data5/SELLER/Default/2022/11/EA/LS/EP/163561492/natural-walnut-kernels.jpg",
      "https://www.omayfoods.com/cdn/shop/products/Walnut_3_2048x.png?v=1686643822"
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
    "image": "https://narayanjigajakwale.in/cdn/shop/files/Anjeer-Small.jpg?v=1727454404",
    "images": [
      "https://mangalorespice.com/cdn/shop/products/DF_04-02.jpg?v=1734787665&width=1445",
      "https://www.bijinuts.com/cdn/shop/files/PremiumDriedAfghaniFigs_BijiNutsAndDryFruits.png?v=1741860127",
      "https://www.ahlandates.com/cdn/shop/products/100466.png?v=1680860552"
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
    "image": "https://www.viralspices.com/wp-content/uploads/2025/04/chia-seed-water-for-weight-loss-624x312.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51Z9BNZOgNL._AC_UF894,1000_QL80_.jpg",
      "https://www.naatigrains.com/image/cache/catalog/products/NG280/Chia-Seeds_Organic-naatigrains-1000x1000.jpg"
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
    "image": "https://images.everydayhealth.com/images/diet-nutrition/recipes-for-pumpkin-seeds-falls-secret-superfood-alt-1440x810.jpg?sfvrsn=a5391824_5",
    "images": [
      "https://www.getdistributors.com/wp-content/uploads/2023/12/7-Uses-of-Pumpkin-Seeds.jpg",
      "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Bowl-of-pumpkin-seeds-b4a5510.jpg",
      "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/07/health_benefits_pumpkin_seeds_roasted_shelled_732x549_thumb.jpg"
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
      "https://dam.northwell.edu/m/724f6bf9102a3387/Drupal-TheWell_sunflower-seeds-benefits_AS_454119976.jpg",
      "https://rukminim2.flixcart.com/image/480/480/kpmy8i80/edible-seed/d/i/3/100-raw-sunflower-seeds-pouch-raw-nutri-guide-whole-original-imag3ttwhhgvg4tt.jpeg?q=90"
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
    "image": "https://m.media-amazon.com/images/I/718Ez2dYkPL._AC_UF350,350_QL80_.jpg",
    "images": [
      "https://www.redbarn.com/cdn/shop/articles/cdfa2a0e275f91b7042603884a6714b1.jpg?v=1764081188"
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
    "image": "https://www.myweekendkitchen.in/wp-content/uploads/2018/08/how_to_make_tomato_ketchup_with_fresh_tomatoes.jpg",
    "images": [
      "https://www.myweekendkitchen.in/wp-content/uploads/2018/08/homemade_tomato_ketchup.jpg",
      "https://thetruetomato.co.in/cdn/shop/files/NoONoG_Ingr.png?v=1757501199&width=1445"
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
    "image": "https://www.kuchpakrahahai.in/wp-content/uploads/2015/11/Homemade-Mayonnaise-Eggless.jpg",
    "images": [
      "https://images.ricardocuisine.com/services/recipes/6656-v2-1645128299.jpg"
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
    "image": "https://notoutofthebox.in/wp-content/uploads/2024/11/ik2.jpg",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjusn44kpGlEtxWnnDLb7vvuHDxRKf99oNze7CTPwER42qpDLjMCkzs672jLG4gskINpl6nSxBhb4NwrigCZ4ax6JbjZwJyUsEwT19JZEXtEXkp3NUYJWcnAZuvacxp4DWdwZWpPsxEZQoC/w1200-h630-p-k-no-nu/IMG_1296+-+Copy.JPG",
      "https://cdn.foodaciously.com/static/recipes/cb90e210-3f6c-4f07-a875-3fd29cab89ca/mango-kasundi-mustard-sauce-recipe-bc96f6e541c5aaebc0fd3845df07153c-1920.jpg"
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
    "image": "https://www.bbassets.com/media/uploads/p/l/40212695_1-organic-nation-chilli-garlic-dip.jpg",
    "images": [
      "https://www.saffrontrail.com/wp-content/uploads/2016/11/homemade-chili-garlic-sauce-schezwan-sauce.1024x1024.jpg"
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
    "image": "https://bakewithshivesh.com/wp-content/uploads/2020/05/151F814A-2749-4978-BA53-3AD2A962C933-scaled.jpg",
    "images": [
      "https://www.allrecipes.com/thmb/JCMYBY68TG5gPrZLIx8x_AgcVRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9827-chocolate-chocolate-chip-cookies-i--DDMFS-092-4x3-c8227481fd804270a50256498cf8f05f.jpg"
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
    "image": "https://iambaker.net/wp-content/uploads/2024/10/Oatmeal-Raisin-Cookies-1.jpg",
    "images": [
      "https://assets.bonappetit.com/photos/64cc0823ee399ec121b433b3/1:1/w_2671,h_2671,c_limit/20230726-1023-PANTRY-1523.jpg",
      "https://maplewoodroad.com/wp-content/uploads/2023/02/Soft-and-chewy-oatmeal-raisin-cookies-feat-img.jpg"
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
    "image": "https://www.cookwithkushi.com/wp-content/uploads/2021/12/IMG_6698c.jpg",
    "images": [
      "https://www.cookwithkushi.com/wp-content/uploads/2021/12/IMG_6685knrew.jpg"
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
    "image": "https://veenaazmanov.com/wp-content/uploads/2024/08/Homemade-Biscotti-Recipe-25.jpg",
    "images": [
      "https://aseasyasapplepie.com/wp-content/uploads/homemade-cantucci.jpg",
      "https://www.jessicagavin.com/wp-content/uploads/2025/12/almond-biscotti-48-1200.jpg"
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
    "image": "https://www.organicsbylee.com/wp-content/uploads/2019/03/wholewheatbread-copy.jpg",
    "images": [
      "https://www.realsimple.com/thmb/Y8mQQH7tLvmJf42fEiBsUYgvGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WholeGrainBread-354a23b37a1b42c0bd8a4d2ee34fcdb9.jpg"
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
    "image": "https://www.girlversusdough.com/wp-content/uploads/2025/09/whole-grain-seeded-bread-soft-crumb.jpg",
    "images": [
      "https://www.beyondthechickencoop.com/wp-content/uploads/2023/01/Multigrain-Bread.jpg",
      "https://cooklys.com/wp-content/uploads/2025/12/multigrain-bread-recipe.webp"
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
    "image": "https://www.thesugarandspice.com/cdn/shop/products/Artboard10_4x_626ba639-4c82-4e28-b1d0-e2ed17f9035d.png?v=1659937523",
    "images": [
      "https://static.wixstatic.com/media/4b5365_491400583627404fb01502e6c8bea669~mv2.jpg/v1/fill/w_560,h_622,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b5365_491400583627404fb01502e6c8bea669~mv2.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/1/378051334/VO/IX/IO/132900754/small-bun-500x500.jpg"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2025/1/482555817/QQ/HQ/IN/23020435/garlic-bread-loaf.jpg",
    "images": [
      "https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-mediumThreeByTwo440.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLr1znHeinVsG9WkhYzWvK4zlmwBgMNiPBXw&s"
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
    "image": "https://www.desinaturals.co.in/cdn/shop/files/Jeggery-Powder.jpg?v=1745822851",
    "images": [
      "https://m.media-amazon.com/images/I/61ciKhf2LTL._AC_UF350,350_QL80_.jpg",
      "https://healthybuddha.in/image/cache/catalog/JaggeryPowder-500x515.jpg"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "169",
    "name": "Palm Jaggery Block",
    "slug": "palm-jaggery-block",
    "category": "Sweeteners",
    "subCategory": "Jaggery",
    "price": 7.99,
    "weight": "500g",
    "image": "https://5.imimg.com/data5/SELLER/Default/2025/6/519448255/UC/NB/NW/104695777/palm-jaggery-karupatti.jpg",
    "images": [
      "https://tiimg.tistatic.com/fp/1/007/029/healthy-natural-palm-jaggery-blocks-073.jpg",
      "https://thepalmera.in/cdn/shop/files/Organic_palm_jaggery_blocks_rich_in_minerals.png?v=1757968358"
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
    "image": "https://www.greendna.in/cdn/shop/files/jaggery_cubes_500x.webp?v=1752159392",
    "images": [
      "https://www.greendna.in/cdn/shop/files/jaggery_cubes_500x.webp?v=1752159392",
      "https://m.media-amazon.com/images/I/717Hwbxm-VL.jpg"
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
    "image": "https://naturessoulshop.com/cdn/shop/files/StinglessBeeHoney_WildFlower_32as.jpg?v=1743577162",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2023/8/334772576/MF/TV/KO/85075072/brown-organic-honey.jpg"
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
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtxSsrhkwGd_AbQ3L3rKAZnshTduCRKAxgQ&s",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2021/2/WV/XX/SN/110773813/kashmiri-acacia-honey-500x500.jpg"
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
    "image": "https://img500.exportersindia.com/product_images/bc-500/2023/9/12028800/tulsi-infused-honey-1683785531-6889763.jpeg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/6/523094964/CD/WR/YI/65088608/organic-tulsi-infused-honey.jpg"
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
    "image": "https://images.squarespace-cdn.com/content/v1/53fc8c7ce4b0af221e1c4c06/1606152556979-GIY61SNGPCPHFST6JMEL/82B7E991-EF2F-4EBE-B6C5-373D9207C1A8_1_201_a.jpeg",
    "images": [
      "https://perfarmersglobal.in/wp-content/uploads/2023/10/119.-Mixed-fruit-jam.jpg",
      "https://www.happyfoodstube.com/wp-content/uploads/2019/06/instant-pot-mixed-berry-jam-image-500x500.jpg"
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
    "image": "https://daenskitchen.com/wp-content/uploads/2025/03/Strawberry-Jam-Featured-1200.jpg",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPhrtUXkgQ_Cqn2fDWer3NjMtPW_lYOip6g&s",
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
    "image": "https://thegourmetjar.com/cdn/shop/products/85.png?v=1624099580",
    "images": [
      "https://kitchendivas.com/wp-content/uploads/2024/04/Mango-Jalapeno-Jam-Kitchen-Divas-15pin.jpg"
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
    "image": "https://cpimg.tistatic.com/05654426/b/4/extra-05654426.jpg",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZDeZ7ZfW1tnlrvnPHzjVnmHzxECQvHUDNw&s",
      "https://5.imimg.com/data5/SELLER/Default/2024/10/461901752/DJ/ZT/RX/193772883/organic-raw-brown-sugar-500x500.jpeg",
      "https://www.czapp.com/wp-content/uploads/2024/05/sugar-sugar-1.jpg"
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
    "image": "https://cpimg.tistatic.com/11030528/b/4/Coconut-Sugar..jpg",
    "images": [
      "https://nuttyyogi.com/cdn/shop/products/Coconut_Suger.jpg?v=1716888510",
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323047/coconut-next-to-coconut-sugar-in-bowl-on-tree-stump.jpg"
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
    "image": "https://tiimg.tistatic.com/fp/2/009/324/white-sugar-634.jpg",
    "images": [
      "https://didwblovvwmoz.cloudfront.net/product_images/4395215/1844167/compressed/featured_image/350e47ddece24c1f1e6d8458aaf4_602_602.jpeg",
      "https://5.imimg.com/data5/SELLER/Default/2022/1/DQ/CZ/YN/3853708/white-sugar-icumsa-45.jpg"
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
    "image": "https://onlyhydroponics.in/cdn/shop/files/peanut_oil2.jpg?v=1704344186",
    "images": [
      "https://global.vishalam.com/cdn/shop/files/marachekku-wood-cold-pressed-groundnut-oil-288096.jpg?v=1721288103",
      "https://i0.wp.com/vaerorganic.com/wp-content/uploads/2020/09/groundnut-oil-2-scaled.jpg?fit=2560%2C2560&ssl=1"
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
    "image": "https://vibrantliving.in/cdn/shop/files/ColdPressedMustardOil.jpg?v=1731057931&width=2048",
    "images": [
      "https://chakkipeesing.com/cdn/shop/files/197.png?v=1773040313&width=1445",
      "https://tiimg.tistatic.com/fp/1/008/539/premium-quality-natural-mustard-oil-163.jpg"
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
    "image": "https://olivewellnessinstitute.org/wp-content/uploads/2018/06/shutterstock_348097892.jpg",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebh7di-_J-A35bkcEfZxCQlpbKTH7RP5Okw&s",
      "https://5.imimg.com/data5/SELLER/Default/2022/12/WY/JH/DF/12352081/olive-oil-4-500x500.png"
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
    "image": "https://www.greendna.in/cdn/shop/products/320644_1100_1100x.jpg?v=1587729759",
    "images": [
      "https://oleofats.com/wp-content/uploads/2024/04/coconut-oil.jpg",
      "https://www.greendna.in/cdn/shop/products/coconut-oil_11_600x.jpg?v=1593247466"
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
    "image": "https://cdn.shopify.com/s/files/1/0566/6226/1897/files/Sesame_Oil_and_Gingelly_Oil_480x480.jpg?v=1679805304",
    "images": [
      "https://bnborganics.com/cdn/shop/articles/Difference_Between_Sesame_Oil_and_Gingelly_Oil.jpg?v=1679805324"
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
    "image": "https://rosesandtulip.com/cdn/shop/files/20_f44d5c19-904e-4c66-b0c8-f347fb550c9a.png?v=1697101872&width=1214",
    "images": [
      "https://rosesandtulip.com/cdn/shop/files/20_f44d5c19-904e-4c66-b0c8-f347fb550c9a.png?v=1697101872&width=1214"
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
    "image": "https://4.imimg.com/data4/EY/SV/ANDROID-25005951/product-500x500.jpeg",
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
    "image": "https://helloglow.co/wp-content/uploads/2018/02/Infused-Ghee-5-of-7.jpg",
    "images": [
      "https://helloglow.co/wp-content/uploads/2018/02/Infused-Ghee-7-of-7.jpg"
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
    "image": "https://www.pranahitanaturals.com/product-images/Unpolished+Toor+Dal.webp/1872476000000386389/1100x1100",
    "images": [
      "https://www.pranahitanaturals.com/product-images/Unpolished+Toor+Dal+husk.webp/1872476000000386435/1100x1100"
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
    "image": "https://cdn.shopaccino.com/edible-smart/products/645081_l.jpg?v=681",
    "images": [
      "https://nagabazaar.com/cdn/shop/files/kabuli-chana.jpg?v=1747522436"
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
    "image": "https://5.imimg.com/data5/JL/RW/IP/SELLER-84500358/5-masoor-whole.png",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2025/8/539221306/XS/KS/TS/247926560/black-whole-masoor-dal-250x250.jpg"
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
    "image": "https://tiimg.tistatic.com/fp/1/009/085/old-basmati-rice-048.jpg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2024/4/413035216/SD/IW/YL/121441136/1121-steam-basmati-rice-500x500.jpg"
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
    "image": "https://restaurantsupplier1.com/wp-content/uploads/2024/07/Sona-Masoori-Rice.jpg",
    "images": [
      "https://5.imimg.com/data5/AD/FD/MY-18967196/sona-masoori-regular-rice-500x500.jpg",
      "https://www.srisritattva.com/cdn/shop/articles/top-view-raw-rice-inside-plate-dark-desk.jpg?v=1707287123"
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
    "image": "https://m.media-amazon.com/images/I/61m-Y7IHJ1L._AC_UF894,1000_QL80_.jpg",
    "images": [
      "https://nuttyyogi.com/cdn/shop/products/red-rice_1.jpg?v=1752669187",
      "https://vibrantliving.in/cdn/shop/files/RedRice.jpg?v=1731059726&width=2048"
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
    "image": "https://www.hwcmagazine.com/wp-content/uploads/2017/09/instant-pot-black-rice-8022.jpg",
    "images": [
      "https://aarogyamastu.in/wp-content/uploads/2022/06/raw-black-rice.jpg",
      "https://ameliarecipes.com/wp-content/uploads/2025/09/homemade-Black-Rice-Recipe.jpg"
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
    "image": "https://binjalsvegkitchen.com/wp-content/uploads/2024/04/Instant-Mango-Pickle-H1.jpg",
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekKS129JqZPXymiYUBGywHzB3WKqwLctxgw&s",
      "https://blissfulbitesbytay.com/wp-content/uploads/2021/05/instant-mango-pickle-Featured-image-scaled.jpg"
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
    "image": "https://tiimg.tistatic.com/fp/1/008/400/mix-vegetable-pickles-served-with-dinner-lunch-933.jpg",
    "images": [
      "https://www.cookwithkushi.com/wp-content/uploads/2024/04/vegetable_pickle_nonche_aachar_recipe.jpg"
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
    "image": "https://www.whiskaffair.com/wp-content/uploads/2020/12/Idli-Podi-2-1-1200x1800.jpg",
    "images": [
      "https://maayeka.com/wp-content/uploads/2014/08/idli-podi-gunpowder-malaga-podi.jpg",
      "https://i.ytimg.com/vi/ed_Y-EqMYJI/sddefault.jpg"
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
    "image": "https://patankarpickles.com/wp-content/uploads/2024/01/Garlic-Chutney_V_A-scaled.jpg",
    "images": [
      "https://desicondiments.com/wp-content/uploads/2020/06/DSC_8762.jpg",
      "https://dakshinspices.com/wp-content/uploads/2024/05/Lassun-Chutney.png"
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
    "grindingVideoUrl": "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    "id": "200",
    "name": "Rolled Oats",
    "slug": "rolled-oats",
    "category": "Daily Groceries",
    "subCategory": "Breakfast Cereals",
    "price": 6.99,
    "weight": "1kg",
    "image": "https://www.greendna.in/cdn/shop/files/oatsr_c9f37235-6d1c-49a9-a396-2c79258d6afd_900x.webp?v=1741415195",
    "images": [
      "https://www.realsimple.com/thmb/jVdrawlRV48owlJekFI2pjsFU3o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/quick-vs-rolled-oats-GettyImages-1404608498-4975f9fd58f349a7ba6ad2d559aac655.jpg",
      "https://www.praakritik.com/cdn/shop/files/4_eac01c46-e8a3-436d-bcfc-20397fecae24.png?v=1755943931&width=1214"
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
    "image": "https://orlydryfruits.com/cdn/shop/files/multimilltmuse_i3.png?v=1751802040",
    "images": [
      "https://munchilicious.com/cdn/shop/files/5...png?v=1761904127&width=1000"
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
    "image": "https://www.shreemithai.com/cdn/shop/files/corn-flakes-mixture-7292018.jpg?v=1762531716",
    "images": [
      "https://media.istockphoto.com/id/515167475/photo/corn-flakes-with-milk-breakfast.jpg?s=612x612&w=0&k=20&c=kesfyM97ZiMGEHwKIkX6j3vpIBecMNyG8-GBD6p0t4s=",
      "https://www.greatestbakery.in/wp-content/uploads/2022/03/Buy-Corn-Flake-Fry-in-Nagercoil.jpg"
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
    "image": "https://5.imimg.com/data5/SELLER/Default/2025/2/488666912/GC/BR/VW/5875683/choco-rings-500x500.jpeg",
    "images": [
      "https://5.imimg.com/data5/SELLER/Default/2024/12/476369783/MH/CN/BE/5875683/choco-ring.jpg"
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
    "image": "https://cdn.grofers.com/da/cms-assets/cms/product/2a940786-520f-4b9b-8d15-245ee8184dbe.jpg",
    "images": [
      "https://yufoodsco.com/cdn/shop/files/1_bef3989e-e55c-4958-8e84-6b2c3859b7b2_1024x.jpg?v=1747299536"
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
    "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/09a98398-b522-4f01-9a0f-8d7ceaea4f77.png",
    "images": [
      "https://yufoodsco.com/cdn/shop/files/2_ddbaf7eb-c565-45d7-9058-290e1edd2850_grande.jpg?v=1747299438"
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
    "image": "https://grainzee.com/wp-content/uploads/2024/06/17.png",
    "images": [
      "https://static.wixstatic.com/media/1bb58e_454f6934b1cd46d6a4dcbb0aac0e7aa6~mv2.jpg/v1/fill/w_568,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1bb58e_454f6934b1cd46d6a4dcbb0aac0e7aa6~mv2.jpg"
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
    "image": "https://www.thespruceeats.com/thmb/pYEY_LKKBnCPkfKeuMi6HCRLKi0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-cook-rice-noodles-4777830-hero-01-fd518a7df57145e3985444268cd277b0.jpg",
    "images": [
      "https://www.cooking-therapy.com/wp-content/uploads/2024/01/How-to-Cook-Vermicelli-2.jpg",
      "https://hot-thai-kitchen.com/wp-content/uploads/2022/02/sen-mee-pad-see-ew-blog.jpg"
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
    image: "https://m.media-amazon.com/images/I/61Cn0YZ-JxL._AC_UF350,350_QL80_.jpg",
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
    image: "https://pbs.twimg.com/media/CbkumW7UAAA7iIB.jpg",
    count: 81,
    color: "#C65A00",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Professional Chef",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    review: "Zestora's spices have completely transformed my cooking. The Kashmir saffron is unlike anything I've used before — deeply aromatic and luxuriously vibrant. My clients notice the difference immediately.",
    rating: 5,
    product: "Kashmir Saffron",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Food Blogger",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    review: "I've tried dozens of spice brands over my years of food writing. Zestora stands in a category of its own. The freshness, the purity, the provenance — everything about this brand speaks to genuine quality.",
    rating: 5,
    product: "Tellicherry Pepper",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Home Cook & Wellness Coach",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
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
