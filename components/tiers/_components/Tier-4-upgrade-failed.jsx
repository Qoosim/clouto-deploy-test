"use client";

import React from "react";
import Image from "next/image";

export const UpgradeFailed = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#09d54c] rounded-md shadow-md w-[35%] 2xl:w-[25%] h-[50%] 2xl:h-[40%] py-6 px-10 overflow-auto relative top-[1%]">
        <div className="bg-[#09d54c] flex flex-col gap-[3rem] font-inter">
          <div className="text-[#000] flex flex-col items-center gap-[1.5rem] pt-[2rem]">
            <div className="flex flex-col items-center gap-[1.3rem]">
              <Image
                src="/failed-icon.svg"
                width={60}
                height={60}
                alt="Danger Icon"
                className="object-cover"
              />
              <span className="text-[1.5rem] text-[#f90707] font-bold">VALIDATION FAILED</span>
            </div>
            <h3 className="text-[1.5rem] font-extrabold text-[#000]">PLEASE GET UP TO</h3>
            <h3 className="text-[1.5rem] font-extrabold text-[#000]">1000 PRIMERS TO UPGRADE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
