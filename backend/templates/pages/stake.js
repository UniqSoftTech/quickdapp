import React, { useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import StakeTemplate from "@/components/common/StakeTemplate";

function Stake() {
  const address = useAddress();

  return (
    <div className="flex items-center justify-center md:pt-20">
      <StakeTemplate />
    </div>
  );
}

export default Stake;
