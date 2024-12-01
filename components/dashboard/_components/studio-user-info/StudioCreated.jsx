"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const StudioCreated = ({ onComplete }) => {
  const [showSuccessMark, setShowSuccessMark] = useState(false);

  useEffect(() => {
    const successMarkTimer = setTimeout(() => {
      setShowSuccessMark(true);

      const hiderComponentTimer = setTimeout(() => {
        if (onComplete) {
          onComplete(); // close the form but toggle stays on
        }
      }, 2000);

      return () => clearTimeout(hiderComponentTimer);
    }, 2000);

    return () => clearTimeout(successMarkTimer);
  }, [onComplete]);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#d9d8d8] rounded-md shadow-md w-[35%] 2xl:w-[30%] h-[80%] 2xl:h-[75%] py-6 px-10 overflow-auto relative top-[1%] 2xl:top-[4%]">
          <div className="bg-[#d8d8d9] font-inter">
            <div className="flex justify-center mt-[10rem] h-[12rem]">
              <div className="flex flex-col items-center justify-between h-full">
                <h1 className="text-[#0bfe5b] font-bold text-[1.3rem] tracking-tighter">
                  STUDIO CREATED SUCCESSFULLY
                </h1>
                {showSuccessMark && (
                  <div>
                    <Image
                      src="/success-mark-icon.svg"
                      width={70}
                      height={70}
                      alt="Success Mark"
                      className=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
