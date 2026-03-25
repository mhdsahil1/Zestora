"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Loader2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import Link from "next/link";

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchOrders = () => {
     setLoading(true);
     fetch("/api/admin/orders").then(r => r.json()).then(d => {
        if (d.orders) setOrders(d.orders);
        else if (Array.isArray(d)) setOrders(d);
        setLoading(false);
     });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    const res = await fetch(`/api/admin/orders/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderStatus: newStatus })
    });
    if (res.ok) {
       toast.success("Order status updated!");
       setOrders(orders.map(o => o._id === id ? { ...o, orderStatus: newStatus } : o));
    } else {
       toast.error("Failed to update status");
    }
    setUpdatingId(null);
  };

  if (loading) return <div className="flex justify-center pt-40 bg-[#FFF7E6] min-h-screen"><Navbar /><Loader2 className="animate-spin text-[#C65A00] w-8 h-8" /></div>;

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />
      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-3xl font-serif font-bold text-[#2B1B12]">Manage Orders</h1>
           <div className="flex gap-4 items-center">
             <Link href="/admin/dashboard" className="text-[#C65A00] font-medium hover:underline">← Dashboard</Link>
             <button onClick={fetchOrders} className="flex flex-row items-center gap-2 text-[#C65A00] font-medium"><RefreshCw size={18} /> Refresh</button>
           </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
             <thead>
                <tr className="bg-[#FFF7E6]/50 text-[#7A5C3A] text-sm font-semibold border-b border-[#E8D5B0]">
                   <th className="p-4 rounded-tl-2xl">Order ID</th>
                   <th className="p-4">Date</th>
                   <th className="p-4">Customer</th>
                   <th className="p-4">Amount</th>
                   <th className="p-4">Payment</th>
                   <th className="p-4 rounded-tr-2xl">Fulfillment Status</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-[#E8D5B0]">
               {orders.map(order => (
                 <tr key={order._id} className="hover:bg-[#FFF7E6]/30 text-sm">
                   <td className="p-4 font-mono text-[#C65A00]">{order._id.slice(-8).toUpperCase()}</td>
                   <td className="p-4 text-[#7A5C3A]">{format(new Date(order.createdAt), "MMM dd, yyyy")}</td>
                   <td className="p-4 font-medium text-[#2B1B12]">
                     {order.userId?.name || order.deliveryAddress?.fullName || "Guest"}
                     <div className="text-xs text-[#7A5C3A] font-normal">{order.userId?.email || ''}</div>
                   </td>
                   <td className="p-4 font-bold text-[#2B1B12]">${order.totalPrice.toFixed(2)}</td>
                   <td className="p-4">
                     <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide ${order.paymentStatus === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {order.paymentStatus}
                     </span>
                     <div className="text-xs text-[#7A5C3A] mt-1">{order.paymentMethod}</div>
                   </td>
                   <td className="p-4">
                      <div className="flex items-center gap-2">
                        <select 
                          value={order.orderStatus} 
                          disabled={updatingId === order._id}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className="border border-[#E8D5B0] bg-white rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#C65A00]/50 min-w-[140px]"
                        >
                          <option value="Order Placed">Order Placed</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        {updatingId === order._id && <Loader2 size={16} className="animate-spin text-[#C65A00]" />}
                      </div>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
          {orders.length === 0 && <div className="p-12 text-center text-[#7A5C3A]">No orders found.</div>}
        </div>
      </div>
    </main>
  );
}
