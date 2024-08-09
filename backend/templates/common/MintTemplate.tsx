import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Button from "../display/Button";

interface MintTemplateProps {
  eventName: string;
}

const MintTemplate: React.FC<MintTemplateProps> = ({ eventName }) => {
  return (
    <div className="flex flex-col w-full max-w-xl gap-5 p-6 bg-neutral-950 rounded-3xl">
      <div className="text-xl font-semibold">Mint</div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Stake</h2>
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-white">
                Name of the NFT
              </h2>
              <h2 className="text-xl font-semibold text-white">0.00058 ETH</h2>
            </div>
            <div className="flex items-center gap-4 p-2 bg-neutral-950 rounded-xl">
              <button>
                <MinusIcon className="w-5 h-5" />
              </button>
              <p>1</p>
              <button>
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex">
            <p className="text-neutral-500">~ 0.0$</p>
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 p-4 mb-4 border bg-neutral-950 border-neutral-700 rounded-xl">
          <div className="flex flex-wrap justify-between text-neutral-400">
            <h2>Exchange rate</h2>
            <h2>1 ETHx = 1.4385289 ETH</h2>
          </div>
          <div className="flex flex-wrap justify-between text-neutral-400">
            <h2>Transaction cost</h2>
            <h2>$ 0.54</h2>
          </div>
        </div>
        <Button onClick={() => console.log("uildel")} title={"Mint"} />
      </div>
    </div>
  );
};

export default MintTemplate;
