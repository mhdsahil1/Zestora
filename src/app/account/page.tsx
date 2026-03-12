"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Package, Award, LogOut, MapPin, 
  ChevronRight, Clock, CheckCircle2, Truck, Box 
} from "lucide-react";
import { toast } from "sonner";

// Define TypeScript interfaces for our data shapes
interface Profile {
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
}

interface OrderProduct {
  _id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  _id: string;
  totalPrice: number;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  createdAt: string;
  products: OrderProduct[];
}

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "loyalty", label: "Loyalty Points", icon: Award },
];

const ORDER_TIMELINE = [
  { status: "Order Placed", label: "Order Placed", icon: Clock },
  { status: "Processing", label: "Processing", icon: Box },
  { status: "Shipped", label: "Shipped", icon: Truck },
  { status: "Out for Delivery", label: "Out for Delivery", icon: MapPin },
  { status: "Delivered", label: "Delivered", icon: CheckCircle2 },
];

export default function AccountDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?callbackUrl=/account");
    }
  }, [status, router]);

  // Fetch user data
  useEffect(() => {
    if (status === "authenticated") {
      fetchDashboardData();
    }
  }, [status]);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      const [profileRes, ordersRes] = await Promise.all([
        fetch("/api/user/profile"),
        fetch("/api/user/orders")
      ]);

      if (profileRes.ok) {
        const data = await profileRes.json();
        setProfile(data.user);
      }
      if (ordersRes.ok) {
        const data = await ordersRes.json();
        setOrders(data.orders);
      }
    } catch (error) {
      toast.error("Failed to load dashboard data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  // Helper function to get the numeric step for timeline animations
  const getTimelineStep = (status: string) => {
    const index = ORDER_TIMELINE.findIndex(item => item.status === status);
    return index >= 0 ? index : 4; // Default to Delivered if unknown
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-12 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#D4A373] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E1D9] sticky top-24">
               {/* User Brief */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#F5E6C8] rounded-full mx-auto flex items-center justify-center text-3xl text-[#8B5A2B] font-serif font-bold mb-3 border-2 border-[#D4A373]">
                  {profile?.name?.charAt(0) || "U"}
                </div>
                <h2 className="font-bold text-[#4A3B32] text-xl">{profile?.name}</h2>
                <p className="text-[#8C7A6B] text-sm">{profile?.email}</p>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive 
                          ? "bg-[#4A3B32] text-white shadow-md shadow-[#4a3b32]/20" 
                          : "text-[#8C7A6B] hover:bg-[#FAF8F5] hover:text-[#4A3B32]"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{tab.label}</span>
                      {isActive && <ChevronRight size={16} className="ml-auto" />}
                    </button>
                  );
                })}
                
                <div className="pt-4 mt-4 border-t border-[#E8E1D9]">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8E1D9]"
                >
                  <h2 className="text-2xl font-serif font-bold text-[#4A3B32] mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[#8C7A6B]">Full Name</label>
                      <div className="px-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl text-[#4A3B32] font-medium">
                        {profile?.name}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[#8C7A6B]">Email Address</label>
                      <div className="px-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl text-[#4A3B32] font-medium">
                        {profile?.email}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[#8C7A6B]">Phone Number</label>
                      <div className="px-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl text-[#4A3B32] font-medium">
                        {profile?.phone || "Not provided"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#E8E1D9]">
                    <h3 className="text-xl font-bold text-[#4A3B32] mb-4">Saved Addresses</h3>
                    <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-dashed border-[#D4A373] text-center text-[#8C7A6B]">
                      Manage addresses coming soon. Currently using checkout address.
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Loyalty Points Tab */}
              {activeTab === "loyalty" && (
                <motion.div
                  key="loyalty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8E1D9] text-center"
                >
                  <div className="w-24 h-24 bg-[#FAF8F5] rounded-full mx-auto flex items-center justify-center mb-6">
                    <Award size={48} className="text-[#D4A373]" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-[#4A3B32] mb-2">Loyalty Points</h2>
                  <p className="text-[#8C7A6B] mb-8 max-w-md mx-auto">Earn points on every purchase and redeem them for exclusive discounts on premium spices.</p>
                  
                  <div className="relative mb-12 max-w-lg mx-auto">
                    <div className="flex justify-between text-sm text-[#4A3B32] font-bold mb-2">
                       <span>{profile?.loyaltyPoints || 0} pts</span>
                       <span>Golden Member (500 pts)</span>
                    </div>
                    {/* Progress Bar Background */}
                    <div className="h-4 bg-[#FAF8F5] rounded-full border border-[#E8E1D9] overflow-hidden">
                       {/* Animated Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(((profile?.loyaltyPoints || 0) / 500) * 100, 100)}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#D4A373] to-[#8B5A2B] rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                     <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E8E1D9]">
                        <p className="text-[#8B5A2B] font-bold text-xl mb-1">Silver</p>
                        <p className="text-xs text-[#8C7A6B]">You're here! Base rewards.</p>
                     </div>
                     <div className="p-4 bg-white rounded-2xl border border-[#E8E1D9] opacity-50">
                        <p className="text-[#4A3B32] font-bold text-xl mb-1">Gold</p>
                        <p className="text-xs text-[#8C7A6B]">500 pts. 5% off everything.</p>
                     </div>
                     <div className="p-4 bg-white rounded-2xl border border-[#E8E1D9] opacity-50">
                        <p className="text-[#4A3B32] font-bold text-xl mb-1">Platinum</p>
                        <p className="text-xs text-[#8C7A6B]">1500 pts. Free shipping always.</p>
                     </div>
                  </div>
                </motion.div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8E1D9]"
                >
                  <h2 className="text-2xl font-serif font-bold text-[#4A3B32] mb-6">Order History</h2>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <Package size={48} className="mx-auto text-[#D4A373] mb-4 opacity-50" />
                      <h3 className="text-xl font-bold text-[#4A3B32] mb-2">No orders yet</h3>
                      <p className="text-[#8C7A6B]">When you place an order, it will appear here.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => {
                        const isExpanded = expandedOrder === order._id;
                        const currentStepIndex = getTimelineStep(order.orderStatus);

                        return (
                          <div key={order._id} className="border border-[#E8E1D9] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#D4A373]">
                            
                            {/* Order Header / Summary (Clickable) */}
                            <button
                              onClick={() => setExpandedOrder(isExpanded ? null : order._id)}
                              className="w-full text-left p-5 md:p-6 bg-white hover:bg-[#FAF8F5] transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                            >
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                                <div>
                                  <p className="text-xs text-[#8C7A6B] uppercase font-bold mb-1">Order Placed</p>
                                  <p className="font-medium text-[#4A3B32]">
                                    {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                      day: 'numeric', month: 'short', year: 'numeric'
                                    })}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-xs text-[#8C7A6B] uppercase font-bold mb-1">Total</p>
                                  <p className="font-medium text-[#8B5A2B]">₹{order.totalPrice.toLocaleString()}</p>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                  <p className="text-xs text-[#8C7A6B] uppercase font-bold mb-1">Order #</p>
                                  <p className="font-medium text-[#4A3B32] font-mono truncate">{order._id.substring(order._id.length - 8).toUpperCase()}</p>
                                </div>
                                <div className="col-span-2 md:col-span-1 flex items-center justify-end">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-[#D4A373]">{order.orderStatus}</span>
                                    <ChevronRight size={20} className={`text-[#8C7A6B] transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                                  </div>
                                </div>
                              </div>
                            </button>

                            {/* Expanded Order Details */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="border-t border-[#E8E1D9] bg-[#FAF8F5]"
                                >
                                  <div className="p-6">
                                    
                                    {/* Animated Order Tracking Timeline */}
                                    <div className="mb-10 pt-4 px-2">
                                      <h4 className="text-sm font-bold text-[#4A3B32] uppercase mb-6">Delivery Status</h4>
                                      <div className="relative flex justify-between">
                                        {/* Background Track */}
                                        <div className="absolute top-5 left-8 right-8 h-1 bg-[#E8E1D9] -z-0 rounded-full"></div>
                                        
                                        {/* Colored Progress Track */}
                                        <motion.div 
                                          className="absolute top-5 left-8 h-1 bg-green-500 -z-0 rounded-full origin-left"
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: currentStepIndex / (ORDER_TIMELINE.length - 1) }}
                                          transition={{ duration: 0.8, ease: "easeOut" }}
                                          style={{ width: 'calc(100% - 4rem)' }}
                                        />

                                        {ORDER_TIMELINE.map((step, idx) => {
                                          const StepIcon = step.icon;
                                          const isCompleted = currentStepIndex >= idx;
                                          const isActive = currentStepIndex === idx;

                                          return (
                                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                              <motion.div 
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: idx * 0.15 }}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 transition-colors duration-500 ${
                                                  isCompleted ? "bg-green-500 border-green-500 text-white shadow-md shadow-green-500/20" : "bg-white border-[#E8E1D9] text-[#8C7A6B]"
                                                } ${isActive ? "ring-4 ring-green-500/20" : ""}`}
                                              >
                                                <StepIcon size={18} />
                                              </motion.div>
                                              <span className={`text-xs md:text-sm font-medium hidden md:block text-center w-24 ${isCompleted ? "text-[#4A3B32]" : "text-[#8C7A6B]"}`}>
                                                {step.label}
                                              </span>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>

                                    {/* Products List within Order */}
                                    <h4 className="text-sm font-bold text-[#4A3B32] uppercase mb-4">Items</h4>
                                    <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                      {order.products.map(product => (
                                        <div key={product._id} className="flex gap-4 bg-white p-4 rounded-xl border border-[#E8E1D9]">
                                          <div className="w-20 h-20 rounded-lg overflow-hidden border border-[#E8E1D9] bg-[#FAF8F5]">
                                             <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                          </div>
                                          <div className="flex-1">
                                            <h5 className="font-bold text-[#4A3B32] text-sm md:text-base line-clamp-1">{product.name}</h5>
                                            <p className="text-[#8C7A6B] text-sm mt-1">Qty: {product.quantity}</p>
                                            <p className="text-[#8B5A2B] font-bold mt-1">₹{(product.price * product.quantity).toLocaleString()}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>

                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
