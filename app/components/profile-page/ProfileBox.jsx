import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare, // Corrected import
} from "react-icons/fa";

export default function ProfileBox() {
  return (
    <div className="w-full flex flex-col items-center gap-5 p-5 poppins tracking-tight">
      <div className="bg-black h-[100px] w-[100px] rounded-full"></div>
      <div className="flex flex-col gap-2 text-center">
        <h4 className="text-xl">John Doe</h4>
        <p className="text-[14px] text-[#888]">hello world!</p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <span>Social Links:</span>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <FaFacebookSquare />
            <span>Facebook</span>
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram />
            <span>Instagram</span>
          </li>
          <li className="flex items-center gap-2">
            <FaTwitterSquare /> {/* Corrected usage */}
            <span>Twitter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
