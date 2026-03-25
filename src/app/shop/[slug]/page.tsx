import React from "react";
import ProductClient from "./ProductClient";
import { Metadata } from "next";
import dbConnect from "@/lib/mongodb";
import ProductModel from "@/models/Product";

async function getProductAndRelated(slug: string) {
  await dbConnect();
  const product = await ProductModel.findOne({ slug }).lean();
  if (!product) return { product: null, related: [] };
  
  const related = await ProductModel.find({ 
    category: product.category, 
    _id: { $ne: product._id } 
  }).limit(4).lean();
  
  // Format mongo _id to string
  const formatDoc = (doc: any) => ({ ...doc, _id: doc._id.toString() });
  
  return { 
    product: formatDoc(product), 
    related: related.map(formatDoc) 
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  await dbConnect();
  const product = await ProductModel.findOne({ slug: params.slug }).lean();
  if (!product) {
    return { title: "Product Not Found | Zestora" };
  }
  return {
    title: `${product.name} | Zestora`,
    description: product.shortDescription || product.description,
    openGraph: {
      title: `${product.name} | Zestora`,
      description: product.shortDescription || product.description,
      images: [product.image],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { product, related } = await getProductAndRelated(params.slug);
  
  if (!product) {
    return <div className="min-h-screen bg-[#FFF7E6] pt-32 text-center text-xl">Product not found.</div>;
  }
  
  return <ProductClient initialProduct={product as any} relatedProducts={related as any} />;
}
