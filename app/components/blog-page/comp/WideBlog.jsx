"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiBookmarkAlt } from "react-icons/bi";
import { BiSolidBookmarkAlt } from "react-icons/bi";

export default function WideBlog() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="/pages/blog">
      <div className="w-full flex flex-col gap-3 py-6 border-b cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
            <span className="text-[14px]">John Doe</span>
          </div>
          <span>•</span>
          <span className="text-[14px]">Jan 12, 2024</span>
        </div>
        <div className="w-full flex justify-between">
          <div className="max-w-[600px] flex flex-col gap-3">
            <h3 className="text-2xl font-[600]">
              2024 年に向けた UX/UI デザインのトレンド
            </h3>
            <p>
              私が見つけた、ランディング ページを改善する最良の例です。 —
              最高のランディング ページはシンプルです。
              レオ・バーネットの言葉を借りれば、「シンプルにしてください。
              思い出に残るものにしてください。
              見てみたくなるようなものにしましょう。 楽しくしましょう
            </p>
            <div className="w-full flex justify-between items-center mt-2">
              <div className="flex gap-2 items-center">
                <div className="px-3 py-1 rounded-full border text-[12px] border-black">
                  UI/UX Design
                </div>
                <span className="text-[14px]">10 min read</span>
              </div>
              {isHovered ? (
                <BiSolidBookmarkAlt
                  size={20}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              ) : (
                <BiBookmarkAlt
                  size={20}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              )}
            </div>
          </div>
          <div className="w-[140px] h-[140px] bg-black rounded-md"></div>
        </div>
      </div>
    </a>
  );
}
