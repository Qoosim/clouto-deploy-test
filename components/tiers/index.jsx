"use client";

import React, { useState, useEffect } from "react";
import { TierOne } from "./_components/Tier-1";
import { TierTwo } from "./_components/Tier-2";
import { TierValidation } from "./_components/Tier-3-validation";
import { UpgradeFailed } from "./_components/Tier-4-upgrade-failed";

export const TiersUpgradeSteps = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (currentStep === 3) {
      const timer = setTimeout(() => {
        setCurrentStep(4);
      }, 4000);

      return () => clearTimeout(timer);
    }

    if (currentStep === 4) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, onClose]);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderTiersSteps = () => {
    switch (currentStep) {
      case 1:
        return <TierOne isOpen={isOpen} onNext={handleNext} />;
      case 2:
        return <TierTwo onNext={handleNext} />;
      case 3:
        return <TierValidation />;
      case 4:
        return <UpgradeFailed />;
      default:
        return (
          <TierOne isOpen={isOpen} onNext={handleNext} onClose={onClose} />
        );
    }
  };
  return <div>{renderTiersSteps()}</div>;
};
