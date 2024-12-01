"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const ChildAge = ({ onNext }) => {
  const [verificationCode, setVerificationCode] = useState(["", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const DEFAULT_CODE = "20"; // Default OTP code

  const handleCodeChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      } else if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 2).split("");
    const newCode = [...verificationCode];
    pastedData.forEach((value, index) => {
      if (index < 2 && /^[0-9]$/.test(value)) {
        newCode[index] = value;
      }
    });
    setVerificationCode(newCode);
    inputRefs.current[Math.min(pastedData.length, 1)].focus();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#d8d9d8] rounded-md shadow-md w-[35%] 2xl:w-[30%] h-[55%] 2xl:h-[40%] py-6 px-10 overflow-auto relative top-[1%]">
        <div className="bg-[#d8d9d8] flex flex-col items-center gap-[2rem] font-inter">
          <div className="flex flex-col items-center gap-[0.6rem]">
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
          <div className="flex flex-col items-center gap-[1.5rem] w-full">
            <div className="flex justify-center">
              <span className="text-[#0bfe5d] text-[1.2rem] font-bold">
                HOW OLD IS YOUR CHILD
              </span>
            </div>
            <div className="flex flex-col items-center gap-[0.5rem]">
              <span className="text-[#0bfe5d] text-[0.8rem] font-bold">
                PLEASE INPUT AGE
              </span>
              <div className="flex justify-center">
                <div className="flex justify-center gap-1 sm:gap-2 bg-[#fff] px-[1.3rem] py-[0.7rem] w-fit">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      className="w-8 h-10 sm:w-12 sm:h-10 text-center bg-[#d8d9d8] border border-white/20 rounded-md text-[#0bfe5d] text-lg sm:text-2xl font-bold placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-full">
              <button
                className="bg-[#0aff5b] text-[#fff] font-bold px-[2.5rem] py-[0.3rem]"
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
    </div>
  );
};
