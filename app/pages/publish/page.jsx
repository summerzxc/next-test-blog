"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { BiSolidSend } from "react-icons/bi";
import FileUpload from "@/app/components/ui/FileUpload";
import axios from "axios";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (file) => {
    console.log(file);
    setImage(file);
    
  };
  

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("text", text);
    console.log(formData)
    try {
      const response = await axios.post("/api/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        console.log("Blog post created successfully!");
        // Optionally, redirect the user to a success page or display a success message
      } else {
        console.error("Failed to create blog post");
        // Handle error cases, show error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="pt-[100px]"></div>
      <div className="p-5 max-w-[1000px] mx-auto flex flex-col gap-5">
        <div className="w-full flex gap-5">
          <FileUpload onChange={handleFileChange} />
          <div className="flex flex-col gap-3">
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
          </div>
        </div>
        <div className="w-full h-[300px]">
          <textarea
            className="textarea textarea-primary w-full h-full resize-none"
            placeholder="ここにテキストを送信します 。。。"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-secondary" onClick={handleSubmit}>
          公開
          <BiSolidSend />
        </button>
      </div>
    </div>
  );
}
