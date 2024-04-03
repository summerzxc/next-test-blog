import React from "react";
import Navbar from "../../components/Navbar";
import { FiUpload } from "react-icons/fi";
import { BiSolidSend } from "react-icons/bi";
import FileUpload from "@/app/components/ui/FileUpload";

export default function Publish() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="pt-[100px]"></div>
      <div className="p-5 max-w-[1000px] mx-auto flex flex-col gap-5">
        <div className="w-full flex gap-5">
          <FileUpload/>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="タイトル"
              className="input input-bordered input-neutral placeholder:text-[#888] w-full max-w-xs"
            />{" "}
            <input
              type="text"
              placeholder="説明"
              className="input input-bordered input-neutral placeholder:text-[#888] w-full max-w-xs"
            />
          </div>
        </div>
        <div className="w-full h-[300px]">
          <textarea
            class="textarea textarea-primary w-full h-full resize-none"
            placeholder="ここにテキストを送信します 。。。"
          ></textarea>
        </div>
        <button className="btn btn-secondary">
          公開
          <BiSolidSend />
        </button>
      </div>
    </div>
  );
}
