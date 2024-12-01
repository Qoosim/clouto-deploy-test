"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Settings = () => {
  return (
    <>
      <div className="bg-[#d8d9d8] w-full min-h-screen">
        <div className="px-[4rem] py-[5rem] font-inter text-[#000] font-semibold">
          <div className="w-full flex items-center justify-between mb-[1rem]">
            <Link href={`/studio`}>
              <Image
                src="/back-arrow-icon.svg"
                width={20}
                height={20}
                alt="Backward Arrow Icon"
                className="cursor-pointer"
              />
            </Link>
            <span className="">SETTINGS</span>
            <Link href={`/dashboard`}>
              <button className="bg-[#0abd46] px-[0.5rem] py-[0.3rem]">
                EXIT TO HOME
              </button>
            </Link>
          </div>
          <form>
            <div className="border-b border-b-black pb-2 mb-[1.5rem]">
              <span className="text-[#000] font-bold pl-[1rem]">Profile</span>
            </div>
            <div className="flex flex-col gap-[2rem]">
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span className="">Name</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span>Production name</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span>Describe what you do?</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span>Gender</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
            </div>
            <div className="border-b border-b-black pb-2 my-[2rem]">
              <span className="text-[#000] font-bold">Payment details</span>
            </div>
            <div className="flex flex-col gap-[2rem]">
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span className="">Bank name</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span>Account number</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-[3rem]">
                <div className="col-span-4 border-b border-b-black h-fit self-end">
                  <span>Account Holder</span>
                </div>
                <div className="col-span-8">
                  <input
                    type="text"
                    className="w-full pl-[1rem] py-[0.5rem] focus:outline-none"
                    placeholder="Kelechi"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[3rem]">
              <button className="text-[#fff] bg-[#ea1514] font-semibold px-[2rem] py-[0.5rem]">
                Edit all
              </button>
              <button className="text-[#000] bg-[#75fe07] font-semibold px-[1.3rem] py-[0.5rem]">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
