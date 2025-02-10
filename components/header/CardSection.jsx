import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Card = ({ title, subtitle, description, buttonText, showControls }) => (
  <div className="hidden md:flex text-white">
    <div className="relative w-[180px] 2xl:w-[212px] flex flex-col items-center bg-cover bg-center tracking-widest">
      <div className="bg-black bg-opacity-40 w-full h-[160px] 2xl:h-[212px] p-4 border border-white rounded-lg text-center flex flex-col justify-between">
        <h2 className="text-[15px] 3xl:text-[20px]">{title}</h2>
        <p className="text-[15px] 3xl:text-[20px]">{subtitle}</p>
        <p className="text-[7px] 3xl:text-[12px]">{description}</p>
      </div>
      <div className="bg-black bg-opacity-40 h-[38px] 2xl:h-[45px] mt-[10px] flex justify-center rounded-lg border border-white text-center w-full">
        <button className="hover:bg-white hover:text-black transition text-[14px] 3xl:text-[20px] tracking-widest">
          {buttonText}
        </button>
      </div>
    </div>
    
    {/* Conditional rendering for Plus/Minus controls */}
    {showControls && (
      <div className="bg-black bg-opacity-40 w-[38px] 2xl:w-[45px] h-[208px] 2xl:h-[262px] ml-4 p-4 flex flex-col justify-between items-center rounded-lg border border-white">
        <div><FaPlus /></div>
        <div><FaMinus /></div>
      </div>
    )}
  </div>
);

function CardSection() {
  return (
    <div className="flex justify-around w-[100%]">
      <Card
        title="Postal Entry"
        subtitle="No Purchase Necessary"
        description="USER ACCOUNT REQUIRED"
        buttonText="READ MORE"
        showControls={false}  // Hide controls for this card
      />
      <Card
        title="1 TICKET(S)"
        subtitle="£25.00"
        description="#ZM7861234567"
        buttonText="BUY NOW"
        showControls={true}  // Show controls for this card
      />
    </div>
  );
}

export default CardSection;

