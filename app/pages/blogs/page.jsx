import React from "react";
import Navbar from "@/app/components/Navbar";
import BlogBar from "@/app/components/blog-page/BlogBar";
import BlogCategories from "@/app/components/blog-page/Categories";
import BlogRightBar from "@/app/components/blog-page/BlogRightBar";
import BlogSlider from "@/app/components/blog-page/BlogSlider";
import Footer from "@/app/single_use/Footer";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <BlogBar />
      <div className="pt-[30px]"></div>
      <div className="w-[1200px] mx-auto flex gap-10">
        <div className="basis-[70%]">
          <BlogCategories />
          <BlogSlider />
        </div>
        <div className="basis-[30%]">
          <BlogRightBar />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
