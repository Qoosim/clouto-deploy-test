"use client";

import React, { useState } from "react";
import { AccountDetailsModal } from "./AccountDetailsModal";
import { AgreementModal } from "./AgreementModal";
import { UserInfoDialog } from "./UserInfoDialog";
import { StudioCreated } from "./StudioCreated";

export const UserInfoFormSteps = ({ isOpen, onClose, setIsFormCompleted }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleComplete = () => {
    setIsComplete(true);
    setIsFormCompleted(true);
  };

  const renderStepsComponent = () => {
    if (isComplete) return null;

    switch (currentStep) {
      case 1:
        return (
          <UserInfoDialog
            isOpen={isOpen}
            onNext={handleNext}
            onClose={onClose}
          />
        );
      case 2:
        return (
          <AccountDetailsModal onNext={handleNext} onPrevious={handlePrev} />
        );
      case 3:
        return <AgreementModal onNext={handleNext} onClose={onClose} />;
      case 4:
        return <StudioCreated onComplete={handleComplete} />;
      default:
        return (
          <UserInfoDialog
            isOpen={isOpen}
            onNext={handleNext}
            onClose={onClose}
          />
        );
    }
  };

  return <div>{renderStepsComponent()}</div>;
};
