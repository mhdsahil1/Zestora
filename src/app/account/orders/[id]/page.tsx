"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { TrackingTimeline } from "@/components/ui/TrackingTimeline";
import { ArrowLeft, Loader2, MapPin, CreditCard, Receipt, Package } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

export default function OrderDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCancelling, setIsCancelling] = useState(false);

  const CANCEL_ELIGIBLE_BEFORE = new Set(["Order Placed", "Processing", "Shipped"]);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/orders/me/${id}`)
      .then(r => r.json())
      .then(d => {
         if (d.message) router.push('/account/orders');
         else setOrder(d);
         setLoading(false);
      });
  }, [id, router]);

  if (loading) return <div className="min-h-screen bg-[#FFF7E6] pt-32"><div className="flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-[#C65A00]" /></div></div>;
  if (!order) return null;

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />
      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link href="/account/orders" className="inline-flex items-center gap-2 text-[#7A5C3A] hover:text-[#C65A00] transition-colors mb-6 font-medium">
          <ArrowLeft size={18} /> Back to Orders
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#2B1B12]">Order Details</h1>
            <p className="text-[#7A5C3A] mt-1">Order #{order._id.slice(-8).toUpperCase()} • {format(new Date(order.createdAt), "MMM dd, yyyy")}</p>
          </div>
          <div className="flex items-center gap-3">
            {CANCEL_ELIGIBLE_BEFORE.has(order.orderStatus) && order.orderStatus !== "Cancelled" && (
              <button
                disabled={isCancelling}
                onClick={async () => {
                  try {
                    setIsCancelling(true);
                    const res = await fetch(`/api/orders/me/${id}/cancel`, {
                      method: "PATCH",
                      headers: { "Content-Type": "application/json" },
                    });
                    const data = await res.json();
                    if (!res.ok) {
                      toast.error(data.message || "Failed to cancel order");
                      return;
                    }
                    toast.success("Order cancelled successfully.");
                    setOrder(data.order ?? { ...order, orderStatus: "Cancelled" });
                  } catch (e: any) {
                    toast.error("Failed to cancel order.");
                  } finally {
                    setIsCancelling(false);
                  }
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-50 border border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-100 shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCancelling ? "Cancelling..." : "Cancel Order"}
              </button>
            )}

            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E8D5B0] text-[#C65A00] font-semibold rounded-xl hover:bg-[#FFF7E6] hover:border-[#C65A00] shadow-sm transition-all">
              <Receipt size={18} /> Download Invoice
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] p-6 sm:p-8 mb-8 overflow-hidden">
          <h2 className="text-xl font-bold text-[#2B1B12] mb-2 font-serif flex items-center gap-2"><Package size={20} className="text-[#C65A00]"/> Tracking History</h2>
          <TrackingTimeline currentStatus={order.orderStatus} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
           <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[#E8D5B0] p-6 sm:p-8">
             <h2 className="text-xl font-bold text-[#2B1B12] mb-6 font-serif">Items Ordered</h2>
             <div className="space-y-6">
               {order.products.map((item: any) => (
                 <div key={item.productId} className="flex gap-4 items-center">
                   <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#FFF7E6] border border-[#E8D5B0] shrink-0 p-1">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                   </div>
                   <div className="flex-1">
                     <h3 className="font-semibold text-[#2B1B12] mb-1 leading-tight">{item.name}</h3>
                     <p className="text-sm text-[#7A5C3A] bg-[#FFF7E6] inline-block px-2 py-0.5 rounded-md">Qty: {item.quantity}</p>
                   </div>
                   <div className="font-bold text-[#C65A00] whitespace-nowrap text-lg">
                     ${(item.price * item.quantity).toFixed(2)}
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="space-y-8">
             <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] p-6 sm:p-8">
               <h2 className="text-xl font-bold text-[#2B1B12] mb-5 font-serif">Order Summary</h2>
               <div className="space-y-3 text-sm border-b border-[#E8D5B0] pb-5 mb-5">
                 <div className="flex justify-between text-[#7A5C3A]"><span>Subtotal</span><span className="font-medium text-[#2B1B12]">${order.totalPrice.toFixed(2)}</span></div>
                 <div className="flex justify-between text-[#7A5C3A]"><span>Shipping</span><span className="font-medium text-green-600">Free</span></div>
               </div>
               <div className="flex justify-between items-center text-lg font-bold text-[#2B1B12]">
                 <span>Total</span><span className="text-2xl text-[#C65A00]">${order.totalPrice.toFixed(2)}</span>
               </div>
             </div>

             <div className="bg-white rounded-2xl shadow-sm border border-[#E8D5B0] p-6 sm:p-8 space-y-6">
               <div>
                  <h3 className="font-semibold text-[#2B1B12] flex items-center gap-2 mb-3 pb-2 border-b border-[#E8D5B0]/50"><MapPin size={18} className="text-[#C65A00]" /> Delivery Address</h3>
                  <div className="text-sm text-[#7A5C3A] leading-relaxed">
                    <p className="font-semibold text-[#2B1B12] mb-1">{order.deliveryAddress?.fullName}</p>
                    <p>{order.deliveryAddress?.addressLine}</p>
                    <p>{order.deliveryAddress?.city}, {order.deliveryAddress?.state} {order.deliveryAddress?.pincode}</p>
                    <p className="mt-2 font-medium flex items-center gap-1.5"><span className="text-[#2B1B12]">Tel:</span> {order.deliveryAddress?.phone}</p>
                  </div>
               </div>
               <div className="pt-2">
                  <h3 className="font-semibold text-[#2B1B12] flex items-center gap-2 mb-3 pb-2 border-b border-[#E8D5B0]/50"><CreditCard size={18} className="text-[#C65A00]" /> Payment Details</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[#7A5C3A]">{order.paymentMethod}</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wide
                      ${order.paymentStatus === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                        order.paymentStatus === 'FAILED' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {order.paymentStatus}
                    </span>
                  </div>
               </div>
             </div>
           </div>
        </div>

      </div>
    </main>
  );
}
