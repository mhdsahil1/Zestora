# Zestora E-Commerce - Quick Reference Guide

## 🚀 Quick Start

### Local Development
```bash
# 1. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

### Build & Test Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes (Next.js API)
│   │   ├── products/     # GET /api/products
│   │   ├── auth/         # NextAuth.js configuration
│   │   └── ...
│   ├── shop/
│   │   ├── page.tsx      # Shop listing page
│   │   └── [slug]/page.tsx # Product detail page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── layout/           # Header, footer, navbar
│   ├── ui/              # Product card, forms, etc
│   └── ...
├── models/              # MongoDB schemas (Mongoose)
│   └── Product.ts
├── lib/
│   └── mongodb.ts       # Database connection (cached)
├── types/
│   └── product.ts       # TypeScript types
└── data/
    └── products.ts      # Product data

public/
├── icon.png            # Favicon
└── ...

.env.example            # Environment variables template
.env.development.local  # Development secrets (git ignored)
next.config.ts          # Next.js configuration
DEPLOYMENT_CHECKLIST.md # Step-by-step deployment guide
FIXES_SUMMARY.md        # Technical fixes documentation
```

---

## 🔧 Key Configuration

### Image Hosting
Configured in `next.config.ts` to load images from:
- ✅ Cloudinary (`res.cloudinary.com`)
- ✅ Unsplash (`images.unsplash.com`)  
- ✅ Vercel vusercontent (`*.vusercontent.net`)

No additional config needed!

### Database
- MongoDB Atlas with cached connection pattern
- Connection string format: `mongodb+srv://user:pass@cluster.mongodb.net/db?ssl=true&...`
- Prevents connection pool exhaustion

### Authentication
- NextAuth.js with Google OAuth
- Session stored securely
- `NEXTAUTH_SECRET` must be 32+ chars (generate with `openssl rand -base64 32`)

---

## 🛠️ Common Tasks

### Add a New Product
```typescript
// POST /api/products
const response = await fetch('/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Product Name',
    slug: 'product-slug',
    category: 'Spices',
    price: 499,
    image: 'https://res.cloudinary.com/...',
    description: '...',
    // ... other fields
  })
});
```

### Fetch Products
```typescript
// GET /api/products?category=Spices&sort=featured
const response = await fetch('/api/products?category=Spices');
const data = await response.json();
// Returns: { success: true, data: [...] }
```

### Query Parameters
```
/api/products
  ?category=Spices      # Filter by category
  &featured=true        # Only featured products
  &search=turmeric      # Search by name/category
  &sort=price-asc       # Sort: price-asc, price-desc, rating, newest, featured
```

---

## 🐛 Troubleshooting

### Products Not Loading
```bash
# 1. Check API is working
curl http://localhost:3000/api/products

# 2. Check MongoDB connection
# Look for "dbConnect" logs in console

# 3. Check browser console for errors
# DevTools → Console tab
```

**Solution:** Run `npm run dev` again, refresh page

### Images Not Showing
```bash
# 1. Check image URL is from allowed domain
# (Cloudinary, Unsplash, or vusercontent)

# 2. Check Cloudinary credentials in .env.local
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# 3. Verify image exists on Cloudinary dashboard
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (with filters) |
| POST | `/api/products` | Create product (admin only) |
| GET | `/api/auth/session` | Get current user session |
| POST | `/api/auth/signin` | Sign in with Google |
| POST | `/api/auth/signout` | Sign out |

---

## 🚀 Deployment Checklist

Quick checklist before deploying:

```bash
# 1. Build locally
npm run build
# ✅ Should complete without errors

# 2. Test production build
npm run start
# ✅ Visit http://localhost:3000 in browser

# 3. Verify shop page loads
# Visit http://localhost:3000/shop
# ✅ Products should appear

# 4. Push to GitHub
git add .
git commit -m "Fix: Production-ready build"
git push origin main

# 5. Vercel auto-deploys
# Check: https://vercel.com/dashboard
```

---

## 📝 Environment Variables

**Required:**
- `MONGODB_URI` - MongoDB connection string
- `NEXTAUTH_URL` - Your app URL
- `NEXTAUTH_SECRET` - 32+ char secret
- `GOOGLE_CLIENT_ID` - From Google Cloud Console
- `GOOGLE_CLIENT_SECRET` - From Google Cloud Console
- `CLOUDINARY_CLOUD_NAME` - Cloudinary account
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

**Optional:**
- `AI_GATEWAY_API_KEY` - If using AI features
- `VERCEL_WEB_ANALYTICS_ID` - For analytics

---

## 🔐 Security Notes

✅ **Already Configured:**
- HTTPS only (enforced by Vercel/browser)
- Secure headers (CSP, HSTS, XSS protection)
- SQL injection protected (using Mongoose)
- Session secrets encrypted
- API authentication on protected routes

⚠️ **Never:**
- Commit `.env.local` or secrets to git
- Share `NEXTAUTH_SECRET` publicly
- Use same secret across environments
- Log sensitive data to console in production

---

## 📚 Learning Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Cloudinary Docs](https://cloudinary.com/documentation)

---

## 🎯 Performance Tips

1. **Use Image Optimization**
   - Next.js Image component automatically optimizes
   - Serves WebP on supported browsers
   - Lazy loads below the fold

2. **API Caching**
   - Add cache headers to API responses
   - Use ISR (Incremental Static Regeneration) for product pages

3. **Database Indexes**
   - Already added on `category`, `slug`, `featured` fields
   - Monitor performance with MongoDB Atlas

4. **CDN Caching**
   - Vercel automatically caches static assets
   - Images cached on Cloudinary CDN

---

## 📞 Support

### Deployment Issues
→ See `DEPLOYMENT_CHECKLIST.md` → Troubleshooting section

### Technical Details
→ See `FIXES_SUMMARY.md` for all fixes applied

### Development Help
→ Check inline code comments and TypeScript types

---

**Last Updated:** April 2026
**Status:** Production Ready ✅
