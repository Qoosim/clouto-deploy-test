"use client";

import React from "react";
import Image from "next/image";

export const MoviesPage = () => {
  // mock data for primed
  const primersData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: "LOVE LIES",
    imageUrl: "/movies-img.svg",
  }));

  return (
    <>
      <div>
        {/* <HeaderSearch /> */}
        <div className="px-[2.5rem]">
          <span>Genre</span>
        </div>
        <div className="grid grid-cols-5 gap-[2rem] px-[2.5rem] w-full lg:max-h-[38rem] 2xl:max-h-[50rem] overflow-y-auto">
          {primersData?.map((item) => (
            <div className="" key={item.id}>
              <Image
                src={item.imageUrl}
                width={100}
                height={100}
                alt="Prime"
                className="object-cover w-full"
              />
              <div className="flex items-center justify-between text-[0.8rem] text-[#fff] font-semibold">
                <span>{item.name}</span>
                <span>{item.episode}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
