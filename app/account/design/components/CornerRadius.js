"use client";
import React, { useState } from "react";

const CornerRadius = () => {
  const [cornerRadius, setCornerRadius] = useState(0);

  const handleRadiusChange = (event) => {
    setCornerRadius(event.target.value);
  };

  return (
    <div className="block-style-corner-radius mt-3">
      <div className="my-6">
        <div className="h-px w-full" style={{ background: "rgb(224, 224, 224)" }}></div>
      </div>
      <div className="section-label">Corner radius</div>
      <div className="mt-2" style={{ display: "flex", alignItems: "center" }}>
        <span className="w-full">
          <input
            type="range"
            min="0"
            max="50"
            step="1"
            style={{ width: "100%" }}
            value={cornerRadius}
            onChange={handleRadiusChange}
            data-test-name="block_style_radius"
          />
        </span>
        <div>
          <div className="row-grid-2 gap-2 input-number">
            <input
              type="number"
              className="form-control form-control-sm"
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
  );
};

export default CornerRadius;
