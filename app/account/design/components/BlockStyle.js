"use client";
import React, { useState } from "react";

const BlockStyle = () => {
  const [selectedStyle, setSelectedStyle] = useState("custom");

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  return (
    <div className="mt-3 row-grid-4 block-style">
      <div role="button" onClick={() => handleStyleChange("square")}>
        <div className={`grid-button h-16 ${selectedStyle === "square" ? "selected" : ""}`} role="button">
          <div className="grid-bg"></div>
        </div>
        <div className="grid-text">Square</div>
      </div>
      <div role="button" onClick={() => handleStyleChange("round")}>
        <div className={`grid-button h-16 ${selectedStyle === "round" ? "selected" : ""}`} role="button">
          <div className="grid-bg border-radius-100"></div>
        </div>
        <div className="grid-text">Round</div>
      </div>
      <div role="button" onClick={() => handleStyleChange("full_width")}>
        <div className={`grid-button h-16 ${selectedStyle === "full_width" ? "selected" : ""}`} role="button">
          <div className="grid-bg w-full"></div>
        </div>
        <div className="grid-text">Full Width</div>
      </div>
      <div role="button" onClick={() => handleStyleChange("custom")}>
        <div className={`grid-button h-16 ${selectedStyle === "custom" ? "selected" : ""}`} role="button">
          <div className="grid-bg h-[28px]" style={{ height: "28px", width: "80%", borderRadius: "8px" }}></div>
        </div>
        <div className="grid-text selected">Custom</div>
      </div>
    </div>
  );
};

export default BlockStyle;
