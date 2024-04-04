"use client";
import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BiBookmarkAlt } from "react-icons/bi";
import { signOut } from "next-auth/react";

export default function BlogBar() {
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div class="flex justify-between w-[1200px] mx-auto bg-base-100 py-[20px]">
      <div class="flex-1 flex gap-2">
        <a href="/" class="btn btn-ghost text-xl">
          <span className="text-[32px]">知の泉</span>
        </a>
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="flex items-center mr-3">
        <a href="/pages/publish">
          <button className="btn btn-sm btn-outline mr-2">
            <FaPenAlt />
            書く
          </button>
        </a>
        <button className="btn-ghost btn">
          <FaBell size={18} />
        </button>
        <button className="btn-ghost btn">
          <BiBookmarkAlt size={18} />
        </button>
      </div>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/pages/profile" class="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a href="/pages/underdev">Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
