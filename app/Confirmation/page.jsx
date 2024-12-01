'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function OTPConfirmation () {
  const currentYear = new Date().getFullYear()
  const [countdown, setCountdown] = useState(3)
  const [rerouteTimer, setRerouteTimer] = useState(10)
  const router = useRouter()

  // Function to handle going back
  const handleBackClick = () => {
    router.back() // This will take the user to the previous page
  }

  const handleResendCode = () => {
    setCountdown(3)
    setRerouteTimer(10)
    // Implement actual resend logic here
  }

  useEffect(() => {
    let countdownInterval
    let rerouteInterval

    if (countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }

    if (rerouteTimer > 0) {
      rerouteInterval = setInterval(() => {
        setRerouteTimer(prev => prev - 1)
      }, 1000)
    } else {
      router.push('/Verification')
    }

    return () => {
      clearInterval(countdownInterval)
      clearInterval(rerouteInterval)
    }
  }, [countdown, rerouteTimer, router])

  return (
    <div className='min-h-screen bg-teal-900 flex flex-col'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/PrimeBG.jpg'
          alt='Cinematic sea monster background'
          fill
          className='object-cover transform -scale-x-100'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col min-h-screen px-4 sm:px-6 py-8'>
        {/* Back Button - Positioned similar to the image you shared */}
        <button
          onClick={handleBackClick}
          className='absolute top-[16rem] left-12 text-white p-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 lg:w-8 lg:h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <div className='flex items-center gap-1 mb-auto'>
          {/* Logo Image */}
          <Image
            src='/NaijaPrime.png'
            alt='NaijaPrime Logo'
            width={60}
            height={80}
          />

          {/* NaijaPrime Text */}
          <span className='text-xl font-semibold ml-[-12px] text-[#248f48]'>
            NAIJAPRIME
          </span>
        </div>

        {/* Message Content */}
        <div className='max-w-md mx-auto w-full space-y-6 text-center'>
          <div className='space-y-12'>
            <h2 className='text-white text-xl font-semibold'>
              OTP RESENT TO EMAIL
            </h2>
            <p className='text-white text-lg'>PLEASE WAIT</p>
            <p className='text-gray-300 text-sm'>
              Didn&apos;t receive code?{' '}
              <button
                onClick={handleResendCode}
                className='text-[#0AFF5B] hover:underline disabled:opacity-50'
                disabled={countdown > 0}
              >
                Resend code {countdown > 0 && `(${countdown})`}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-auto flex flex-col items-center gap-2 sm:gap-3 text-[#0AFF5B] text-xs uppercase tracking-wider'>
          <div className='flex justify-center gap-4 sm:gap-6'>
            <span className='hover:text-green-300 cursor-not-allowed'>
              Stream
            </span>
            <span className='hover:text-green-300 cursor-not-allowed'>
              Upload
            </span>
            <span className='hover:text-green-300 cursor-not-allowed'>
              Get Paid
            </span>
          </div>
          <div className='flex gap-4'>
            <Link href='/privacy'>
              <button className='text-white text-xs hover:underline'>
                Privacy policy
              </button>
            </Link>
            <Link href='/terms'>
              <button className='text-white text-xs hover:underline'>
                Terms of use
              </button>
            </Link>
          </div>
          <p className='text-gray-200 text-[10px]'>
            &quot;Naija Prime&quot; is a trademark of Naija Prime Ltd. All
            rights reserved ©{currentYear}.
          </p>
        </div>
      </div>
    </div>
  )
}
