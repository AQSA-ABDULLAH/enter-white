import React, { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

// Dynamically import Timer to prevent SSR issues
const Timer = dynamic(() => import("../main/card/Timer"), { ssr: false });

function Navbar() {
  const [isLiked, setIsLiked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between py-2 px-4 lg:px-10 3xl:px-16">
      {/* Left Section */}
      <div className="flex-1 flex gap-3 justify-start">
        <IoArrowBackOutline className="cursor-pointer text-white w-5 h-6 2xl:w-6" />
        <p className="uppercase">BACK TO LISTING</p>
      </div>

      {/* Center Timer Component (Only Render on Client) */}
      <div className="flex-1 flex justify-center">
        {mounted && <Timer />}
      </div>

      {/* Right Section - Share and Like */}
      <div className="flex-1 flex justify-end space-x-4">
        {/* Share Icon */}
        <img
          src="/assets/Path 7664.png"
          alt="Share"
          className="w-5 h-5 cursor-pointer"
        />

        {/* Like Button - Only Render When Mounted */}
        {mounted && (isLiked ? (
          <IoMdHeart
            className="cursor-pointer text-red-500 w-5 h-5 2xl:w-6 md:h-6"
            onClick={() => setIsLiked(false)}
          />
        ) : (
          <FaRegHeart
            className="cursor-pointer text-white w-5 h-5 2xl:w-6 md:h-6"
            onClick={() => setIsLiked(true)}
          />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;


