import React from "react";

export default function SliderTitle({ text }) {
  return (
    <div className="w-full flex gap-2 items-center">
      <div className="border-t border-black w-full"></div>
      <span className="font-[600] text-nowrap">{text}</span>
      <div className="border-t border-black w-full"></div>
    </div>
  );
}
