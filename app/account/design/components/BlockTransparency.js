"use client";
import React, { useState } from "react";

const BlockTransparency = () => {
  const [transparency, setTransparency] = useState(100);

  const handleTransparencyChange = (event) => {
    setTransparency(Number(event.target.value));
  };

  return (
    <div className="mt-4">
      <div className="text-sm font-semibold text-purple-500 mb-2">Block Transparency</div>

      <div className="flex items-center gap-4">
        {/* Range Slider */}
        <div className="flex-grow">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={transparency}
            onChange={handleTransparencyChange}
            className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            data-test-name="block_transparency"
          />
        </div>

        {/* Number Input */}
        <div className="flex flex-col items-center h-full">
          <div className="flex items-center border h-full gap-2">
            <input
              type="number"
              className="border-gray-700 border form-control form-control-sm px-3 py-2 text-center rounded-md focus:ring-2 focus:ring-purple-500"
              value={transparency}
              max="100"
              min="0"
              onChange={(e) => setTransparency(Number(e.target.value))}
              data-test-name="block_transparency"
            />
            <label className="text-gray-700 h-full px-2 border-gray-700 border-t border-l border-b border-r py-2 rounded-md">
              %
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTransparency;
