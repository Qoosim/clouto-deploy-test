"use client";

import React, { useState, useEffect } from "react";
import { Amount } from "./_components/Amount";
import { Pin } from "./_components/Pin";
import { Confirm } from "./_components/Confirm";
import { AccountDetails } from "./_components/AccountDetails";
import { PaymentSuccess } from "./_components/PaymentSuccess";

export const WithdrawSteps = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (currentStep === 5) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, onClose]);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderWithdrawSteps = () => {
    switch (currentStep) {
      case 1:
        return <Amount isOpen={isOpen} onNext={handleNext} onClose={onClose} />;
      case 2:
        return <Pin onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <Confirm onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return (
          <AccountDetails onNext={handleNext} onPrevious={handlePrevious} />
        );
      case 5:
        return <PaymentSuccess />;
      default:
        return <Amount isOpen={isOpen} onNext={handleNext} onClose={onClose} />;
    }
  };
  return <div>{renderWithdrawSteps()}</div>;
};
