"use client";
import React from "react";

const ColorSelect = ({ colorId, currentColor, label }) => (
  <div className="flex items-center">
    <div
      className="color-select"
      role="button"
      tabIndex="0"
      data-color-id={colorId}
      data-current-color={currentColor}
      style={{ backgroundColor: currentColor }}
    ></div>
    <div className="section-label-sm px-3">{label}</div>
  </div>
);

const AppearanceColorsSelector = () => (
  <div>
    {/* Header Colors */}
    <div className="relative mt-3 appearance-colors-custom">
      <div className="section-label-bold mt-3">Header color</div>
      <div className="grid row-grid-2 mt-1">
        <ColorSelect colorId="header_text" currentColor="rgb(255, 0, 0)" label="Header text and icons" />
        <ColorSelect colorId="header_text_outline" currentColor="rgb(225, 0, 0)" label="Header text outline" />
        <ColorSelect colorId="header_text_bg" currentColor="rgb(0, 0, 0)" label="Header text background" />
      </div>

      {/* Link Block Colors */}
      <div className="section-label-bold mt-3">Link block colors</div>
      <div className="grid row-grid-2 mt-1">
        <ColorSelect colorId="link_block_bg" currentColor="rgb(255, 255, 255)" label="Link block background" />
        <ColorSelect colorId="link_block_button_text" currentColor="rgb(0, 0, 0)" label="Link button text" />
      </div>

      {/* Block Colors */}
      <div className="section-label-bold mt-3">Block colors</div>
      <div className="grid row-grid-1 mt-1">
        <ColorSelect colorId="block_text" currentColor="rgb(232, 255, 0)" label="Block text" />
      </div>
    </div>
  </div>
);

export default AppearanceColorsSelector;
