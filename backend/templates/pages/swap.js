import React, { useState } from "react";
import {
  useAddress,
  useMetamask,
  useDisconnect,
  useContract,
} from "@thirdweb-dev/react";
import SwapTemplate from "@/components/common/SwapTemplate";
import Modal from "@/components/common/Modal";
import SearchInput from "@/components/common/SearchInput";
import { CurrencyPoundIcon } from "@heroicons/react/24/outline";

function Swap() {
  const address = useAddress();

  return (
    <div className="flex items-center justify-center md:pt-20">
      <SwapTemplate />
    </div>
  );
}

export default Swap;
