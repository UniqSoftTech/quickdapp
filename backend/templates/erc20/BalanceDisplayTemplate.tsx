import React from "react";
import { useAddress, useBalance } from "@thirdweb-dev/react";
import { formatBalance } from "@/utils/functions";

interface BalanceDisplayTemplateProps {
  symbol?: string;
}

const BalanceDisplayTemplate: React.FC<BalanceDisplayTemplateProps> = ({
  symbol = "ethereum",
}) => {
  const address = useAddress();
  const { data: balance, isLoading: isBalanceLoading } = useBalance();

  return (
    <div className="flex flex-row flex-wrap items-center gap-2 p-3 bg-neutral-950 rounded-xl">
      <p className="text-gray-400">Balance:</p>
      {isBalanceLoading ? (
        <div role="status" className="max-w-sm animate-pulse">
          <h3 className="w-24 h-6 bg-gray-300 rounded-full"></h3>
        </div>
      ) : (
        <p className="font-semibold text-gray-400 text-gray-700 dark:text-gray-300">
          {formatBalance(balance?.displayValue || "0")} {balance?.symbol}
        </p>
      )}
    </div>
  );
};

export default BalanceDisplayTemplate;
