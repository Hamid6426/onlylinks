"use client";
import React, { useState } from "react";

const GradientBackgroundOptions = () => {
  const [selectedType, setSelectedType] = useState("linear");
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#ffffff");

  const gradientTypes = [
    { val: "linear", label: "Linear", getStyle: () => `linear-gradient(${color1}, ${color2})` },
    { val: "radial", label: "Radial", getStyle: () => `radial-gradient(${color1}, ${color2})` },
    { val: "diagonal", label: "Diagonal", getStyle: () => `linear-gradient(to right bottom, ${color1}, ${color2})` },
  ];

  return (
    <div className="page-bg-options mt-4">
      {/* Gradient type selection */}
      <div className="grid grid-cols-3 gap-4">
        {gradientTypes.map(({ val, label, getStyle }) => (
          <button
            key={val}
            type="button"
            className={`w-full h-16 rounded-xl shadow-md transition-all hover:border-purple-500 border-2 ${
              selectedType === val ? "ring-2 ring-purple-500 scale-105" : "hover:scale-105"
            }`}
            style={{ backgroundImage: getStyle() }}
            onClick={() => setSelectedType(val)}
          >
            <span className="text-sm font-semibold text-red-500 drop-shadow">{label}</span>
          </button>
        ))}
      </div>

      {/* Gradient color pickers */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div
              className="w-8 h-8 rounded-lg border-2 border-gray-300 shadow-md"
              style={{ backgroundColor: color1 }}
            />
          </label>
          <div className="text-sm font-medium text-purple-500">Color 1</div>
        </div>

        <div className="flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div
              className="w-8 h-8 rounded-lg border-2 border-gray-300 shadow-md"
              style={{ backgroundColor: color2 }}
            />
          </label>
          <div className="text-sm font-medium text-purple-500">Color 2</div>
        </div>
      </div>
    </div>
  );
};

export default GradientBackgroundOptions;
