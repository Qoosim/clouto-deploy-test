"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { KidsToggleComponent, ToggleComponent } from "../toggle";
import { UserInfoFormSteps } from "../dashboard/_components/studio-user-info";
import { KidsProtectionFormSteps } from "../kids-protection";

export const HeaderSearch = ({
  toggle,
  setToggle,
  kidsToggle,
  setKidsToggle,
}) => {
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleKidsToggle = () => setKidsToggle((prev) => !prev);

  useEffect(() => {
    const savedToggleState = localStorage.getItem("toggleState");
    if (savedToggleState !== null) {
      setToggle(JSON.parse(savedToggleState));
    }
  }, [setToggle]);

  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(toggle));
  }, [toggle]);

  const handleClose = () => {
    if (!isFormCompleted) {
      setToggle(false);
    }
  };

  const handleNotificationClick = () => {
    setNotification((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-[2rem] ml-[3rem] mr-[1rem] py-[1rem]">
        <div className="w-full flex-1">
          <form className="relative flex items-center">
            <input
              type="text"
              placeholder="SEARCH TITLE"
              className="w-full py-[0.5rem] rounded-lg placeholder-[#9ad1ad] text-[1rem] pl-[1rem] text-[#000] focus:outline-none"
            />
            <div className="bg-[#48c473] flex items-center gap-[0.5rem] py-[0.3rem] px-[0.8rem] w-fit rounded-lg absolute right-0 mr-3 cursor-pointer">
              <Image
                src="/search-icon.svg"
                width={15}
                height={15}
                alt="Search Icon"
                className=""
              />
              <span className="text-[#fff] font-semibold text-[0.7rem]">
                SEARCH
              </span>
            </div>
          </form>
        </div>
        <div className="flex items-center gap-[3rem]">
          <div className="flex items-center gap-[0.7rem]">
            <div className="flex items-center gap-[0.4rem]">
              <span className="text-[#fff] text-[0.875rem] font-semibold whitespace-nowrap">
                Kids Protection
              </span>
              <KidsToggleComponent
                kidsToggle={kidsToggle}
                setKidsToggle={setKidsToggle}
              />
              <div>{kidsToggle ? "enabled" : "disabled"}</div>
            </div>
            <div className="flex items-center gap-[0.3rem]">
              <span className="text-[#fff] text-[0.7rem] font-semibold whitespace-nowrap">
                CREATOR MODE
              </span>
              <ToggleComponent toggle={toggle} setToggle={setToggle} />
            </div>
          </div>
          <div className="flex items-center gap-[1.5rem]">
            <div className="relative">
              <Image
                src="/notification-bell.svg"
                width={18}
                height={18}
                alt="Notification Bell"
                className="cursor-pointer"
                onClick={handleNotificationClick}
              />
              {notification && (
                <div className="absolute -left-[3.5rem] top-full mt-3 text-[0.6rem] text-[#0bfe5b] font-bold tracking-tight font-inter whitespace-nowrap">
                  NO MESSAGE FOUND
                </div>
              )}
            </div>
            <Link href={`/library`} className="flex items-center gap-[0.5rem]">
              <div className="size-[2rem] rounded-full bg-[#c3cadb]"></div>
              <span className="text-[#fff]">Profile</span>
            </Link>
          </div>
        </div>
        <div>
          {kidsToggle && (
            <KidsProtectionFormSteps
              isOpen={kidsToggle}
              onClose={handleKidsToggle}
            />
          )}
        </div>
        <div>
          {toggle && (
            <UserInfoFormSteps
              isOpen={toggle}
              onClose={handleClose}
              setIsFormCompleted={setIsFormCompleted}
            />
          )}
        </div>
      </div>
    </>
  );
};
