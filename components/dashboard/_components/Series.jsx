"use client";

import React from "react";
import Image from "next/image";

export const SeriesPage = () => {
  // mock data for primed
  const primersData = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: "Daniel",
    episode: "4 episodes",
    imageUrl: "/series-img.svg",
  }));

  const innerImages = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    imageUrl: "/series-inner-img-2.svg",
  }));

  return (
    <>
      <div>
        {/* <HeaderSearch /> */}
        <div className="px-[2.5rem]">
          <span>Genre</span>
        </div>
        <div className="grid grid-cols-4 gap-[2rem] px-[2.5rem] w-full lg:max-h-[38rem] 2xl:max-h-[50rem] overflow-y-auto">
          {primersData?.map((item) => (
            <div className="" key={item.id}>
              <div className="relative">
                <Image
                  src={item.imageUrl}
                  width={100}
                  height={100}
                  alt="Prime"
                  className="object-cover w-full"
                />
                <div className="absolute left-0 bottom-0 grid grid-cols-4 w-full">
                  <Image
                    src="/series-inner-img-1.svg"
                    width={80}
                    height={80}
                    alt="Inner Series"
                    className="object-cover w-full"
                  />
                  {innerImages.map((item) => (
                    <div key={item.id}>
                      <Image
                        src={item.imageUrl}
                        width={80}
                        height={80}
                        alt="Inner Series"
                        className="object-cover  w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
