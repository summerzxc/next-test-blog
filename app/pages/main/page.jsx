import MainBlogs from "@/app/components/main-page/MainBlogs";
import MainCategories from "@/app/components/main-page/MainCategories";
import Footer from "@/app/single_use/Footer";
import React from "react";
import { IoSearch } from "react-icons/io5";

// Explore deere baivl website iinha neriig explore toigoo hamt haruulna
// Category deere darngut categoryinha neriig category toigoo hamt haruulna
export default function Page() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col">
      <MainCategories />
      <div className="pt-[120px] pb-[50px] w-[800px] mx-auto flex flex-col gap-12">
        <h2 className="text-5xl font-[600] text-center">
          新しいブログを探索する
        </h2>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="すべてのトピックを検索"
          />
          <IoSearch />
        </label>
      </div>
      <hr />
      <MainBlogs/>
      <hr className="mt-[50px]"/>
      <Footer/>
    </div>
  );
}
