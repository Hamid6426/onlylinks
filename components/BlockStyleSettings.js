"use client";

import React, { useState } from "react";

const blockStyles = [
  {
    value: "square",
    label: "Square",
    innerStyle: "w-full h-full", // default square style
  },
  {
    value: "round",
    label: "Round",
    innerStyle: "w-full h-full rounded-full", // full rounding
  },
  {
    value: "full_width",
    label: "Full Width",
    innerStyle: "w-full h-full", // full width style
  },
  {
    value: "custom",
    label: "Custom",
    innerStyle: "w-4/5 h-[28px] rounded", // custom style (80% width, 28px height, default rounding)
  },
];

const BlockStyleSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("custom");
  const [cornerRadius, setCornerRadius] = useState(8);
  const [transparency, setTransparency] = useState(0);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Tab Toggle */}
      <div
        className="tab-toggle flex justify-between items-center cursor-pointer p-3 bg-gray-100 border-b"
        onClick={toggleOpen}
      >
        <div className="tab-title font-semibold">Block style</div>
        <i className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>

      {isOpen && (
        <div className="p-3">
          {/* Block Style Options */}
          <div className="mt-3 grid grid-cols-4 gap-2 block-style">
            {blockStyles.map((option) => (
              <div
                key={option.value}
                role="button"
                tabIndex="0"
                onClick={() => setSelectedStyle(option.value)}
                data-val={option.value}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`grid-button h-16 flex items-center justify-center border rounded-md transition-all ${
                    selectedStyle === option.value
                      ? "border-gray-500"
                      : "border-gray-300"
                  }`}
                >
                  <div
                    className={`grid-bg ${option.innerStyle}`}
                    style={
                      option.value === "custom"
                        ? { borderRadius: "8px", height: "28px", width: "80%" }
                        : {}
                    }
                  ></div>
                </div>
                <div
                  className={`grid-text mt-1 text-sm ${
                    selectedStyle === option.value ? "font-bold" : ""
                  }`}
                >
                  {option.label}
                </div>
              </div>
            ))}
          </div>

          {/* Corner Radius Control */}
          <div className="block-style-corner-radius mt-3">
            <div className="my-6">
              <div className="h-px w-full" style={{ background: "rgb(224, 224, 224)" }}></div>
            </div>
            <div className="section-label font-semibold">Corner radius</div>
            <div className="mt-2 flex items-center">
              <span className="w-full">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  className="w-full"
                  value={cornerRadius}
                  onChange={(e) => setCornerRadius(e.target.value)}
                  data-test-name="block_style_radius"
                />
              </span>
              <div className="w-[120px] ml-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="form-control form-control-sm border p-1 rounded w-full"
                    value={cornerRadius}
                    max="50"
                    min="0"
                    onChange={(e) => setCornerRadius(e.target.value)}
                    data-test-name="block_style_radius"
                  />
                  <label className="mt-1">px</label>
                </div>
              </div>
            </div>
          </div>

          {/* Block Transparency Control */}
          <div className="mt-3">
            <div className="section-label font-semibold">Block transparency</div>
            <div className="mt-2 flex items-center">
              <span className="w-full">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  className="w-full"
                  value={transparency}
                  onChange={(e) => setTransparency(e.target.value)}
                  data-test-name="block_transparency"
                />
              </span>
              <div className="w-[120px] ml-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    className="form-control form-control-sm border p-1 rounded w-full"
                    value={transparency}
                    max="100"
                    min="0"
                    onChange={(e) => setTransparency(e.target.value)}
                    data-test-name="block_transparency"
                  />
                  <label className="mt-1">%</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockStyleSettings;
