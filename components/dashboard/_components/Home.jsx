"use client";

import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

export const HomePage = () => {
  // mock data for primed
  const primersData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: "GOOD MAN",
    imageUrl: "/primer-img.svg",
  }));

  // mock data for creators
  const creatorData = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: "MALAKI",
    imageUrl: "/creator-img.svg",
  }));

  return (
    <>
      <div>
        {/* <HeaderSearch /> */}
        <div className="grid grid-cols-12 gap-[1.5rem] pl-[1.5rem] pr-[0.8rem]">
          <div className="col-span-7 flex flex-col justify-between gap-[7rem]">
            <div className="w-full h-[17rem]">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/HWjShLq-GD0?si=vYolpJVorW3r1CV9"
                width="100%"
                height="100%"
              />
              <div className="bg-[#435378] pb-[1rem]">
                <div className="flex items-center justify-between px-3 pt-2">
                  <div className="text-[#fff] font-semibold text-[0.9rem]">
                    GOOD MAN (official trailer)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="cursor-pointer">
                      <Image
                        src="/circle-i-img.svg"
                        width={25}
                        height={25}
                        alt="I Circle Icon"
                        className=""
                      />
                    </span>
                    <span className="cursor-pointer">
                      <Image
                        src="/share-icon.svg"
                        width={20}
                        height={20}
                        alt="Share Icon"
                        className=""
                      />
                    </span>
                    <span className="text-[#fff] font-semibold">100</span>
                  </div>
                </div>
                <div className="flex justify-between px-3">
                  <div className="flex items-start gap-[1rem]">
                    <div className="flex items-start gap-[0.5rem]">
                      <div className="bg-[#d9d8d8] size-[3rem] rounded-full"></div>
                      <div className="flex flex-col text-[#fff] font-semibold text-[0.875rem]">
                        <span>Jack elvis production</span>
                        <span>PRIMERS 13</span>
                      </div>
                    </div>
                    <span className="bg-[#0bfe5b] font-semibold text-[#000] text-[0.89rem] px-[0.8rem] py-[0.1rem] rounded-md">
                      PRIME
                    </span>
                  </div>
                  <button className="bg-[#0bfe5b] text-[#000] flex items-center gap-[0.5rem] self-end px-[0.3rem]">
                    <div className="flex items-center">
                      <span>
                        <Image
                          src="/naira-icon.svg"
                          width={20}
                          height={20}
                          alt="Naira Icon"
                          className=""
                        />
                      </span>
                      <span className="font-semibold">100</span>
                    </div>
                    <span className="font-semibold">PLAY FULL MOVIE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-[#fff] text-[1.2rem] font-semibold font-serif tracking-tighter mb-[0.8rem]">
                PRIMED
              </h2>
              <div className="grid grid-cols-5 gap-[0.5rem] w-full">
                {primersData?.map((item) => (
                  <div className="" key={item.id}>
                    <Image
                      src={item.imageUrl}
                      width={100}
                      height={100}
                      alt="Prime"
                      className="object-cover w-full"
                    />
                    <span className="text-[0.8rem] text-[#fff] font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div>
              <h2 className="text-[#fff] text-[1.2rem] font-semibold font-serif tracking-tighter mb-[0.8rem]">
                SIMILAR CREATORS
              </h2>
              <div className="grid grid-cols-3 gap-[0.5rem] w-full lg:max-h-[38rem] 2xl:max-h-[50rem] overflow-y-auto">
                {creatorData?.map((item) => (
                  <div className="" key={item.id}>
                    <Image
                      src={item.imageUrl}
                      width={100}
                      height={100}
                      alt="Prime"
                      className="object-cover w-full"
                    />
                    <span className="text-[0.8rem] text-[#fff] font-semibold">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
