"use client";
import React from "react";

const ColorSelect = ({ colorId, currentColor, label }) => (
  <div className="flex items-center gap-3">
    <div
      className="w-6 h-6 rounded-lg border-2 border-gray-400 shadow-sm cursor-pointer hover:scale-105 transition-transform"
      role="button"
      tabIndex="0"
      aria-label={label}
      data-color-id={colorId}
      data-current-color={currentColor}
      style={{ backgroundColor: currentColor }}
    ></div>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);

const AppearanceColorsSelector = () => (
  <div className="appearance-colors-custom mt-4 space-y-6">
    {/* Header Colors */}
    <section>
      <h4 className="text-sm font-semibold text-purple-500 mb-2">Header color</h4>
      <div className="grid grid-cols-1 gap-3">
        <ColorSelect colorId="header_text" currentColor="rgb(255, 0, 0)" label="Header text and icons" />
        <ColorSelect colorId="header_text_outline" currentColor="rgb(225, 0, 0)" label="Header text outline" />
        <ColorSelect colorId="header_text_bg" currentColor="rgb(0, 0, 0)" label="Header text background" />
      </div>
    </section>

    {/* Link Block Colors */}
    <section>
      <h4 className="text-sm font-semibold text-purple-500 mb-2">Link block colors</h4>
      <div className="grid grid-cols-1 gap-3">
        <ColorSelect colorId="link_block_bg" currentColor="rgb(255, 255, 255)" label="Link block background" />
        <ColorSelect colorId="link_block_button_text" currentColor="rgb(0, 0, 0)" label="Link button text" />
      </div>
    </section>

    {/* Block Colors */}
    <section>
      <h4 className="text-sm font-semibold text-purple-500 mb-2">Block colors</h4>
      <div className="grid grid-cols-1 gap-3">
        <ColorSelect colorId="block_text" currentColor="rgb(232, 255, 0)" label="Block text" />
      </div>
    </section>
  </div>
);

export default AppearanceColorsSelector;
