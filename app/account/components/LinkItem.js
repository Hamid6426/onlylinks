// app/components/LinkItem.jsx

import React, { useState, useRef, useEffect } from "react";
import {
  MdClose,
  MdDashboard,
  MdDragIndicator,
  MdKeyboardDoubleArrowUp,
  MdImage,
  MdSchedule,
  MdLaunch,
  MdLock,
  MdAnalytics,
  MdVisibility,
} from "react-icons/md";
import ShareLinkButton from "@/app/account/components/ShareLinkButton";
import { updateSettings } from "@/lib/updateSettings";
import LinkOptionsMenu from "./LinkOptionsMenu";
import DeleteLinkButton from "@/components/DeleteLinkButton";
import Link from "next/link";
import { getDecodedToken, getUserId } from "@/utils/decoded";

export default function LinkItem({ link, index, draggingIndex, handleDragStart, handleDragOver, handleDragEnd }) {
  // --- which menu is open? ---
  const [optionMenuOpen, setOptionMenuOpen] = useState(false);
  const [imageMenuOpen, setImageMenuOpen] = useState(false);
  const [animationMenuOpen, setAnimationMenuOpen] = useState(false);
  const [scheduleMenuOpen, setScheduleMenuOpen] = useState(false);
  const [redirectMenuOpen, setRedirectMenuOpen] = useState(false);
  const [lockMenuOpen, setLockMenuOpen] = useState(false);
  const [analyticsMenuOpen, setAnalyticsMenuOpen] = useState(false);

  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);

  // Initialize on client side
  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  // single ref for any open menu
  const menuRef = useRef(null);

  // close *any* menu on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOptionMenuOpen(false);
        setImageMenuOpen(false);
        setAnimationMenuOpen(false);
        setScheduleMenuOpen(false);
        setRedirectMenuOpen(false);
        setLockMenuOpen(false);
        setAnalyticsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // --- helpers to toggle one menu & close the others ---
  const openOnly = (setter) => {
    // close all first
    setOptionMenuOpen(false);
    setImageMenuOpen(false);
    setAnimationMenuOpen(false);
    setScheduleMenuOpen(false);
    setRedirectMenuOpen(false);
    setLockMenuOpen(false);
    setAnalyticsMenuOpen(false);
    // open the one
    setter((o) => !o);
  };

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
      {/* drag handle */}
      <div className="h-full flex items-center justify-center border-r-2 border-gray-100">
        <MdDragIndicator className="w-8 h-8 text-gray-700 mx-2 cursor-move" />
      </div>

      {/* preview + controls */}
      <div className="w-full h-full flex flex-col justify-start items-start">
        {/* link preview */}
        <div className="p-4 h-28 text-gray-800">
          <div className="text-2xl font-bold mb-3">{link.title}</div>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-xl">
            {link.url}
          </a>
        </div>

        {/* bottom bar */}
        <div className="h-12 w-full flex justify-between items-center px-3 gap-3 border-t-2 border-gray-100">
          <div className="flex items-center gap-3">
            {/* 1. Option */}
            <button
              type="button"
              onClick={() => openOnly(setOptionMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdDashboard className="h-6 w-6" />
            </button>

            {/* 2. Image */}
            <button
              type="button"
              onClick={() => openOnly(setImageMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdImage className="h-6 w-6" />
            </button>

            {/* 3. Animation */}
            <button
              type="button"
              onClick={() => openOnly(setAnimationMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdKeyboardDoubleArrowUp className="h-6 w-6" />
            </button>

            {/* 4. Schedule */}
            <button
              type="button"
              onClick={() => openOnly(setScheduleMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdSchedule className="h-6 w-6" />
            </button>

            {/* 5. Redirect */}
            <button
              type="button"
              onClick={() => openOnly(setRedirectMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdLaunch className="h-6 w-6" />
            </button>

            {/* 6. Lock */}
            <button
              type="button"
              onClick={() => openOnly(setLockMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdLock className="h-6 w-6" />
            </button>

            {/* 7. Analytics */}
            <button
              type="button"
              onClick={() => openOnly(setAnalyticsMenuOpen)}
              className="flex items-center text-gray-600 hover:text-purple-600"
            >
              <MdAnalytics className="h-6 w-6" />
            </button>
          </div>

          {/* HELPER BUTTONS */}
          <div className="flex items-center gap-3">
            <Link href={`/${decoded.username}`}>
              <MdVisibility className="h-6 w-6 text-gray-600" />
            </Link>
            <ShareLinkButton />
            <DeleteLinkButton />
          </div>
        </div>

        {/* === Menus === */}

        {/* 1. Options */}
        {optionMenuOpen && <LinkOptionsMenu link={link} menuRef={menuRef} onClose={() => setOptionMenuOpen(false)} />}

        {/* 2. Image */}
        {imageMenuOpen && (
          <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
            <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
              IMAGE SETTINGS
              <MdClose
                onClick={() => setImageMenuOpen(false)}
                className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
              />
            </div>
            <div className="p-4">{/* TODO: your image‐related controls (upload, crop, size, etc.) */}</div>
          </div>
        )}

        {/* 3. Animation */}
        {animationMenuOpen && (
          <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
            <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
              ANIMATION SETTINGS
              <MdClose
                onClick={() => setAnimationMenuOpen(false)}
                className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
              />
            </div>
            <div className="p-4">{/* you already have ANIMATION_OPTIONS, just render them here */}</div>
          </div>
        )}

        {/* 4. Schedule */}
        {scheduleMenuOpen && (
          <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
            <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
              SCHEDULE
              <MdClose
                onClick={() => setScheduleMenuOpen(false)}
                className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
              />
            </div>
            <div className="p-4">{/* TODO: your scheduling UI */}</div>
          </div>
        )}

        {/* 5. Redirect */}
        {redirectMenuOpen && (
          <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
            <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
              REDIRECT
              <MdClose
                onClick={() => setRedirectMenuOpen(false)}
                className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
              />
            </div>
            <div className="p-4">{/* TODO: controls for redirect URL, conditions, etc. */}</div>
          </div>
        )}

        {/* 6. Lock */}
        {lockMenuOpen && (
          <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
            <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
              LOCK SETTINGS
              <MdClose
                onClick={() => setLockMenuOpen(false)}
                className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
              />
            </div>
            <div className="p-4">{/* TODO: password protect, pin code, etc. */}</div>
          </div>
        )}

        {/* 7. Analytics */}
        {analyticsMenuOpen && (
          <div ref={menuRef} className="absolute left-0 top-[9.7rem] w-full bg-white border border-gray-300 z-50">
            <div className="relative text-white text-xl font-semibold flex justify-center items-center h-10 bg-gray-400">
              ANALYTICS
              <MdClose
                onClick={() => setAnalyticsMenuOpen(false)}
                className="absolute right-2 top-2 text-white h-6 w-6 cursor-pointer"
              />
            </div>
            <div className="p-4">{/* TODO: show click counts, trends, charts… */}</div>
          </div>
        )}
      </div>
    </div>
  );
}
