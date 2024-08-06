import { useState } from "react";
import { useApi } from "../context/api.context";
import Spinner from "../components/spinner";
import { ethers } from "ethers";
import { useToast } from "../context/toast.context";
import AddressInput from "@/component/address-input";
import Image from "next/image";

export default function GetStartedPage() {
  const {
    fetchRequest,
    isGettingStart,
    isContractMetaData,
    resContractMetaData,
  } = useApi();
  const { showToast } = useToast();

  const [contractAddress, setContractAddress] = useState("");
  const [step, setStep] = useState(1);

  const [generalConfig, setGeneralConfig] = useState({
    title: "QuickDapp",
    desc: "QuickDapp is a web3 application builder",
    theme: "",
    logo: "",
    color: "#000000",
  });

  async function handleSubmitContractAddress(e: any) {
    e.preventDefault();

    const res = await fetchRequest({
      url: "/contract/get-metadata",
      method: "POST",
      model: "ContractMetaData",
      body: { address: contractAddress },
    });

    if (res?.success) {
      return setStep(2);
    }

    showToast(res?.messase, "error");
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetchRequest({
      url: "/generate",
      method: "POST",
      model: "GettingStart",
      body: {
        contract_address: contractAddress,
        title: generalConfig.title,
        description: generalConfig.desc,
        theme: generalConfig.theme,
        logo: generalConfig.logo,
      },
    });

    if (!res?.success) showToast(res?.messase, "error");
  }

  const ContractAddressStep = () => (
    <form
      onSubmit={handleSubmitContractAddress}
      className="w-100 flex flex-col gap-3"
    >
      <label className="text-white">Contract Address</label>
      <AddressInput value={contractAddress} onChange={setContractAddress} />

      <button
        type="submit"
        className="p-2 border flex flex-row justify-center items-center text-white"
      >
        {isContractMetaData ? <Spinner /> : "NextStep"}
      </button>
    </form>
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden font-mono">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-800 via-transparent to-black opacity-50 pointer-events-none"></div>

      <div className="w-6/12 border bg-black rounded-2xl shadow-2xl p-4 flex flex-col gap-6">
        <p className="text-white text-center font-bold text-2xl">
          Customize your Application
        </p>

        {step === 1 && <ContractAddressStep />}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="grid grid-cols-2 border p-2">
                <label className="text-white">Name:</label>
                <label className="text-white">
                  {resContractMetaData?.name}
                </label>

                <label className="text-white">Symbol:</label>
                <label className="text-white">
                  {resContractMetaData?.symbol}
                </label>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-100 flex flex-col gap-3">
              <label className="text-white">App Title:</label>
              <input
                type="text"
                placeholder="Enter app title"
                className="p-2 border"
                value={generalConfig.title}
                onChange={(e) =>
                  setGeneralConfig((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />

              <label className="text-white">App description:</label>
              <input
                type="text"
                placeholder="Enter app description"
                className="p-2 border"
                value={generalConfig.desc}
                onChange={(e) =>
                  setGeneralConfig((prev) => ({
                    ...prev,
                    desc: e.target.value,
                  }))
                }
              />

              <label className="text-white">Logo URL:</label>
              <input
                type="text"
                placeholder="Enter logo URL"
                className="p-2 border"
                value={generalConfig.logo}
                onChange={(e) =>
                  setGeneralConfig((prev) => ({
                    ...prev,
                    logo: e.target.value,
                  }))
                }
              />

              <label className="text-white">Primary color:</label>
              <input
                type="color"
                placeholder="Enter logo URL"
                className="w-full"
                color={generalConfig.color}
                onChange={(e) =>
                  setGeneralConfig((prev) => ({
                    ...prev,
                    color: e.target.value,
                  }))
                }
              />

              <button
                type="submit"
                className="p-2 border flex flex-row justify-center items-center text-white"
              >
                {isGettingStart ? <Spinner /> : "Generate Dapp"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
