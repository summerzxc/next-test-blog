"use client";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";

export default function FileUpload({ onChange }) {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [hovered, setHovered] = useState(false); // State to track hover state

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    onChange(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = () => {
    setUploadedImage(null); // Reset uploaded image
  };

  const FileUploadHandle = async () => {
    const uploadImageUrl = await UploadToCloudinary(uploadedImage);
    
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center text-center">
      {uploadedImage ? (
        <div
          className="relative h-[200px] w-[200px] rounded-md overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleImageChange}
        >
          <Image
            src={uploadedImage}
            alt="Uploaded"
            layout="fill"
            objectFit="cover" // Set object fit to cover
          />
          {hovered && ( // Display overlay only when hovered
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xs opacity-0 transition-opacity duration-300 hover:opacity-100">
              Remove / 取り除く
            </div>
          )}
        </div>
      ) : (
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="border border-primary h-[200px] w-[200px] rounded-md flex justify-center items-center">
            <FiUpload className="text-[32px]" />
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      )}
    </div>
  );
}
