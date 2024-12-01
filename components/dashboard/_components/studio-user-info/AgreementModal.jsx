"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API } from "@/redux/utils/api";
import { AxiosError } from "axios";
import { store } from "@/redux/store";
import { alertNotification } from "@/redux/auth/actions";
import { clearFormData } from "@/redux/userInfo/userInfoSlice";

export const AgreementModal = ({ onNext, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = store.dispatch;

  const { userInfoData } = useSelector((state) => state.userInfo);
  console.log("Retrieved Data: ", userInfoData);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOption !== "accept") return;
    setLoading(true);

    try {
      const response = await API.post("/api-send", userInfoData);
      const userData = response.data;
      if (userData) {
        alertNotification("Data sent successfully.", "success");
        dispatch(clearFormData());
        onNext();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#d9d8d8] rounded-md shadow-md w-[35%] 2xl:w-[30%] h-[80%] 2xl:h-[75%] py-6 px-10 overflow-auto relative top-[1%] 2xl:top-[4%]">
          <div className="bg-[#d8d8d9] font-inter">
            <div className="flex justify-center mb-[1.6rem]">
              <h1 className="text-[#fff] font-semibold text-[1.3rem] tracking-tighter">
                CREATOR&apos;S AGREEMENT
              </h1>
            </div>
            <div className="text-[#000] flex flex-col gap-[1rem] font-semibold">
              <p>
                This agreement is to confirm the user understands that all
                contents uploaded on Naija Prime, are of high security concerns
                and can not be see anywhere else, as that would be seen as
                COPYRIGHT INFRINGEMENT and could be taken down immediately, and
                could cause possible account suspensions.
              </p>
              <p>
                All contents uploaded must follow our guidelines, which
                includes: No Watermarks, good quality contents, respect to child
                protection for younger viewers.
              </p>
            </div>
            <form className="text-[#000] h-full mt-[1.5rem]">
              <h2 className="text-[#fff] font-semibold mb-[0.5rem]">
                Please tick the box to continue
              </h2>
              <div>
                <div className="flex items-center gap-[0.5rem]">
                  <input
                    type="checkbox"
                    value="accept"
                    checked={selectedOption === "accept"}
                    className="size-4"
                    onChange={handleCheckboxChange}
                    disabled={loading}
                  />
                  <span className="text-[#000] font-semibold">
                    Yes I accepted all protocol
                  </span>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <input
                    type="checkbox"
                    value="decline"
                    checked={selectedOption === "decline"}
                    className="size-4"
                    onChange={handleCheckboxChange}
                    disabled={loading}
                  />
                  <span className="text-[#000] font-semibold">
                    No I don&apos;t accept. Cancel
                  </span>
                </div>
              </div>
              {selectedOption === "accept" && (
                <div className="flex items-center justify-center mt-[3rem]">
                  <button
                    className="text-[#000] font-semibold bg-[#0aff5b] text-[1.2rem] px-[1rem] py-[0.5rem]"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Processing..." : "CREATE STUDIO"}
                  </button>
                </div>
              )}
              {selectedOption === "decline" && (
                <div className="flex items-center justify-center mt-[3rem]">
                  <button
                    className="text-[#fff] font-semibold bg-[#db2e05] text-[1.2rem] px-[2rem] py-[0.5rem]"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
