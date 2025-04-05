import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex justify-between py-3 bg-gray-50 text-gray-400 mt-16">
      <div className="max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 sm:justify-between  w-full mx-auto px-6">
        <Link href="/" className="ho  ver:text-[#8129d9]">
          OnlyLinks.com
        </Link>
        <Link href="/terms" className="hover:text-[#8129d9]">
          Terms
        </Link>
        <Link href="/help" className="hover:text-[#8129d9]">
          Help
        </Link>
        <Link href="/privacy-policy" className="hover:text-[#8129d9]">
          Privacy Policy
        </Link>
        <Link href="/cookie-policy" className="hover:text-[#8129d9]">
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
