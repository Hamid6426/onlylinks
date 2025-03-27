"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SettingsNavbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 py-6">
      {[
        { href: "/account/settings", label: "Basic Info" },
        { href: "/account/settings/private-info", label: "Private Info" },
        { href: "/account/settings/billing-info", label: "Billing Info" },
        {
          href: "/account/settings/sensitive-content",
          label: "Sensitive Content",
        },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`font-medium ${
            pathname === href
              ? "text-purple-500"
              : "text-gray-700 hover:text-purple-600"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
