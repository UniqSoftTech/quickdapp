import React, { useState } from "react";
import Button from "../display/Button";
import blockies from "ethereum-blockies";
import Image from "next/image";
import { useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import getConfig from "next/config";

interface TokenTransferTemplateProps {
  suggestedAmounts: string[];
}

const TokenTransferTemplate: React.FC<TokenTransferTemplateProps> = ({
  suggestedAmounts,
}) => {
  const { publicRuntimeConfig } = getConfig();
  const { contractAddress } = publicRuntimeConfig;
  const { contract } = useContract(contractAddress);

  const [amount, setAmount] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIdenticon = (address: string) => {
    return blockies.create({ seed: address }).toDataURL();
  };

  const handleTransfer = async () => {
    if (!recipient) {
      setError("Recipient address is required");
      return;
    }
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError("Valid amount is required");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const transferAmount = ethers.utils.parseUnits(amount, 18);
      await contract?.call("transfer", [recipient, transferAmount]);
      console.log("Transfer successful");
    } catch (err) {
      console.error("Transfer failed", err);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 p-6 rounded-3xl bg-neutral-950">
      <div className="text-xl font-semibold">Transfer Token</div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Recipient address</h2>
          <div className="flex items-center w-full gap-2">
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0x0..."
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              style={{ direction: "ltr" }}
            />
            {recipient && (
              <Image
                src={generateIdenticon(recipient)}
                alt="identicon"
                width={32}
                height={32}
                className="object-contain w-8 h-8 rounded-full"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Amount</h2>
          <div className="flex items-center w-full gap-2">
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              value={amount}
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              style={{ direction: "ltr" }}
            />
          </div>
        </div>
        {Array.isArray(suggestedAmounts) && suggestedAmounts.length > 0 && (
          <div className="flex gap-2 mt-2 mb-4">
            {suggestedAmounts.map((suggestedAmount, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setAmount(suggestedAmount.toString())}
                className="px-2 py-1 bg-gray-200 rounded-lg bg-neutral-800"
              >
                {suggestedAmount}
              </button>
            ))}
          </div>
        )}
        <Button
          title={"Transfer"}
          disabled={!recipient || !amount}
          onClick={handleTransfer}
        />
        {error && (
          <div className="p-2 border border-red-900 bg-neutral-800 rounded-xl">
            <p className="text-sm text-white">Transfer failed: {error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenTransferTemplate;
