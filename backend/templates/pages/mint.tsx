import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import MintTemplate from "@/components/common/MintTemplate";

const Mint: React.FC = () => {
  const address = useAddress();

  return (
    <div className="flex items-center justify-center md:pt-20">
      <MintTemplate eventName="Stake" />
    </div>
  );
};

export default Mint;
