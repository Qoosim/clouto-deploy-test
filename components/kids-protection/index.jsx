"use client";

import React, { useState } from "react";
import { ContinueDialog } from "./_components/Continue";
import { ChildAge } from "./_components/ChildAge";
import { ChildEmail } from "./_components/ChildEmail";
import { PinActivate } from "./_components/PinActivate";

export const KidsProtectionFormSteps = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

//   const handlePrev = () => {
//     setCurrentStep((prevStep) => prevStep - 1);
//   };

  const renderKidsProtectionSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <ContinueDialog
            isOpen={isOpen}
            onNext={handleNext}
            onClose={onClose}
          />
        );
      case 2:
        return <ChildAge onNext={handleNext} />;
      case 3:
        return <ChildEmail onNext={handleNext} />;
      case 4:
        return <PinActivate onNext={handleNext} />;
      default:
        return (
          <ContinueDialog
            isOpen={isOpen}
            onNext={handleNext}
            onClose={onClose}
          />
        );
    }
  };
  return <div>{renderKidsProtectionSteps()}</div>;
};
