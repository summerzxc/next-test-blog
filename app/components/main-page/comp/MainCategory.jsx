import React from "react";

// props oor orj irne
export default function MainCategory({ category }) {
  return (
    <div className="px-5 py-2 bg-[#f1f1f1] flex gap-2 items-center rounded-full text-[14px] w-fit">
      {category}
    </div>
  );
}
