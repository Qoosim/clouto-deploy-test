"use client";

import React from "react";
import Image from "next/image";

export const PinActivate = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#d8d9d8] rounded-md shadow-md w-[35%] 2xl:w-[30%] h-[50%] 2xl:h-[40%] py-6 px-10 overflow-auto relative top-[1%]">
        <div className="bg-[#d8d9d8] flex flex-col items-center gap-[2rem] font-inter">
          <div className="flex flex-col items-center gap-[1.5rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <Image
                src="/danger-cross.svg"
                width={30}
                height={30}
                alt="Danger Icon"
                className=""
              />
              <span className="text-[0.4rem] text-[#0bfe5d] font-bold">
                NO MORE HARMFUL CONTENTS
              </span>
            </div>
            <span className="text-[#fff] font-semibold text-[1.2rem]">
              Child Protection
            </span>
          </div>
          <div className="flex flex-col items-center gap-[4rem] w-full">
            <div className="flex justify-center">
              <span className="text-[#0bfe5d] text-[1.2rem] font-bold">
                CREATE CHILD PROTECTION PIN
              </span>
            </div>
            <div className="flex justify-center mt-[1rem] w-full">
              <button
                className="bg-[#0aff5b] text-[#fff] font-bold px-[2.5rem] py-[0.3rem]"
              >
                ACTIVATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
