"use client";
import React, { useState } from "react";

const BlockTransparency = () => {
  const [transparency, setTransparency] = useState(100);

  const handleTransparencyChange = (event) => {
    setTransparency(event.target.value);
  };

  return (
    <>
      <div className="section-label mt-3">Block transparency</div>
      <div className="mt-2" style={{ display: "flex", alignItems: "center" }}>
        <span className="w-full">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            style={{ width: "100%" }}
            value={transparency}
            onChange={handleTransparencyChange}
            data-test-name="block_transparency"
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
              data-test-name="block_transparency"
            />
            <label className="mt-1">%</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockTransparency;
