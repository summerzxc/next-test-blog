import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-[#E4E8D2]">
      <div className="flex items-center  w-[1000px] justify-between">
        <div className="max-w-[600px]">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="english-display">
              Start Your
              <br /> Journey Here
            </span>
          </h1>
          <p className="mb-5">
            想像を超える冒険があなたを待っています。
            <br />
            ここから、踏み出しましょう
          </p>
          <button className="btn btn-primary">
            始める
            <HiArrowRight />
          </button>
        </div>
          <Image
            src="/vase.webp"
            alt="hero"
            width={500}
            height={500}
            className="rounded-lg"
          />
      </div>
    </div>
  );
}
