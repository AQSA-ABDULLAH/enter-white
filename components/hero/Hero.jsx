"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import BottomSection from "./BottomSection";
import CardSection from "../header/CardSection";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/background.png",
    "/assets/Rectangle 168.png",
    "/assets/b1.png",
    "/assets/b2.png",
    "/assets/b3.png",
    "/assets/b4.png",
    "/assets/b5.png",
  ];

  return (
    <div className="relative h-[100vh] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Overlay Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/assets/Group 3121.png"
          alt="Overlay"
          className="h-full w-full"
        />
      </div>

      {/* Header with Slide-in Animation */}
      <motion.div
        className="relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      {/* Navbar with Delayed Slide-in Animation */}
      <motion.div
        className="hidden md:block relative mt-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Card Section with Scale-in Effect */}
      <motion.div
        className="absolute inset-12 flex justify-center items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <CardSection />
      </motion.div>

      {/* Bottom Section (Handles Image Change) */}
      <div className="z-10 w-full">
        <BottomSection
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          images={images}
        />
      </div>
    </div>
  );
}


