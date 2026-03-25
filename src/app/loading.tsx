export default function Loading() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      {/* Navbar placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#2B1B12]/95 animate-pulse" />

      {/* Hero skeleton */}
      <div className="relative h-[90vh] bg-[#2B1B12]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <div className="h-4 w-40 bg-white/10 rounded mx-auto animate-pulse" />
            <div className="h-14 w-96 max-w-full bg-white/10 rounded mx-auto animate-pulse" />
            <div className="h-12 w-36 bg-white/10 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Featured products skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-8 w-48 bg-[#E8D5B0] rounded mx-auto mb-10 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#E8D5B0]">
              <div className="aspect-square bg-[#F5E6C8] animate-pulse" />
              <div className="p-4 space-y-3">
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
