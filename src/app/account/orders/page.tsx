"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { PackageOpen, ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders/me")
      .then(r => r.json())
      .then(d => {
         setOrders(Array.isArray(d) ? d : []);
         setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />
      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-[#2B1B12] mb-8">My Orders</h1>
        {loading ? (
          <div className="flex justify-center items-center h-40"><Loader2 className="w-8 h-8 animate-spin text-[#C65A00]" /></div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E8D5B0] shadow-sm">
             <div className="flex justify-center mb-4"><PackageOpen size={48} className="text-[#E8D5B0]" /></div>
             <h2 className="text-xl font-bold text-[#2B1B12] mb-2">No orders yet</h2>
             <p className="text-[#7A5C3A] mb-6">Looks like you haven't made your first purchase.</p>
             <Link href="/shop" className="inline-flex items-center gap-2 bg-[#C65A00] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors">Start Shopping <ArrowRight size={18}/></Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <Link href={`/account/orders/${order._id}`} key={order._id} className="block bg-white rounded-2xl p-6 border border-[#E8D5B0] hover:border-[#C65A00] shadow-sm hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                   <div>
                     <div className="text-sm text-[#7A5C3A] mb-1">Order #{order._id.slice(-8).toUpperCase()}</div>
                     <div className="font-semibold text-[#2B1B12] text-lg">₹{order.totalPrice.toFixed(2)} • {order.items?.length || order.products?.length} Items</div>
                     <div className="text-sm text-[#7A5C3A] mt-1">{format(new Date(order.createdAt), "MMM dd, yyyy")}</div>
                   </div>
                   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between md:justify-end gap-4 sm:gap-6 w-full md:w-auto mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-[#E8D5B0]">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide 
                        ${order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          order.orderStatus === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-blue-50 text-blue-700'}`}>
                        {order.orderStatus.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1 text-[#C65A00] font-medium group-hover:translate-x-1 transition-transform">
                        View Details <ArrowRight size={16}/>
                      </div>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
