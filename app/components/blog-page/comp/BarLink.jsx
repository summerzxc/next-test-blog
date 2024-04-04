import React from 'react'
import { HiArrowRight } from "react-icons/hi";

export default function BarLink() {
  return (
    <div>
      <a
          href="/pages/main"
          className="mt-2 flex gap-2 items-center text-primary font-[600] text-[14px] hover:text-black duration-300"
        >
          続きを見る
          <HiArrowRight />
        </a>
    </div>
  )
}
