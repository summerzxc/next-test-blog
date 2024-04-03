import React from "react";
import WideBlog from "./comp/WideBlog";

export default function BlogSlider() {
  return (
    <div className="w-full flex flex-col">
      <WideBlog/>
      <WideBlog/>
      <WideBlog/>
      <WideBlog/>
    </div>
  );
}
