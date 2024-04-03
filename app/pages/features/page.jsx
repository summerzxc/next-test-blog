import Navbar from "@/app/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/features-hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">私たちの特徴を発見してください</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
