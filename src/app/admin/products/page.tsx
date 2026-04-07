"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import {
  Loader2,
  RefreshCw,
  Plus,
  Trash2,
  Star,
  Package,
  Search,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

interface ProductRow {
  _id: string;
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  featured: boolean;
  inStock: boolean;
  isNew: boolean;
  isBestseller: boolean;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<ProductRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [togglingSlug, setTogglingSlug] = useState<string | null>(null);
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [editingPriceSlug, setEditingPriceSlug] = useState<string | null>(null);
  const [editingPriceValue, setEditingPriceValue] = useState<string>("");

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setProducts(data.data);
      }
    } catch {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ── Toggle field ───────────────────────────────────────────────────────

  async function handleToggle(
    slug: string,
    field: "featured" | "inStock" | "isNew" | "isBestseller",
    currentValue: boolean
  ) {
    setTogglingSlug(slug);
    try {
      const res = await fetch(`/api/products/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: !currentValue }),
      });

      if (!res.ok) throw new Error("Update failed");

      setProducts((prev) =>
        prev.map((p) =>
          p.slug === slug ? { ...p, [field]: !currentValue } : p
        )
      );
      toast.success(`Product ${field} updated`);
    } catch {
      toast.error("Failed to update product");
    } finally {
      setTogglingSlug(null);
    }
  }

  // ── Update Price ───────────────────────────────────────────────────────

  async function handleUpdatePrice(slug: string, currentPrice: number) {
    if (editingPriceSlug === slug) {
      const newPrice = parseFloat(editingPriceValue);
      if (isNaN(newPrice) || newPrice <= 0) {
        toast.error("Invalid price");
        return;
      }
      if (newPrice === currentPrice) {
        setEditingPriceSlug(null);
        return;
      }

      setTogglingSlug(slug);
      try {
        const res = await fetch(`/api/products/${slug}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: newPrice }),
        });
        if (!res.ok) throw new Error("Update failed");

        setProducts((prev) =>
          prev.map((p) => (p.slug === slug ? { ...p, price: newPrice } : p))
        );
        toast.success("Price updated");
        setEditingPriceSlug(null);
      } catch {
        toast.error("Failed to update price");
      } finally {
        setTogglingSlug(null);
      }
    } else {
      setEditingPriceSlug(slug);
      setEditingPriceValue(currentPrice.toString());
    }
  }

  // ── Delete ─────────────────────────────────────────────────────────────

  async function handleDelete(slug: string) {
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/products/${slug}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setProducts((prev) => prev.filter((p) => p.slug !== slug));
      toast.success("Product deleted");
      setConfirmDelete(null);
    } catch {
      toast.error("Failed to delete product");
    } finally {
      setDeletingSlug(null);
    }
  }

  // ── Filter ─────────────────────────────────────────────────────────────

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  // ── UI ─────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF7E6] pt-40 flex justify-center">
        <Navbar />
        <Loader2 className="animate-spin text-[#C65A00] w-8 h-8" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#2B1B12] flex items-center gap-2">
              <Package size={28} className="text-[#C65A00]" />
              Manage Products
            </h1>
            <p className="text-sm text-[#7A5C3A] mt-1">
              {products.length} products in the catalog
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard"
              className="text-[#C65A00] font-medium hover:underline text-sm"
            >
              ← Dashboard
            </Link>
            <button
              onClick={fetchProducts}
              className="flex items-center gap-2 px-4 py-2 text-sm text-[#C65A00] font-medium border border-[#E8D5B0] rounded-xl hover:bg-[#F5E6C8] transition-colors"
            >
              <RefreshCw size={16} /> Refresh
            </button>
            <Link
              href="/admin/add-product"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#C65A00] text-white rounded-xl font-semibold text-sm hover:bg-[#a84d00] transition-colors shadow-lg shadow-[#C65A00]/20"
            >
              <Plus size={16} /> Add Product
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A5C3A]/50"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products by name or category..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8D5B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[#FFF7E6]/50 text-[#7A5C3A] text-xs font-semibold border-b border-[#E8D5B0] uppercase tracking-wider">
                <th className="p-4 rounded-tl-2xl">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4 text-center">Stock</th>
                <th className="p-4 text-center">Featured</th>
                <th className="p-4 text-center">New</th>
                <th className="p-4 text-center rounded-tr-2xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8D5B0]">
              {filtered.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-[#FFF7E6]/30 transition-colors"
                >
                  {/* Product info */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#E8D5B0] flex-shrink-0 bg-[#FFF7E6]">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Package
                              size={18}
                              className="text-[#7A5C3A]/30"
                            />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-[#2B1B12] text-sm truncate max-w-[200px]">
                          {product.name}
                        </p>
                        <p className="text-xs text-[#7A5C3A] font-mono">
                          {product.slug}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="p-4">
                    <span className="text-sm text-[#7A5C3A] bg-[#F5E6C8] px-2.5 py-1 rounded-lg">
                      {product.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="p-4">
                    {editingPriceSlug === product.slug ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#2B1B12] font-bold">₹</span>
                        <input
                          type="number"
                          value={editingPriceValue}
                          onChange={(e) => setEditingPriceValue(e.target.value)}
                          className="w-20 px-2 py-1 text-sm border border-[#E8D5B0] rounded focus:outline-none focus:ring-1 focus:ring-[#C65A00]"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleUpdatePrice(product.slug, product.price);
                            if (e.key === 'Escape') setEditingPriceSlug(null);
                          }}
                        />
                        <button
                          onClick={() => handleUpdatePrice(product.slug, product.price)}
                          className="text-white bg-[#C65A00] hover:bg-[#a84d00] px-2 py-1 rounded text-xs font-bold transition-colors shadow-sm"
                          disabled={togglingSlug === product.slug}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingPriceSlug(null)}
                          className="text-[#7A5C3A] hover:bg-gray-100 px-2 py-1 rounded text-xs font-bold transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="group flex flex-col cursor-pointer"
                        onClick={() => {
                          setEditingPriceSlug(product.slug);
                          setEditingPriceValue(product.price.toString());
                        }}
                        title="Click to edit price"
                      >
                        <span className="font-bold text-[#2B1B12] text-sm group-hover:text-[#C65A00] transition-colors inline-flex items-center gap-1.5">
                          ₹{product.price}
                          <svg className="w-3 h-3 text-[#7A5C3A] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#7A5C3A] line-through mt-0.5">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                    )}
                  </td>

                  {/* Stock toggle */}
                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        handleToggle(product.slug, "inStock", product.inStock)
                      }
                      disabled={togglingSlug === product.slug}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                        product.inStock
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      }`}
                    >
                      {togglingSlug === product.slug ? (
                        <Loader2 size={14} className="animate-spin mx-auto" />
                      ) : product.inStock ? (
                        "In Stock"
                      ) : (
                        "Out of Stock"
                      )}
                    </button>
                  </td>

                  {/* Featured toggle */}
                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        handleToggle(
                          product.slug,
                          "featured",
                          product.featured
                        )
                      }
                      disabled={togglingSlug === product.slug}
                      className={`p-2 rounded-lg transition-all ${
                        product.featured
                          ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                    >
                      <Star
                        size={16}
                        fill={product.featured ? "currentColor" : "none"}
                      />
                    </button>
                  </td>

                  {/* New toggle */}
                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        handleToggle(product.slug, "isNew", product.isNew)
                      }
                      disabled={togglingSlug === product.slug}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                        product.isNew
                          ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                    >
                      {product.isNew ? "NEW" : "—"}
                    </button>
                  </td>

                  {/* Delete */}
                  <td className="p-4 text-center">
                    {confirmDelete === product.slug ? (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleDelete(product.slug)}
                          disabled={deletingSlug === product.slug}
                          className="px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-bold hover:bg-red-600 transition-colors"
                        >
                          {deletingSlug === product.slug ? (
                            <Loader2
                              size={14}
                              className="animate-spin mx-auto"
                            />
                          ) : (
                            "Confirm"
                          )}
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmDelete(product.slug)}
                        className="p-2 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-all"
                        title="Delete product"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="p-12 text-center text-[#7A5C3A]">
              {search
                ? "No products match your search."
                : "No products found. Add your first product!"}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
