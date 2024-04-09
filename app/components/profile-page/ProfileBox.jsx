import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ProfileBox() {
  return (
    <div className="w-full flex flex-col items-center gap-5 p-5 poppins tracking-tight">
      <div className="bg-black h-[100px] w-[100px] rounded-full"></div>
      <div className="flex flex-col gap-2 text-center">
        <h4 className="text-xl">John Doe</h4>
        <p className="text-[14px] text-[#888]">hello world!</p>
      </div>
      <div className="w-full flex justify-center">
        <ul className="flex gap-2 text-xl">
          <li className="flex items-center gap-2">
            <FaFacebookSquare />
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram />
          </li>
          <li className="flex items-center gap-2">
            <FaTwitterSquare />
          </li>
        </ul>
      </div>
      <button
        className="btn btn-outline"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <FaPencil />
        プロファイル編集
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-2xl font-[600] mb-3">プロファイル編集</h2>
            <div className="w-full flex gap-5 items-center">
              <div className="w-[100px] h-[100px] bg-black rounded-full"></div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="John Doe"
                />
                <input
                  type="text"
                  className="input input-bordered input-sm"
                  placeholder="UI/UX Designer"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Facebook</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Instagram</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full"
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Twitter</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm w-full"
                />
              </label>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
