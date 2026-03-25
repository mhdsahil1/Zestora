export default function Loading() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      {/* Navbar placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#2B1B12]/95 animate-pulse" />

      {/* Header skeleton */}
      <section className="pt-32 pb-16 bg-[#2B1B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-24 bg-white/10 rounded mb-4" />
          <div className="h-12 w-72 bg-white/10 rounded mb-3" />
          <div className="h-4 w-48 bg-white/10 rounded" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category pills skeleton */}
        <div className="flex gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-[#E8D5B0] rounded-full animate-pulse" />
          ))}
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#E8D5B0]">
              <div className="aspect-square bg-[#F5E6C8] animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-3 w-16 bg-[#E8D5B0] rounded animate-pulse" />
                <div className="h-4 w-full bg-[#E8D5B0] rounded animate-pulse" />
                <div className="h-5 w-20 bg-[#E8D5B0] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
