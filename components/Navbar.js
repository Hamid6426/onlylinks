"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in localStorage on mount
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  return (
    <div className="w-full bg-[#fafafa]">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto px-6">
        <Image
          src="onlylinks-logo.svg"
          width={200}
          height={80}
          alt="Logo"
          className="h-20 w-auto"
        />

        <button
          className="sm:hidden text-[#4c4c4c] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          {authenticated ? (
            <Link href="/account" className="text-[#4c4c4c] hover:text-[#8129d9]">
              Account
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-[#4c4c4c] hover:text-[#8129d9]">
                Login
              </Link>
              <Link
                href="/choose-username"
                className="block py-[6px] px-3 rounded-md bg-[#4c4c4c] hover:bg-[#8129d9] text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute z-5 h-[100vh] w-full top-[80px] left-0 bg-[#fafafa] transition-all`}
        >
          <div className="grid grid-cols-2 place-items-center gap-8 px-6">
            {authenticated ? (
              <Link
                href="/account"
                className="w-full text-center bg-[#4c4c4c] hover:bg-[#8129d9] py-2 lg:py-0"
                onClick={() => setMenuOpen(false)}
              >
                Account
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="w-full text-center text-[#4c4c4c] hover:text-[#8129d9] py-2 lg:py-0"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="w-full text-center py-[6px] px-3 rounded-md bg-[#4c4c4c] hover:bg-[#8129d9] text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
