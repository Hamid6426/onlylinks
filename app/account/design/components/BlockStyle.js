"use client";
import React, { useState } from "react";

const BlockStyle = () => {
  const [selectedStyle, setSelectedStyle] = useState("custom");

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  return (
    <div className="mt-3 grid grid-cols-4 gap-4 block-style">
      {/* Square Button */}
      <div
        role="button"
        className="p-3 px-4 h-16 border-black border rounded-xl"
        onClick={() => handleStyleChange("square")}
      >
        <div
          className={`h-10 shadow-md transition-all duration-300 ease-in-out transform ${
            selectedStyle === "square" ? "bg-purple-500 text-white" : "bg-gray-500"
          }`}
        >
          <div className="grid-bg"></div>
        </div>
        <div className="grid-text text-center mt-4 text-gray-700">Square</div>
      </div>

      {/* Round Button */}
      <div
        role="button"
        className="p-3 px-4 h-16 border-black border rounded-xl"
        onClick={() => handleStyleChange("round")}
      >
        <div
          className={`h-10 rounded-full shadow-md transition-all duration-300 ease-in-out transform ${
            selectedStyle === "round" ? "bg-purple-500 text-white" : "bg-gray-500"
          }`}
        >
          <div className="grid-bg border-radius-100"></div>
        </div>
        <div className="grid-text text-center mt-4 text-gray-700">Round</div>
      </div>

      {/* Full Width Button */}
      <div
        role="button"
        className="py-3 h-16 border-black border rounded-xl"
        onClick={() => handleStyleChange("full_width")}
      >
        <div
          className={`flex justify-center items-center h-10 shadow-md transition-all duration-300 ease-in-out transform ${
            selectedStyle === "full_width" ? "bg-purple-500 text-white" : "bg-gray-500"
          }`}
        >
          <div className="grid-bg w-full bg-black"></div>
        </div>
        <div className="grid-text text-center mt-4 text-gray-700">Full Width</div>
      </div>

      {/* Custom Button */}
      <div
        role="button"
        className="p-3 px-4 h-16 border-black border rounded-xl"
        onClick={() => handleStyleChange("custom")}
      >
        <div
          className={`h-10 w-10 mx-auto rounded-full shadow-md transition-all duration-300 ease-in-out transform ${
            selectedStyle === "custom" ? "bg-purple-500 text-white" : "bg-gray-500"
          }`}
        >
          <div
            className="grid-bg"
            style={{
              backgroundColor: selectedStyle === "custom" ? "#7c3aed" : "#6b7280",
            }}
          ></div>
        </div>
        <div className="grid-text text-center mt-4 text-gray-700">Custom</div>
      </div>
    </div>
  );
};

export default BlockStyle;
