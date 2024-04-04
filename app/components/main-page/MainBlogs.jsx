import React from "react";
import MainBlog from "./comp/MainBlog";
export default function MainBlogs() {
  return (
    <div className="grid grid-cols-3 gap-12 mt-[40px]">
      <MainBlog />
      <MainBlog />
      <MainBlog />
      <MainBlog />
      <MainBlog />
      <MainBlog />
    </div>
  );
}
