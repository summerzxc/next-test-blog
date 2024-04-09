"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/blog");
        console.log(response)
        setBlogs(response.data.blogs); // Assuming the API returns an array of blog objects
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.desciption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
