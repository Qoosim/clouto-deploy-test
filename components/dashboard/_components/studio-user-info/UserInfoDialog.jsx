"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { userInfoFormSchema } from "@/redux/utils/validations";
import { ErrorMessage } from "@/redux/utils/messages/error-messages";
import { store } from "@/redux/store";
import { updateFormData } from "@/redux/userInfo/userInfoSlice";

export const UserInfoDialog = ({ isOpen, onClose, onNext }) => {
  const { userInfoData } = useSelector((state) => state.userInfo);

  const dispatch = store.dispatch;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...userInfoData.basicInfo,
    },
    resolver: yupResolver(userInfoFormSchema),
  });

  const processData = (data) => {
    dispatch(updateFormData({ basicInfo: data }));
    onNext();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#d9d8d8] rounded-md shadow-md w-[35%] 2xl:w-[30%] h-[75%] py-6 px-10 overflow-auto relative top-[1%] 2xl:top-[4%]">
        <div className="bg-[#d8d8d9] font-inter">
          <div className="flex flex-col items-center mb-[0.8rem]">
            <h1 className="text-[#fff] font-semibold text-[2.3rem] tracking-tighter">
              User Info
            </h1>
            <span className="text-[#fff] text-[0.738rem] font-semibold tracking-tighter">
              PLEASE FILL THE FORM CORRECTLY
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
                    Full name
                  </label>
                  <input
                    type="text"
                    className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                    {...register("full_name")}
                  />
                </div>
                {errors.full_name?.message && (
                  <ErrorMessage message={errors.full_name.message} />
                )}
                <div className="flex flex-col gap-[0.1rem]">
                  <label className="font-semibold text-[1.1rem]">
                    Location
                  </label>
                  <input
                    type="text"
                    className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                    placeholder="What state are you based?"
                    {...register("location")}
                  />
                </div>
                {errors.location?.message && (
                  <ErrorMessage message={errors.location.message} />
                )}
                <div className="flex flex-col gap-[0.1rem]">
                  <label className="font-semibold text-[1.1rem]">Age?</label>
                  <input
                    type="text"
                    className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                    {...register("age")}
                  />
                </div>
                {errors.age?.message && (
                  <ErrorMessage message={errors.age.message} />
                )}
                <div className="flex flex-col gap-[0.1rem]">
                  <label className="font-semibold text-[1.1rem]">
                    Are you a content creator?
                  </label>
                  <input
                    type="text"
                    className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                    {...register("content_creator")}
                  />
                </div>
                {errors.content_creator?.message && (
                  <ErrorMessage message={errors.content_creator.message} />
                )}
                <div className="flex flex-col gap-[0.1rem]">
                  <label className="font-semibold text-[1.1rem]">
                    Preferred production name?
                  </label>
                  <input
                    type="text"
                    className="py-[0.3rem] focus:outline-none pl-[0.4rem] w-full"
                    {...register("production_name")}
                  />
                </div>
                {errors.production_name?.message && (
                  <ErrorMessage message={errors.production_name.message} />
                )}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-[#fff] font-bold px-[0.8rem] py-[0.3rem]"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  CANCEL
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
  );
};
