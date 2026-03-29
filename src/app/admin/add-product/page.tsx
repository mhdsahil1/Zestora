"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import {
  Loader2,
  Upload,
  ImagePlus,
  X,
  ArrowLeft,
  Sparkles,
  Package,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────────────

interface ProductFormState {
  name: string;
  slug: string;
  id: string;
  category: string;
  subCategory: string;
  price: string;
  originalPrice: string;
  weight: string;
  origin: string;
  description: string;
  shortDescription: string;
  tags: string;
  featured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  inStock: boolean;
  imageUrl: string;
}

const INITIAL_FORM: ProductFormState = {
  name: "",
  slug: "",
  id: "",
  category: "",
  subCategory: "",
  price: "",
  originalPrice: "",
  weight: "",
  origin: "",
  description: "",
  shortDescription: "",
  tags: "",
  featured: false,
  isNew: false,
  isBestseller: false,
  inStock: true,
  imageUrl: "",
};

const CATEGORIES = [
  "Whole Spices",
  "Ground Spices",
  "Spice Blends",
  "Herbs",
  "Seasonings",
  "Exotic Spices",
  "Organic",
  "Other",
];

// ── Helpers ────────────────────────────────────────────────────────────────

function toSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toId(slug: string) {
  return `${slug}-${Date.now()}`;
}

// ── Component ──────────────────────────────────────────────────────────────

export default function AdminAddProduct() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<ProductFormState>(INITIAL_FORM);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Field handlers ─────────────────────────────────────────────────────

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setForm((p) => ({
        ...p,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setForm((prev) => {
      const next = { ...prev, [name]: value };

      // Auto-generate slug and id from name
      if (name === "name") {
        const slug = toSlug(value);
        next.slug = slug;
        next.id = toId(slug);
      }

      return next;
    });

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  }

  // ── Image upload ───────────────────────────────────────────────────────

  async function handleImageSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Client-side validations
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Only JPEG, PNG, WebP, and GIF.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File too large. Maximum 5MB.");
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));

    // Upload immediately
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("image", file);

      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok || !data.imageUrl) {
        throw new Error(data.error || "Upload failed");
      }

      setForm((p) => ({ ...p, imageUrl: data.imageUrl }));
      toast.success("Image uploaded successfully!");
    } catch (err: any) {
      toast.error(err.message || "Image upload failed");
      setImageFile(null);
      setImagePreview("");
    } finally {
      setUploading(false);
    }
  }

  function removeImage() {
    setImageFile(null);
    setImagePreview("");
    setForm((p) => ({ ...p, imageUrl: "" }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  // ── Validation ─────────────────────────────────────────────────────────

  function validate(): boolean {
    const errs: Record<string, string> = {};

    if (!form.name.trim()) errs.name = "Product name is required";
    if (!form.category) errs.category = "Category is required";
    if (!form.price || Number(form.price) <= 0) errs.price = "Valid price is required";
    if (!form.weight.trim()) errs.weight = "Weight is required";
    if (!form.origin.trim()) errs.origin = "Origin is required";
    if (!form.description.trim() || form.description.length < 10)
      errs.description = "Description must be at least 10 characters";
    if (!form.shortDescription.trim() || form.shortDescription.length < 5)
      errs.shortDescription = "Short description must be at least 5 characters";
    if (!form.imageUrl) errs.image = "Product image is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  // ── Submit ─────────────────────────────────────────────────────────────

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors below");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        slug: form.slug,
        id: form.id,
        category: form.category,
        subCategory: form.subCategory || undefined,
        price: Number(form.price),
        originalPrice: form.originalPrice ? Number(form.originalPrice) : undefined,
        weight: form.weight.trim(),
        image: form.imageUrl,
        images: [form.imageUrl],
        description: form.description.trim(),
        shortDescription: form.shortDescription.trim(),
        origin: form.origin.trim(),
        tags: form.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        featured: form.featured,
        isNew: form.isNew,
        isBestseller: form.isBestseller,
        inStock: form.inStock,
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create product");
      }

      toast.success("Product created successfully!");
      router.push("/admin/products");
    } catch (err: any) {
      toast.error(err.message || "Failed to create product");
    } finally {
      setSubmitting(false);
    }
  }

  // ── UI ─────────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/admin/products"
            className="p-2 rounded-xl bg-white border border-[#E8D5B0] hover:bg-[#F5E6C8] transition-colors"
          >
            <ArrowLeft size={20} className="text-[#7A5C3A]" />
          </Link>
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#2B1B12] flex items-center gap-2">
              <Package size={28} className="text-[#C65A00]" />
              Add New Product
            </h1>
            <p className="text-sm text-[#7A5C3A] mt-1">
              Fill in the details to add a new product to the store
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ── Image Upload Section ────────────────────────────────── */}
          <section className="bg-white rounded-2xl border border-[#E8D5B0] p-6 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2B1B12] mb-4 flex items-center gap-2">
              <ImagePlus size={20} className="text-[#C65A00]" />
              Product Image
            </h2>

            {imagePreview ? (
              <div className="relative w-full max-w-xs mx-auto">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#E8D5B0]">
                  <Image
                    src={imagePreview}
                    alt="Product preview"
                    fill
                    className="object-cover"
                  />
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                      <Loader2 className="animate-spin text-white w-8 h-8" />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X size={14} />
                </button>
                {form.imageUrl && (
                  <p className="text-center text-xs text-green-600 mt-2 font-medium">
                    ✓ Uploaded to Cloudinary
                  </p>
                )}
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-[#E8D5B0] rounded-2xl cursor-pointer hover:border-[#C65A00] hover:bg-[#FFF7E6]/50 transition-all">
                <Upload size={32} className="text-[#C65A00] mb-2" />
                <p className="text-sm font-medium text-[#7A5C3A]">
                  Click to upload product image
                </p>
                <p className="text-xs text-[#7A5C3A]/60 mt-1">
                  JPEG, PNG, WebP or GIF — Max 5MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={handleImageSelect}
                />
              </label>
            )}
            {errors.image && (
              <p className="text-red-500 text-sm mt-2">{errors.image}</p>
            )}
          </section>

          {/* ── Basic Info ──────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl border border-[#E8D5B0] p-6 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2B1B12] mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-[#C65A00]" />
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Kashmir Organic Saffron"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.name ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Slug (auto) */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Slug{" "}
                  <span className="text-xs text-[#7A5C3A]">(auto-generated)</span>
                </label>
                <input
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D5B0] bg-[#FFF7E6]/50 text-[#7A5C3A] focus:outline-none"
                  readOnly
                />
              </div>

              {/* ID (auto) */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Product ID{" "}
                  <span className="text-xs text-[#7A5C3A]">(auto-generated)</span>
                </label>
                <input
                  name="id"
                  value={form.id}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D5B0] bg-[#FFF7E6]/50 text-[#7A5C3A] focus:outline-none"
                  readOnly
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.category ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] transition-all`}
                >
                  <option value="">Select category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                )}
              </div>

              {/* Sub-Category */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Sub-Category{" "}
                  <span className="text-xs text-[#7A5C3A]">(optional)</span>
                </label>
                <input
                  name="subCategory"
                  value={form.subCategory}
                  onChange={handleChange}
                  placeholder="e.g. Premium"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D5B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Price (₹) <span className="text-red-500">*</span>
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. 499"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.price ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all`}
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                )}
              </div>

              {/* Original Price */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Original Price (₹){" "}
                  <span className="text-xs text-[#7A5C3A]">(optional, for strikethrough)</span>
                </label>
                <input
                  name="originalPrice"
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.originalPrice}
                  onChange={handleChange}
                  placeholder="e.g. 699"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D5B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Weight <span className="text-red-500">*</span>
                </label>
                <input
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  placeholder="e.g. 100g"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.weight ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all`}
                />
                {errors.weight && (
                  <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
                )}
              </div>

              {/* Origin */}
              <div>
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Origin <span className="text-red-500">*</span>
                </label>
                <input
                  name="origin"
                  value={form.origin}
                  onChange={handleChange}
                  placeholder="e.g. Kashmir, India"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.origin ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all`}
                />
                {errors.origin && (
                  <p className="text-red-500 text-xs mt-1">{errors.origin}</p>
                )}
              </div>

              {/* Tags */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Tags{" "}
                  <span className="text-xs text-[#7A5C3A]">
                    (comma separated, e.g. organic, premium, spicy)
                  </span>
                </label>
                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="organic, premium, aromatic"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E8D5B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all"
                />
              </div>

              {/* Short Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Short Description <span className="text-red-500">*</span>
                </label>
                <input
                  name="shortDescription"
                  value={form.shortDescription}
                  onChange={handleChange}
                  placeholder="Brief one-liner for card displays"
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.shortDescription ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all`}
                />
                {errors.shortDescription && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.shortDescription}
                  </p>
                )}
              </div>

              {/* Full Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#2B1B12] mb-1.5">
                  Full Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Detailed product description..."
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.description ? "border-red-400" : "border-[#E8D5B0]"} bg-white focus:outline-none focus:ring-2 focus:ring-[#C65A00]/30 focus:border-[#C65A00] text-[#2B1B12] placeholder-[#7A5C3A]/40 transition-all resize-none`}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* ── Flags ──────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl border border-[#E8D5B0] p-6 shadow-sm">
            <h2 className="text-lg font-serif font-bold text-[#2B1B12] mb-4">
              Product Flags
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "featured", label: "Featured" },
                { name: "isNew", label: "New Arrival" },
                { name: "isBestseller", label: "Bestseller" },
                { name: "inStock", label: "In Stock" },
              ].map(({ name, label }) => (
                <label
                  key={name}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                    (form as any)[name]
                      ? "border-[#C65A00] bg-[#C65A00]/5"
                      : "border-[#E8D5B0] hover:bg-[#FFF7E6]/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    name={name}
                    checked={(form as any)[name]}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#C65A00] rounded"
                  />
                  <span className="text-sm font-medium text-[#2B1B12]">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* ── Submit ─────────────────────────────────────────────── */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={submitting || uploading}
              className="flex items-center gap-2 px-8 py-3 bg-[#C65A00] text-white rounded-xl font-semibold hover:bg-[#a84d00] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#C65A00]/20"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Package size={18} />
                  Create Product
                </>
              )}
            </button>

            <Link
              href="/admin/products"
              className="px-6 py-3 text-[#7A5C3A] font-medium rounded-xl border border-[#E8D5B0] hover:bg-[#F5E6C8] transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
