import React, { useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";
import SwapTemplate from "@/components/common/SwapTemplate";
import useRequest from "@/hooks/useRequest";

const Swap: React.FC = () => {
  const { loading, data, error, trigger } = useRequest("toptokens", "GET", `contract/top-tokens`,{}, false);

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div className="flex items-center justify-center md:pt-20">
      <SwapTemplate />
    </div>
  );
};

export default Swap;
