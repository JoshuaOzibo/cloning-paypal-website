import React from "react";
import securityImage from "../assets/images/featured-stack-section_size-tablet-up-v1.webp";

export default function SecurityAways() {
  return (
    <section>
      <main>
        <h1>Security that’s always-on.</h1>
        <img className="w-1/2 h-full object-cover" src={securityImage} alt="security image" />
        <div>
            <p>Your transactions and payments are encrypted. PayPal does not share your full financial information with merchants.</p>
            <button>Learn more</button>
        </div>
      </main>
    </section>
  );
}
