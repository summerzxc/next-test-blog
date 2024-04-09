import MainBar from "@/app/components/MainBar";
import Comments from "@/app/components/single-blog/Comments";
import MoreBlogs from "@/app/components/single-blog/MoreBlogs";
import Footer from "@/app/single_use/Footer";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div className="w-[1200px] mx-auto flex justify-center flex-col items-center">
      <MainBar />
      <div className="w-[700px] flex flex-col mt-[100px] gap-10">
        <div className="flex gap-4 flex-col">
          <h1 className="text-3xl font-[600]">映画/書籍推薦システム</h1>
          <p className="text-[#888]">
            この文は、印刷やウェブデザインなどの業界で使用されるダミーテキストであり、実際の意味はありません
          </p>
        </div>
        <div className="bg-black h-[400px] w-full rounded-md"></div>
        <p className="leading-[180%]">
          この文は、印刷やウェブデザインなどの業界で使用されるダミーテキストであり、実際の意味はありません。代わりに、レイアウトやデザインのプロセスを示すために使われます。このテキストは、1500年代に存在したラテン語の文学作品から取られた部分を組み合わせて作成されました。そのため、実際の言語としての意味はありませんが、テキストの長さやレイアウトの見た目をテストするのに役立ちます。
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-black h-[80px] w-[80px] rounded-full"></div>
            <div className="flex flex-col">
              <h3>John Doe</h3>
              <span className="text-[14px] text-[#888]">UI/UX Designer</span>
            </div>
          </div>
          <div className="btn btn-outline">フォローする</div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3  text-[#888]">
            <div className="group flex items-center gap-[3px]">
              <AiOutlineHeart className="group-hover:text-black text-[28px]" />
              <span className="text-[13px] group-hover:text-black">3K</span>
            </div>
            <div className="group flex items-center gap-[3px]">
              <IoChatbubbleOutline className="group-hover:text-black text-[26px]" />
              <span className="text-[13px] group-hover:text-black">321</span>
            </div>
          </div>
          <span className="text-[13px] text-[#888]">Mar 13, 2024</span>
        </div>
        <hr />
        <h3 className="text-3xl font-[600]">コメント</h3>
        <Comments />
        <div className="w-full px-5 rounded-md flex flex-col gap-5">
          <span className="font-[600] text-xl">ここにコメントを残してください</span>
          <textarea className="textarea resize-none textarea-bordered" style={{borderRadius: "8px"}} placeholder="ここに書いてください"></textarea>
          <button className="btn btn-neutral">送信</button>
        </div>
        <MoreBlogs/>
      </div>
      <Footer/>
    </div>
  );
}
