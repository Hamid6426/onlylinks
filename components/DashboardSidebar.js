"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BiLinkAlt,
  BiBarChart,
  BiCog,
  BiUser,
  BiUserPlus,
  BiFlag,
  BiChevronDown,
  BiLogOut,
} from "react-icons/bi";
import { getDecodedToken, getUserId } from "@/utils/decoded";

const menuItems = [
  { name: "Dashboard", icon: <BiLinkAlt />, href: "/account" },
  { name: "Analytics", icon: <BiBarChart />, href: "/account/analytics" },
];

const accountItems = [{ name: "Settings", icon: <BiCog />, href: "/account/settings" }];

function Dropdown({ title, icon, options, isOpen, toggle }) {
  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full px-3 py-2 rounded-lg hover:text-purple-500 font-medium"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>
        <BiChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full mt-2 rounded-lg z-10 bg-white shadow-md border border-gray-200">
          {options.map(({ name, icon, href, isImage }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center gap-3 px-3 py-2 bg-white hover:bg-gray-100 rounded-lg font-medium"
            >
              {isImage ? (
                <Image src={icon} width={32} height={32} className="rounded-full" alt={name} />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-bold text-sm">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
              <span>{name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DashboardSidebar() {
  const [decoded, setDecoded] = useState({});
  const [_userId, setUserId] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setDecoded(getDecodedToken());
    setUserId(getUserId());
  }, []);

  const dropdowns = {
    account: [
      {
        name: decoded?.name || "Profile",
        icon: <BiUserPlus />,
        href: `/${decoded?.username || "profile"}`,
        isImage: false,
      },
      { name: "Add account", icon: <BiUserPlus />, href: "/login" },
    ],
    language: [{ name: "English", icon: <BiFlag />, href: "#" }],
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? "" : name);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="border-r fixed border-gray-300 w-64 overflow-y-auto h-screen py-2 px-4">
      <nav className="flex flex-col h-full justify-between">
        <div>
          <Link href="/" className="flex justify-center mb-6">
            <Image src="/onlylinks-logo.svg" alt="logo" width={100} height={40} className="w-48 h-20" />
          </Link>

          <div className="space-y-3">
            <h3 className="text-gray-400 uppercase text-sm font-medium">{decoded?.name}</h3>
            {menuItems.map(({ name, icon, href }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${
                  pathname === href ? "text-purple-500" : "hover:text-purple-500"
                }`}
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-gray-400 uppercase text-sm font-medium">Account</h3>
            {accountItems.map(({ name, icon, href }) => (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${
                  pathname === href ? "text-purple-500" : "hover:text-purple-500"
                }`}
              >
                {icon}
                <span>{name}</span>
              </Link>
            ))}

            <Dropdown
              title="Account"
              icon={<BiUser />}
              options={dropdowns.account}
              isOpen={activeDropdown === "account"}
              toggle={() => toggleDropdown("account")}
            />

            <Dropdown
              title="Language"
              icon={<BiFlag />}
              options={dropdowns.language}
              isOpen={activeDropdown === "language"}
              toggle={() => toggleDropdown("language")}
            />
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:text-red-500 font-medium transition-colors"
        >
          <BiLogOut className="text-lg" />
          <span>Log Out</span>
        </button>
      </nav>
    </div>
  );
}
