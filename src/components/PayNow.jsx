import React from "react";
import payNowImage from "../assets/images/layered-card-section-01_size-tablet-up-v1.webp";
import payNowImage2 from "../assets/images/layered-card-section-02_size-tablet-up-v2.webp";
export default function PayNow() {
  return <section className="bg-red-500 w-full flex justify-center">
    <div className="w-[70%] bg-slate-400">
    <h1 className="lg:text-7xl mb-16 font-bold">Pay now or pay over time. It’s your choice.</h1>
    <main className="bg-black flex gap-5 text-white">
        <div className="p-12">
            <h1 className="text-5xl mb-28 font-bold">Pay in 3.</h1>
            <p className="font-bold text-lg">Pay the way that works for you. Split your purchases into 3 interest-free payments with no fees.2</p>
            <button className="border-[3px] my-8 px-7 py-3 rounded-full border-white font-bold">Learn About Pay in 3</button>
            <p>Pay in 3 is an unregulated credit agreement, so you will have fewer protections under this agreement than you would under a regulated credit agreement. Carefully consider whether the purchase is affordable and how you will make the repayments. Be aware of the possible impact of using Pay in 3 and of missing payments, including making other borrowing more difficult or more expensive. You may find our Spend Smarter Guide helpful.
            </p>
        </div>
        <img className="w-1/2 h-full object-cover" src={payNowImage} alt="pay now image" />
    </main>
    <main className="flex justify-center bg-green-800 mt-9">
        <div className="p-12">
            <h1 className="text-4xl mb-12 font-bold">Pay with PayPal Credit.</h1>
            <p className="font-bold text-lg">PayPal Credit is your reusable digital credit line almost anywhere PayPal is accepted. It also secured the title of Best Retail Finance Provider at the 2024 Smart Money People's Consumer Credit Awards for the third year straight.</p>
            <p className="font-medium my-2 text-lg">Representative 23.9% APR (variable).</p>
            <button className="border-[3px] my-4 px-7 py-3 rounded-full border-black font-bold">Apply for Paypal Credit</button>
            <div className="space-y-3 text-xs font-medium">
            <p>Subject to status. T&Cs apply.</p>
            <p>PayPal Credit is a regulated credit product.</p>
            <p>It is like a credit card and gives you a credit limit which can be used for promotional offers or making purchases at your standard variable rate.</p>
            </div>
        </div>
        <img className="w-1/2 object-cover" src={payNowImage2} alt="pay now image" />
    </main>
    </div>
  </section>
}
