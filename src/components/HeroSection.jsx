import React from "react";
import heroImage from "../assets/images/brand-moment-01_size-all.webp";
export default function HeroSection() {
  return (
    <section className="bg-red-500 pt-10">
      <button className="bg-black hover:bg-sky-300 text-white border-4 border-black w-28 py-2 hover:scale-105 transition-all duration-300 rounded-full">
        <p>Personal</p>
        <p>Business</p>
      </button>

      <div className="lg:w-[60%] md:w-[80%] w-[80%] bg-red-500 text-center mx-auto">
        <h1 className="md:text-7xl lg:text-8xl font-bold">Pay, send, and receive easily.</h1>
      </div>
      <main className="bg-white relative overflow-hidden mb-0 mx-auto mt-16 max-w-[500px] h-[350px] rounded-t-3xl">
        <h2 className="text-center text-5xl font-bold pt-10 ">PayPal</h2>
        <img
          className="w-full absolute -bottom-14 rounded-lg"
          src={heroImage}
          alt="hero image"
        /> 
      </main>
    </section>
  );
}
