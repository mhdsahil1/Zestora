"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  ShoppingBag, Users, LayoutDashboard, BarChart3, Settings, ShieldCheck, 
  LogOut, Search, ChevronRight, Edit3, Trash2, ArrowUpRight, Loader2, ArrowLeft
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dummy Data
const RECENT_ORDERS = [
  { id: "ORD-84A9B2", customer: "John Doe", date: "Mar 10", total: 34.98, status: "Delivered" },
  { id: "ORD-92C4D1", customer: "Jane Smith", date: "Mar 12", total: 12.99, status: "Processing" },
  { id: "ORD-75F1E9", customer: "Mike Johnson", date: "Mar 12", total: 89.50, status: "Shipped" },
  { id: "ORD-33K8L2", customer: "Sarah Williams", date: "Mar 13", total: 145.00, status: "Processing" },
];

const METRICS = [
  { title: "Total Revenue", value: "$12,450", change: "+14.5%", trend: "up" },
  { title: "Active Orders", value: "45", change: "+5.2%", trend: "up" },
  { title: "Total Customers", value: "1,204", change: "+12.1%", trend: "up" },
  { title: "Products Listed", value: "86", change: "0%", trend: "neutral" },
];

export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // Route Protection
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#FFF7E6] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-[#C65A00]" />
      </div>
    );
  }

  const user = session?.user;

  if (status === "unauthenticated" || user?.role !== "admin") {
    router.push("/login?callbackUrl=/admin/dashboard");
    return null;
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "products", label: "Products", icon: Settings },
    { id: "customers", label: "Customers", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 border-b border-[#E8D5B0] pb-6 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-8 h-8 text-[#C65A00]" />
              <h1 className="font-serif text-4xl text-[#2B1B12]">Admin Dashboard</h1>
            </div>
            <p className="text-[#7A5C3A]">Manage your store, view analytics, and process orders.</p>
          </div>
          <button 
            onClick={() => router.push("/account")}
            className="hidden sm:flex items-center gap-2 text-sm text-[#C65A00] font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to My Account
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#2B1B12] text-[#D4AF37] shadow-md"
                      : "text-[#7A5C3A] hover:bg-white hover:text-[#C65A00]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
            
            <div className="pt-4 mt-4 border-t border-[#E8D5B0]">
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-4 max-w-full overflow-hidden">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] p-6 lg:p-8 min-h-[600px]">
              
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="animate-fade-in-up">
                  <h2 className="font-serif text-2xl text-[#2B1B12] mb-6">Store Overview</h2>
                  
                  {/* Metric Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {METRICS.map((metric, i) => (
                      <div key={i} className="p-5 rounded-xl border border-[#E8D5B0] bg-[#FFF7E6]/30">
                        <p className="text-xs uppercase tracking-wider text-[#7A5C3A] mb-2">{metric.title}</p>
                        <div className="flex items-end justify-between">
                          <p className="text-2xl font-bold text-[#2B1B12]">{metric.value}</p>
                          <div className={`flex items-center gap-1 text-xs font-medium ${
                            metric.trend === "up" ? "text-green-600" : "text-gray-500"
                          }`}>
                            {metric.trend === "up" && <ArrowUpRight className="w-3 h-3" />}
                            {metric.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Orders Table */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-lg text-[#2B1B12]">Recent Orders</h3>
                    <button 
                      onClick={() => setActiveTab("orders")}
                      className="text-sm text-[#C65A00] font-medium hover:underline"
                    >
                      View All
                    </button>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-[#E8D5B0]">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-[#E8D5B0] text-xs uppercase tracking-wider text-[#7A5C3A]">
                          <th className="p-4 font-medium">Order ID</th>
                          <th className="p-4 font-medium">Customer</th>
                          <th className="p-4 font-medium">Date</th>
                          <th className="p-4 font-medium">Total</th>
                          <th className="p-4 font-medium">Status</th>
                          <th className="p-4 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8D5B0]">
                        {RECENT_ORDERS.map((order, i) => (
                          <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            <td className="p-4 text-sm font-medium text-[#2B1B12]">{order.id}</td>
                            <td className="p-4 text-sm text-[#7A5C3A]">{order.customer}</td>
                            <td className="p-4 text-sm text-[#7A5C3A]">{order.date}</td>
                            <td className="p-4 text-sm font-bold text-[#2B1B12]">${order.total.toFixed(2)}</td>
                            <td className="p-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                order.status === "Delivered" ? "bg-green-100 text-green-700" :
                                order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                                "bg-amber-100 text-amber-700"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="p-4 text-right">
                              <button className="text-[#C65A00] hover:bg-[#FFF7E6] p-1.5 rounded transition-colors">
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="animate-fade-in-up">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-2xl text-[#2B1B12]">Manage Orders</h2>
                    <div className="relative w-64">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search orders..." 
                        className="w-full pl-9 pr-4 py-2 text-sm border border-[#E8D5B0] rounded-full focus:outline-none focus:border-[#C65A00] transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto rounded-xl border border-[#E8D5B0] mb-4">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-[#E8D5B0] text-xs uppercase tracking-wider text-[#7A5C3A]">
                          <th className="p-4 font-medium">Order ID</th>
                          <th className="p-4 font-medium">Customer</th>
                          <th className="p-4 font-medium">Date</th>
                          <th className="p-4 font-medium">Total</th>
                          <th className="p-4 font-medium">Status</th>
                          <th className="p-4 font-medium text-right">Update</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8D5B0]">
                        {RECENT_ORDERS.map((order, i) => (
                          <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            <td className="p-4 text-sm font-medium text-[#2B1B12]">{order.id}</td>
                            <td className="p-4 text-sm text-[#7A5C3A]">{order.customer}</td>
                            <td className="p-4 text-sm text-[#7A5C3A]">{order.date}</td>
                            <td className="p-4 text-sm font-bold text-[#2B1B12]">${order.total.toFixed(2)}</td>
                            <td className="p-4">
                              <select 
                                defaultValue={order.status}
                                className="text-xs border border-[#E8D5B0] rounded bg-white px-2 py-1 outline-none text-[#2B1B12]"
                              >
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for Delivery">Out for Delivery</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </td>
                            <td className="p-4 text-right flex justify-end gap-2">
                              <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded transition-colors" title="Edit Order">
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button className="text-red-500 hover:bg-red-50 p-1.5 rounded transition-colors" title="Cancel Order">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Other Tabs Placeholder */}
              {["products", "customers", "analytics"].includes(activeTab) && (
                <div className="animate-fade-in-up flex flex-col items-center justify-center h-[400px] text-center">
                  <div className="w-16 h-16 bg-[#FFF7E6] rounded-full flex items-center justify-center mb-4 border-2 border-[#E8D5B0]">
                    {activeTab === "products" && <Settings className="w-8 h-8 text-[#C65A00]" />}
                    {activeTab === "customers" && <Users className="w-8 h-8 text-[#C65A00]" />}
                    {activeTab === "analytics" && <BarChart3 className="w-8 h-8 text-[#C65A00]" />}
                  </div>
                  <h2 className="font-serif text-2xl text-[#2B1B12] capitalize mb-2">{activeTab} Management</h2>
                  <p className="text-[#7A5C3A] max-w-md">
                    This section connects to the database to manage {activeTab}. Content goes here in full implementation.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
