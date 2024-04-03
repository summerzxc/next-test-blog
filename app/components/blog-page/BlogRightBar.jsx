import React from "react";
import SliderTitle from "./comp/SliderTitle";
import MiniBlog from "./comp/MiniBlog";
import { HiArrowRight } from "react-icons/hi";
import MiniCategories from "./comp/MiniCategories";
import MiniProfile from "./comp/MiniProfile";
import BarLink from "./comp/BarLink";
import { BiBookmarkAlt } from "react-icons/bi";

export default function BlogRightBar() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Latest Posts */}
      <div className="w-full">
        <SliderTitle text="最新記事" />
        <MiniBlog />
        <hr />
        <MiniBlog />
        <hr />
        <MiniBlog />
        <BarLink />
      </div>

      {/* Recommended Topics */}
      <div className="w-full flex flex-col gap-4">
        <SliderTitle text="おすすめのトピック" />
        <MiniCategories />
        <BarLink />
      </div>

      {/* Who to follow */}
      <div className="w-full">
        <SliderTitle text="誰をフォローするか" />
        <MiniProfile />
        <MiniProfile />
        <MiniProfile />
        <BarLink />
      </div>

      {/* Reading List */}
      <div className="w-full flex flex-col gap-3">
        <h3 className="font-[600]">リーディングリスト</h3>
        <p className="text-[14px] text-[#888]">任意のストーリーをクリックすると <span className="inline-block"><BiBookmarkAlt size={18}/></span>、リーディング リストまたは共有できるカスタム リストに簡単に追加できます。</p>
      </div>
    </div>
  );
}
