"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { TiersUpgradeSteps } from "../tiers";
import { WithdrawSteps } from "../withdraw";

export const StudioPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const fileRef = useRef();
  const [isUpgrageOpen, setIsUpgradeOpen] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [uploadOptions, setUploadOptions] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setModalVisible(false);
    }
  };

  const handleUpgradeClick = () => {
    setIsUpgradeOpen(true);
  };

  const handleCloseModal = () => {
    setIsUpgradeOpen(false);
  };

  const handleClickWithdraw = () => {
    setIsWithdraw(true);
  };

  const handleCloseWithdraw = () => {
    setIsWithdraw(false);
  };

  const handleClickUpload = () => {
    setUploadOptions((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[#556999] h-screen w-full font-inter">
        <header className="flex items-center justify-between px-6 py-3">
          <div className="flex justify-center cursor-pointer">
            <Image
              src="/NaijaPrime.png"
              width={60}
              height={60}
              alt="Naija Prime Logo"
              className=""
            />
            <span className="text-[#11f761] text-[1.25rem] font-semibold self-end -ml-[0.8rem]">
              NAIJAPRIME
            </span>
          </div>
          <div className="flex items-center gap-[1.5rem]">
            <button
              className="bg-[#b3cc34] text-[#fff] text-[1rem] px-[1rem] py-[0.3rem] rounded-md"
              onClick={handleUpgradeClick}
            >
              UPGRADE TO TIER 2
            </button>
            <div className="flex items-center gap-[1rem]">
              <div className="relative">
                <Image
                  src="/upload-icon.svg"
                  width={35}
                  height={35}
                  alt="Upload Icon"
                  className="cursor-pointer"
                  onClick={handleClickUpload}
                />
                <ul
                  className={`absolute left-0 top-full mt-2 bg-white px-4 py-2 text-black text-sm font-semibold shadow-lg rounded-md transition-all duration-300 ${
                    uploadOptions
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <li className="py-1 hover:text-blue-500 cursor-pointer">
                    MOVIES
                  </li>
                  <li className="py-1 hover:text-blue-500 cursor-pointer">
                    SERIES
                  </li>
                  <li className="py-1 hover:text-blue-500 cursor-pointer">
                    OTHERS[DOC, VLOG ETC]
                  </li>
                </ul>
              </div>
              <div>
                <Link href={`/settings`}>
                  <Image
                    src="/settings-icon.svg"
                    width={30}
                    height={30}
                    alt="Settings Icon"
                    className=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="w-full">
          <div className="bg-[#7c8bac] ml-[4rem] mr-[2rem] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[#11f761] text-[1rem] font-semibold">
                TIER 1
              </span>
              <div className="flex items-center">
                <span className="text-[#000] text-[0.688rem] font-semibold">
                  EARNING LIMIT:
                </span>
                <div className="flex items-center">
                  <Image
                    src="/naira-icon.svg"
                    width={15}
                    height={15}
                    alt="Naira Icon"
                    className=""
                  />
                  <span className="text-[#000] text-[0.688rem] font-semibold">
                    30
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[2rem]">
                {image && image !== null && (
                  <div className="flex items-center justify-center h-[9rem] w-[40%] bg-[#d8d9d8] rounded-md p-7 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%] relative overflow-hidden">
                    <Image
                      src={image}
                      alt="Uploaded Image"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full z-0 rounded-md rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%]"
                    />
                  </div>
                )}
                {!image && (
                  <div
                    className="flex justify-center items-center h-[9rem] w-[40%] bg-[#d8d9d8] rounded-md cursor-pointer p-7 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%] relative overflow-hidden"
                    onClick={() => setModalVisible(true)}
                  >
                    <span className="text-[#757474] font-semibold whitespace-nowrap">
                      TAP TO UPLOAD
                    </span>
                  </div>
                )}
                {/* Upload goes here */}
                <div>
                  {modalVisible && (
                    <div
                      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 transition-opacity duration-500 ease-in-out`}
                      onClick={() => setModalVisible(false)}
                    >
                      {/* Upload logic here */}
                      <div
                        className="flex flex-col justify-center items-center gap-2 h-[20rem] w-[25%] mx-auto bg-[#fefffe] bg-opacity-40 rounded-md cursor-pointer p-7 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%]
                          relative overflow-hidden transform transition-all duration-500 ease-in-out"
                        onClick={(e) => {
                          e.stopPropagation();
                          fileRef.current && fileRef.current.click();
                        }}
                      >
                        {!image && (
                          <div className="flex flex-col items-center gap-3 relative z-10">
                            <div className="flex flex-col items-center gap-[2rem] text-[#000] text-[1.4rem] font-bold">
                              <span className="">DRAG AND DROP</span>
                              <span>OR</span>
                              <span className="text-[#0afe5a]">
                                UPLOAD FROM SYSTME
                              </span>
                            </div>
                          </div>
                        )}
                        {image && image !== null && (
                          <Image
                            src={image}
                            alt="Uploaded Image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 w-full h-full z-0 rounded-md rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%]"
                          />
                        )}
                        <input
                          type="file"
                          // {...register("imageUrl")}
                          ref={fileRef}
                          onChange={handleImageUpload}
                          hidden
                        />
                      </div>
                      {/* Upload stop here */}
                      {/* </div> */}
                    </div>
                  )}
                  {/* Upload ends here */}
                </div>
                <div className="flex flex-col gap-[0.8rem]">
                  <h3 className="text-[1.8rem] font-semibold text-[#fff] whitespace-nowrap">
                    OMA&apos;S PRODUCTION
                  </h3>
                  <div className="flex flex-col gap[2.3rem] text-[#fff] font-semibold text-[1rem]">
                    <div className="flex items-center gap-[1rem]">
                      <span>PRIMERS</span>
                      <span>100</span>
                    </div>
                    <div className="flex items-center gap-[1.8rem]">
                      <span>VIDEOS</span>
                      <span>1000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[3rem] mr-[5rem]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[1.5rem] font-semibold text-[#fff] whitespace-nowrap">
                    WALLET BALANCE
                  </h3>
                  <div className="flex items-center bg-[#d8d9d8] p-[0.5rem]">
                    <Image
                      src="/naira-icon.svg"
                      width={25}
                      height={25}
                      alt="Naira Icon"
                      className=""
                    />
                    <span className="text-[#000] font-semibold">1000</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[1.5rem] font-semibold text-[#fff] whitespace-nowrap">
                    WITHDRAWALS
                  </h3>
                  <div className="flex items-center bg-[#d8d9d8] p-[0.5rem]">
                    <Image
                      src="/naira-icon.svg"
                      width={25}
                      height={25}
                      alt="Naira Icon"
                      className=""
                    />
                    <span className="text-[#000] font-semibold">1000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-[#000] font-semibold text-[0.75rem] bg-[#0aff5b] px-[1rem] py-[0.3rem] rounded-md"
                onClick={handleClickWithdraw}
              >
                WITHDRAW
              </button>
            </div>
          </div>
        </div>
        <div className="ml-[4rem] mr-[2rem] mt-[3rem]">
          <h2 className="text-[1.2rem] text-[#fff] font-semibold mb-[0.5rem]">
            UPLOADS
          </h2>
          <div className="grid grid-cols-12 gap-5 bg-[#7c8bac] px-8 py-4 rounded-md">
            <div className="col-span-5">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/HWjShLq-GD0?si=vYolpJVorW3r1CV9"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-span-7 text-[1.2rem] font-semibold text-[#fff]">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[1rem] whitespace-nowrap">
                      <span>Title: </span>
                      <span>KINGS OF HEART</span>
                    </div>
                    <div className="flex items-center gap-[1rem] whitespace-nowrap">
                      <span>Indication: </span>
                      <span>VIOLENCE</span>
                    </div>
                    <div className="flex items-center gap-[1rem] whitespace-nowrap">
                      <span>Lock: </span>
                      <span>20 Naira</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 whitespace-nowrap mt-[1rem]">
                    <span>About:</span>
                    <span>Together we shall stand regardless</span>
                  </div>
                </div>
                <div className="flex items-center gap-[1rem] self-end whitespace-nowrap">
                  <div className="text-[#fff] font-semibold text-[1rem] flex items-center gap-[0.3rem]">
                    <Image
                      src="/share-icon-white.svg"
                      width={20}
                      height={20}
                      alt="Share Icon"
                      className=""
                    />
                    <span>500</span>
                  </div>
                  <div className="text-[#fff] font-semibold text-[1rem] flex items-center gap-[0.3rem]">
                    <Image
                      src="/naira-icon-white.svg"
                      width={20}
                      height={20}
                      alt="Share Icon"
                      className=""
                    />
                    <span>200,000</span>
                  </div>
                  <div className="text-[#fff] font-semibold text-[1rem] flex items-center gap-[0.3rem]">
                    <Image
                      src="/view-icon-white.svg"
                      width={30}
                      height={30}
                      alt="Share Icon"
                      className=""
                    />
                    <span>15k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {isUpgrageOpen && (
            <TiersUpgradeSteps
              isOpen={isUpgrageOpen}
              onClose={handleCloseModal}
            />
          )}
        </div>
        <div>
          {isWithdraw && (
            <WithdrawSteps isOpen={isWithdraw} onClose={handleCloseWithdraw} />
          )}
        </div>
      </div>
    </>
  );
};
