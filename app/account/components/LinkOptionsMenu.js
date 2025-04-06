// app/components/LinkOptionsMenu.jsx
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Toggle from "./Toggle";
import { ALIGN_OPTIONS } from "@/utils/options";
import { updateSettings } from "@/lib/updateSettings";

export default function LinkOptionsMenu({ link, menuRef, onClose }) {
  // local UI state for all the options
  const [isTextHidden, setIsTextHidden] = useState(link.text_hidden || false);
  const [hasLinkShadow, setHasLinkShadow] = useState(link.link_shadow || false);
  const [hasLinkOutline, setHasLinkOutline] = useState(link.outline || false);
  const [textSize, setTextSize] = useState(link.font_size || 15);
  const [textAlign, setTextAlign] = useState(link.justify_content || "left");
  const [layout, setLayout] = useState(link.layout || "card");
  const [outlineColor, setOutlineColor] = useState(link.outline_color || "#ffffff");
  const [outlineEffect, setOutlineEffect] = useState(
    Array.isArray(link.special_outlines) && link.special_outlines.length > 0
      ? link.special_outlines[0]
      : "clippath2"
  );

  // generic helper to update both state + Supabase
  const handleChange = (setter, settingType, value) => {
    setter(value);
    updateSettings(settingType, link.id, value).catch(console.error);
  };

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50"
    >
      {/* header */}
      <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
        OPTIONS
        <MdClose
          onClick={onClose}
          className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
        />
      </div>

      {/* controls */}
      <div className="flex flex-col gap-4 p-3">
        <Toggle
          label="Text Hidden"
          checked={isTextHidden}
          onChange={(v) => handleChange(setIsTextHidden, "text-hide", v)}
        />

        <div className="flex items-center gap-5">
          {/* Text Size */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Text Size</label>
            <select
              value={textSize}
              onChange={(e) =>
                handleChange(setTextSize, "text-size", +e.target.value)
              }
              className="px-3 w-40 py-2 border rounded"
            >
              {Array.from({ length: 14 }, (_, i) => 11 + i).map((sz) => (
                <option key={sz} value={sz}>
                  {sz}
                </option>
              ))}
            </select>
          </div>

          {/* Text Align */}
          <div className="flex flex-col">
            <p className="mb-1 font-medium">Text Align</p>
            <div className="flex space-x-2">
              {ALIGN_OPTIONS.map(({ value, Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    handleChange(setTextAlign, "justify-text", value)
                  }
                  className={`p-2 border rounded ${
                    textAlign === value
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <Toggle
          label="Link Shadow"
          checked={hasLinkShadow}
          onChange={(v) => handleChange(setHasLinkShadow, "link-shadow", v)}
        />
        <Toggle
          label="Link Outline"
          checked={hasLinkOutline}
          onChange={(v) => handleChange(setHasLinkOutline, "link-outline", v)}
        />

        {/* Layout */}
        <div className="flex flex-col">
          <p className="mb-1 font-medium">Layout</p>
          <div className="flex space-x-2">
            {["classic", "image", "card"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() =>
                  handleChange(setLayout, "link_layout", val)
                }
                className={`px-4 py-2 border rounded capitalize ${
                  layout === val
                    ? "ring-2 ring-purple-500 bg-purple-50"
                    : "bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Outline color + effect (only if outline on) */}
        {hasLinkOutline && (
          <>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Outline Color</label>
              <input
                type="color"
                value={outlineColor}
                onChange={(e) =>
                  handleChange(setOutlineColor, "outline-color", e.target.value)
                }
                className="w-12 h-8 p-0 border-0"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Outline Effect</label>
              <select
                value={outlineEffect}
                onChange={(e) =>
                  handleChange(setOutlineEffect, "outline-effect", e.target.value)
                }
                className="px-3 py-2 border rounded"
              >
                <option value="static">Static</option>
                <option value="glowing">Glowing</option>
                <option value="clippath">Clippath</option>
                <option value="clippath2">Clippath2</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
