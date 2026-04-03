# Design Review Results: Home Page (`/`)

**Review Date**: 2026-04-01  
**Route**: `/` — Zestora Home Page  
**Benchmark**: https://zestora-1.onrender.com/ (live deployment)  
**Focus Areas**: Visual Design, UX/Usability, Responsive/Mobile, Accessibility, Micro-interactions/Motion, Consistency, Performance

---

## Summary

The home page is visually polished with a strong brand identity — warm cream-and-saffron palette, beautiful spice photography, and compelling typography. However, it suffers from **catastrophic Web Vital scores** (FCP/LCP both at ~11.6s, TTFB ~10.8s) caused primarily by forcing a `"use client"` root on the entire page, preventing any Server-Side Rendering benefits. There are also **34 WCAG AA accessibility violations** confirmed by the automated audit — spanning missing button labels, color contrast failures across the primary saffron brand color, and unlabelled interactive links.

---

## Web Vitals (Live Measurement)

| Metric | Measured | Threshold (Good) | Status |
|---|---|---|---|
| TTFB | 10,789ms | < 800ms | 🔴 Critical |
| FCP | 11,652ms | < 1,800ms | 🔴 Critical |
| LCP | 11,652ms | < 2,500ms | 🔴 Critical |
| INP | 664ms | < 200ms | 🔴 Critical |
| TBT | 62ms | < 200ms | ✅ Good |
| CLS | 0.003 | < 0.1 | ✅ Good |
| Page Size (fully loaded) | ~2.9MB | — | 🟡 Heavy |

---

## Issues

| # | Issue | Criticality | Category | Location |
|---|---|---|---|---|
| 1 | **Entire page is `"use client"`** — prevents all SSR/RSC benefits; every byte of JS ships to the client before paint, causing FCP/LCP/TTFB to all spike above 10s | 🔴 Critical | Performance | `src/app/page.tsx:1` |
| 2 | **TTFB ~10.8s** — MongoDB cold-start connection on each request blocks initial server response; consider connection pooling, caching, or edge-cached static rendering for the home page | 🔴 Critical | Performance | `src/lib/mongodb.ts` |
| 3 | **FeaturedSection fetches via raw `useEffect` + `fetch()`** — no loading state, no error state, no deduplication; TanStack Query is already installed but unused here | 🔴 Critical | Performance | `src/app/page.tsx:199-206` |
| 4 | **9 wishlist buttons have no accessible name** (WCAG 4.1.2, axe: `button-name` critical) — screen readers announce them as "button" with no context; add `aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}` | 🔴 Critical | Accessibility | `src/components/ui/ProductCard.tsx:58-66` |
| 5 | **Wishlist `<Link>` in Navbar has no accessible text** (WCAG 2.4.4, axe: `link-name` serious) — icon-only link; add `aria-label="Wishlist"` | 🔴 Critical | Accessibility | `src/components/layout/Navbar.tsx:79-85` |
| 6 | **Account `<Link>` in Navbar has no accessible text** (WCAG 2.4.4) — add `aria-label="Account"` or `aria-label="Sign in"` | 🔴 Critical | Accessibility | `src/components/layout/Navbar.tsx:88-90` |
| 7 | **4 social media icon links in Footer have no accessible text** (WCAG 2.4.4, axe: `link-name` serious) — add `aria-label="Follow us on Instagram"` etc. | 🔴 Critical | Accessibility | `src/components/layout/Footer.tsx:60-73` |
| 8 | **FloatingIslandNav links have no accessible text** (axe: `link-name` serious) — all 4 icon-only navigation links missing `aria-label` | 🔴 Critical | Accessibility | `src/components/layout/FloatingIslandNav.tsx:22` |
| 9 | **CartSidebar close button has no accessible name** (axe: `button-name` critical) | 🔴 Critical | Accessibility | `src/components/layout/CartSidebar.tsx:37` |
| 10 | **`#C65A00` saffron on white (#ffffff) = 4.31:1** — fails WCAG AA (requires 4.5:1). Affects: all price tags, "Shop Now" button, "Bestseller" badge, category labels, "Subscribe" button, "Explore All Spices" link (8+ elements) | 🔴 Critical | Accessibility | `src/components/ui/ProductCard.tsx:41,84,107` · `src/app/page.tsx:114,235` · `src/components/layout/Footer.tsx:34` |
| 11 | **`#B09070` on white (#ffffff) = 2.97:1** — severely fails WCAG AA; affects all original/strikethrough price text across every product card | 🟠 High | Accessibility | `src/components/ui/ProductCard.tsx:109` |
| 12 | **`bg-green-600` (#00a63e) with white text at 10px = 3.21:1** — fails WCAG AA; affects all discount percentage badges | 🟠 High | Accessibility | `src/components/ui/ProductCard.tsx:51` |
| 13 | **`#C65A00` on cream (#FFF7E6 / #F5E6C8) = 4.05–3.5:1** — fails WCAG AA; affects section eyebrow labels ("Handpicked For You", "What Our Customers Say") and testimonial product badges | 🟠 High | Accessibility | `src/app/page.tsx:210,342,380` |
| 14 | **Footer copyright and legal links at `text-white/30` on `#2B1B12` = 2.68:1** — fails WCAG AA for small text | 🟠 High | Accessibility | `src/components/layout/Footer.tsx:152,157` |
| 15 | **Newsletter email `<input>` has no `<label>`** — visually uses `placeholder` only; screen readers can't identify the field purpose (WCAG 1.3.1) | 🟠 High | Accessibility | `src/components/layout/Footer.tsx:27-32` |
| 16 | **Two `<nav>` landmarks with no distinguishing labels** — `<nav>` in Navbar and the Footer's link list are not differentiated; add `aria-label="Main navigation"` and `aria-label="Footer navigation"` | 🟡 Medium | Accessibility | `src/components/layout/Navbar.tsx:52` · `src/components/layout/Footer.tsx:48` |
| 17 | **Star ratings are decorative icons with no screen-reader text** — neither the score value nor the review count is announced as a rating; wrap in `<span aria-label="4.5 out of 5 stars">` | 🟡 Medium | Accessibility | `src/components/ui/ProductCard.tsx:95-102` · `src/app/page.tsx:361-364` |
| 18 | **No loading skeleton for Featured Products grid** — when the API call takes >500ms, users see a blank white grid area; add `<Skeleton>` components (already installed via shadcn) while `featuredProducts.length === 0` | 🟠 High | UX/Usability | `src/app/page.tsx:222-231` |
| 19 | **`<Play>` icon on "Our Story" CTA is misleading** — implies video playback; the link navigates to `/about`; replace with `<Book>` or `<ArrowRight>` | 🟡 Medium | UX/Usability | `src/app/page.tsx:123` |
| 20 | **FloatingIslandNav overlaps product cards and page content on mobile** — confirmed visually; the fixed dark pill sits over scrollable content at the bottom of the viewport with no offset applied to page body | 🟠 High | Responsive/Mobile | `src/components/layout/FloatingIslandNav.tsx` · `src/app/layout.tsx` |
| 21 | **Product card category labels show "DAILY GROCERIES" for all 8 featured items** — likely a data quality issue; visually repetitive and loses the category differentiation value on the home page | 🟡 Medium | UX/Usability | `src/app/page.tsx:222` · `src/data/products.ts` |
| 22 | **`data/products.ts` is 7,262 lines** — if this file is imported at build time and bundled, it adds significant JS weight; consider moving to a database-only fetch (already using MongoDB) and removing this static file from the client bundle | 🟠 High | Performance | `src/data/products.ts` |
| 23 | **Navbar scroll listener has no debounce or throttle** — `window.addEventListener("scroll", handleScroll)` fires on every scroll event at 60fps causing excessive setState calls | 🟡 Medium | Performance | `src/components/layout/Navbar.tsx:32-34` |
| 24 | **`Footer` marked `"use client"` unnecessarily** — the footer has no client-side state (the `onSubmit={(e) => e.preventDefault()}` doesn't require it); converting to a server component reduces JS bundle | 🟡 Medium | Performance | `src/components/layout/Footer.tsx:1` |
| 25 | **`nextjs-portal { display: none !important }` hides the Next.js error overlay** — masks hydration and runtime errors in development; remove this rule (currently there IS a hydration mismatch on the page that this is suppressing) | 🟠 High | Performance | `src/app/globals.css:183-185` |
| 26 | **Hydration mismatch error in console** — `page.tsx` is `"use client"` but there's a server/client attribute mismatch (likely from `Counter` or `useEffect`-driven state that differs between SSR and CSR) — masked by the `nextjs-portal` CSS rule above | 🟠 High | Performance | `src/app/page.tsx:30-49` |
| 27 | **`icon.png` returning 500 Internal Server Error** — confirmed in console; the PWA manifest or metadata icon is broken | 🟡 Medium | Performance | `public/icon.png` · `src/app/layout.tsx:23` |
| 28 | **Google site verification is a placeholder** — `"your-google-site-verification-code"` in production metadata; either add real token or remove | 🟡 Medium | Performance | `src/app/layout.tsx:58` |
| 29 | **BentoGridFeatures uses `#D97706` amber** instead of brand gold `#D4AF37` — different enough to be noticeable; the spinning icon and GPS pulse are amber-orange while the rest of the page uses warm gold | 🟡 Medium | Consistency | `src/components/ui/BentoGridFeatures.tsx:26,49,77` |
| 30 | **BentoGridFeatures dark theme (`#0A0A0A`) clashes with warm cream brand palette** — the section abruptly switches to a futuristic dark mode aesthetic inconsistent with the organic, farm-sourced brand identity established everywhere else | 🟡 Medium | Visual Design | `src/components/ui/BentoGridFeatures.tsx:16,43,74` |
| 31 | **Pervasive hard-coded hex colors throughout all components** instead of CSS variables — `text-[#C65A00]`, `bg-[#2B1B12]`, `text-[#D4AF37]` repeated 50+ times; CSS variables `var(--primary)`, `var(--secondary)`, `var(--accent)` already defined in `globals.css` and should be used | 🟡 Medium | Consistency | `src/app/page.tsx` · `src/components/layout/Navbar.tsx` · `src/components/layout/Footer.tsx` · `src/components/ui/ProductCard.tsx` |
| 32 | **Two conflicting animation systems** — CSS custom keyframes (`fadeInUp`, `scaleIn`, etc. with custom `useInView` hook) used in `page.tsx`, while `BentoGridFeatures.tsx` uses Framer Motion `motion.div` with `whileInView`; standardize on Framer Motion (already installed) | 🟡 Medium | Consistency | `src/app/globals.css:107-180` · `src/app/page.tsx:15-26` · `src/components/ui/BentoGridFeatures.tsx` |
| 33 | **Custom `useInView` hook re-implements what Framer Motion already provides** — the hook, `Counter` animation component, and manual CSS transitions are all redundant given Framer Motion is a dependency; the custom hook won't respect `prefers-reduced-motion` either | 🟡 Medium | Micro-interactions | `src/app/page.tsx:15-50` |
| 34 | **No `prefers-reduced-motion` support** — neither the custom CSS animations nor the Framer Motion components check for this media query; all scroll-triggered and looping animations (GPS compass spin, milling circles) play unconditionally | 🟡 Medium | Accessibility | `src/app/globals.css:155-175` · `src/components/ui/BentoGridFeatures.tsx:25,89` |
| 35 | **`"No spam. Unsubscribe anytime."` footer text at `text-white/40` = 3.74:1** — fails WCAG AA for small text | ⚪ Low | Accessibility | `src/components/layout/Footer.tsx:41` |
| 36 | **All sub-sections defined as functions inside `page.tsx`** (`FeaturedSection`, `CategoriesSection`, `BrandStorySection`, `TestimonialsSection`) — prevents independent code-splitting and makes the file hard to navigate; move to `src/components/home/` | ⚪ Low | Consistency | `src/app/page.tsx:195-391` |

---

## Criticality Legend

- 🔴 **Critical**: Breaks functionality, violates WCAG A/AA, or causes page load > 5× the acceptable threshold
- 🟠 **High**: Significantly impacts user experience, WCAG compliance, or meaningful performance degradation
- 🟡 **Medium**: Noticeable issue that should be addressed in the next sprint
- ⚪ **Low**: Nice-to-have improvement or developer experience concern

---

## Next Steps (Recommended Priority Order)

### Sprint 1 — Critical Fixes
1. **Remove `"use client"` from `page.tsx`** — convert `FeaturedSection` to an RSC with `async/await`, use TanStack Query for client components that need it
2. **Fix all accessibility violations** — add `aria-label` to all icon-only buttons and links (Issues 4–9, 16); fix color contrast failures (Issues 10–14)
3. **Add product grid loading skeleton** using shadcn `<Skeleton>` component (Issue 18)
4. **Remove `nextjs-portal { display: none }` and fix the hydration mismatch** (Issues 25–26)

### Sprint 2 — High Impact
5. **Replace original price color `#B09070`** with a darker shade (e.g., `#8B6B4A`) to pass contrast (Issue 11)
6. **Fix footer newsletter form** — add `<label>` or `aria-label` to input (Issue 15)
7. **Add `pb-16` or equivalent** to page body to prevent FloatingIslandNav overlapping content on mobile (Issue 20)
8. **Throttle Navbar scroll listener** using `requestAnimationFrame` or lodash throttle (Issue 23)
9. **Fix icon.png 500 error** (Issue 27)

### Sprint 3 — Polish
10. **Migrate all animations to Framer Motion** with `prefers-reduced-motion` support (Issues 32–34)
11. **Replace hard-coded hex colors** with CSS variable utilities (`text-primary`, `bg-secondary`, etc.) across all components (Issue 31)
12. **Align BentoGridFeatures** color and theme with brand palette (Issues 29–30)
13. **Move home page sections** to `src/components/home/` directory (Issue 36)
