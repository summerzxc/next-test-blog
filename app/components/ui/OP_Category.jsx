import React from "react";
import { FaPenNib } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function Category({ id, category }) {
  return (
    <div key={id} className="flex justify-between items-center bg-neutral px-4 py-3.5 rounded-lg mb-2">
      <span>{category.title}</span>
      <div className="flex gap-2">
        <button className="btn btn-warning btn-outline">
          <FaPenNib />
        </button>
        <button className="btn btn-error">
          <MdDelete className="text-lg" />
        </button>
      </div>
    </div>
  );
}
