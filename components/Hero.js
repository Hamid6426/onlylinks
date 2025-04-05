import React from "react";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import "./Hero.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-5xl w-full  flex flex-col justify-start items-center">
      <div className="text-3xl sm:text-5xl font-bold text-center">Add Link To</div>

      <div className="sm:mx-auto w-full my-6 px-2 max-w-xl">
        <div className="text-2xl sm:text-5xl w-full  relative overflow-hidden text-nowrap h-14 sm:h-20 font-bold rounded-md sm:rounded-xl text-white bg-black">
          <p className="text-slide mt-3">Get More Clicks</p>
          <p className="text-slide mt-3">Connect With Fans</p>
          <p className="text-slide mt-3">Drive More Traffic</p>
        </div>
      </div>

      <div className="absolute top-20 lg:left-16 overflow-hidden my-6 w-28 h-28 hidden lg:block">
        <Image width={80} height={80} src="/home/1.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/10.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/3.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
      </div>

      <div className="absolute top-20 lg:right-16 overflow-hidden my-6 w-28 h-28 hidden lg:block">
        <Image width={80} height={80} src="/home/2.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/3.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/1.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
      </div>

      <div className="absolute top-[23rem] lg:left-[16rem] overflow-hidden my-6 w-28 h-28 hidden lg:block">
        <Image width={80} height={80} src="/home/8.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/9.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/7.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
      </div>

      <div className="absolute top-[23rem] lg:right-[16rem] overflow-hidden my-6 w-28 h-28 hidden lg:block">
        <Image width={80} height={80} src="/home/5.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/6.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
        <Image width={80} height={80} src="/home/4.png" alt="icon" className="w-20 h-20 rounded-xl icon-slide" />
      </div>

      <div className="text-3xl lg:text-5xl font-bold text-center mx-3">And Promote Yourself Easier</div>
      <div className="flex flex-col justify-center items-center text-lg lg:text-2xl mt-6 mx-3">
        <p className="text-center">One link to help you share everything you post, have and sell!</p>
        <Link
          href="/signup"
          className="mt-6 py-2 px-6 flex items-center rounded-md bg-[#4c4c4c] hover:bg-[#8129d9] text-white"
        >
          <div>Get Started</div>
          <MdChevronRight className="mt-1 ml-1" />
        </Link>
      </div>
    </div>
  );
}
