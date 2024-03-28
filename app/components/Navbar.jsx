import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";


export default function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl title-blog">
          ブログ
        </a>
        <a href="/pages/publish" className="btn btn-sqaure btn-ghost">
          <FaPenFancy />
        </a>
        <a href="/pages/category_publish" className="btn btn-sqaure btn-ghost">
        <BiSolidCategory />

        </a>
      </div>

      <div className="navbar-end flex gap-2">
        <a href="/auth/login" className="btn btn-outline btn-primary">ログイン</a>
        <a href="/auth/register" className="btn btn-primary">登録</a>
      </div>
    </div>
  );
}
