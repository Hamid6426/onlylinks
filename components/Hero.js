import React from "react";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

export default function Hero() {
  return (
    <div className="py-4 pb-16 w-full max-w-6xl mx-auto">
      <div className="text-xl lg:text-6xl font-semibold text-center">
        Add Link To
      </div>

      <div className="mt-6 p-6 max-w-2xl font-semibold text-6xl mx-auto mb-6 rounded-xl text-white bg-black">
        <p className="animate-slideInUp  text-center">Connect With Fans</p>
      </div>
      <div className="text-xl lg:text-6xl font-semibold text-center">
        And Promote Yourself Easier
      </div>
      <div className="flex flex-col justify-center items-center text-lg lg:text-2xl mt-6">
        <p className="">
          One link to help you share everything you post, have and
        </p>
        <p className="">sell!</p>
        <Link
          href="/signup"
          className="mt-6 py-2 px-6 flex items-center rounded-md bg-[#4c4c4c] hover:bg-[#8129d9] text-white"
        >
          <div>Get Started</div><MdChevronRight className="mt-1 ml-1"/>
        </Link>
      </div>

      <div className="mt-8 text-xl lg:text-5xl font-semibold text-center">
        Never change your bio link again!
      </div>
    </div>
  );
}
