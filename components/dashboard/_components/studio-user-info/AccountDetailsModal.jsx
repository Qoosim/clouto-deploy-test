"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { accountDetailsSchema } from "@/redux/utils/validations";
import { ErrorMessage } from "@/redux/utils/messages/error-messages";
import { store } from "@/redux/store";
import { updateFormData } from "@/redux/userInfo/userInfoSlice";

export const AccountDetailsModal = ({ onNext, onPrevious }) => {
  const { userInfoData } = useSelector((state) => state.userInfo);

  const dispatch = store.dispatch;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...userInfoData.accountDetails,
    },
    resolver: yupResolver(accountDetailsSchema),
  });

  const processData = (data) => {
    console.log("Form Data: ", data);
    dispatch(updateFormData({ accountDetails: data }));
    onNext();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-[#d9d8d8] rounded-md shadow-md w-[35%] 2xl:w-[30%] h-[75%] py-6 px-10 overflow-auto relative top-[1%] 2xl:top-[4%]">
          <div className="bg-[#d8d8d9] font-inter">
            <div className="flex flex-col items-center mb-[0.8rem]">
              <h1 className="text-[#fff] font-semibold text-[2.3rem] tracking-tighter">
                ACCOUNT DETAILS
              </h1>
              <span className="text-[#fff] text-[0.738rem] font-semibold tracking-tighter">
                Please input account details
              </span>
            </div>
            <form
              onSubmit={handleSubmit(processData)}
              className="text-[#000] h-full"
            >
              <div className="flex flex-col justify-between gap-[2rem]">
                <div className="flex flex-col flex-grow gap-[0.5rem]">
                  <div className="flex flex-col gap-[0.1rem]">
                    <label className="font-semibold text-[1.1rem]">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                      {...register("bank_name")}
                    />
                  </div>
                  {errors.bank_name?.message && (
                    <ErrorMessage message={errors.bank_name.message} />
                  )}
                  <div className="flex flex-col gap-[0.1rem]">
                    <label className="font-semibold text-[1.1rem]">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                      {...register("account_number")}
                    />
                  </div>
                  {errors.account_number?.message && (
                    <ErrorMessage message={errors.account_number.message} />
                  )}
                  <div className="flex flex-col gap-[0.1rem]">
                    <label className="font-semibold text-[1.1rem]">
                      Holder&apos;s Name
                    </label>
                    <input
                      type="text"
                      className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                      {...register("holder_name")}
                    />
                  </div>
                  {errors.holder_name?.message && (
                    <ErrorMessage message={errors.holder_name.message} />
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="bg-[#fff] font-bold px-[0.8rem] py-[0.3rem]"
                    onClick={onPrevious}
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0aff5b] font-bold px-[1.5rem] py-[0.3rem]"
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
