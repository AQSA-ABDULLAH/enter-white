import React from "react";

function NewsletterSection() {
  return (
    <div className="flex flex-col justify-between md:flex-row tracking-wider items-start px-8 desktop:px-20 py-12 mt-10 bg-white">
      {/* Left Section */}
      <div className="md:w-[45%] 2xl:w-[40%]">
        <h2 className="font-bold mb-4 text-[26px] md:text-[32px] 2xl:text-[40px]">Weekly Newsletter</h2>
        <p className="text-gray-700 text-[12px] md:text-[16px] 2xl:text-[20px]">
          Receive the beautifully curated selection of the latest listings from
          around the world and find out what's trending.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-[38%] 2xl:w-[30%] mt-6 md:mt-0 flex flex-col items-start">
        <label htmlFor="email" className="text-[16px] md:text-[18px] 2xl:text-[20px] font-bold mb-2">
          EMAIL ADDRESS
        </label>
        <input
          id="email"
          type="email"
          placeholder="EMAIL ADDRESS"
          className="w-full px-4 py-2 border border-gray-300 text-[12px] md:text-[14px] 2xl:text-[20px] rounded-md mb-4"
        />
        <button className="w-full bg-black text-white text-[14px] md:2xl:text-[20px] px-4 py-2 rounded-md">
          SUBSCRIBE
        </button>
        <p className="text-[10px] md:text-[12px] 2xl:text-[14px] text-gray-700 mt-4 leading-4 md:leading-6">
          BY SHARING YOUR EMAIL, YOU ARE CONFIRMING THAT YOU AGREE TO OUR{" "}
          <span className="font-bold text-black">TERMS AND CONDITIONS</span> AND{" "}
          <span className="font-bold text-black">PRIVACY POLICY</span>.
        </p>
      </div>
    </div>
  );
}

export default NewsletterSection;
