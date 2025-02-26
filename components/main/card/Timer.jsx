"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const targetDate = new Date("2025-02-31T00:00:00Z"); 

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const formatNumber = (num) => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
      seconds: formatNumber(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  return (
    <div className="">
      <div className="flex justify-between gap-6 items-center text-[30px] md:text-[38px] 3xl:text-[64px] tracking-widest"
      style={{ fontWeight: 100 }}>
        <div className="flex flex-col items-center">
          <p>{timeLeft.days}</p>
          <p className="text-[7px] 3xl:text-[13px] uppercase tracking-widest">Days</p>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <p className="text-[7px] 3xl:text-[13px] uppercase tracking-widest">Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <p className="text-[7px] 3xl:text-[13px] font-normal uppercase tracking-widest">Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <p className="text-[7px] 3xl:text-[13px] font-normal uppercase tracking-widest">Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;


