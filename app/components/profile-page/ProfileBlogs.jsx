import React from "react";
import MyBlogs from "./comp/MyBlogs";

export default function ProfileBlogs() {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mb-10 poppins">
        <h3 className="text-2xl font-[600]">John Doe</h3>
        <div className="flex gap-3 text-[14px]">
          <div className="flex gap-[3px]">
            <span className="font-[600]">Followers:</span>
            <span>3,312</span>
          </div>
          <div className="flex gap-[3px]">
            <span className="font-[600]">Following:</span>
            <span>145</span>
          </div>
        </div>
      </div>
      <div className="pb-[14px] border-b w-fit flex gap-4">
        <span className="hover:underline underline-offset-[19px]">
          My Posts
        </span>
        <span className="hover:underline underline-offset-[19px]">
          Saved Posts
        </span>
      </div>
      <MyBlogs />
    </div>
  );
}
