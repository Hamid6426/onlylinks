"use client";
import React, { useState } from "react";

const HeaderSettings = () => {
  const [textSize, setTextSize] = useState("l");
  const [textOutline, setTextOutline] = useState(false);
  const [transparency, setTransparency] = useState(0);

  return (
    <div>
      <div className="mt-3 section-label">Header text size</div>
      <div className="flex gap-2 mt-2 header-text-size">
        {["s", "m", "l"].map((size) => (
          <div
            key={size}
            role="button"
            className={`grid-button w-10 h-10 bold ${textSize === size ? "selected" : ""}`}
            data-val={size}
            onClick={() => setTextSize(size)}
          >
            {size.toUpperCase()}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1 mt-3">
        <label htmlFor="header_text_outline" className="toggle-switchy">
          <input
            type="checkbox"
            id="header_text_outline"
            name="header_text_outline"
            value="1"
            checked={textOutline}
            onChange={() => setTextOutline(!textOutline)}
          />
          <span className="toggle">
            <span className="switch"></span>
          </span>
        </label>
        <div className="toggle-switchy-text">Header text outline</div>
      </div>

      <div className="section-label mt-3">Header text background transparency</div>
      <div className="mt-2" style={{ display: "flex", alignItems: "center" }}>
        <span className="w-full">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            style={{ width: "100%" }}
            value={transparency}
            onChange={(e) => setTransparency(e.target.value)}
          />
        </span>
        <div style={{ width: "120px" }}>
          <div className="row-grid-2 gap-2 input-number">
            <input
              type="number"
              className="form-control form-control-sm"
              value={transparency}
              max="100"
              min="0"
              onChange={(e) => setTransparency(e.target.value)}
            />
            <label className="mt-1">%</label>
          </div>
        </div>
      </div>

      <div className="section-label mt-3">Header format</div>
      <div className="flex gap-2 mt-2 header-format">
        {["1", "2"].map((format) => (
          <div
            key={format}
            className={`grid-button w-10 h-10 ${textSize === format ? "selected" : ""}`}
            role="button"
            data-val={format}
            onClick={() => setTextSize(format)}
          >
            <div>{format}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSettings;
