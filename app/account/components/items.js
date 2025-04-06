// app/components/LinkItem.jsx

import React, { useState, useRef, useEffect } from "react";
import { MdClose, MdDashboard, MdDragIndicator, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from "react-icons/bi";
import ShareLinkButton from "@/app/account/components/ShareLinkButton";
import { updateSettings } from "@/lib/updateSettings";

const LinkItem = ({ link, index, draggingIndex, handleDragStart, handleDragOver, handleDragEnd }) => {
  // initialize UI state from your link row
  const [menuOpen, setMenuOpen] = useState(false);

  const [animationMenuOpen, setAnimationMenuOpen] = useState(false);
  const [scheduleMenuOpen, setScheduleMenuOpen] = useState(false);
  const [isTextHidden, setIsTextHidden] = useState(link.text_hidden || false);
  const [hasLinkShadow, setHasLinkShadow] = useState(link.link_shadow || false);
  const [hasLinkOutline, setHasLinkOutline] = useState(link.outline || false);
  const [textSize, setTextSize] = useState(link.font_size || 15);
  const [textAlign, setTextAlign] = useState(link.justify_content || "left");
  const [layout, setLayout] = useState(link.layout || "card");
  const [outlineColor, setOutlineColor] = useState(link.outline_color || "#ffffff");
  const [outlineEffect, setOutlineEffect] = useState(
    Array.isArray(link.special_outlines) && link.special_outlines.length > 0 ? link.special_outlines[0] : "clippath2"
  );
  const [animation, setAnimation] = useState(link.animation || "wobble");

  const menuRef = useRef(null);

  // close menu on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

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
      await updateSettings("link_layout", link.id, val);
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

  const onOutlineEffectChange = async (e) => {
    const effect = e.target.value;
    setOutlineEffect(effect);
    try {
      await updateSettings("outline-effect", link.id, effect);
    } catch (err) {
      console.error(err);
    }
  };

  const onAnimationChange = async (value) => {
    setAnimation(value);
    try {
      await updateSettings("animation", link.id, value);
    } catch (err) {
      console.error(err);
    }
  };

  // === JSX ===
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => handleDragOver(e, index)}
      onDragEnd={handleDragEnd}
      className={`
        relative w-full h-40 border mt-4 flex items-center transition-all duration-150
        ${draggingIndex === index ? "border-purple-500 bg-purple-50" : "border-gray-200"}
      `}
    >
      <div className="h-full flex items-center justify-center border-r-2 border-gray-100">
        <MdDragIndicator className="w-8 h-8 text-gray-700 mx-2 cursor-move" />
      </div>

      <div className="w-full h-full flex flex-col justify-start items-start">
        {/* link preview */}
        <div className="p-4 h-28 text-gray-800">
          <div className="text-2xl font-bold mb-3">{link.title}</div>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-xl">
            {link.url}
          </a>
        </div>

        {/* bottom bar */}
        <div className="h-12 w-full flex items-center px-3 gap-3 border-t-2 border-gray-100">
          <ShareLinkButton />

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center text-gray-600 hover:text-purple-600"
          >
            <MdDashboard className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => setAnimationMenuOpen((o) => !o)}
            className="flex items-center text-gray-600 hover:text-purple-600"
          >
            <MdKeyboardDoubleArrowUp className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => setScheduleMenuOpen((o) => !o)}
            className="flex items-center text-gray-600 hover:text-purple-600"
          >
            <MdKeyboardDoubleArrowUp className="h-6 w-6" />
          </button>

          {animationMenuOpen && (
            <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
              <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
                OPTIONS
                <MdClose
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
          )}

          {animationMenuOpen && (
            <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
              <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
                OPTIONS
                <MdClose
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
          )}

          {menuOpen && (
            <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
              {/* header */}
              <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
                OPTIONS
                <MdClose
                  onClick={() => setMenuOpen(false)}
                  className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
                />
              </div>

              {/* controls */}
              <div className="flex flex-col gap-4 p-3">
                {/* Text Hidden */}
                <Toggle label="Text Hidden" checked={isTextHidden} onChange={onTextHiddenChange} />

                {/* Text Size & Align */}
                <div className="flex items-center gap-5">
                  {/* size */}
                  <div className="flex flex-col">
                    <label className="mb-1 font-medium">Text Size</label>
                    <select value={textSize} onChange={onTextSizeChange} className="px-3 w-40 py-2 border rounded">
                      {Array.from({ length: 14 }, (_, i) => 11 + i).map((sz) => (
                        <option key={sz} value={sz}>
                          {sz}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* align */}
                  <div className="flex flex-col">
                    <p className="mb-1 font-medium">Text Align</p>
                    <div className="flex space-x-2">
                      {ALIGN_OPTIONS.map(({ value, Icon }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => onJustifyChange(value)}
                          className={`
                            p-2 border rounded
                            ${textAlign === value ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"}
                          `}
                        >
                          <Icon size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link Shadow & Outline */}
                <Toggle label="Link Shadow" checked={hasLinkShadow} onChange={onLinkShadowChange} />
                <Toggle label="Link Outline" checked={hasLinkOutline} onChange={onLinkOutlineChange} />

                {/* Layout */}
                <div className="flex flex-col">
                  <p className="mb-1 font-medium">Layout</p>
                  <div className="flex space-x-2">
                    {["classic", "image", "card"].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => onLayoutChange(val)}
                        className={`
                          px-4 py-2 border rounded capitalize
                          ${layout === val ? "ring-2 ring-purple-500 bg-purple-50" : "bg-gray-100"}
                        `}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Outline Color & Effect (only if outline is on) */}
                {hasLinkOutline && (
                  <>
                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Outline Color</label>
                      <input
                        type="color"
                        value={outlineColor}
                        onChange={onOutlineColorChange}
                        className="w-12 h-8 p-0 border-0"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-1 font-medium">Outline Effect</label>
                      <select
                        value={outlineEffect}
                        onChange={onOutlineEffectChange}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
