import React from "react";

export default function MiniProfile() {
  return (
    <div className="w-full flex justify-between py-4">
      <div className="flex gap-3 justify-start">
        <div className="h-[32px] w-[32px] bg-black rounded-full"></div>
        <div className="flex flex-col gap-1">
            <h4 className="font-[600]">John Doe</h4>
            <p className="text-[#888] text-[12px]">hello world </p>
        </div>
      </div>
      <button className="btn btn-outline btn-sm">フォローする</button>
    </div>
  );
}
