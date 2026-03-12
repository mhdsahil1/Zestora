"use client";

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  User, MapPin, Package, Clock, ShieldCheck, LogOut, Loader2, Star, Edit2, Plus, ChevronRight, CheckCircle2 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dummy Orders Data
const DUMMY_ORDERS = [
  {
    id: "ORD-84A9B2",
    date: "March 10, 2026",
    total: 34.98,
    status: "Delivered",
    items: [
      { name: "Kashmir Saffron", quantity: 1, price: 24.99 },
      { name: "Tellicherry Black Pepper", quantity: 1, price: 9.99 }
    ],
    timeline: [
      { status: "Order Placed", date: "Mar 10, 10:00 AM", completed: true },
      { status: "Processing", date: "Mar 10, 02:00 PM", completed: true },
      { status: "Shipped", date: "Mar 11, 09:30 AM", completed: true },
      { status: "Out for Delivery", date: "Mar 12, 08:00 AM", completed: true },
      { status: "Delivered", date: "Mar 12, 02:45 PM", completed: true }
    ]
  },
  {
    id: "ORD-92C4D1",
    date: "March 12, 2026",
    total: 12.99,
    status: "Processing",
    items: [
      { name: "Green Cardamom", quantity: 1, price: 12.99 }
    ],
    timeline: [
      { status: "Order Placed", date: "Mar 12, 09:15 AM", completed: true },
      { status: "Processing", date: "Mar 12, 11:30 AM", completed: true },
      { status: "Shipped", date: "", completed: false },
      { status: "Out for Delivery", date: "", completed: false },
      { status: "Delivered", date: "", completed: false }
    ]
  }
];

// Dummy Addresses
const DUMMY_ADDRESSES = [
  {
    id: 1,
    fullName: "John Doe",
    phone: "+1 234 567 8901",
    addressLine: "123 Spice Lane, Suite 400",
    city: "New York",
    state: "NY",
    pincode: "10001",
    isDefault: true
  }
];

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedOrder, setSelectedOrder] = useState<any>(null); // For order details view

  // Route Protection
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#FFF7E6] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-[#C65A00]" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const user = session?.user;

  const tabs = [
    { id: "profile", label: "Profile Information", icon: User },
    { id: "addresses", label: "Saved Addresses", icon: MapPin },
    { id: "orders", label: "Order History", icon: Package },
    { id: "loyalty", label: "Loyalty Points", icon: Star },
    // Only show admin dashboard link if user is admin
    ...(user?.role === "admin" ? [{ id: "admin", label: "Admin Dashboard", icon: ShieldCheck }] : []),
  ];

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 border-b border-[#E8D5B0] pb-6">
          <h1 className="font-serif text-4xl text-[#2B1B12] mb-2">My Account</h1>
          <p className="text-[#7A5C3A]">Welcome back, {user?.name}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.id === "admin") {
                      router.push("/admin/dashboard");
                    } else {
                      setActiveTab(tab.id);
                      setSelectedOrder(null); // Reset order view
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#C65A00] text-white shadow-md"
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
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] p-6 lg:p-8 min-h-[500px]">
              
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="animate-fade-in-up">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-2xl text-[#2B1B12]">Profile Information</h2>
                    <button className="flex items-center gap-2 text-sm text-[#C65A00] hover:underline">
                      <Edit2 className="w-4 h-4" /> Edit Profile
                    </button>
                  </div>
                  <div className="space-y-6 max-w-lg">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A5C3A] mb-1">Full Name</label>
                      <p className="text-lg text-[#2B1B12] font-medium">{user?.name}</p>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A5C3A] mb-1">Email Address</label>
                      <p className="text-lg text-[#2B1B12] font-medium">{user?.email}</p>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A5C3A] mb-1">Phone Number</label>
                      <p className="text-lg text-[#2B1B12] font-medium">+1 234 567 8901</p> {/* Placeholder */}
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#7A5C3A] mb-1">Account Role</label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide ${
                        user?.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {user?.role || "User"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === "addresses" && (
                <div className="animate-fade-in-up">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-2xl text-[#2B1B12]">Saved Addresses</h2>
                    <button className="flex items-center gap-2 text-sm bg-[#FFF7E6] text-[#C65A00] px-4 py-2 rounded-full border border-[#E8D5B0] hover:border-[#C65A00] transition-colors">
                      <Plus className="w-4 h-4" /> Add New Address
                    </button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {DUMMY_ADDRESSES.map((addr) => (
                      <div key={addr.id} className="border-2 border-[#C65A00] rounded-xl p-5 relative bg-[#FFF7E6]/30">
                        {addr.isDefault && (
                          <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold bg-[#C65A00] text-white px-2 py-1 rounded-md">
                            Default
                          </span>
                        )}
                        <p className="font-medium text-[#2B1B12] mb-1">{addr.fullName}</p>
                        <p className="text-sm text-[#7A5C3A] mb-3">{addr.phone}</p>
                        <p className="text-sm text-[#7A5C3A] leading-relaxed">
                          {addr.addressLine}<br />
                          {addr.city}, {addr.state} {addr.pincode}
                        </p>
                        <div className="mt-4 flex gap-3">
                          <button className="text-xs text-[#C65A00] font-medium hover:underline">Edit</button>
                          <button className="text-xs text-red-600 font-medium hover:underline">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && !selectedOrder && (
                <div className="animate-fade-in-up">
                  <h2 className="font-serif text-2xl text-[#2B1B12] mb-6">Order History</h2>
                  <div className="space-y-4">
                    {DUMMY_ORDERS.map((order) => (
                      <div key={order.id} className="border border-[#E8D5B0] rounded-xl flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 hover:shadow-md transition-shadow bg-white">
                        <div className="w-full sm:w-auto mb-4 sm:mb-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-medium text-[#2B1B12]">{order.id}</span>
                            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                              order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-[#7A5C3A]">Placed on {order.date}</p>
                        </div>
                        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6">
                          <div className="text-left sm:text-right">
                            <p className="text-xs text-[#7A5C3A] mb-0.5">Total</p>
                            <p className="font-bold text-[#C65A00]">${order.total.toFixed(2)}</p>
                          </div>
                          <button 
                            onClick={() => setSelectedOrder(order)}
                            className="p-2 border border-[#E8D5B0] rounded-full text-[#C65A00] hover:bg-[#C65A00] hover:text-white transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Order Details & Tracking (Nested in Orders Tab) */}
              {activeTab === "orders" && selectedOrder && (
                <div className="animate-fade-in-up">
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="text-sm text-[#7A5C3A] hover:text-[#C65A00] mb-6 flex items-center gap-1"
                  >
                    ← Back to Orders
                  </button>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="font-serif text-2xl text-[#2B1B12]">Order {selectedOrder.id}</h2>
                      <p className="text-sm text-[#7A5C3A]">Placed on {selectedOrder.date}</p>
                    </div>
                    <span className={`text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full ${
                      selectedOrder.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {selectedOrder.status}
                    </span>
                  </div>

                  {/* Order Tracking Timeline */}
                  <div className="mb-10 p-6 bg-[#FFF7E6] rounded-xl border border-[#E8D5B0]">
                    <h3 className="font-serif text-lg text-[#2B1B12] mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#C65A00]" /> Tracking Status
                    </h3>
                    <div className="relative">
                      {/* Vertical line connecting nodes */}
                      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#E8D5B0]"></div>
                      
                      <div className="space-y-6 relative">
                        {selectedOrder.timeline.map((step: any, idx: number) => (
                          <div key={idx} className="flex gap-4">
                            <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                              step.completed ? "bg-[#C65A00] text-white" : "bg-white border-2 border-[#E8D5B0] text-transparent"
                            }`}>
                              {step.completed && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                            <div className="pb-2">
                              <p className={`text-sm font-medium ${step.completed ? "text-[#2B1B12]" : "text-[#B09070]"}`}>
                                {step.status}
                              </p>
                              {step.date && <p className="text-xs text-[#7A5C3A] mt-0.5">{step.date}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h3 className="font-serif text-lg text-[#2B1B12] mb-4">Items in this order</h3>
                    <div className="border border-[#E8D5B0] rounded-xl divide-y divide-[#E8D5B0]">
                      {selectedOrder.items.map((item: any, i: number) => (
                        <div key={i} className="flex justify-between items-center p-4">
                          <div>
                            <p className="font-medium text-[#2B1B12]">{item.name}</p>
                            <p className="text-sm text-[#7A5C3A]">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-bold text-[#C65A00]">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                      <div className="p-4 bg-gray-50 flex flex-col items-end gap-1 rounded-b-xl text-sm">
                        <div className="flex justify-between w-48 text-[#7A5C3A]"><span>Subtotal:</span> <span>${selectedOrder.total.toFixed(2)}</span></div>
                        <div className="flex justify-between w-48 text-[#7A5C3A]"><span>Shipping:</span> <span className="text-green-600">Free</span></div>
                        <div className="flex justify-between w-48 font-bold text-[#2B1B12] pt-2 border-t border-[#E8D5B0] mt-1">
                          <span>Total:</span> <span>${selectedOrder.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Loyalty Points Tab */}
              {activeTab === "loyalty" && (
                <div className="animate-fade-in-up flex flex-col items-center text-center max-w-md mx-auto py-8">
                  <div className="w-24 h-24 bg-[#FFF7E6] rounded-full border-4 border-[#C65A00] flex items-center justify-center mb-6 shadow-lg shadow-[#C65A00]/10">
                    <Star className="w-10 h-10 text-[#C65A00] fill-[#C65A00]" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#2B1B12] mb-2">0 Points</h2>
                  <p className="text-[#7A5C3A] mb-8 leading-relaxed">
                    Welcome to our loyalty program! Earn points on every purchase and redeem them for exclusive discounts and free gifts.
                  </p>
                  
                  <div className="w-full bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl p-5 text-left mb-6">
                    <h3 className="font-serif text-lg text-[#2B1B12] mb-3">How to earn points:</h3>
                    <ul className="space-y-2 text-sm text-[#7A5C3A]">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C65A00]" /> 1 point per $1 spent</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C65A00]" /> 50 points on your birthday</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C65A00]" /> 25 points for leaving a review</li>
                    </ul>
                  </div>

                  <button className="px-6 py-3 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#A34A00] transition-colors w-full">
                    Start Shopping & Earning
                  </button>
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
