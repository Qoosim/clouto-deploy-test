import { Suspense } from "react";
import { VerificationComponent } from "@/components/verification";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationComponent />
    </Suspense>
  );
};

export default page;
