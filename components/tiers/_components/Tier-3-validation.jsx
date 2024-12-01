"use client";

import React, { useState, useEffect } from "react";

export const TierValidation = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Display text after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#09d54c] rounded-md shadow-md w-[35%] 2xl:w-[25%] h-[50%] 2xl:h-[40%] py-6 px-10 overflow-auto relative top-[1%]">
        <div className="bg-[#09d54c] flex flex-col gap-[3rem] font-inter h-full">
          {showText && (
            <div className="text-[#000] flex justify-center pt-[5rem] h-full">
              <h2 className="text-[#fff] font-bold text-[1.5rem]">
                VALIDATING ACCOUNT...
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
