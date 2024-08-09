import React, { useEffect } from "react";
import StakeTemplate from "@/components/common/StakeTemplate";
import useRequest from "@/hooks/useRequest";

const Stake: React.FC = () => {
  const { loading, data, error, trigger } = useRequest("toptokens", "GET", `contract/top-tokens`,{}, false);

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div className="flex items-center justify-center md:pt-20">
      <StakeTemplate />
    </div>
  );
};

export default Stake;
