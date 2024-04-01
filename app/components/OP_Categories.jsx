"use client";

import React, { useEffect, useState } from "react";
import Category from "./ui/OP_Category";
import axios from "axios";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get("/api/category");
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  },[]);
  return (
    <div className="w-full">
      {categories && categories.map((el)=><Category key={el._id} category={el}/>)}
      
    </div>
  );
}

// export default async function getServerSideProps() {
//   await connectDB();
// }
