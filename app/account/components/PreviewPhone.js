"use client";

import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import useUserLinks from "@/utils/fetchLinks";
import { getDecodedToken, getUserId } from "@/utils/decoded";

export default function PreviewPhone() {
  const { links, setLinks } = useUserLinks();
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);

  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  return (
    <div className="min-w-[180px] min-h-[340px] max-w-[180px] max-h-[340px] block border-4 rounded-3xl border-gray-900 relative">
      {/* camera */}
      <div className="camera absolute top-2 w-full flex justify-center">
        <div className="flex rounded-full bg-black h-4 w-16 relative">
          <div className="h-2 w-2 bg-gray-800 rounded-full top-1 right-2 absolute"></div>
        </div>
      </div>

      {links.map((link, index) => (
        <div key={link.position}>
          {/* The sorting depend upon position integer */}
          <Link href={link.url}>{link.title}</Link>
        </div>
      ))}
      {/* Profile */}
      {/* <div className="w-full absolute top-24 flex justify-center">
        <div className="flex flex-col justify-start items-center gap-3">
          <div className="w-16 h-16 block bg-gray-300 rounded-full"></div>
          <div className="text-xs">Looking To Collaborate</div>
          <div className="flex gap-1 items-center">
            <MdLocationPin />
            <span className="font-semibold text-xs">Pakistan</span>
          </div>
          <Link
            href="/signup"
            className="w-full text-xs text-center py-1 rounded-full hover:bg-purple-200 border-purple-500 border-2"
          >
            Free OnlyFans
          </Link>
          <Link
            href="/signup"
            className="w-full text-xs text-center py-1 rounded-full hover:bg-purple-200 border-purple-500 border-2"
          >
            VIP OnlyFans
          </Link>
        </div>
      </div> */}

      {/* hotkey */}
      <div className="camera absolute bottom-2 w-full flex justify-center">
        <div className="flex rounded-full bg-black h-1 w-16 relative"></div>
      </div>
    </div>
  );
}
