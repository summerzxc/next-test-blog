"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-black text-center text-white english-display flex justify-center items-center">
      <div>
        <h1 className="text-3xl">This page is currently under development</h1>
        <p className="text-xl mt-2">Please check back later</p>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-neutral mt-4"
        >
          Click here to go back
        </button>
      </div>
    </div>
  );
}
