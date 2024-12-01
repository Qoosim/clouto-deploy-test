"use client";

import React from "react";

export const Amount = ({ onNext }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#D9D9D9] rounded-md shadow-md w-[35%] 2xl:w-[25%] h-[50%] 2xl:h-[40%] py-6 px-[5rem] overflow-auto relative top-[1%]">
          <form className="bg-[#D9D9D9] flex flex-col gap-[3rem] font-inter border w-full">
            <div className="text-[#000 w-full flex flex-col items-center gap-[1rem] mt-[5rem]">
              <h2 className="text-[#000] font-bold text-[1.2rem]">
                PLEASE ENTER AMOUNT
              </h2>
              <input type="text" className="w-full py-2" />
            </div>
            <div className="flex justify-center mt-[1rem] w-full">
              <button
                className="bg-[#00ff57] text-[#000] font-bold px-[3.5rem] py-[0.5rem] w-full"
                onClick={(e) => {
                  e.preventDefault();
                  onNext();
                }}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
