import React from "react";
import MainBlog from "../main-page/comp/MainBlog";
import { IoArrowForward } from "react-icons/io5";


export default function MoreBlogs() {
  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl font-[600] mb-10">もっとブログ</h2>
      <div className="grid grid-cols-2 w-full gap-6">
        <MainBlog />
        <MainBlog />
      </div>
      <a href="/pages/main" className="float-right mt-4 text-lg font-[600] flex gap-1 items-center hover:text-primary hover:underline">続きを見る<IoArrowForward />
</a>
    </div>
  );
}
