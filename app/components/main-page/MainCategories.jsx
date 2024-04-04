import React from "react";
import { FaHatWizard } from "react-icons/fa6";
import MainCategory from "./comp/MainCategory";

export default function MainCategories() {
  return (
    <div className="w-full flex mt-[40px] items-center">
      <div className="px-5 py-2 bg-[#f1f1f1] flex gap-2 items-center rounded-full text-[14px] text-nowrap border border-black">
        <FaHatWizard />
        <span>Explore / 探検する</span>
      </div>
      <div className="h-[30px] w-[1px] border-r mx-3 border-black"></div>
      <div className="w-full flex gap-2 font-[600]">
        <MainCategory category="旅行"/>
        <MainCategory category="ライフスタイル"/>
        <MainCategory category="家族"/>
        <MainCategory category="科学"/>
        <MainCategory category="動物"/>
      </div>
    </div>
  );
}
