"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import useUserLinks from "@/utils/fetchLinks";
import { getDecodedToken, getUserId } from "@/utils/decoded";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import "./PreviewPhone.css";

export default function PreviewPhone() {
  const { links, setLinks } = useUserLinks();
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);
  const [_userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
    setUserProfile(getUserId());
  }, []);

  return (
    <div className="phone-container min-w-[200px] overflow-auto bg-purple-400 min-h-[360px] max-w-[200px] max-h-[360px] block border-4 rounded-3xl border-gray-900 relative">
      <div className="px-[6px] w-full">
        {/* THE HEADER BOX */}
        <div className="text-[9px] header flex items-center gap-2 w-full mt-4">
          <Image
            src={decoded.profile}
            width={100}
            height={100}
            alt="link image"
            className="h-12 max-w-12 rounded-full"
          />
          <div className="flex flex-col justify-center w-full p-[2px] bg-white">
            <div className="font-bold">Display Name</div>
            <div className="flex items-center gap-1 text-[9px] rounded-sm">
              <MdLocationPin />
              <span>Location</span>
            </div>
            {/* limit to 20 */}
            <div>Lorem ipsum fisanig </div>
          </div>
        </div>

        <div className="mb-4 w-full flex flex-col items-center justify-start gap-2 mt-4 h-full">
          {/* THE LINK BUTTONS */}
          {links.map((link) => {
            const justify_text = "justify_text_" + link.justify_content;
            let link_outline = "none"; // default value if outline is false

            if (link.outline) {
              // If the outline flag is true, choose based on special_outlines
              if (link.special_outlines === "glowing") {
                link_outline = "glowing";
              } else if (link.special_outlines === "clippath1") {
                link_outline = "clippath1";
              } else if (link.special_outlines === "clippath2") {
                link_outline = "clippath2";
              } else {
                // Default option if outline is true and none of the above match (or static as per your DB)
                link_outline = "static-border";
              }
            }

            return (
              <div
                className={`w-full h-full 
              ${link_outline}`}
              >
                <div
                  key={link.position}
                  className={`w-full h-full ${link.link_shadow ? "shadow-md shadow-gray-200" : "shadow-none"} 
                  `}
                >
                  {/* The sorting depend upon position integer */}

                  {!link.text_hidden ? (
                    <div className={`${link.link_layout} h-full`}>
                      {/* WHEN TEXT IS NOT HIDDEN */}
                      <Image src={link.image_url} width={100} height={100} className={`link-image`} alt="link image" />
                      <Link href={link.url} className={`${justify_text} link-text`}>
                        {link.title}
                      </Link>
                    </div>
                  ) : (
                    <div className={`${link.link_layout}`}>
                      {/* WHEN TEXT IS HIDDEN */}
                      <Image src={link.image_url} width={100} height={100} className={`link-image`} alt="link image" />
                      <Link href={link.url} className="hidden">
                        {link.title}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
