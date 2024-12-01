"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const PaymentSuccess = () => {
  const [showSuccessMark, setShowSuccessMark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMark(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#D9D9D9] text-[#000] rounded-md shadow-md w-[45%] 2xl:w-[30%] h-[60%] 2xl:h-[45%] py-6 px-10 overflow-auto relative top-[1%]">
          <div className="bg-[#D9D9D9] flex flex-col items-center gap-[2rem] font-inter w-full font-extrabold text-[1.5rem]">
            {showSuccessMark && (
              <Image
                src="/success-mark-icon.svg"
                width={60}
                height={60}
                alt="Success Mark Icon"
                className=""
              />
            )}
            <h1 className="text-[#0ABD46]">PAYMENT INITIATED</h1>
            <h3>YOU WILL RECEIVE YOUR FUNDS</h3>
            <h3>IN</h3>
            <h3>24 HOURS</h3>
          </div>
        </div>
      </div>
    </>
  );
};
