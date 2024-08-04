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

  const connectWallet = async () => {
    try {
      await activate(injectedConnector);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const getContract = () => {
    if (!library || !account) return null;
    return new ethers.Contract(contractAddress, contractABI, library.getSigner());
  };

  return (
    <div className="p-4 App">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {
        <>
          ${componentTemplates}
        </>
      }
      </div>
    </div>
  );
}

export default DAppContent;
