"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function TestUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string>("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setImageUrl("");
    setError("");
  }

  async function handleUpload() {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setImageUrl(data.imageUrl);
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF7E6] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl border border-[#E8D5B0] shadow-sm p-8 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-serif font-bold text-[#2B1B12]">
          Test Image Upload
        </h1>
        <p className="text-sm text-[#7A5C3A]">
          Upload an image to Cloudinary via <code className="bg-[#F5E6C8] px-1.5 py-0.5 rounded text-xs">/api/upload</code>
        </p>

        {/* File input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleFileChange}
          className="block w-full text-sm text-[#7A5C3A] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#C65A00] file:text-white hover:file:bg-[#a84d00] file:cursor-pointer file:transition-colors"
        />

        {/* Preview */}
        {preview && (
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-[#E8D5B0]">
            <Image src={preview} alt="Preview" fill className="object-cover" />
          </div>
        )}

        {/* Upload button */}
        <button
          onClick={handleUpload}
          disabled={uploading || !preview}
          className="w-full py-2.5 bg-[#C65A00] text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#a84d00] transition-colors"
        >
          {uploading ? "Uploading..." : "Upload to Cloudinary"}
        </button>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm font-medium">{error}</p>
        )}

        {/* Result */}
        {imageUrl && (
          <div className="space-y-2 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-700 font-semibold text-sm">✓ Upload successful!</p>
            <p className="text-xs text-[#7A5C3A] break-all font-mono">{imageUrl}</p>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-green-200">
              <Image src={imageUrl} alt="Uploaded" fill className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
