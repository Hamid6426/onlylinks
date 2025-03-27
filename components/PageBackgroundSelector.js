"use client";

import React, { useState } from "react";

const backgrounds = [
  { value: "solid", label: "Solid", icon: "bx bx-palette" },
  { value: "gradient", label: "Gradient", icon: "bx bxs-color" },
  { value: "image", label: "Image", icon: "bx bx-image" },
  { value: "video", label: "Video", icon: "bx bx-video" },
];

const PageBackgroundSelector = () => {
  const [selected, setSelected] = useState("image");

  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      {backgrounds.map((bg) => (
        <div
          key={bg.value}
          role="button"
          className="cursor-pointer text-center"
          onClick={() => setSelected(bg.value)}
          data-val={bg.value}
        >
          <div
            className={`p-2 border rounded flex items-center justify-center transition-all 
            ${selected === bg.value ? "border-gray-500 bg-gray-100" : "border-gray-300"}`}
          >
            <i className={bg.icon}></i>
          </div>
          <div className="mt-1 text-sm">{bg.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PageBackgroundSelector;
