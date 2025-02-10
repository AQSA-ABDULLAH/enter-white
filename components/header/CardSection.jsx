import React from "react";

const Card = ({ title, subtitle, description, buttonText }) => (
  <div>
    <div className="relative w-[212px] h-[262px] flex flex-col items-center bg-cover bg-center text-white">
      <div className="bg-black bg-opacity-40 w-full h-[180px] 2xl:h-[212px] py-4 border border-white rounded-lg text-center flex flex-col justify-between">
        <h2 className="text-[20px]">{title}</h2>
        <p className="text-[20px]">{subtitle}</p>
        <p className="text-[12px]">{description}</p>
      </div>
      <div className="bg-black bg-opacity-40 h-[45px] mt-4 flex justify-center text-white rounded-lg border border-white text-center w-full">
        <button className=" hover:bg-white hover:text-black transition">
          {buttonText}
        </button>
      </div>
    </div>
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
        bgImage="/your-image-path.jpg"
      />
      <Card
        title="1 TICKET(S)"
        subtitle="£25.00"
        description="#ZM7861234567"
        buttonText="BUY NOW"
        bgImage="/your-image-path.jpg"
      />
    </div>
  );
}

export default CardSection;
