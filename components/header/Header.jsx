import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center text-white px-4 lg:px-10 desktop:px-16 pt-14">
        <div className="flex items-center w-full">
          {/* First Div */}
          <div className="flex items-center gap-3 md:gap-6 flex-1"> 
            <img
              src="/assets/Group 3055.png"
              alt="Zima Logo"
              onClick={toggleSidebar}
              className="cursor-pointer max-md:h-4 max-desktop:h-9"
            />
            <img src="/assets/Group 3385.png" alt="Zima Logo" className="max-md:h-4 max-desktop:h-9" />
          </div>

          {/* Second Div */}
          <div className="flex justify-center flex-1">
            <img src="/assets/Group 3005.png" alt="Center Logo"  className="max-md:h-4 max-desktop:h-9" />
          </div>

          {/* Third Div */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-end flex-1">
            <div className="md:flex gap-6 2xl:gap-8 hidden ">
              <p className="text-[14px] md:text-[16px] desktop:text-[20px] tracking-wider">JUST FOR YOU</p>
              <img src="/assets/Group 3035.png" alt="UK Flag" className="max-desktop:h-5"/>
            </div>
            <div className="flex gap-4 md:gap-8 2xl:gap-12 max-2xl:h-5 max-md:h-3">
              <img src="/assets/Path 7680.png" alt="glob" className="max-md:w-3" />
              <img src="/assets/Path 7582.png" alt="bag" className="max-md:w-3"/>
              <img src="/assets/Group 2867.png" alt="user" className="max-md:w-3" />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}



