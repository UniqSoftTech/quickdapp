import AddressInput from "@/component/address-input";
import { useState } from "react";
import { useApi } from "../context/api.context";

const DevPage = () => {
  const { fetchRequest } = useApi();

  const [abiAddress, setAbiAddress] = useState("");

  function getAbi() {
    fetchRequest({
      url: `/contract/get-abi`,
      method: "POST",
      body: {
        address: abiAddress,
      },
    });
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden font-mono">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-800 via-transparent to-black opacity-50 pointer-events-none"></div>

      <div className="">
        <AddressInput value={abiAddress} onChange={setAbiAddress} />
        <button className="p-2 bg-white" onClick={getAbi}>Get abi test</button>
      </div>
    </div>
  );
};

export default DevPage;
