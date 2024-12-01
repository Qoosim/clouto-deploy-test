"use client";

import React, { useState, useRef, useEffect } from "react";

export const Pin = ({ onNext }) => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const DEFAULT_CODE = "1234"; // Default OTP code

  const handleCodeChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      } else if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4).split("");
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
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#D9D9D9] rounded-md shadow-md w-[35%] 2xl:w-[25%] h-[50%] 2xl:h-[40%] py-6 px-10 overflow-auto relative top-[1%]">
          <form className="bg-[#D9D9D9] flex flex-col gap-[3rem] font-inter w-full">
            <div className="text-[#000] w-full flex flex-col items-center gap-[1rem] mt-[5rem]">
              <h2 className="text-[#000] font-bold text-[1rem]">
                ENTER 4 DIGIT PAYMENT PIN SENT TO EMAIL
              </h2>
              <div className="flex justify-center gap-2">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    className="w-8 h-10 sm:w-12 sm:h-10 text-center bg-[#fff] text-[#000] text-md sm:text-2xl font-bold placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-[1rem] w-full">
              <button
                className="bg-[#00ff57] text-[#000] font-bold px-[3.5rem] py-[0.5rem] w-full"
                onClick={(e) => {
                  e.preventDefault();
                  onNext();
                }}
              >
                VERIFY
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
