import React from "react";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";

export default function Phone() {
  return (
    <div className="w-[220px] h-[400px] border-4 rounded-3xl border-gray-900 relative bg-gradient-to-b from-gray-900 to-gray-800">
      {/* camera */}
      <div className="camera absolute top-2 w-full flex justify-center">
        <div className="flex rounded-full bg-black h-4 w-16 relative">
          <div className="h-2 w-2 bg-gray-800 rounded-full top-1 right-2 absolute"></div>
        </div>
      </div>

       {/* Profile */}
       <div className="w-full absolute top-24 flex justify-center px-4">
        <div className="flex flex-col justify-start items-center gap-3 w-full">
          {/* Profile avatar */}
          <div className="w-16 h-16 block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md"></div>
          
          {/* Status */}
          <div className="text-xs text-gray-300 font-medium">Looking To Collaborate</div>
          
          {/* Location */}
          <div className="flex gap-1 items-center text-gray-400">
            <MdLocationPin className="text-purple-400" />
            <span className="font-semibold text-xs">Pakistan</span>
          </div>
          
          {/* Buttons */}
          <Link
            href="/signup"
            className="w-full text-xs text-center py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md"
          >
            Free OnlyFans
          </Link>
          <Link
            href="/signup"
            className="w-full text-xs text-center py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border border-gray-600 mt-2 shadow-md"
          >
            VIP OnlyFans
          </Link>
        </div>
      </div>

      {/* home indicator */}
      <div className="absolute bottom-4 w-full flex justify-center">
        <div className="rounded-full bg-gray-600 h-1 w-16"></div>
      </div>
    </div>
  );
}