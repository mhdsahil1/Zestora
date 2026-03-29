"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Users, ShoppingBag, DollarSign, AlertTriangle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/admin/metrics").then(r => {
       if(!r.ok) setError(true);
       return r.json();
    }).then(d => {
       if (!d.message) setMetrics(d);
    });
  }, []);

  if (error) return (
     <main className="min-h-screen bg-[#FFF7E6]"><Navbar /><div className="text-center pt-40 text-red-600 font-bold text-xl">Unauthorized / Admin Access Required</div></main>
  );
  if (!metrics) return <div className="min-h-screen bg-[#FFF7E6] pt-40 flex justify-center"><Navbar /><Loader2 className="animate-spin text-[#C65A00] w-8 h-8" /></div>;

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />
      <div className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-3xl font-serif font-bold text-[#2B1B12]">Admin Dashboard</h1>
           <div className="flex gap-3 items-center">
             <Link href="/admin/add-product" className="bg-[#2B1B12] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3d2a1f] transition-colors text-sm">+ Add Product</Link>
             <Link href="/admin/products" className="bg-[#D4AF37] text-[#2B1B12] px-4 py-2 rounded-lg font-medium hover:bg-[#c9a42e] transition-colors text-sm">Products</Link>
             <Link href="/admin/orders" className="bg-[#C65A00] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#a84d00] transition-colors text-sm">Orders</Link>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] flex items-center gap-4">
             <div className="bg-blue-100 p-4 rounded-xl text-blue-700"><ShoppingBag size={24} /></div>
             <div>
               <p className="text-sm font-medium text-[#7A5C3A]">Total Orders</p>
               <p className="text-2xl font-bold text-[#2B1B12]">{metrics.totalOrders}</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] flex items-center gap-4">
             <div className="bg-green-100 p-4 rounded-xl text-green-700"><DollarSign size={24} /></div>
             <div>
               <p className="text-sm font-medium text-[#7A5C3A]">Total Revenue</p>
               <p className="text-2xl font-bold text-[#2B1B12]">${metrics.totalRevenue}</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] flex items-center gap-4">
             <div className="bg-purple-100 p-4 rounded-xl text-purple-700"><Users size={24} /></div>
             <div>
               <p className="text-sm font-medium text-[#7A5C3A]">Total Users</p>
               <p className="text-2xl font-bold text-[#2B1B12]">{metrics.totalUsers || 1}</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] flex items-center gap-4 border-l-4 border-l-red-500">
             <div className="bg-red-100 p-4 rounded-xl text-red-700"><AlertTriangle size={24} /></div>
             <div>
               <p className="text-sm font-medium text-[#7A5C3A]">Low Stock Alerts</p>
               <p className="text-2xl font-bold text-red-600">{metrics.lowStockCount}</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
