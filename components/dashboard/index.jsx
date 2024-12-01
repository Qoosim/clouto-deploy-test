"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { tabTexts } from "@/constants";
import { HeaderSearch } from "../headerSearch";
import { signOut } from "@/redux/auth/actions";
import { store } from "@/redux/store";

export const Dashboard = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [kidsToggle, setKidsToggle] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = store.dispatch;

  useEffect(() => {
    const activePanelIndex = tabTexts.findIndex(
      (panelItem) => `/${panelItem.url}` === pathname
    );
    setActiveIndex(activePanelIndex >= 0 ? activePanelIndex : 0);
  }, [pathname]);

  const activePanel = (panelIndex) =>
    panelIndex === activeIndex
      ? "text-[#11f761]"
      : "text-[#fff] bg-transparent";

  const handleClickLogout = () => {
    setShowLogout((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(signOut());
    router.push("/SignIn");
  };

  return (
    <>
      <aside className="fixed min-h-screen h-full sm:w-[24%] lg:w-[17%] bg-[#6f7ea4]">
        <div className="flex flex-col items-center gap-[10rem] h-full w-full">
          <div>
            <div className="flex justify-center items-center gap-2 mt-[1rem] cursor-pointer">
              <Image
                src="/clouto-img.png"
                width={60}
                height={60}
                alt="Naija Prime Logo"
                className=""
              />
              <span className="text-[#11f761] text-[1.25rem] font-semibold">
                CLOUTO
              </span>
            </div>
            <div className="flex flex-col items-center gap-[3rem] mt-[3rem] text-[1.25rem] font-semibold w-full">
              {tabTexts.map((item, panelIndex) => (
                <Link href={`/${item.url}`} key={panelIndex} className="">
                  <span
                    className={`tracking-tighter cursor-pointer w-full ${activePanel(
                      panelIndex
                    )}`}
                    onClick={() => setActiveIndex(panelIndex)}
                  >
                    {item.text}
                  </span>
                </Link>
              ))}
              {toggle && (
                <Link href={`/studio`} className="">
                  <span
                    className={`tracking-tighter cursor-pointer w-full text-[#11f761]`}
                  >
                    STUDIO
                  </span>
                </Link>
              )}
            </div>
          </div>
          <div className="relative flex flex-col gap-[2rem]">
            <div
              className="uppercase font-semibold tracking-tighter text-[#16ee64] cursor-pointer"
              onClick={handleClickLogout}
            >
              Settings
            </div>
            {showLogout && (
              <div
                className="uppercase font-semibold tracking-tighter cursor-pointer text-red-500"
                onClick={handleLogout}
              >
                LOGOUT
              </div>
            )}
          </div>
        </div>
      </aside>
      <main className="w-[calc(100% - 20%)] ml-0 sm:ml-[24%] lg:ml-[17%] bg-[#546998] h-screen">
        <HeaderSearch
          toggle={toggle}
          setToggle={setToggle}
          kidsToggle={kidsToggle}
          setKidsToggle={setKidsToggle}
        />
        {children}
      </main>
    </>
  );
};
