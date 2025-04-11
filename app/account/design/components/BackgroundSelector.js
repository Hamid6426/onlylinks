"use client";
import React, { useState } from "react";
// Import the necessary icons from React Icons
import { FaPalette, FaImage, FaVideo } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

const BACKGROUND_OPTIONS = [
  { value: "solid", icon: <FaPalette />, label: "Solid" },
  { value: "gradient", icon: <IoIosColorPalette />, label: "Gradient" },
  { value: "image", icon: <FaImage />, label: "Image" },
  { value: "video", icon: <FaVideo />, label: "Video" },
];

const BackgroundSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState("image");

  const handleSelect = (val) => {
    setSelected(val);
    onSelect?.(val);
  };

  return (
    <div className="grid grid-cols-4 place-items-center gap-2">
      {BACKGROUND_OPTIONS.map(({ value, icon, label }) => (
        <div key={value} role="button" className="w-full flex flex-col justify-content-center items-center" onClick={() => handleSelect(value)}>
          <div
            className={`w-full flex flex-col justify-content-center items-center border hover:border-purple-500 border-gray-600 py-8 rounded-xl  ${
              selected === value ? "selected" : ""
            }`}
          >
            {/* Render the React Icon */}
            <div className="text-3xl hover:text-purple-500">{icon}</div>
          </div>
          <div className="grid-text">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundSelector;
