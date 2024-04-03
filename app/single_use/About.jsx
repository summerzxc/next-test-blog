import React from "react";
import Image from "next/image";
import CountUpComponent from "../animations/CountUpAnimation";

export default function About() {
  return (
    <div class="hero min-h-screen bg-[#E0DCD1] py-[80px]">
      <div class="w-[1000px] flex flex-col gap-[60px]">
        <div className="w-full flex items-center justify-between">
          <Image
            src="/castle.jpeg"
            alt="hero"
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
          <div class="w-[500px]">
            <h1 class="text-5xl font-bold english-display">
              Trusted by over <br /> 3 million People
            </h1>
            <p class="py-6">
              当ブログは、世界中のさまざまなトピックについて魅力的な情報を共有することを目指しています。
              私たちの目標は、技術、文化、健康、旅行などのさまざまな分野で専門的に作成されたコンテンツを提供することで、読者の人生をインスピレーションと豊かさで満たすことです。
              是非、私たちと一緒に発見とインスピレーションの旅に参加してください。
            </p>
          </div>
        </div>
        <div class="w-[1000px] flex items-center gap-10">
          <div className="basis-1/3">
            <hr className="border-1 border-black my-2" />
            <h2 className="text-5xl my-3 font-[600]"><CountUpComponent end={1000}/>以上</h2>
            <p className="text-xl font-[600]">掲載記事数</p>
          </div>
          <div className="basis-1/3">
            <hr className="border-1 border-black my-2" />
            <h2 className="text-5xl my-3 font-[600]"><CountUpComponent end={50}/>万以上</h2>
            <p className="text-xl font-[600]">満足いただいた読者数</p>
          </div>
          <div className="basis-1/3">
            <hr className="border-1 border-black my-2" />
            <h2 className="text-5xl my-3 font-[600]"><CountUpComponent end={5000}/>以上</h2>
            <p className="text-xl font-[600]">参加型コメント数</p>
          </div>
        </div>
      </div>
    </div>
  );
}
