"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import axios from "axios";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/category", {
        title,
        description,
      });
      console.log(response.data);
      setTitle("");
      setDescription("");
      setError(null);
    } catch (error) {
      console.error("Error:", error.response.data);
      setError(error.response.data.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="pt-[40px]"></div>
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl mb-6">カテゴリを公開する</h1>
        <div className="w-full flex flex-col gap-3 items-center">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <input
              type="text"
              placeholder="タイトル"
              className="input input-bordered input-neutral placeholder:text-[#888] w-full max-w-xs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="説明"
              className="input input-bordered input-neutral placeholder:text-[#888] w-full max-w-xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              className="mt-2 btn btn-secondary w-full"
              disabled={loading}
            >
              {loading ? "送信中..." : "公開"}
              <BiSolidSend />
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
