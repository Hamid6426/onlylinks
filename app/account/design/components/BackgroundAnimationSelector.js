"use client";
import React from "react";

const BackgroundAnimationSelector = ({ value = "", onChange }) => {
  return (
    <div className="page-bg-animation mt-6">
      <div className="my-6">
        <div className="h-px w-full" style={{ background: "rgb(224, 224, 224)" }}></div>
      </div>

      <div className="section-label mt-3">Background animation</div>

      <select
        name="background_animation"
        className="form-select mt-1 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Disabled</option>
        <option value="cube">Cube</option>
        <option value="slide">Slide</option>
        {/* Optional: Conditionally show hidden gradient */}
        {/* <option value="gradient" style={{ display: "none" }}>Gradient</option> */}
      </select>
    </div>
  );
};

export default BackgroundAnimationSelector;
