"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/redux/utils/validations";
import { ErrorMessage } from "@/redux/utils/messages/error-messages";
import { useRouter } from "next/navigation";
import { login } from "@/redux/auth/actions";
import { Spinner } from "@/components/spinner";
import { useSelector } from "react-redux";

export default function Component() {
  const { isLoading } = useSelector((state) => state.user);
  const currentYear = new Date().getFullYear();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },

    resolver: yupResolver(loginSchema),
  });

  const formSubmit = (data) => {
    login(data, router);
  };

  return (
    <div className="min-h-screen bg-teal-900 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/PrimeBG.jpg"
          alt="Cinematic sea monster background"
          fill
          className="object-cover transform -scale-x-100"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 py-8">
        <div className="flex items-center gap-6 mb-auto">
          {/* Logo Image */}
          <Image
            src="/clouto-img.png"
            alt="NaijaPrime Logo"
            width={60}
            height={80}
          />

          {/* NaijaPrime Text */}
          <span className="text-xl font-semibold ml-[-12px] text-[#fff]">
            CLOUTO
          </span>
        </div>

        {/* Sign In Form */}
        <div className="max-w-md mx-auto w-full space-y-6 text-center">
          <h1 className="text-white text-3xl font-bold">SIGN IN</h1>

          <form onSubmit={handleSubmit(formSubmit)} className="space-y-2">
            <label className="block text-center mb-6 text-sm text-gray-300">
              Enter Registered Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/60 border border-white/20 rounded-md text-white placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Email"
                {...register("email")}
              />
              <button
                type="submit"
                className="absolute right-2 top-1 bottom-1 bg-green-400 text-black text-[12px] font-semibold px-4 my-[3px] rounded"
              >
                {isLoading ? <Spinner /> : "LOGIN"}
              </button>
            </div>
            {errors.email?.message && (
              <ErrorMessage message={errors.email?.message} />
            )}
          </form>

          <p className="text-gray-300 text-sm">
            Are you new?{" "}
            <Link href="/SignUp" className="text-[#0AFF5B] hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto flex flex-col items-center gap-2 sm:gap-3 text-[#0AFF5B] text-xs uppercase tracking-wider">
          <div className="flex justify-center gap-4 sm:gap-6">
            <span className="hover:text-green-300 cursor-not-allowed">
              Stream
            </span>
            <span className="hover:text-green-300 cursor-not-allowed">
              Upload
            </span>
            <span className="hover:text-green-300 cursor-not-allowed">
              Get Paid
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy">
              <button className="text-white text-xs hover:underline">
                Privacy policy
              </button>
            </Link>
            <Link href="/terms">
              <button className="text-white text-xs hover:underline">
                Terms of use
              </button>
            </Link>
          </div>
          <p className="text-gray-200 text-[10px]">
            &quot;Clouto&quot; is a trademark of Clouto Ltd. All rights reserved
            ©{currentYear}.
          </p>
        </div>
      </div>
    </div>
  );
}
