import Hero from "@/components/Hero";
import Phone from "@/components/Phone";
import Link from "next/link";
import InfiniteScroll from "@/components/InfiniteScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <Navbar />
     
      <div className="w-full flex flex-col items-center justify-start gap-8 max-w-5xl">
      <Hero />
      <div className="mt-12 w-full relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto place-items-center">
        <Phone />
        <div className="w-full flex flex-col text-lg font-semibold gap-3 text-wrap  py-8 px-3">
          <p className="text-center">Link your Instagram, Twitter, Snapchat, Youtube or any other website!</p>
          <p className="text-center">Create your Onlylinks profile in seconds You are in complete control,</p>
          <p className="text-center">there are NEVER any ads on your profile! We are here to grow your</p>
          <p className="text-center">brand not ours!</p>
          <Link
            href="/signup"
            className="mx-auto w-60 mt-4 text-center py-[6px] rounded-md bg-[#4c4c4c] hover:bg-[#8129d9] text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
      </div>

      <InfiniteScroll />
      <Footer />
    </div>
  );
}
