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
    <div className={`w-full bg-[#fafafa]`}>
      {/* FOR BIG SCREENS */}
      <div className="h-14 w-full hidden sm:flex justify-between items-center px-6">
        <Image src="/onlylinks-logo.svg" alt="logo" width={100} height={40} className="h-16 w-auto" />

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
      </div>

      {menuOpen ? (
        <div className="w-full sm:hidden z-50 bg-white min-h-screen fixed">
          <div className="flex justify-between items-center px-4 bg-[#fafafa] w-full h-14">
            <Image src="/onlylinks-logo.svg" alt="logo" width={100} height={40} className="h-16 w-auto" />
            <button className="sm:hidden text-[#4c4c4c] focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
          <div className="h-[calc(100vh_-_3.5rem)] w-full z-50">
            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } fixed z-50 h-[100vh] w-full top-14 left-0 bg-[#fafafa] transition-all`}
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
      ) : (
        <div className="w-full sm:hidden flex justify-between items-center px-4 h-14">
          <Image src="/onlylinks-logo.svg" alt="logo" width={100} height={40} className="h-16 w-auto" />
          <button className="sm:hidden text-[#4c4c4c] focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      )}
    </div>
  );
}
