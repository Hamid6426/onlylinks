// app/components/LinkOptionsMenu.jsx
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Toggle from "./Toggle";
import { ALIGN_OPTIONS } from "@/utils/options";

export default function LinkOptionsMenu({ link, menuRef, onClose }) {

  async function updateSettings(action, linkId, value) {
    const res = await fetch(`/api/links/${action}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId, value }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Failed to update ${action}: ${errText}`);
    }

    return res.json();
  }

  // local UI state for all the options
  const [isTextHidden, setIsTextHidden] = useState(link.text_hidden || false);
  const [hasLinkShadow, setHasLinkShadow] = useState(link.link_shadow || false);
  const [hasLinkOutline, setHasLinkOutline] = useState(link.outline || false);
  const [textSize, setTextSize] = useState(link.font_size || 15);
  const [textAlign, setTextAlign] = useState(link.justify_content || "left");
  const [layout, setLayout] = useState(link.link_layout || "card");
  const [outlineColor, setOutlineColor] = useState(link.outline_color || "#ffffff");
  const [specialOutlines, setSpecialOutlines] = useState(
    Array.isArray(link.special_outlines) && link.special_outlines.length > 0 ? link.special_outlines[0] : "clippath2"
  );

  // === handlers that update both UI state + supabase ===

  const onTextHiddenChange = async (checked) => {
    setIsTextHidden(checked);
    try {
      await updateSettings("text-hide", link.id, checked);
    } catch (err) {
      console.error(err);
    }
  };

  const onLinkShadowChange = async (checked) => {
    setHasLinkShadow(checked);
    try {
      await updateSettings("link-shadow", link.id, checked);
    } catch (err) {
      console.error(err);
    }
  };

  const onLinkOutlineChange = async (checked) => {
    setHasLinkOutline(checked);
    try {
      await updateSettings("link-outline", link.id, checked);
    } catch (err) {
      console.error(err);
    }
  };

  const onTextSizeChange = async (e) => {
    const size = +e.target.value;
    setTextSize(size);
    try {
      await updateSettings("text-size", link.id, size);
    } catch (err) {
      console.error(err);
    }
  };

  const onJustifyChange = async (align) => {
    setTextAlign(align);
    try {
      await updateSettings("justify-text", link.id, align);
    } catch (err) {
      console.error(err);
    }
  };

  const onLayoutChange = async (val) => {
    setLayout(val);
    try {
      await updateSettings("link-layout", link.id, val);
    } catch (err) {
      console.error(err);
    }
  };

  const onOutlineColorChange = async (e) => {
    const color = e.target.value;
    setOutlineColor(color);
    try {
      await updateSettings("outline-color", link.id, color);
    } catch (err) {
      console.error(err);
    }
  };

  const onSpecialOutlinesChange = async (e) => {
    const effect = e.target.value;
    setSpecialOutlines(effect);
    try {
      await updateSettings("special-outlines", link.id, effect);
    } catch (err) {
      console.error(err);
    }
  };

  // Generic handler to update both state and Supabase
  const handleChange = async (setter, settingType, value) => {
    setter(value);
    try {
      await updateSettings(settingType, link.id, value);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
      {/* header */}
      <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
        OPTIONS
        <MdClose onClick={onClose} className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer" />
      </div>

      {/* controls */}
      <div className="flex flex-col gap-4 p-3">
        <Toggle
          label="Text Hidden"
          checked={isTextHidden}
          onChange={(value) => handleChange(setIsTextHidden, "text-hide", value)}
        />

        <div className="flex items-center gap-5">
          {/* Text Size */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Text Size</label>
            <select
              value={textSize}
              onChange={(event) => handleChange(setTextSize, "text-size", +event.target.value)}
              className="px-3 w-40 py-2 border rounded"
            >
              {Array.from({ length: 14 }, (_, i) => 11 + i).map((size) => (
                <option key={size} value={size}>
                  {size}
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
                  onClick={() => handleChange(setTextAlign, "justify-text", value)}
                  className={`p-2 border rounded ${
                    textAlign === value ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"
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
          onChange={(value) => handleChange(setHasLinkShadow, "link-shadow", value)}
        />
        <Toggle
          label="Link Outline"
          checked={hasLinkOutline}
          onChange={(value) => handleChange(setHasLinkOutline, "link-outline", value)}
        />

        {/* Layout */}
        <div className="flex flex-col">
          <p className="mb-1 font-medium">Layout</p>
          <div className="flex space-x-2">
            {["classic", "image", "card"].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleChange(setLayout, "link_layout", value)}
                className={`px-4 py-2 border rounded capitalize ${
                  layout === value ? "ring-2 ring-purple-500 bg-purple-50" : "bg-gray-100"
                }`}
              >
                {value}
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
                onChange={(event) => handleChange(setOutlineColor, "outline-color", event.target.value)}
                className="w-12 h-8 p-0 border-0"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Outline Effect</label>
              <select
                value={specialOutlines}
                onChange={(event) => handleChange(setSpecialOutlines, "special-outlines", event.target.value)}
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
