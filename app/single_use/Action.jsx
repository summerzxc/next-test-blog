import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Action() {
  return (
    <div className="hero min-h-screen bg-[#E8DFDC] py-[80px]">
      <div className="hero-content text-center">
        <div className="max-w-[1000px]">
          <h1 className="text-5xl font-bold english-display">
            Embark on Your Writing Journey Here
          </h1>
          <p className="py-6">
            文章を書くことへの旅を始める準備はできていますか？当サイトでは、執筆に関する情報やアドバイスを提供し、あなたのクリエイティブな才能を引き出すお手伝いをします。さあ、新しいアイデアを探求し、ストーリーを紡ぎましょう。
          </p>
          <a href="/pages/blogs">
            <button className="btn btn-primary">
              書き始める
              <HiArrowRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
