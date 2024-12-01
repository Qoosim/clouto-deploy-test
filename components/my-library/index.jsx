"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const LibraryHome = () => {
  const [rating, setRating] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showWatchTime, setShowWatchTime] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleForwardClick = () => {
    setTimeout(() => {
      setShowTrailer(true);
    }, 2000);

    setTimeout(() => {
      setShowWatchTime(true);
      setTimeout(() => {
        setShowWatchTime(false);
      }, 3000);
    }, 4000);
  };

  return (
    <>
      <div className="bg-[#3b5a83] min-h-screen w-full">
        <div className="flex items-center justify-between pl-[3rem] pr-[2rem] pt-[1rem]">
          <div className="flex items-center gap-[5rem]">
            <Link href={`/dashboard`}>
              <Image
                src="/library-back-arrow-icon-white.svg"
                width={20}
                height={20}
                alt="Backward Arrow Icon"
                className="cursor-pointer"
              />
            </Link>
            <span className="text-[#fff] font-medium text-[1.5rem] font-inika">
              MY LIBRARY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-10 bg-[#bac6d3] rounded-full"></div>
            <span>12345@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#a4cdb2] w-full h-[20rem] mt-[1.5rem] font-inter px-[4rem]">
          <div className="flex flex-col justify-center gap-[2rem] text-[#000] h-full">
            <h1 className="text-[2.5rem] font-bold">King Heart</h1>
            <div className="flex flex-col gap-[0.7rem]">
              <div className="flex items-center gap-[2rem]">
                <span className="text-[1.5rem] font-semibold">
                  We made the world
                </span>
                <div className="flex items-center gap-[1rem]">
                  <span className="text-[#000] text-[1.25rem] font-bold">
                    Rating
                  </span>
                  <span className="bg-[#569c7a] px-[1rem] py-[0.1rem] text-[#fff] text-[1.25rem] font-light">
                    18+
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[1rem] pl-[1rem]">
                <span>Rating</span>
                <div className="flex items-center gap-1">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handleRating(index + 1)}
                      className={`cursor-pointer ${
                        rating > index ? "text-[#0ffe9b]" : "text-[#d8d8d9]"
                      }`}
                    >
                      ★
                    </div>
                  ))}
                  <span className="text-[#d8d8d9] text-[1.2rem]">{rating}</span>
                </div>

                {/* <span className="text-[#d8d8d9] text-[1.2rem]">{rating}</span> */}
              </div>
            </div>
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/series-img.svg"
              width={420}
              height={420}
              alt="Caption"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-between font-inter pl-[3rem] pr-[2rem] pt-[1rem]">
          <div className="flex flex-col items-center w-fit text-[#fff] text-[1.3rem] font-semibold">
            <span>0</span>
            <span>PRIMED</span>
          </div>
          <div className="flex items-center gap-[2rem]">
            <span className="text-[#fff] bg-transparent font-normal text-[1.3rem]">
              Watchtime
            </span>
            <div className="bg-[#fff] px-[2rem] py-[0.1rem] text-[#000] font-bold text-[1.3rem]">
              2:00:00
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-[#fff] font-medium text-[1.3rem]">Movies</span>
        </div>
        <div className="flex items-center justify-between mt-[4rem] pl-[3rem] pr-[2rem]">
          <Link
            href={`/library/player`}
            className={`w-fit h-fit transition-all duration-500 ease-in-out transform  ${
              showTrailer
                ? "flex opacity-100 translate-y-0"
                : "invisible opacity-0 -translate-y-5"
            }`}
          >
            <Image
              src="/series-img.svg"
              width={250}
              height={250}
              alt="Movie Logo"
              className="object-cover"
            />
          </Link>
          <div onClick={handleForwardClick}>
            <Image
              src="/forward-arrow-library-white.svg"
              width={20}
              height={20}
              alt="Forward Arrow Icon"
              className="object-cover cursor-pointer"
            />
          </div>
        </div>
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out ${
            showWatchTime ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center gap-[1rem] w-[17rem] h-[10rem] bg-[#7ed99c] text-[#fff] text-[1.5rem] font-inter font-bold rounded-lg shadow-lg transform transition-all duration-500 ease-in-out ${
              showWatchTime
                ? "translate-y-0 scale-100"
                : "-translate-y-5 scale-95"
            }`}
          >
            <span>WATCH TIME</span>
            <span>ACTIVATED</span>
          </div>
        </div>
      </div>
    </>
  );
};
