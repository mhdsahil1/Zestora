"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
      
      // Basic non-invasive page view tracking
      console.log(`[Analytics] Page View: ${url}`);
      
      // In a real application, you would send this to Google Analytics, Mixpanel, Fathom, etc.
      // Example:
      // if (typeof window.gtag === 'function') {
      //   window.gtag('event', 'page_view', { page_path: url });
      // }
    }
  }, [pathname, searchParams]);
}
