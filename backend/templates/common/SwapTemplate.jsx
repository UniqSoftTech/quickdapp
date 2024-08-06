import {
  ChevronDownIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import Button from "../display/Button";
import Modal from "../display/Modal";
import SearchInput from "../display/SearchInput";

function SwapTemplate({ getEvents, eventName }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 p-6 rounded-3xl bg-neutral-950">
      <div className="text-xl font-semibold">Swap a token</div>
      <div className="flex flex-col gap-3">
        <div className="relative flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Sell</h2>
          <div className="flex items-center w-full gap-2">
            <button
              onClick={() => setVisible(true)}
              className="flex items-center flex-shrink-0 gap-2 px-2 py-1 bg-neutral-700 rounded-xl hover:bg-primary hover:text-black"
            >
              <p>Select token</p>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              style={{ direction: "ltr" }}
            />
          </div>
          <div className="flex justify-end">
            <p className="text-neutral-500">~ 0.0$</p>
          </div>
          <div className="absolute bottom-[-30px] flex items-center justify-center left-0 right-0">
            <button className="p-3 text-white border rounded-full bg-neutral-950 hover:text-black border-neutral-800 hover:bg-primary">
              <ArrowsUpDownIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 p-4 mb-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Sell</h2>
          <div className="flex items-center w-full gap-2">
            <button
              onClick={() => setVisible(true)}
              className="flex items-center flex-shrink-0 gap-2 px-2 py-1 bg-neutral-700 rounded-xl hover:bg-primary hover:text-black"
            >
              <p>ETH</p>
              <ChevronDownIcon className="w-5 h-5" />
            </button>
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              style={{ direction: "ltr" }}
            />
          </div>
          <div className="flex justify-end">
            <p className="text-neutral-500">~ 0.0$</p>
          </div>
        </div>
        <Button title={"Swap"} />
      </div>
      <Modal
        isOpen={visible}
        onClose={() => setVisible(close)}
        title={"Select token"}
      >
        <div className="overflow-y-auto max-h-80 md:max-h-[48rem]">
          <SearchInput />
          <div className="my-4 text-neutral-500">Popular tokens</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2, 3, 4]?.map((i) => {
              return (
                <button
                  key={i}
                  className="flex flex-row flex-wrap items-center gap-3 p-2 bg-neutral-900 rounded-xl"
                >
                  <CurrencyPoundIcon className="w-8 h-8" />
                  <div className="text-left">
                    <h2>ETH</h2>
                    <p>Ethereum</p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="my-4 text-neutral-500">More tokens</div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2, 3, 4]?.map((i) => {
              return (
                <button className="flex flex-row flex-wrap items-center gap-3 p-2 bg-neutral-900 rounded-xl">
                  <CurrencyPoundIcon className="w-8 h-8" />
                  <div className="text-left">
                    <h2>ETH</h2>
                    <p>Ethereum</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SwapTemplate;
