"use client";

import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { RiListIndefinite } from "react-icons/ri";
import { TiNews } from "react-icons/ti";
import { RiMenu4Fill } from "react-icons/ri";

import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="flex items-center w-full py-[20px] px-4 bg-glass md:justify-start justify-between fixed">
      <div className="navbar-start items-center md:flex hidden">
        <a
          href="/"
          className="btn btn-ghost font-[500]"
        >
          <span className="text-[32px]">知の泉</span>
        </a>
        <a href="/pages/publish" className="btn btn-sqaure btn-ghost">
          <FaPenFancy className="text-lg"/>
        </a>
        <a href="/pages/blogs" className="btn btn-sqaure btn-ghost">
          <TiNews className="text-lg"/>
        </a>
        <a href="/pages/category_publish" className="btn btn-sqaure btn-ghost">
          <BiSolidCategory className="text-lg"/>
        </a>
        <a href="/pages/categories" className="btn btn-sqaure btn-ghost">
          <RiListIndefinite className="text-lg"/>
        </a>
      </div>
      <div className="navbar-start flex items-center md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <RiMenu4Fill />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Publish Blog</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Publish Category</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl title-blog">
          ブログ
        </a>
      </div>
      <div className="navbar-end gap-2 md:flex hidden">
        {status === "authenticated" && (
          <span className="btn btn-outline text-sm english">
            {session.user.name}
          </span>
        )}
        {status === "authenticated" ? (
          <>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-primary"
            >
              ログアウト
            </button>
          </>
        ) : (
          <>
            <a href="/auth/login" className="btn btn-outline btn-primary">
              ログイン
            </a>
            <a href="/auth/register" className="btn btn-primary">
              登録
            </a>
          </>
        )}
      </div>
      <div className="dropdown dropdown-end md:hidden block">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
