import React from "react";

function BottomSection({ currentImageIndex, setCurrentImageIndex, images }) {
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 px-2 md:px-8 3xl:px-20 w-full flex flex-col md:flex-row items-center md:items-end justify-between">
        
        {/* Left Logo */}
        <div className="flex-shrink-0 flex gap-4 sm:flex-col sm:gap-0">
          <img src="/assets/Group 3481.svg" alt="logo" className="max-md:h-4 max-3xl:h-12 mb-[12px]" />
          <img src="/assets/g12.png" alt="logo" className="max-md:h-4 md:max-3xl:mb-1 max-3xl:h-14" />
        </div>

        {/* Address & Price */}
        <div className="flex flex-col items-center gap-2 md:gap-3 tracking-wider mb-4 sm:mb-0">
          <div className="tracking-widest text-[10px] md:text-[16px] 3xl:text-[22px]">
            £5,000,000 GBP
          </div>
          <div className="text-center text-[6px] md:text-[14px] 3xl:text-[20px] flex gap-2 md:gap-5 2xl:gap-8">
            <p>SHELTON STREET</p>
            <p>CONVENT GARDEN</p>
            <p>LONDON</p>
            <p>WC2H 9JQ</p>
            <p>UNITED KINGDOM</p>
          </div>

          {/* Slide Indicators */}
          <div className=" flex space-x-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-[2px] w-4 md:w-8 3xl:w-[4rem] cursor-pointer ${
                  currentImageIndex === index ? "bg-gold" : "bg-white"
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Logo */}
        <div> 
          <img src="/assets/Ces-Logo.png" alt="CES Logo" className="h-4 md:h-7 3xl:h-11" />
        </div>

      </div>
    </div>
  );
}

export default BottomSection;

