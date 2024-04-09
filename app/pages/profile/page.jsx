"use client";
import ProfileBox from "@/app/components/profile-page/ProfileBox";
import ProfileBlogs from "@/app/components/profile-page/ProfileBlogs";
import React from "react";
import Footer from "@/app/single_use/Footer";
import MainBar from "@/app/components/MainBar";

export default function Page() {
  return (
    <div className="w-[1200px] mx-auto">
      <MainBar/>
      <div className="mt-[120px]"></div>
      <h2 className="text-3xl font-[600]">知の泉 / Profile</h2>
      <hr className="mt-5 mb-10" />
      <div className="w-full flex gap-12">
        <div className="w-[70%]">
          <ProfileBlogs />
        </div>
        <div className="w-[30%]">
          <ProfileBox />
        </div>
      </div>
      <Footer />
    </div>
  );
}
