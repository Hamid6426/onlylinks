"use client";
import React from "react";

const BackgroundAnimationSelector = ({ value = "", onChange }) => {
  return (
    <div className="page-bg-animation mt-6">
      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-6" />

      {/* Label */}
      <div className="text-sm font-medium text-gray-700 mb-2">
        Background animation
      </div>

      {/* Select input */}
      <select
        name="background_animation"
        className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Disabled</option>
        <option value="cube">Cube</option>
        <option value="slide">Slide</option>
        {/* <option value="gradient" style={{ display: "none" }}>Gradient</option> */}
      </select>
    </div>
  );
};

export default BackgroundAnimationSelector;
