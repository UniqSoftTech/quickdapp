import { ChevronDownIcon, ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../display/Button";
import CoinChooser from "../display/CoinChooser";

interface SwapTemplateProps {
  functionName?: string;
}

interface SwapProps {
  data: any;
  amount: string;
}

interface ModalProps {
  visible: boolean;
  type: number;
}

const SwapTemplate: React.FC<SwapTemplateProps> = ({ functionName }) => {
  const [visible, setVisible] = useState<ModalProps>({
    visible: false,
    type: 1,
  });
  const [selectedSellCoin, setSelectedSellCoin] = useState<SwapProps>({
    data: {},
    amount: "",
  });
  const [selectedBuyCoin, setSelectedBuyCoin] = useState<SwapProps>({
    data: {},
    amount: "",
  });

  const handleSelectCoin = (e: any) => {
    if (visible.type === 1)
      setSelectedSellCoin({ ...selectedSellCoin, data: e });
    if (visible.type === 2) setSelectedBuyCoin({ ...selectedBuyCoin, data: e });
    setVisible({ ...visible, visible: false });
  };

  const handleSwapTokens = () => {
    const buyToken = selectedBuyCoin;
    const sellToken = selectedSellCoin;
    setSelectedSellCoin(buyToken);
    setSelectedBuyCoin(sellToken);
  };

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 p-6 rounded-3xl bg-neutral-950">
      <div className="text-xl font-semibold">Swap a token</div>
      <div className="flex flex-col gap-3">
        <div className="relative flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Sell</h2>
          <div className="flex items-center w-full gap-2">
            {selectedSellCoin?.data?.symbol ? (
              <button
                onClick={() => setVisible({ visible: true, type: 1 })}
                className="flex flex-row items-center gap-3"
              >
                <Image
                  src={selectedSellCoin?.data?.project?.logoUrl || ""}
                  className="object-contain w-7 h-7"
                  alt={selectedSellCoin?.data?.symbol || ""}
                  width={20}
                  height={20}
                />
                <div className="flex flex-row items-center gap-3">
                  <h2 className="text-xl font-bold">
                    {selectedSellCoin?.data?.symbol}
                  </h2>
                  <ChevronDownIcon className="w-5 h-5 text-white" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => setVisible({ visible: true, type: 1 })}
                className="flex items-center flex-shrink-0 gap-2 px-2 py-1 bg-neutral-700 rounded-xl hover:bg-primary hover:text-black"
              >
                <p>Select token</p>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            )}
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              onChange={(e) =>
                setSelectedSellCoin({
                  ...selectedSellCoin,
                  amount: e.target.value,
                })
              }
              type="number"
              value={selectedSellCoin.amount}
              style={{ direction: "ltr" }}
            />
          </div>
          <div className="flex justify-end">
            <p className="text-neutral-500">~ 0.0$</p>
          </div>
          <div className="absolute bottom-[-30px] flex items-center justify-center left-0 right-0">
            <button
              onClick={() => handleSwapTokens()}
              className="p-3 text-white border rounded-full bg-neutral-950 hover:text-black border-neutral-800 hover:bg-primary"
            >
              <ArrowsUpDownIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 p-4 mb-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Buy</h2>
          <div className="flex items-center w-full gap-2">
            {selectedBuyCoin?.data?.symbol ? (
              <button
                onClick={() => setVisible({ visible: true, type: 2 })}
                className="flex flex-row items-center gap-3"
              >
                <Image
                  src={selectedBuyCoin?.data?.project?.logoUrl || ""}
                  className="object-contain w-7 h-7"
                  alt={selectedBuyCoin?.data?.symbol || ""}
                  width={20}
                  height={20}
                />
                <div className="flex flex-row items-center gap-3">
                  <h2 className="text-xl font-bold">
                    {selectedBuyCoin?.data?.symbol}
                  </h2>
                  <ChevronDownIcon className="w-5 h-5 text-white" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => setVisible({ visible: true, type: 2 })}
                className="flex items-center flex-shrink-0 gap-2 px-2 py-1 bg-neutral-700 rounded-xl hover:bg-primary hover:text-black"
              >
                <p>Select token</p>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            )}
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              type="number"
              onChange={(e) =>
                setSelectedBuyCoin({
                  ...selectedBuyCoin,
                  amount: e.target.value,
                })
              }
              value={selectedBuyCoin.amount}
              style={{ direction: "ltr" }}
            />
          </div>
          <div className="flex justify-end">
            <p className="text-neutral-500">~ 0.0$</p>
          </div>
        </div>
        <Button
          onClick={() =>
            console.log("sell", selectedBuyCoin, "buy", selectedSellCoin)
          }
          title={"Swap"}
        />
      </div>
      <CoinChooser
        onClick={(e) => handleSelectCoin(e)}
        visible={visible.visible}
        onClose={() => setVisible({ visible: false, type: 1 })}
      />
    </div>
  );
};

export default SwapTemplate;
