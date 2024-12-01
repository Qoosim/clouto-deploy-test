"use client";

import React from "react";

export const AccountDetails = ({ onNext }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#D9D9D9] rounded-md shadow-md w-[45%] 2xl:w-[30%] h-[60%] 2xl:h-[45%] py-6 px-10 overflow-auto relative top-[1%]">
          <form className="bg-[#D9D9D9] flex flex-col gap-[3rem] font-inter w-full">
            <div className="text-[#000] w-full flex flex-col items-center gap-[1rem]">
              <h2 className="text-[#000] font-bold text-[1.1rem]">
                PLEASE INPUT YOUR ACCOUNT DETAILS CORRECTLY
              </h2>
              <div className="w-[70%] flex flex-col gap-[3rem]">
                <div className="w-full flex flex-col gap-[1rem] font-bold">
                  <div className="flex flex-col">
                    <label>BANK NAME</label>
                    <input type="text" className="w-full py-2" />
                  </div>
                  <div className="flex flex-col">
                    <label>ACCOUNT NUMBER</label>
                    <input type="text" className="w-full py-2" />
                  </div>
                  <div className="flex flex-col">
                    <label>HOLDER&apos;S NAME</label>
                    <input type="text" className="w-full py-2" />
                  </div>
                </div>
                <div className="flex justify-center mt-[1rem] w-full">
                  <button
                    className="bg-[#00ff57] text-[#000] font-bold px-[5rem] py-[0.4rem]"
                    onClick={(e) => {
                      e.preventDefault();
                      onNext();
                    }}
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
