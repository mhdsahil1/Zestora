import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFF7E6] flex flex-col">
      {/* Simple Header */}
      <header className="py-6 px-4 border-b border-[#E8D5B0]/50">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="font-serif text-2xl font-bold text-[#2B1B12]">
            Zestora
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-[#E8D5B0]/50 rounded-full flex items-center justify-center mb-6">
          <span className="font-serif text-5xl text-[#2B1B12]">404</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-[#2B1B12] mb-4">
          Page Not Found
        </h1>

        <p className="text-[#7A5C3A] max-w-md mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#2B1B12] transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-[#E8D5B0] text-[#7A5C3A] rounded-full font-medium hover:border-[#C65A00] hover:text-[#C65A00] transition-colors"
          >
            <Search className="w-4 h-4" />
            Browse Shop
          </Link>
        </div>
      </div>
    </main>
  );
}