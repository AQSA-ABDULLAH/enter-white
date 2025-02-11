import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Card = ({ title, subtitle, description, buttonText, showControls }) => {
  const [ticketCount, setTicketCount] = useState(1);

  // Extract price from subtitle (e.g., "£25.00" -> 25.00)
  const price = parseFloat(subtitle.replace(/[^0-9.]/g, "")) || 0;
  const totalPrice = ticketCount * price;

  const increaseTicket = () => setTicketCount(ticketCount + 1);
  const decreaseTicket = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  return (
    <div className="flex text-white">
      <div className="relative w-[120px] sm:w-[180px] 2xl:w-[212px] flex flex-col items-center bg-cover bg-center tracking-widest">
        <div className="bg-black bg-opacity-40 w-full h-[120px] sm:h-[160px] 2xl:h-[212px] p-4 border border-white rounded-lg text-center flex flex-col justify-between">
          <h2 className="text-[12px] sm:text-[15px] 3xl:text-[20px]">
            {title === "1 TICKET(S)" ? `${ticketCount} TICKET(S)` : title}
          </h2>
          <p className="text-[12px] sm:text-[15px] 3xl:text-[20px]">£{totalPrice.toFixed(2)}</p>
          <p className="text-[5px] sm:text-[7px] 3xl:text-[12px]">{description}</p>
        </div>
        <div className="bg-black bg-opacity-40 hover:bg-white hover:text-black h-[30px] sm:h-[38px] 2xl:h-[45px] mt-[6px] sm:mt-[10px] flex justify-center rounded-lg border border-white text-center w-full">
          <button className="transition text-[10px] sm:text-[14px] 3xl:text-[20px] tracking-widest">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Conditional rendering for Plus/Minus controls */}
      {showControls && (
        <div className="bg-black bg-opacity-40 w-[18px] sm:w-[38px] 2xl:w-[45px] h-[156px] sm:h-[200px] 2xl:h-[262px] ml-4 p-4 flex flex-col justify-between items-center rounded-lg border border-white">
          <button onClick={increaseTicket} className="text-white">
            <FaPlus />
          </button>
          <button onClick={decreaseTicket} className="text-white">
            <FaMinus />
          </button>
        </div>
      )}
    </div>
  );
};

function CardSection() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-8 sm:gap-0 sm:w-[100%]">
      <Card
        title="Postal Entry"
        subtitle="No Purchase Necessary"
        description="USER ACCOUNT REQUIRED"
        buttonText="READ MORE"
        showControls={false} // Hide controls for this card
      />
      <Card
        title="1 TICKET(S)"
        subtitle="£25.00"
        description="#ZM7861234567"
        buttonText="BUY NOW"
        showControls={true} // Show controls for this card
      />
    </div>
  );
}

export default CardSection;


