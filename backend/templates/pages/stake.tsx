import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import StakeTemplate from "@/components/common/StakeTemplate";

const Stake: React.FC = () => {
  const address = useAddress();

  return (
    <div className="flex items-center justify-center md:pt-20">
      <StakeTemplate />
    </div>
  );
};

export default Stake;
