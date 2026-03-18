import React from "react";
import ProductClient from "./ProductClient";
import { products } from "@/data/products";

// Required for next.js static export of dynamic routes
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function Page() {
  return <ProductClient />;
}
