import React from "react";
import Link from "next/link";
import LinksContent from "@/components/LinksContent";
import PreviewPhone from "@/components/PreviewPhone";

export default function page() {
  return (
    <main className="flex gap-6 p-6">
      <div className="w-full">
        <div className="p-4 flex items-center justify-between bg-red-100 border border-red-400 text-red-700 rounded">
          <p>You don't have a subscription</p>
          <Link
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-purple-500"
            href="/account/billing"
          >
            Subscribe
          </Link>
        </div>
        <LinksContent />
      </div>
      <PreviewPhone />
    </main>
  );
}
