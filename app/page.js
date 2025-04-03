import Hero from "@/components/Hero";
import Phone from "@/components/Phone";
import Link from "next/link";
import InfiniteScroll from "@/components/InfiniteScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="grid grid-cols-2 max-w-4xl mx-auto place-items-center">
        <Phone />
        <div className="flex flex-col text-lg font-semibold gap-3">
          <p>Link your Instagram, Twitter, Snapchat, Youtube or any other website!</p>
          <p>Create your Onlylinks profile in seconds You are in complete control,</p>
          <p>there are NEVER any ads on your profile! We are here to grow your</p>
          <p>brand not ours!</p>
          <Link
            href="/signup"
            className="w-[360px] mt-4 text-center py-[6px] rounded-md bg-[#4c4c4c] hover:bg-[#8129d9] text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <InfiniteScroll />
      <Footer />
    </div>
  );
}
