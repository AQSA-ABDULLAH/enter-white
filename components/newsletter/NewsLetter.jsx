"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

function NewsletterSection() {
  return (
    <motion.div
      className="flex flex-col justify-between md:flex-row tracking-wider items-start px-8 3xl:px-20 py-12 mt-10 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // 🔥 Triggers animation every time it enters the viewport
    >
      {/* Left Section */}
      <motion.div className="md:w-[45%] 2xl:w-[40%]" variants={fadeLeftVariants}>
        <h2 className="font-bold mb-4 text-[26px] md:text-[32px] 2xl:text-[40px]">
          Weekly Newsletter
        </h2>
        <p className="text-gray-700 text-[12px] md:text-[16px] 2xl:text-[20px]">
          Receive the beautifully curated selection of the latest listings from
          around the world and find out what's trending.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div className="md:w-[38%] 2xl:w-[30%] mt-6 md:mt-0 flex flex-col items-start">
        <motion.label
          htmlFor="email"
          className="text-[16px] md:text-[18px] 2xl:text-[20px] font-bold mb-2"
          variants={fadeUpVariants}
        >
          EMAIL ADDRESS
        </motion.label>
        <motion.input
          id="email"
          type="email"
          placeholder="EMAIL ADDRESS"
          className="w-full px-4 py-2 border border-gray-300 text-[12px] md:text-[14px] 2xl:text-[20px] rounded-md mb-4"
          variants={fadeUpVariants}
        />
        <motion.button
          className="w-full bg-black text-white text-[14px] md:2xl:text-[20px] px-4 py-2 rounded-md"
          variants={fadeUpVariants}
        >
          SUBSCRIBE
        </motion.button>
        <motion.p
          className="text-[10px] md:text-[12px] 2xl:text-[14px] text-gray-700 mt-4 leading-4 md:leading-6"
          variants={fadeUpVariants}
        >
          BY SHARING YOUR EMAIL, YOU ARE CONFIRMING THAT YOU AGREE TO OUR{" "}
          <span className="font-bold text-black">TERMS AND CONDITIONS</span> AND{" "}
          <span className="font-bold text-black">PRIVACY POLICY</span>.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default NewsletterSection;
