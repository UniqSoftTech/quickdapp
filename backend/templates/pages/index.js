import React from "react";
import {
  useAddress,
  useMetamask,
  useDisconnect,
  useContract,
} from "@thirdweb-dev/react";
${importTemplates}

const contractABI = ${contractABI};
const contractAddress = "${contractAddress}";

function DAppContent() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();
  const { contract } = useContract(contractAddress);

  return (
    <div className="flex items-center justify-center md:pt-20">
      <TokenTransferTemplate
        suggestedAmounts={["10", "100", "1000"]}
      />
    </div>
  );
}

export default DAppContent;
