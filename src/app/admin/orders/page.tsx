"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Search, Loader2, Edit2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface AdminOrder {
  _id: string;
  totalPrice: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  createdAt: string;
  userId: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function AdminOrdersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      // @ts-ignore
      if (session?.user?.role !== "admin") {
        toast.error("Unauthorized access.");
        router.push("/");
      } else {
        fetchOrders();
      }
    }
  }, [status, router, session]);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/admin/orders");
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string, type: "orderStatus" | "paymentStatus") => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/orders/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [type]: newStatus }),
      });

      if (res.ok) {
        toast.success("Order updated successfully");
        setOrders(orders.map(order => 
          order._id === id ? { ...order, [type]: newStatus } : order
        ));
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Update failed");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredOrders = orders.filter(order => 
    order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userId?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userId?.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-12 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#D4A373] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-serif text-[#4A3B32] font-bold">Manage Orders</h1>
            <p className="text-[#8C7A6B]">Admin Dashboard</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C7A6B]">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search orders, customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#E8E1D9] rounded-xl focus:ring-2 focus:ring-[#D4A373] outline-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E8E1D9] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#E8E1D9] text-[#8C7A6B] text-sm font-bold uppercase tracking-wider">
                  <th className="p-4 pl-6">Order Info</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Payment</th>
                  <th className="p-4">Status & Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E1D9]">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-[#8C7A6B]">
                      No orders found matching "{searchTerm}"
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order._id} className="hover:bg-[#FAF8F5]/50 transition-colors">
                      <td className="p-4 pl-6">
                        <div className="font-mono text-xs font-bold text-[#4A3B32] bg-[#E8E1D9]/50 inline-block px-2 py-1 rounded mb-1">
                          {order._id.substring(order._id.length - 8).toUpperCase()}
                        </div>
                        <div className="text-sm font-medium text-[#4A3B32]">₹{order.totalPrice.toLocaleString()}</div>
                        <div className="text-xs text-[#8C7A6B]">
                          {new Date(order.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[#4A3B32] text-sm">{order.userId?.name || "Deleted User"}</div>
                        <div className="text-xs text-[#8C7A6B]">{order.userId?.email}</div>
                        <div className="text-xs text-[#8C7A6B]">{order.userId?.phone}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-2 items-start">
                           <span className="text-xs font-bold text-[#8C7A6B] bg-white border border-[#E8E1D9] px-2 py-0.5 rounded shadow-sm">
                             {order.paymentMethod}
                           </span>
                           <select 
                              disabled={updatingId === order._id}
                              value={order.paymentStatus}
                              onChange={(e) => handleStatusUpdate(order._id, e.target.value, "paymentStatus")}
                              className={`text-xs font-bold rounded px-2 py-1 outline-none cursor-pointer border ${
                                order.paymentStatus === "COMPLETED" ? "bg-green-50 text-green-700 border-green-200" 
                                : order.paymentStatus === "FAILED" ? "bg-red-50 text-red-700 border-red-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                              }`}
                           >
                              <option value="PENDING">Pending</option>
                              <option value="COMPLETED">Completed</option>
                              <option value="FAILED">Failed</option>
                           </select>
                        </div>
                      </td>
                      <td className="p-4">
                         <select 
                            disabled={updatingId === order._id}
                            value={order.orderStatus}
                            onChange={(e) => handleStatusUpdate(order._id, e.target.value, "orderStatus")}
                            className="bg-white border border-[#E8E1D9] text-[#4A3B32] text-sm font-medium rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#D4A373] cursor-pointer shadow-sm w-44"
                         >
                            <option value="Order Placed">Order Placed</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                         </select>
                         {updatingId === order._id && (
                            <span className="ml-2 inline-block animate-spin text-[#D4A373]">
                              <Loader2 size={16} />
                            </span>
                         )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}
