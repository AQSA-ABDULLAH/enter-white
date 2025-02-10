"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Card from "./card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to ensure it runs only on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false, // Disable default arrows
  responsive: [
    { breakpoint: 1928, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const SliderSection = ({ title }) => {
  const sliderRef = useRef(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <div>
      <div className="flex gap-5 justify-between items-center py-10 px-8 3xl:px-20">
        <h1 className="text-[12px] md:text-[24px] 2xl:text-[30px] font-semibold uppercase">
          {title}
        </h1>
        <p className="uppercase text-[12px] md:text-[24px] font-semibold 2xl:text-[30px]">
          View All Homes
        </p>
        <div className="flex gap-3">
          <img
            src="/assets/Group 3100.png"
            alt="Previous"
            className="cursor-pointer max-md:h-5 max-2xl:h-14"
            onClick={handlePrev}
          />
          <img
            src="/assets/Group 3094.png"
            alt="Next"
            className="cursor-pointer max-md:h-5 max-2xl:h-14"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="mx-auto mt-6">
        <Slider ref={sliderRef} {...settings}>
          {Array(8).fill(0).map((_, index) => (
            <div className="px-8 3xl:px-20" key={index}>
              <Card index={index + 1} />
            </div>
          ))}
        </Slider>
      </div>
      <img
        src="/assets/Line 93.png"
        alt="line"
        className="mt-12 px-8 md:px-[30em] md:opacity-50 w-screen"
      />
    </div>
  );
};

function Main() {
  return (
    <div>
      <SliderSection title="ENDING SOON" />
      <SliderSection title="FEATURED" />
      <SliderSection title="TRENDING" />
      <SliderSection title="JUST FOR YOU" />
    </div>
  );
}

export default Main;

