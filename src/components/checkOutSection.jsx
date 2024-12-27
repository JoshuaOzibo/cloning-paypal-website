import React from "react";
import checkoutImage from "../assets/images/featured-split-section_size-all-v1.webp";
export default function CheckOutSection() {
  return (
    <section className="bg-blue-400 flex justify-center items-center">
      <main className="">
        <div>
          <h1>Check out your way.</h1>
          <div>
            <p>
              Shop at some of the world’s biggest brands with PayPal. Rest easy
              knowing PayPal Buyer Protection1 has your back while shopping on
              eligible purchases.
            </p>
            <button>Pay with PayPal</button>
          </div>
        </div>
      </main>
      <img className="w-1/2 h-full object-cover" src={checkoutImage} alt="checkout image" />
    </section>
  );
}
