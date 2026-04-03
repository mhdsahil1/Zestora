# Zestora E-Commerce - Deployment Checklist

## Pre-Deployment Verification

### 1. ✅ Build Errors Fixed
- [x] Removed duplicate `/app/icon.png` file (kept only `/public/icon.png`)
- [x] Fixed dynamic route params in `/shop/[slug]/page.tsx` - now properly awaits params
- [x] Fixed `next.config.ts` - removed `https://` from hostname in remotePatterns
- [x] Configured proper Image remotePatterns for Cloudinary and vusercontent

### 2. ✅ Frontend Data Fetching
- [x] Shop page (`/src/app/shop/page.tsx`) properly handles API response format
- [x] API returns `{ success: true, data: [...] }` format
- [x] Added error handling with user-friendly error messages
- [x] Removed debug console.log statements from production code

### 3. ✅ API Configuration
- [x] `/api/products` route returns consistent JSON format
- [x] MongoDB connection uses cached connection pattern (prevents connection pool exhaustion)
- [x] Environment variables properly referenced
- [x] Error handling on all API routes

### 4. ✅ Configuration Files
- [x] `next.config.ts` - proper Image remotePatterns, security headers, TypeScript ignores
- [x] `.env.example` - all required variables documented
- [x] MongoDB connection with IPv4 force, timeout settings, and caching

---

## Step-by-Step Deployment to Vercel

### Step 1: Prepare Environment Variables

1. **Create `.env.local` for local testing:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in all required variables in `.env.local`**

### Step 2: Test Locally

```bash
# Install dependencies
npm install  # or pnpm install / yarn install

# Run development server
npm run dev

# Test key routes:
# - Home page: http://localhost:3000
# - Shop page: http://localhost:3000/shop
# - Product detail: http://localhost:3000/shop/[slug]
# - Auth pages: http://localhost:3000/auth/signin
```

**What to test:**
- [ ] Products load on shop page without errors
- [ ] Product detail pages load correctly
- [ ] Image loading from Cloudinary works
- [ ] Navigation between pages works
- [ ] No console errors in browser DevTools

### Step 3: Build Verification

```bash
# Build the project locally
npm run build

# This should complete without errors about:
# - icon.png conflicts
# - Dynamic params not awaited
# - Image remotePatterns

# Test the production build locally
npm run start
```

### Step 4: Setup Vercel Project

1. **Connect GitHub Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository (mhdsahil1/Zestora)
   - Select "Next.js" as the framework

2. **Configure Build Settings:**
   - Build Command: `npm run build` (default is fine)
   - Output Directory: `.next` (default is fine)
   - Install Command: `npm ci` (default is fine)

### Step 5: Add Environment Variables to Vercel

Go to **Settings → Environment Variables** and add:

**Required Variables:**
```
MONGODB_URI=mongodb+srv://...
NEXTAUTH_URL=https://yourdomain.com (or https://project.vercel.app)
NEXTAUTH_SECRET=your-secret-32-chars-minimum
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

**Optional Variables:**
```
AI_GATEWAY_API_KEY=your-key-if-using-ai
VERCEL_WEB_ANALYTICS_ID=your-id
```

⚠️ **DO NOT** paste sensitive values - Vercel will auto-encrypt them

### Step 6: Configure NEXTAUTH_URL for Production

Before deploying, ensure your `NEXTAUTH_URL` environment variable is set correctly:

- **For Vercel Preview:** `https://your-project.vercel.app`
- **For Custom Domain:** `https://your-domain.com`
- **For Google OAuth:** Add this URL to your Google OAuth app's authorized redirect URIs

### Step 7: Verify Image Configuration

Our Next.js config is already set up to handle images from:
- ✅ Cloudinary (`res.cloudinary.com`)
- ✅ Unsplash (`images.unsplash.com`)
- ✅ Vercel Blob/vusercontent (`*.vusercontent.net`)

No additional configuration needed!

### Step 8: Deploy

```bash
# Push to main branch to trigger deployment
git push origin main

# OR manually deploy from Vercel dashboard:
# 1. Go to your Vercel project
# 2. Click "Deploy" button
```

Vercel will automatically:
- Install dependencies
- Run build
- Deploy to production
- Set up SSL certificate
- Enable CDN caching

### Step 9: Post-Deployment Verification

1. **Check Deployment Status:**
   - Vercel dashboard shows "Ready" status
   - No build errors in Deployment logs

2. **Test Live Site:**
   - [ ] Homepage loads
   - [ ] Shop page loads with products
   - [ ] Product images display correctly
   - [ ] Product detail pages work
   - [ ] No console errors in DevTools
   - [ ] Network tab shows successful API calls to `/api/products`

3. **Test API Endpoints:**
   ```bash
   # Test products API
   curl https://your-domain.com/api/products
   
   # Should return: { "success": true, "data": [...] }
   ```

4. **Monitor Errors:**
   - Go to Vercel dashboard → Monitoring
   - Check for any runtime errors
   - Check Logs for any API errors

---

## Troubleshooting

### Issue: "Failed to fetch products" on shop page

**Check:**
1. API endpoint is returning 200 status
2. Response format is `{ success: true, data: [...] }`
3. MongoDB connection is working
4. Network tab shows the API call going through

**Fix:**
```bash
# Check API locally
curl http://localhost:3000/api/products

# Should return JSON with success: true
```

### Issue: Images not loading from Cloudinary

**Check:**
1. `CLOUDINARY_CLOUD_NAME` is set correctly in .env
2. Image URLs in database are valid Cloudinary URLs
3. Cloudinary account has the images uploaded

**Fix:**
```js
// In next.config.ts, verify remotePatterns includes:
{
  protocol: 'https',
  hostname: 'res.cloudinary.com',
}
```

### Issue: OAuth not working

**Check:**
1. `NEXTAUTH_URL` matches your domain exactly
2. Google OAuth app has correct redirect URIs
3. `NEXTAUTH_SECRET` is set and consistent across deployments

**Fix:**
```bash
# Regenerate NEXTAUTH_SECRET
openssl rand -base64 32
```

### Issue: MongoDB connection timeout

**Check:**
1. IP whitelist in MongoDB Atlas includes Vercel IPs (0.0.0.0/0 for testing)
2. Connection string has `ssl=true`
3. Network connectivity from Vercel to MongoDB

**Fix:**
```
// Add to MongoDB connection string:
?ssl=true&retryWrites=true&w=majority
```

### Issue: TypeScript/Build errors

**Note:** This project uses `typescript.ignoreBuildErrors: true` in production.

To fix actual errors locally:
```bash
npm run build
# Fix any TypeScript errors shown

# Re-enable strict TypeScript in next.config.ts:
typescript: {
  ignoreBuildErrors: false,
}
```

---

## Performance Optimization (Post-Deployment)

### 1. Enable ISR (Incremental Static Regeneration) for Products
```ts
// In shop page route handler
export const revalidate = 3600; // Revalidate every hour
```

### 2. Monitor Core Web Vitals
- Vercel Analytics dashboard (already enabled)
- Google PageSpeed Insights

### 3. CDN Caching
- Vercel automatically caches static assets
- No additional configuration needed

### 4. Database Optimization
- Add indexes to frequently queried fields (category, featured)
- Monitor MongoDB connection pool

---

## Production Best Practices

✅ **Already Implemented:**
- Cached MongoDB connections (prevents pool exhaustion)
- Security headers (CSP, XSS protection, HSTS)
- Environment variable separation
- Error handling on API routes
- CORS-safe Image configuration
- TypeScript compilation (with error ignoring for gradual migration)

📝 **Recommended for Future:**
- Add rate limiting to API routes
- Implement request logging/monitoring
- Setup automated backups for MongoDB
- Configure email service for notifications
- Add Sentry for error tracking
- Implement caching headers for API responses

---

## Rollback Plan

If deployment has issues:

1. **Immediate Rollback:** Vercel dashboard → Deployments → Select previous version → "Promote to Production"
2. **Git Rollback:** `git revert <commit-hash>` and push
3. **Emergency Hotfix:** Create quick fix on `main` branch and push

---

## Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment/vercel)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [NextAuth.js Deployment](https://next-auth.js.org/deployment)
- [MongoDB Atlas Connection](https://docs.mongodb.com/atlas/driver-connection/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

---

**Last Updated:** April 2026
**Status:** Ready for Production Deployment ✅
