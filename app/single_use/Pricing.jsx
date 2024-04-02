import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";


export default function Pricing() {
  return (
    <div className="h-[560px] bg-[#32302F] w-full flex items-center text-white py-[80px]">
      <div class="max-w-[1000px] flex justify-between mx-auto">
        <div className="w-full flex items-center justify-between">
          <div class="w-[400px]">
            <h1 class="text-5xl font-bold english-display">
              Benefits that grow with you
            </h1>
            <p class="py-6">あなたと共に成長するメリット</p>
            <button class="btn btn-accent">
              詳細
              <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="p-6 h-[320px] w-[280px] text-black rounded-lg bg-[#EFEDE7]">
            <div className="rounded-[20px] px-3 py-1 bg-white text-black w-fit text-[14px]">
              ¥ 2,500 <span className="english-display">IN ASSETS</span>
            </div>
            <h4 className="font-[600] english-display text-3xl mt-6 flex gap-2 items-center">
              Premium <GoArrowRight/>
            </h4>
            <ul className="mt-4">
              <li className="flex gap-2 items-center">
                <IoMdCheckmark />
                <span>全ての記事へのアクセス</span>
              </li>
              <li className="flex gap-2 items-center">
                <IoMdCheckmark />
                <span>週1回のニュースレター</span>
              </li>
              <li className="flex gap-2 items-center">
                <IoMdCheckmark />
                <span>メールサポート</span>
              </li>
            </ul>
          </div>
          <div className="p-6 h-[320px] w-[280px] text-white rounded-lg bg-black">
            <div className="rounded-[20px] px-3 py-1 bg-white/20 text-white  w-fit text-[14px]">
              ¥ 15,000 <span className="english-display">IN ASSETS</span>
            </div>
            <h4 className="font-[600] english-display text-3xl mt-6 flex gap-2 items-center">
              Generation <GoArrowRight/>
            </h4>
            <ul className="mt-4">
              <li className="flex gap-2 items-center">
                <IoMdCheckmark />
                <span>週2回のニュースレター</span>
              </li>
              <li className="flex gap-2 items-center">
                <IoMdCheckmark />
                <span>優先メールサポート</span>
              </li>
              <li className="flex gap-2 items-center">
                <IoMdCheckmark />
                <span>独占アクセス</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
