"use client";
import React, { useState } from "react";

const SolidBackgroundOptions = () => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (e) => {
    setColor(e.target.value);
    // Optionally emit this to parent via props
  };

  return (
    <div className="page-bg-options mt-4">
      <div className="flex items-center gap-4">
        {/* Hidden input but styled div acts as visible trigger */}
        <label className="relative cursor-pointer">
          <input
            type="color"
            value={color}
            onChange={handleChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div
            className="w-8 h-8 rounded-lg border-2 border-gray-300 shadow-md transition-transform transform hover:scale-105"
            style={{ backgroundColor: color }}
          />
        </label>
        <div className="text-sm font-medium text-purple-500">Page background color</div>
      </div>
    </div>
  );
};

export default SolidBackgroundOptions;
