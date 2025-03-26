"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import { BiLinkAlt, BiPalette, BiMobile, BiShare, BiCopy } from "react-icons/bi";

export default function DashboardNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const userLink = "https://onlylinks.com/hamid";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userLink);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <header className="w-full bg-[#fafafa] shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-3">
          
          {/* Menu Toggle (Mobile) */}
          <button
            className="sm:hidden text-[#4c4c4c] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>

          {/* Logo */}
          {/* <span className="flex items-center">
            <Image
              src="/dist/img/logo.svg?t=1720722461"
              width={150}
              height={50}
              alt="logo"
              className="h-10 w-auto"
            />
          </span> */}

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button className="flex items-center gap-2 text-[#4c4c4c] hover:text-[#8129d9]">
              <BiLinkAlt size={20} />
              <span>Links</span>
            </button>
            <button className="flex items-center gap-2 text-[#4c4c4c] hover:text-[#8129d9]">
              <BiPalette size={20} />
              <span>Design</span>
            </button>
            <button className="flex items-center gap-2 text-[#4c4c4c] hover:text-[#8129d9]">
              <BiMobile size={20} />
            </button>
          </div>

          {/* Share Button (Desktop) */}
          <div className="hidden sm:block">
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 bg-[#4c4c4c] hover:bg-[#8129d9] text-white px-4 py-2 rounded-md"
            >
              <BiShare size={20} />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden absolute top-[60px] left-0 w-full bg-[#fafafa] shadow-md p-4 flex flex-col gap-4">
            <button className="flex items-center gap-2 text-[#4c4c4c] hover:text-[#8129d9]">
              <BiLinkAlt size={20} />
              <span>Links</span>
            </button>
            <button className="flex items-center gap-2 text-[#4c4c4c] hover:text-[#8129d9]">
              <BiPalette size={20} />
              <span>Design</span>
            </button>
            <button className="flex items-center gap-2 text-[#4c4c4c] hover:text-[#8129d9]">
              <BiMobile size={20} />
            </button>
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 bg-[#4c4c4c] hover:bg-[#8129d9] text-white px-4 py-2 rounded-md"
            >
              <BiShare size={20} />
              <span>Share</span>
            </button>
          </div>
        )}
      </header>

      {/* Share Modal */}
      {isShareOpen && (
        <div className="fixed top-0 right-0 w-80 bg-white shadow-lg p-4 z-50 border border-gray-300">
          <div className="flex justify-between items-center mb-3">
            <h5 className="text-lg font-semibold">Share your link</h5>
            <button onClick={() => setIsShareOpen(false)} className="text-gray-500 hover:text-black">
              <MdClose size={24} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Get more visitors by sharing your Onlylinks everywhere.
          </p>
          <button className="w-full bg-[#4c4c4c] hover:bg-[#8129d9] text-white py-2 rounded-md">
            View
          </button>
          <button
            onClick={copyToClipboard}
            className="mt-3 w-full h-10 cursor-pointer flex justify-between items-center border border-gray-300 px-3 rounded-md"
          >
            <div>
              <Image src="/onlylinks-icon.svg" width={16} height={16} alt="logo-icon" />
            </div>
            <p className="text-sm text-gray-700">{userLink}</p>
            <p className="text-gray-500 hover:text-black">
              <BiCopy size={18} />
            </p>
          </button>
        </div>
      )}
    </>
  );
}
