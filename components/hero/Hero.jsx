"use client";
import React, { useState } from "react";
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
    <div className="relative h-[100vh] text-white">
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

      {/* Header & Navbar */}
      <div className="relative">
        <Header />
      </div>
      <div className="hidden md:block relative mt-4">
        <Navbar />
      </div>
      
      <div className="absolute inset-12 flex justify-center items-center ">
        <CardSection />
      </div>

      {/* Bottom Section */}
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
