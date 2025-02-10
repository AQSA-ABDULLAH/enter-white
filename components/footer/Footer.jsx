"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-white text-black uppercase px-8 3xl:px-20 tracking-wider"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Animation triggers on scroll
      variants={fadeUpVariants}
    >
      <motion.div
        className="text-[14px] 3xl:text-[18px] mx-auto pb-8 flex flex-col gap-16 md:flex-row flex-wrap justify-between"
        variants={fadeUpVariants}
      >
        {/* Zimopro Section */}
        <motion.div variants={fadeUpVariants}>
          <h3 className="mb-10 font-semibold">ZIMOPRO.COM</h3>
          <ul className="space-y-5">
            <li>About</li>
            <li>Contact</li>
            <li>Help & FAQ</li>
          </ul>
          <div className="flex flex-col mt-14 gap-14">
            <img src="/assets/Group 3331.png" alt="Zima Logo" className="w-40 2xl:w-44" />
            <img src="/assets/Group 3075.png" alt="Civica CES Logo" className="w-40 2xl:w-44" />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeUpVariants}>
          <h3 className="mb-10 font-semibold">CATEGORIES</h3>
          <ul className="space-y-5">
            <li>Real Estate</li>
            <li>Private Islands</li>
            <li>Yachts</li>
            <li>Jets</li>
            <li>Cars</li>
            <li>Watches</li>
            <li>Diamonds</li>
            <li>Travel the World</li>
          </ul>
        </motion.div>

        {/* Business / Agents */}
        <motion.div variants={fadeUpVariants}>
          <h3 className="mb-10 font-semibold">BUSINESS / AGENTS</h3>
          <ul className="space-y-5">
            <li>List with us</li>
            <li>Partner</li>
            <li>Display Advertising</li>
            <li>Investors</li>
          </ul>
        </motion.div>

        {/* Sell Your Home */}
        <motion.div variants={fadeUpVariants}>
          <h3 className="mb-10 font-semibold">SELL YOUR HOME</h3>
          <ul className="space-y-5">
            <li>Find a Zimo Agent</li>
            <li>Gift Card</li>
            <li>Purchase eGift Card</li>
          </ul>
        </motion.div>

        {/* Supported Charities */}
        <motion.div variants={fadeUpVariants}>
          <h3 className="mb-8 font-semibold">SUPPORTED CHARITIES</h3>
          <div className="space-y-8">
            <img src="/assets/Group 3126.png" alt="Unicef" className="max-2xl:h-9" />
            <img src="/assets/Group 3132.png" alt="World Vision" className="max-2xl:h-8" />
            <img src="/assets/Group 3133.png" alt="Save the Children" className="max-2xl:h-8" />
            <img src="/assets/Group 3137.png" alt="Great Ormond Street Hospital" className="max-2xl:h-16" />
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="flex flex-col sm:flex-row gap-10 justify-between py-4 text-[12px] 3xl:text-[13px] text-black"
        variants={fadeUpVariants}
      >
        <motion.div className="flex-1 flex flex-col md:flex-row items-center gap-2" variants={fadeUpVariants}>
          <img src="/assets/Group 2877.png" alt="logo" className="max-md:w-14 h-4 3xl:h-4" />
          <span>COPYRIGHT &copy; 2022 Zimo Group. All Rights Reserved.</span>
        </motion.div>
        <motion.div className="flex-1 flex justify-center items-center md:flex-row md:space-x-4" variants={fadeUpVariants}>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </motion.div>
        <motion.div className="flex-1 flex justify-end" variants={fadeUpVariants}>
          <img src="/assets/Group 2666.png" className="w-[18rem] max-3xl:h-[1.6rem] 3xl:w-[28rem]" />
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

