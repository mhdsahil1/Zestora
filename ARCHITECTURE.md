# Zestora E-Commerce - Architecture & Best Practices

## 🏗️ Project Architecture

### Technology Stack
```
Frontend:     Next.js 14 (App Router) + React 18
Styling:      Tailwind CSS
Database:     MongoDB Atlas + Mongoose ODM
Authentication: NextAuth.js + Google OAuth
Image Hosting: Cloudinary CDN
Deployment:   Vercel
```

### Design Pattern: Hybrid Rendering
```
├── Static Pages (Fast)
│   └── /page.tsx → Built at deploy time, cached globally
│
├── Dynamic Pages (Smart Caching)
│   ├── /shop/page.tsx → Revalidated periodically (ISR)
│   └── /shop/[slug]/page.tsx → Generated on-demand
│
└── API Routes (Real-time)
    └── /api/products → Always fresh, cached in middleware
```

---

## 📂 Folder Structure Best Practices

### Current Structure
```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/
│   │   ├── auth/          # NextAuth.js magic routes
│   │   │   └── [...nextauth]/route.ts
│   │   ├── products/      # REST API endpoint
│   │   │   └── route.ts
│   │   └── [...other endpoints]
│   ├── shop/
│   │   ├── page.tsx       # Product listing
│   │   ├── layout.tsx     # Shop-specific layout
│   │   ├── error.tsx      # Error boundary
│   │   └── [slug]/
│   │       └── page.tsx   # Product detail
│   ├── layout.tsx         # Root layout (html, head)
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
│
├── components/            # Reusable React components
│   ├── layout/           # Navigation, Footer, etc
│   ├── ui/               # Button, Card, Modal, etc
│   ├── forms/            # Login, Signup, etc
│   └── product/          # ProductCard, ProductGrid, etc
│
├── lib/                  # Utility functions & configuration
│   ├── mongodb.ts        # Database connection (cached)
│   ├── auth.ts           # Auth helpers
│   └── utils.ts          # General utilities
│
├── models/               # MongoDB schemas (Mongoose)
│   ├── Product.ts
│   ├── User.ts
│   └── Order.ts
│
├── types/                # TypeScript type definitions
│   ├── product.ts
│   ├── user.ts
│   └── next-auth.d.ts    # NextAuth type extensions
│
└── data/                 # Static data, constants
    ├── products.ts
    └── categories.ts

public/                    # Static assets (served directly)
├── icon.png
├── manifest.json
└── images/

.env.example              # Environment variables template
.env.development.local    # Development secrets (git ignored)
next.config.ts            # Next.js configuration
tsconfig.json             # TypeScript configuration
tailwind.config.ts        # Tailwind CSS configuration
```

---

## 🔄 Data Flow Architecture

### Product Loading Flow
```
User visits /shop
    ↓
Browser loads shop/page.tsx (Client Component with 'use client')
    ↓
useEffect hook triggers
    ↓
fetch('/api/products') → GET /api/products
    ↓
API Route: /api/products/route.ts
├── dbConnect() → Connects to MongoDB (cached)
├── Product.find(query) → Mongoose query
└── Returns: { success: true, data: [...] }
    ↓
Response arrives in browser
    ↓
setProducts(data) → State updated
    ↓
Component re-renders with products
    ↓
ProductCard components display product images from Cloudinary
```

### Product Detail Flow
```
User clicks product → navigates to /shop/[slug]
    ↓
shop/[slug]/page.tsx (Server Component)
    ↓
getProductAndRelated(slug) called
    ↓
API call to MongoDB:
├── Product.findOne({ slug })
└── Product.find({ category }) → Related products
    ↓
<ProductClient> component receives props
    ↓
Renders product with images, description, reviews
```

---

## 🗄️ Database Schema Design

### Product Collection
```javascript
{
  _id: ObjectId,
  name: String,              // "Turmeric Powder"
  slug: String,              // "turmeric-powder" (unique)
  id: String,                // Custom ID (unique)
  category: String,          // "Spices"
  subCategory: String,       // "Powders"
  price: Number,             // 299
  originalPrice: Number,     // For discounts
  weight: String,            // "100g"
  image: String,             // Cloudinary URL
  images: [String],          // Multiple images
  description: String,       // Long description
  shortDescription: String,  // For listings
  origin: String,            // "Kerala, India"
  healthBenefits: [String],  // Benefits array
  tags: [String],            // ["organic", "natural"]
  featured: Boolean,         // For homepage
  isNew: Boolean,            // New products
  isBestseller: Boolean,     // Popular products
  inStock: Boolean,          // Availability
  createdAt: Date,
  updatedAt: Date
}
```

### User Collection (via NextAuth)
```javascript
{
  _id: ObjectId,
  email: String,             // Unique
  name: String,
  image: String,             // Avatar
  emailVerified: Date,
  role: String,              // "user" or "admin"
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Authentication Architecture

### NextAuth.js Flow
```
1. User clicks "Sign in"
    ↓
2. Redirects to /auth/signin
    ↓
3. Google OAuth consent screen
    ↓
4. Google redirects back with code
    ↓
5. NextAuth exchanges code for tokens
    ↓
6. Creates user in database
    ↓
7. Sets secure session cookie
    ↓
8. Redirects to app, user logged in
```

### Session Management
```
User (Browser)
    ↓ Has session cookie (secure, httpOnly)
    ↓
Next.js API Routes
    ↓ getServerSession(authOptions)
    ↓ Returns: { user: { email, name, role } }
    ↓
Protected routes check: if (!session) redirect to login
```

---

## 🚀 Performance Architecture

### Image Optimization
```
User requests image from Cloudinary
    ↓
Next.js Image component (not <img>)
    ↓
Serves optimized version:
├── WebP on Chrome/Edge
├── JPEG on older browsers
├── Correct size for device
└── Lazy loaded (below the fold)
    ↓
Cloudinary CDN caches optimized version
    ↓
Future requests: instant (from CDN cache)
```

### Database Connection Caching
```
First API request to /api/products
    ↓
dbConnect()
├── Check if cached connection exists? No
├── Create new connection to MongoDB
└── Store in global.mongoose
    ↓
Response sent

Second API request
    ↓
dbConnect()
├── Check if cached connection exists? Yes ✅
└── Reuse connection (instant)
    ↓
Response sent
```

### Cache Strategy
```
Static Assets (images, CSS, JS)
    ↓ Vercel CDN → Cached globally → 1 year

API Responses
    ↓ Varies by endpoint:
    ├── /api/products → Cache-Control: max-age=3600 (1 hour)
    ├── /api/auth/session → Cache-Control: no-cache (always fresh)
    └── /api/upload → Cache-Control: no-cache (always fresh)

HTML Pages
    ↓ Vercel serves from nearest edge location
    ├── Static pages → Cached forever (revalidate on deploy)
    └── Dynamic pages → ISR (revalidate periodically)
```

---

## 🛡️ Security Architecture

### Request Security
```
Browser Request
    ↓
Vercel checks:
├── HTTPS only (enforced)
├── CORS headers
└── Security headers (CSP, HSTS, etc)
    ↓
Next.js API Route
├── Validate input (Zod schemas)
├── Check authentication (if required)
├── Check authorization (role-based)
└── Execute query
    ↓
MongoDB
├── Parameterized queries (Mongoose)
└── No SQL injection possible
```

### Secret Management
```
.env.local (Development)
    └── Never committed (in .gitignore)
    └── Only on your machine
    └── Loaded by Next.js at runtime

Vercel Environment Variables (Production)
    ├── Set in Vercel Dashboard
    ├── Encrypted at rest
    ├── Only available at deploy/runtime
    └── Not shown in UI after initial setup
    └── Different per environment (dev/staging/prod)
```

---

## 📊 API Response Format

### Standard Success Response
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Turmeric Powder",
      "slug": "turmeric-powder",
      "price": 299,
      "image": "https://res.cloudinary.com/...",
      "category": "Spices"
    }
  ]
}
```

### Standard Error Response
```json
{
  "success": false,
  "message": "Failed to fetch products",
  "error": "MongoDB connection timeout"
}
```

### Frontend Handling
```typescript
// Fetch data
const response = await fetch('/api/products');

// Check if request succeeded (network/server level)
if (!response.ok) throw new Error(`HTTP ${response.status}`);

// Parse JSON
const data = await response.json();

// Check if API operation succeeded
if (data.success) {
  setProducts(data.data);
} else {
  setError(data.message);
}
```

---

## 🔄 Deployment Pipeline

### Development → Production
```
1. Developer makes changes locally
   └── Tested with `npm run dev`

2. Push to GitHub (mhdsahil1/Zestora)
   └── git push origin feature-branch

3. Create Pull Request
   └── Code review

4. Merge to main branch
   └── git merge --no-ff feature-branch

5. Vercel detects main branch update
   └── Automatic deployment triggered

6. Vercel builds project
   ├── npm install (install dependencies)
   ├── npm run build (compile Next.js)
   └── Run tests (if configured)

7. Vercel deploys to edge network
   ├── Previous version kept for rollback
   ├── Assigns deployment URL
   └── Updates production DNS (if custom domain)

8. Monitoring & Alerts
   ├── Analytics tracked
   ├── Error logs checked
   └── Performance monitored
```

### Rollback Process
```
If production has issues:
    ↓
Vercel Dashboard → Deployments
    ↓
Select previous working deployment
    ↓
Click "Promote to Production"
    ↓
Previous version instantly restored
```

---

## 📈 Scalability Considerations

### Current Bottlenecks & Solutions

| Bottleneck | Current Solution | Future Improvement |
|-----------|------------------|-------------------|
| API calls | Cached DB connection | Add Redis caching layer |
| Image serving | Cloudinary CDN | Image optimization on upload |
| Database | Single MongoDB instance | Sharding (if needed) |
| Product filtering | In-memory filtering | Elasticsearch/Typesense |
| Authentication | JWT sessions | OAuth token refresh |

### How to Scale

**When you hit 10,000 users/day:**
1. Add Redis for session caching
2. Add Elasticsearch for product search
3. Implement API rate limiting
4. Setup database read replicas

**When you hit 100,000 users/day:**
1. Move to microservices
2. Implement message queue (Kafka)
3. Database sharding
4. Dedicated search infrastructure

---

## 🧪 Testing Architecture

### Current Setup
```
src/
└── __tests__/
    ├── api/          # API route tests
    ├── components/   # Component tests
    └── lib/          # Utility function tests
```

### Recommended Testing Strategy
```
Unit Tests
├── Models (Product, User)
├── Utilities
└── Helpers

Integration Tests
├── API routes
└── Database queries

E2E Tests
├── Shop page flow
├── Product detail page
└── Auth flow
```

---

## 🔍 Monitoring & Debugging

### Built-in Monitoring
- ✅ Vercel Analytics (performance metrics)
- ✅ Vercel Logs (function logs)
- ✅ Browser DevTools (frontend debugging)
- ✅ MongoDB Atlas Dashboard (database monitoring)

### How to Monitor

**Production Issues:**
1. Check Vercel Dashboard → Deployments
2. View build logs for errors
3. Check Vercel Analytics for performance
4. Check MongoDB Atlas for slow queries

**Local Development Issues:**
1. Check browser DevTools → Console
2. Check browser DevTools → Network
3. Check terminal output for API errors
4. Use `npm run build` to catch build errors

---

## 📚 Design Decisions

### Why Next.js 14 App Router?
- ✅ Latest React features (Server Components)
- ✅ Better performance (automatic code splitting)
- ✅ Improved file-based routing
- ✅ Built-in API routes (no extra server needed)

### Why MongoDB + Mongoose?
- ✅ Schema flexibility (documents)
- ✅ Easy to scale horizontally
- ✅ Query language is intuitive (similar to JS)
- ✅ Built-in indexing and optimization

### Why Cloudinary for Images?
- ✅ Automatic image optimization
- ✅ Responsive image delivery
- ✅ Format conversion (WEBP, etc)
- ✅ Global CDN for fast delivery

### Why NextAuth.js?
- ✅ Secure session management
- ✅ Built-in OAuth providers
- ✅ No backend auth server needed
- ✅ Works perfectly with Next.js

---

## 🎯 Future Improvements

### Phase 1 (Next Month)
- [ ] Add search with Elasticsearch
- [ ] Implement caching with Redis
- [ ] Add reviews/ratings system
- [ ] Email notifications

### Phase 2 (Next Quarter)
- [ ] Implement admin dashboard
- [ ] Order management system
- [ ] Inventory tracking
- [ ] Analytics dashboard

### Phase 3 (Next Year)
- [ ] Mobile app (React Native)
- [ ] AI recommendations
- [ ] Subscription service
- [ ] Marketplace (multiple sellers)

---

**Last Updated:** April 2026
**Architecture Version:** 1.0
**Status:** Production Ready ✅
