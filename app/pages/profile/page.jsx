"use client";
import ProfileBox from "@/app/components/profile-page/ProfileBox";
import ProfileBlogs from "@/app/components/profile-page/ProfileBlogs";
import React from "react";

export default function Page() {
  return (
    <div className="w-[1200px] mx-auto mt-[120px]">
      <h2 className="text-3xl font-[600]">知の泉 / Profile</h2>
      <hr className="mt-5 mb-10"/>
      <div className="w-full flex gap-12">
        <div className="w-[70%]">
          <ProfileBlogs />
        </div>
        <div className="w-[30%]">
          <ProfileBox />
        </div>
      </div>
    </div>
  );
}
