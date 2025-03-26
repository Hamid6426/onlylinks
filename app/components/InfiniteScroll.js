import React from "react";
import Image from "next/image";

const users = [
  "Athletes",
  "Entrepreneurs",
  "Artists",
  "Actors",
  "Youtubers",
  "Instagrammers",
  "Small Businesses",
  "Bloggers",
  "Musicians",
  "Athletes",
  "Entrepreneurs",
  "Artists",
  "Actors",
  "Youtubers",
  "Instagrammers",
  "Small Businesses",
  "Bloggers",
  "Musicians",
];

const InfiniteScroll = () => {
  return (
    <div className="scroll-container mt-12">
      <div className="scroll-content">
        {[...users, ...users].map((user, index) => (
          <div
            key={index}
            className="text-white font-bold text-lg flex items-center gap-8"
          >
            <p>{user}</p>
            <Image
              src="logo-icon.svg"
              width={40}
              height={40}
              alt="Logo"
              className="h-10 w-auto ml-8 mr-24"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
