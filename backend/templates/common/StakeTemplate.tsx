import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Button from "../display/Button";
import CoinChooser from "../display/CoinChooser";
import Image from "next/image";

interface StakeType {
  id: number;
  name: string;
}

interface StakeTemplateProps {
  getEvents?: () => void;
  eventName?: string;
}

interface ValuesType {
  value: any;
  amount: string;
}

const stakeTypes: StakeType[] = [
  {
    id: 1,
    name: "Stake",
  },
  {
    id: 2,
    name: "Unstake",
  },
  {
    id: 3,
    name: "Withdraw",
  },
];

const StakeTemplate: React.FC<StakeTemplateProps> = ({
  getEvents,
  eventName,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(1);
  const [values, setValues] = useState<ValuesType>({
    value: {},
    amount: "",
  });

  const handleSelectCoin = (e: any) => {
    setVisible(false);
    setValues({ ...values, value: e });
  };

  const handleChangeType = (i: number) => {
    setSelectedType(i);
    setValues({ value: {}, amount: "" });
  };

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 p-6 bg-neutral-950 rounded-3xl">
      <div className="grid grid-cols-3 bg-neutral-900 rounded-xl">
        {stakeTypes.map((i) => {
          return (
            <button
              key={i.id}
              className={`px-4 py-2 rounded-xl font-bold ${
                i.id === selectedType
                  ? "bg-primary text-black"
                  : "text-neutral-600"
              }`}
              onClick={() => handleChangeType(i.id)}
            >
              <p>{i.name}</p>
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Stake</h2>
          <div className="flex items-center w-full gap-2">
            {values?.value?.symbol ? (
              <button
                onClick={() => setVisible(true)}
                className="flex flex-row items-center gap-3"
              >
                <Image
                  src={values?.value?.project?.logoUrl || ""}
                  className="object-contain w-7 h-7"
                  alt={values?.value?.symbol || ""}
                  width={20}
                  height={20}
                />
                <div className="flex flex-row items-center gap-3">
                  <h2 className="text-xl font-bold">{values?.value?.symbol}</h2>
                  <ChevronDownIcon className="w-5 h-5 text-white" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => setVisible(true)}
                className="flex items-center flex-shrink-0 gap-2 px-2 py-1 bg-neutral-700 rounded-xl hover:bg-primary hover:text-black"
              >
                <p>Select token</p>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            )}
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              style={{ direction: "ltr" }}
              value={values.amount || ""}
              type="number"
              onChange={(e) => setValues({ ...values, amount: e.target.value })}
            />
          </div>
          <div className="flex justify-end">
            <p className="text-neutral-500">~ 0.0$</p>
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 p-4 mb-4 border bg-neutral-950 border-neutral-700 rounded-xl">
          <div className="flex flex-wrap justify-between">
            <h2>You will get</h2>
            <h2>0.2 ETH</h2>
          </div>
          <div className="flex flex-wrap justify-between text-neutral-400">
            <h2>Exchange rate</h2>
            <h2>1 ETHx = 1.4385289 ETH</h2>
          </div>
          <div className="flex flex-wrap justify-between text-neutral-400">
            <h2>Transaction cost</h2>
            <h2>$ 0.54</h2>
          </div>
        </div>
        <Button onClick={() => console.log("button", values)} title={"Swap"} />
      </div>
      <CoinChooser
        onClick={(e) => handleSelectCoin(e)}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

export default StakeTemplate;
