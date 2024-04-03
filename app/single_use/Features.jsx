import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

export default function Features() {
  return (
    <div class="hero min-h-screen bg-base-200 py-[80px]">
      <div class="w-[1000px] flex flex-col gap-[60px]">
        <div className="w-full flex items-center justify-between">
          <div class="w-[400px]">
            <h1 class="text-5xl font-bold english-display">
              Uncover
              <br /> Hidden Gems
            </h1>
            <p class="py-6">
              秘められた宝物が待つ街。観光地以外のユニークな魅力、知る人ぞ知るスポット、地元ならではの体験をご紹介。
            </p>
            <a href="/pages/underdev">
              <button class="btn btn-primary">
                詳細
                <HiArrowRight />
              </button>
            </a>
          </div>
          <Image src="/cali.jpg" alt="hero" width={500} height={500} />
        </div>
        <div class="w-[1000px] flex items-center gap-10">
          <div className="basis-1/3">
            <h3 className="text-xl font-[600]">操作しやすい</h3>
            <hr className="border-1 border-black my-2" />
            <p>
              必要な情報に簡単にアクセスできるため、ユーザーエクスペリエンスを最大限に向上させます。
            </p>
          </div>
          <div className="basis-1/3">
            <h3 className="text-xl font-[600]">モバイル最適化デザイン</h3>
            <hr className="border-1 border-black my-2" />
            <p>
              このウェブサイトは、モバイルデバイスでの閲覧に最適化されたレスポンシブデザインを採用しています
            </p>
          </div>
          <div className="basis-1/3">
            <h3 className="text-xl font-[600]">簡単な共有機能</h3>
            <hr className="border-1 border-black my-2" />
            <p>
              このウェブサイトには、ソーシャルメディアでコンテンツを簡単に共有できる統合された機能が備わっています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
