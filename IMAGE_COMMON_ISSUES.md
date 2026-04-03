# Next.js Image Loading - Common Issues & Solutions

## Quick Diagnosis

Use this decision tree to find your issue:

```
Are images showing?
├─ YES → Go to "Images Display but Are Blurry/Slow"
└─ NO → Are there any errors in console?
    ├─ "hostname is not configured" → Issue #1
    ├─ "Image with fill but no relative parent" → Issue #3
    ├─ No errors but images blank → Issue #4
    └─ 404/403 errors → Issue #5
```

---

## Issue #1: "Image hostname is not configured"

### Error Message
```
Error: Image hostname "example.com" is not configured. 
Please update remotePatterns in next.config.js.
```

### Root Cause
The image domain is not whitelisted in `next.config.ts`

### Solution

**Step 1:** Identify the image source
```bash
# In browser DevTools → Network tab, find image request
# Check the "Response" tab for the actual URL
# Example: https://res.cloudinary.com/my-cloud/image/upload/...
```

**Step 2:** Update next.config.ts
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'your-custom-domain.com' },  // ADD THIS LINE
      { protocol: 'https', hostname: '*.vusercontent.net' },
    ],
  },
};
```

**Step 3:** Restart dev server
```bash
# Stop: Ctrl+C
npm run dev
```

**Step 4:** Clear browser cache
```
DevTools → Application → Cache → Clear
OR: Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
```

---

## Issue #2: "Image with src="/path/to/image" does not have height or width"

### Error Message
```
Warning: Image with src="/path/to/image" does not have 
height or width properties set. Relative layout is not 
supported for images when fill property is omitted.
```

### Root Cause
Using `<Image>` without `fill` prop but also without explicit `width/height`

### Solution

**Option A: Use `fill` prop (for variable sizes)**
```typescript
// ProductCard.tsx
<div className="relative aspect-square overflow-hidden">
  <Image
    src={product.image}
    alt={product.name}
    fill                    // ← ADD THIS
    className="object-cover"
    sizes="(max-width: 640px) 50vw, 25vw"
  />
</div>
```

**Option B: Use explicit dimensions (for fixed sizes)**
```typescript
<Image
  src={product.image}
  alt={product.name}
  width={300}
  height={300}
  className="object-cover"
/>
```

---

## Issue #3: "Image with fill has no relative parent"

### Error Message
```
Error: Image with fill has no relative parent. 
Please ensure the parent is relative before using fill.
```

### Root Cause
`<Image fill />` requires parent with `position: relative`

### Solution

```typescript
// ❌ WRONG
<div>
  <Image src={url} fill />  // No relative parent!
</div>

// ✓ CORRECT
<div className="relative">
  <Image src={url} fill />  // Parent has relative positioning
</div>

// ✓ ALSO CORRECT (Tailwind)
<div className="relative w-full h-64">
  <Image src={url} fill className="object-cover" />
</div>
```

---

## Issue #4: Images Don't Load (No Errors)

### Symptoms
- Images don't appear on page
- No console errors
- Network tab shows 200 status
- But `<img>` tag has invalid src

### Root Cause
Image URL in database is corrupted or missing

### Solution

**Step 1:** Check database directly
```bash
# Option A: MongoDB Atlas GUI
# Database → products → View documents
# Search for one product and check 'image' field
# Should see full HTTPS URL

# Option B: Via mongosh
mongosh "mongodb+srv://..."
use zestora
db.products.findOne()
// Check that 'image' field contains full URL like:
// "https://res.cloudinary.com/..."
```

**Step 2:** Check API response
```bash
curl http://localhost:3000/api/products | jq '.data[0].image'
# Should output: "https://res.cloudinary.com/..."
# NOT: "product.jpg" or empty
```

**Step 3:** If URLs are corrupted, re-upload images
```bash
# Using Cloudinary API or dashboard:
# 1. Delete old product images
# 2. Upload fresh images
# 3. Update database with new URLs
```

---

## Issue #5: 404 or 403 Errors on Images

### Error Messages
```
❌ 404 Not Found - Image doesn't exist
❌ 403 Forbidden - CORS or permission issue
```

### Root Cause
Image URL is incorrect or service is blocking access

### Solution

**For 404 Errors:**

```bash
# Test URL directly
curl -I "https://res.cloudinary.com/cloud/image/upload/abc123.jpg"
# Response should be: HTTP/2 200

# If 404:
# 1. Check Cloudinary dashboard - image missing?
# 2. Check URL format - all parameters correct?
# 3. Check API response - is image URL complete?
```

**For 403 Errors:**

```bash
# Check Cloudinary CORS settings
# 1. Cloudinary Dashboard → Settings → Security
# 2. "Restricted Media Distributions" - clear or add your domain
# 3. "Fetch media from external systems" - Enable if needed
# 4. Save and wait 5 minutes for cache clear
```

**For Vercel Production:**
```typescript
// next.config.ts
images: {
  remotePatterns: [
    // Add ALL domains that serve images
    { protocol: 'https', hostname: 'res.cloudinary.com' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: '*.vusercontent.net' },
  ],
}
```

---

## Issue #6: Images Load Slowly

### Symptoms
- Images appear with delay (>2-3 seconds)
- Especially on slow networks
- Works fine on desktop, slow on mobile

### Root Cause
Images not optimized or wrong sizes

### Solution

**Step 1:** Enable Cloudinary optimization
```typescript
// When generating image URLs, add transformation:
image: "https://res.cloudinary.com/cloud/image/upload/q_auto:best,f_auto,w_500/v1/product.jpg"
//                                                     ↑ Quality auto, format auto, width 500
```

**Step 2:** Update sizes prop in ProductCard
```typescript
<Image
  src={product.image}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  // Tells Next.js which image sizes will be used:
  // - Mobile (640px): full width (100vw)
  // - Tablet: half width (50vw)
  // - Desktop: quarter width (25vw)
/>
```

**Step 3:** Check network in DevTools
```
DevTools → Network tab → Images
Look at the responsive images being downloaded:
- Should see multiple image sizes
- Mobile should get smaller images
- Desktop should get larger images
```

---

## Issue #7: Image Format Not Optimized

### Symptoms
- Images are large files (>1MB)
- Not converting to WebP on modern browsers
- Using PNG instead of JPEG

### Root Cause
Cloudinary format not set to auto

### Solution

```typescript
// Add f_auto to Cloudinary URLs
// Before:
// "https://res.cloudinary.com/cloud/image/upload/v1/product.jpg"

// After:
// "https://res.cloudinary.com/cloud/image/upload/f_auto/v1/product.jpg"

// In API response, update all image URLs:
const optimizedUrl = url.replace(
  '/image/upload/',
  '/image/upload/f_auto,q_auto:best,'
);
```

Or update at upload time in admin panel.

---

## Issue #8: Images Stretch or Distort

### Symptoms
- Images appear stretched or squashed
- Aspect ratio wrong
- Works on desktop, broken on mobile

### Root Cause
Missing `aspect-square` or wrong CSS

### Solution

```typescript
// ProductCard.tsx - Ensure container has aspect ratio
<div className="relative aspect-square overflow-hidden">
  {/* aspect-square = 1:1 ratio */}
  {/* overflow-hidden = clip image to container */}
  <Image
    src={product.image}
    fill
    className="object-cover"  // ← Important: keeps aspect ratio
  />
</div>
```

---

## Issue #9: Images Flash or Flicker While Loading

### Symptoms
- Images appear to flash/reload
- Flickering during page navigation
- Image blinks when scrolling

### Root Cause
Missing blur placeholder or wrong loading strategy

### Solution

**Add blur placeholder:**
```typescript
// Get a small base64 blur image:
import { Blurhash } from "blurhash-react";

<Image
  src={product.image}
  alt={product.name}
  fill
  placeholder="blur"
  blurDataURL="data:image/svg+xml,%3Csvg..." // tiny placeholder
/>
```

Or use static blur:
```typescript
<Image
  src={product.image}
  alt={product.name}
  fill
  className="object-cover"
/>
// Next.js automatically handles placeholder on newer versions
```

---

## Issue #10: Production Images Load on Vercel but Not Local

### Symptoms
- `npm run dev` - images broken
- `npm run start` (production build) - images work
- Or vice versa

### Root Cause
Development vs production configuration difference

### Solution

**Option 1: Check NODE_ENV**
```typescript
// next.config.ts
images: {
  remotePatterns: [
    { 
      protocol: 'https', 
      hostname: 'res.cloudinary.com',
      pathname: '/**', // Add this for production
    },
  ],
}
```

**Option 2: Disable image optimization (dev only)**
```typescript
images: {
  unoptimized: process.env.NODE_ENV === 'development', // Fast dev builds
}
```

**Option 3: Use environment-specific config**
```typescript
images: {
  remotePatterns: [
    ...basePatterns,
    ...(process.env.NODE_ENV === 'production' 
      ? [{ protocol: 'https', hostname: 'prod-images.example.com' }]
      : [{ protocol: 'https', hostname: '*.localhost' }]
    ),
  ],
}
```

---

## Issue #11: "Unoptimized" Images on Server

### Error in Logs
```
Warning: A static image path needs valid dimensions
Image Optimization API currently cannot support this image
```

### Root Cause
Using local file path instead of remote URL, or SVG without size

### Solution

**For local images:**
```typescript
// ❌ Wrong - creates server errors
<Image src="/public/logo.png" width={100} height={100} />

// ✓ Correct - import static
import logoImage from '@/public/logo.png'
<Image src={logoImage} alt="logo" />
// Width/height auto-detected from imported image
```

**For remote images:**
```typescript
// ✓ Correct
<Image 
  src="https://res.cloudinary.com/..."
  width={300}
  height={300}
  alt="product"
/>
```

---

## Issue #12: Memory Leak in Image Optimization

### Symptoms
- High server memory usage
- Server crashes with "out of memory"
- Multiple image optimization processes running

### Root Cause
Image optimization queue built up

### Solution

**Short term:**
```bash
# Restart dev server
npm run dev

# Or restart production
vercel deployments
vercel rollback
```

**Long term:**
```typescript
// next.config.ts - Add optimization limit
images: {
  remotePatterns: [...],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Limit sizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256], // Limit sizes
}
```

---

## Diagnostic Commands

Use these commands to debug image issues:

```bash
# 1. Check next.config.ts syntax
node -c next.config.ts

# 2. Build for production (catches most errors)
npm run build

# 3. Check for broken image URLs
grep -r "image:" src/ | grep -v "https://"

# 4. Test API
curl http://localhost:3000/api/products | jq '.data[0].image'

# 5. Test Cloudinary URL directly
curl -I "https://res.cloudinary.com/cloud/image/upload/..."

# 6. Monitor Next.js build output
npm run dev -- --debug
```

---

## Summary Table

| Issue | Error | Fix | Time |
|-------|-------|-----|------|
| Domain not whitelisted | "hostname is not configured" | Add to remotePatterns | 2 min |
| Missing fill + dimensions | "does not have height/width" | Add `fill` prop | 1 min |
| No relative parent | "fill has no relative parent" | Add `relative` class | 1 min |
| Bad image URL | No error, blank image | Check database/API | 5 min |
| Domain blocked | 403 Forbidden | Update Cloudinary CORS | 5 min |
| Slow loading | Images take >2s | Add Cloudinary optimization | 10 min |
| Not optimized | Large file size | Add `f_auto,q_auto` | 10 min |
| Stretching | Wrong aspect ratio | Add `aspect-square` | 2 min |
| Production only | Works local, breaks on Vercel | Check environment variables | 10 min |

---

## When All Else Fails

1. **Clear everything:**
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   npm run dev
   ```

2. **Check recent changes:**
   ```bash
   git log --oneline -10
   git diff HEAD~1
   ```

3. **Revert last change:**
   ```bash
   git revert HEAD
   npm run dev
   ```

4. **Ask for help:**
   - Include: Screenshots, console errors, API response
   - Share: next.config.ts, ProductCard.tsx, API route
   - Test: URL directly, database contents, API response

---

## Helpful Resources

- Next.js Image Docs: https://nextjs.org/docs/app/api-reference/components/image
- Cloudinary Console: https://cloudinary.com/console
- MongoDB Atlas: https://cloud.mongodb.com
- Vercel Deployment: https://vercel.com/docs
