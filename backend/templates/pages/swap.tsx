import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import SwapTemplate from "@/components/common/SwapTemplate";

const Swap: React.FC = () => {
  const address = useAddress();

  return (
    <div className="flex items-center justify-center md:pt-20">
      <SwapTemplate />
    </div>
  );
};

export default Swap;
