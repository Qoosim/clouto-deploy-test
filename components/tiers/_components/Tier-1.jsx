"use client";

import React from "react";

export const TierOne = ({ onNext }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#09d54c] rounded-md shadow-md w-[35%] 2xl:w-[25%] h-[50%] 2xl:h-[40%] py-6 px-10 overflow-auto relative top-[1%]">
        <div className="bg-[#09d54c] flex flex-col gap-[3rem] font-inter">
          <div className="text-[#000] flex flex-col gap-[1rem] pt-[2rem]">
            <h2 className="text-[#fff] font-bold text-[1.5rem]">YOU ARE IN</h2>
            <h1 className="text-[#000] font-extrabold text-[1.5rem]">TIER 1</h1>
            <div>
              <h3 className="text-[1rem] font-bold mb-[1rem]">BENEFITS</h3>
              <ol className="list-decimal pl-4 font-bold">
                <li>30 naira lock amount limit</li>
                <li>Instant withdrawal</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center mt-[1rem] w-full">
            <button
              className="bg-[#00ff57] text-[#000] font-bold px-[3.5rem] py-[0.5rem]"
              onClick={(e) => {
                e.preventDefault();
                onNext();
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
