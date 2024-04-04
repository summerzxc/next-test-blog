"use client";
import React, { useState } from "react";
import Image from "next/image";
import BlogCategory from "./BlogCategory";
import { BiBookmarkAlt } from "react-icons/bi";
import { BiSolidBookmarkAlt } from "react-icons/bi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export default function MainBlog() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-black w-full h-[200px] rounded-md"></div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex gap-1 items-center">
          <div className="bg-black h-[20px] w-[20px] rounded-full mr-1"></div>
          <span className="text-[13px]">John Doe</span>
          <span className="text-[13px] flex gap-1">
            in <BlogCategory text="Health" />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[20px] font-[600]">
            私がこれまで一緒に働いた中で最も賢い人が私に一つのことを教えてくれました
          </h4>
          <p className="text-[#888]">そしてそれは一生私に残ります</p>
        </div>
        <div className="flex gap-2 items-center text-[13px]">
          <span>12 min read</span>
          <span>•</span>
          <span>Mar 1, 2024</span>
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <div className="flex items-center gap-3  text-[#888]">
            <div className="group flex items-center gap-[3px]">
              <AiOutlineHeart className="group-hover:text-black text-[28px]" />
              <span className="text-[13px] group-hover:text-black">3K</span>
            </div>
            <div className="group flex items-center gap-[3px]">
              <IoChatbubbleOutline className="group-hover:text-black text-[26px]" />
              <span className="text-[13px] group-hover:text-black">321</span>
            </div>
          </div>
          {isHovered ? (
            <BiSolidBookmarkAlt
              size={23}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          ) : (
            <BiBookmarkAlt
              className="text-[#888]"
              size={23}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
