import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function BlogBar() {
  return (
    <div class="navbar bg-base-100 py-[20px]">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">
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
      <div className="flex gap-3 mr-3">
        <button className="btn btn-primary">
          <FaPenAlt />
          書く
        </button>
        <button className="btn btn-secondary">
          <FaBell />
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
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
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
    </div>
  );
}
