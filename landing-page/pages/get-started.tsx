import { useState } from "react";
import { useApi } from "../context/api.context";
import Spinner from "../components/spinner";
import { ethers } from "ethers";

export default function GetStartedPage() {
  const { fetchRequest, isGettingStart } = useApi();
  const [contractAddress, setContractAddress] = useState(
    "0x388C818CA8B9251b393131C08a736A67ccB19297"
  );

  function handleSubmit(e: any) {
    e.preventDefault();

    if (ethers.isAddress(contractAddress)) {
      fetchRequest({
        url: "/build-app",
        method: "POST",
        model: "GettingStart",
        body: {
          contract_address: contractAddress,
        },
      });
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="w-6/12">
        <form onSubmit={handleSubmit} className="w-100 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter contract address"
            className="p-2 border"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />

          <button
            type="submit"
            className="p-2 border flex flex-row justify-center items-center"
          >
            {isGettingStart ? <Spinner /> : "Build"}
          </button>
        </form>
      </div>
    </div>
  );
}
