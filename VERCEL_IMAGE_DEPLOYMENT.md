# Vercel Production Deployment - Image Configuration

## Pre-Deployment Checklist

### 1. Code Configuration ✓

```typescript
// next.config.ts - VERIFIED
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: '*.vusercontent.net' },
  ],
}
```

**Action Required:** No changes needed - config is correct.

---

### 2. MongoDB Data Validation

Before deploying, verify all images in database use HTTPS URLs:

```javascript
// Run in MongoDB Atlas GUI or via mongosh
db.products.find({ image: { $regex: "^http://" } }).count()
// Result should be: 0 (no HTTP URLs)

// Check for valid Cloudinary URLs
db.products.find({ image: { $regex: "res.cloudinary.com" } }).count()
// Should show number of Cloudinary-hosted images
```

**Action Required:**
- [ ] All image URLs start with `https://`
- [ ] All Cloudinary URLs use `res.cloudinary.com`
- [ ] Test one image URL in browser - should load

---

### 3. Vercel Environment Variables

Add these to your Vercel project settings:

**Path:** Vercel Dashboard → Project Settings → Environment Variables

```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/zestora?ssl=true&...
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Action Required:**
- [ ] Set all production environment variables
- [ ] Test MongoDB connection from Vercel IP range
- [ ] Cloudinary credentials match image URLs in database

---

### 4. MongoDB Atlas Security

Add Vercel deployment IP to whitelist:

**Path:** MongoDB Atlas → Network Access → IP Whitelist

**Add these:**
```
0.0.0.0/0  (temporary for testing)
// OR specific Vercel regions:
// https://vercel.com/docs/edge-network/regions
```

**Action Required:**
- [ ] MongoDB accessible from Vercel IPs
- [ ] Test connection: `npm run build` locally first
- [ ] Check Atlas logs for connection attempts

---

## Deployment Steps

### Step 1: Test Locally First

```bash
# Build locally to catch issues early
npm run build

# Start production build locally
npm run start

# In browser, verify:
# - Products load from API
# - Images display correctly
# - No console errors about images
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "fix: correct image configuration for production"
git push origin main
```

### Step 3: Vercel Auto-Deploy

Vercel automatically deploys on push to main branch.

**Monitor deployment:**
- Vercel Dashboard → Deployments
- Watch for build errors
- Check deployment logs for image-related warnings

### Step 4: Test Production Domain

```bash
# After deployment succeeds, test:
https://your-project.vercel.app/shop

# Check:
# 1. Products load
# 2. Images display
# 3. DevTools Network tab shows 200 for images
# 4. No 403/404 errors for images
```

---

## Troubleshooting Production Images

### Issue: 403 Forbidden on Images

**Cause:** Cloudinary CORS or domain restriction

**Fix:**
1. Log into Cloudinary Dashboard
2. Settings → Security → Restricted domains (clear or add your domain)
3. Settings → CORS → Enable cross-origin requests

### Issue: Images Load Slowly

**Cause:** Cloudinary optimization not enabled

**Fix:** Add transformation to image URLs
```typescript
// Modify API response or Cloudinary URL:
image: "https://res.cloudinary.com/{cloud}/image/upload/q_auto:best,f_auto,w_500/v1/product.jpg"
```

### Issue: Wrong Image Format on Mobile

**Cause:** `sizes` prop doesn't match responsive design

**Fix:** Update ProductCard component
```typescript
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
```

### Issue: 404 Not Found on Images

**Cause:** Image doesn't exist or URL is wrong

**Fix:**
1. Test URL directly in browser
2. Check Cloudinary dashboard for image
3. Verify URL format matches MongoDB data
4. Download and re-upload broken images

---

## Post-Deployment Verification

### Test Suite

```bash
# 1. Visual Check
# Visit: https://your-domain.com/shop
# Look at 3+ products - all should have images

# 2. Network Performance
# Open DevTools → Network tab
# Filter by "image"
# Check:
#   - Status: All 200
#   - Size: Optimized (typically <100KB per image)
#   - Time: <1s per image
#   - Format: WebP (if supported)

# 3. Responsive Check
# Test on:
#   - Desktop (1920x1080)
#   - Tablet (768x1024)
#   - Mobile (375x667)
# All images should display correctly at each size

# 4. API Check
# Test: https://your-domain.com/api/products?featured=true
# Verify JSON response includes complete image URLs
```

### Automated Monitoring

Set up these checks:

1. **Vercel Analytics**
   - Vercel Dashboard → Analytics
   - Monitor image load times
   - Set alerts for failures

2. **Cloudinary Monitoring**
   - Cloudinary Dashboard → Usage
   - Monitor bandwidth usage
   - Check for 404 errors

3. **Log Monitoring**
   - Vercel → Project → Logs
   - Search for "image" or "404"
   - Watch for repeated failures

---

## Performance Optimization

### Image Size Optimization

Current setup automatically optimizes via Next.js:
- WebP format for modern browsers
- Responsive sizing based on device
- On-demand optimization (no pre-processing needed)

**To further optimize:**

```typescript
// In next.config.ts, add quality setting:
images: {
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
}
```

### CDN Caching

Next.js automatically caches optimized images. Vercel serves from edge:
- First request: Generated and cached
- Subsequent requests: Served from cache (instant)

No configuration needed - works automatically.

---

## Rollback Plan

If images break after deployment:

### Immediate Rollback
```bash
# Revert last commit
git revert HEAD
git push origin main

# Vercel auto-deploys - images should work again
```

### Check Vercel Logs
```
Vercel Dashboard → Logs → Production
Look for:
- 500 errors
- "remotePatterns" errors
- MongoDB connection failures
```

### If Still Broken

1. Check `next.config.ts` syntax
2. Verify environment variables set in Vercel
3. Test API: `https://your-domain.com/api/products`
4. Check Cloudinary dashboard for issues

---

## Long-term Maintenance

### Weekly Checks
- [ ] Sample 5 random products - do they load?
- [ ] Check Vercel analytics - any image errors?
- [ ] Check Cloudinary usage - within quota?

### Monthly Reviews
- [ ] Analyze image performance metrics
- [ ] Check for unused images in Cloudinary
- [ ] Review optimization opportunities

### Quarterly Updates
- [ ] Update Next.js version (if major release)
- [ ] Review Cloudinary plan (growth/needs)
- [ ] Audit MongoDB storage (remove unused images)

---

## Success Criteria

✓ All images load on production domain
✓ Images load within 1-2 seconds
✓ No 403/404 errors in logs
✓ Images display correctly on all devices
✓ Cloudinary bandwidth usage is reasonable
✓ Vercel build time < 2 minutes

---

## Emergency Contacts

If deployment fails:

1. **Vercel Support**: https://vercel.com/help
2. **Cloudinary Support**: https://support.cloudinary.com
3. **MongoDB Support**: https://www.mongodb.com/support
4. **NextAuth Docs**: https://next-auth.js.org

---

## Summary

Your project is **production-ready** for Vercel deployment:

✓ Images configured correctly
✓ Remote patterns whitelist set
✓ API returns proper image URLs
✓ Frontend components optimized
✓ No blocking issues identified

**Next Action:** Set environment variables in Vercel and deploy!
