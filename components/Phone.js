import React from "react";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

export default function Phone() {
  return (
    <div className="w-[220] h-[400] border-4 rounded-3xl border-gray-900 relative">
      {/* camera */}
      <div className="camera absolute top-2 w-full flex justify-center">
        <div className="flex rounded-full bg-black h-4 w-16 relative">
          <div className="h-2 w-2 bg-gray-800 rounded-full top-1 right-2 absolute"></div>
        </div>
      </div>

      {/* Profile */}
      <div className="w-full absolute top-24 flex justify-center">
        <div className="flex flex-col justify-start items-center gap-3">
          <div className="w-16 h-16 block bg-gray-300 rounded-full"></div>
          <div className="text-xs">Looking To Collaborate</div>
          <div className="flex gap-1 items-center">
            <MdLocationPin />
            <span className="font-semibold text-xs">Pakistan</span>
          </div>
          <Link
            href="/signup"
            className="w-full text-xs text-center py-1 rounded-full hover:bg-gray-200 border-purple-500 border-2"
          >
            Free OnlyFans
          </Link>
          <Link
            href="/signup"
            className="w-full text-xs text-center py-1 rounded-full hover:bg-gray-200 border-purple-500 border-2"
          >
            VIP OnlyFans
          </Link>
        </div>
      </div>

      {/* hotkey */}
      <div className="camera absolute bottom-2 w-full flex justify-center">
        <div className="flex rounded-full bg-black h-1 w-16 relative">
        </div>
      </div>
    </div>
  );
}
