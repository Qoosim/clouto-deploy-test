"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { resendOtp, verifyEmail } from "@/redux/auth/actions";
import { Spinner } from "@/components/spinner";
import { alertNotification } from "@/redux/auth/actions";

export const VerificationComponent = () => {
  const { isLoading } = useSelector((state) => state.user);

  const currentYear = new Date().getFullYear();
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  const regEmail = localStorage.getItem("regEmail");
  const loginEmail = localStorage.getItem("loginEmail");

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleCodeChange = (index, value) => {
    if (/^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      } else if (!value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newCode = [...verificationCode];
    pastedData.forEach((value, index) => {
      if (index < 6 && /^[0-9]$/.test(value)) {
        newCode[index] = value;
      }
    });
    setVerificationCode(newCode);
    inputRefs.current[Math.min(pastedData.length, 5)].focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!type) {
      console.log("Type is not defined.");
      return;
    }
    const otp = verificationCode.join("");
    const userEmail = type === "signup" ? regEmail : loginEmail;

    try {
      await verifyEmail({ email: userEmail, otp, type, router });
    } catch (error) {
      console.log("Verification error", error);
    }
  };

  const handleResendCode = () => {
    const userEmail = type === "signup" ? regEmail : loginEmail;
    console.log("User email:", userEmail);

    if (!userEmail) {
      alertNotification(
        "Unable to determine email address. Please try again.",
        "error"
      );
      return;
    }
    resendOtp({ email: userEmail, type });
  };

  // Function to handle going back
  const handleBackClick = () => {
    router.back(); // This will take the user to the previous page
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
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 py-8">
        <button
          onClick={handleBackClick}
          className="absolute top-[16rem] left-12 text-white p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 lg:w-8 lg:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

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

        {/* Verification Form */}
        <div className="max-w-md mx-auto w-full space-y-6 text-center">
          <h1 className="text-white text-3xl font-bold">VERIFY</h1>

          <form onSubmit={handleVerify} className="space-y-4">
            <label className="block text-sm text-gray-300">
              Enter 6 digit code from email
            </label>
            <div className="flex justify-center gap-1 sm:gap-2">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  className="w-8 h-10 sm:w-10 sm:h-12 text-center bg-white/60 border border-white/20 rounded-md text-white text-lg sm:text-2xl font-bold placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                />
              ))}
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {success && (
              <p className="animate-pulse text-teal-100">
                Code verified successfully! Redirecting...
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-[8rem] lg:w-[12rem] bg-[#0AFF5B] mt-4 text-black text-sm font-semibold py-3 rounded-md transition-colors`}
            >
              {isLoading ? <Spinner /> : "VERIFY"}
            </button>
          </form>

          <p className="text-gray-300 text-sm">
            Didn&apos;t receive code?{" "}
            <Link href="/Confirmation">
              <button
                onClick={handleResendCode}
                className="text-[#0AFF5B] hover:underline"
              >
                Resend code
              </button>
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
};
