import React from "react";

export default function MiniBlog() {
  return (
    <div className="w-full flex flex-col gap-2 py-4">
      <div className="flex items-center gap-2">
        <div className="flex gap-2 items-center">
          <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
          <span className="text-[12px]">John Doe</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h3 className="font-[600]">
          4月にアメリカで2017年以来初めての皆既日食が起こる: 知っておくべきこと
        </h3>
      </div>
    </div>
  );
}
