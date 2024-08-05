import {
  ChevronDownIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import SearchInput from "../common/SearchInput";

function TokenTransferTemplate({ onTransfer, suggestedAmounts }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 p-6 border rounded-3xl border-neutral-700">
      <div className="text-xl font-semibold">Transfer Token</div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Recipient address</h2>
          <div className="flex items-center w-full gap-2">
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              style={{ direction: "ltr" }}
            />
          </div>
        </div>
        <div className="flex flex-col max-w-full gap-3 p-4 bg-neutral-800 rounded-xl">
          <h2 className="text-neutral-500">Amount</h2>
          <div className="flex items-center w-full gap-2">
            <input
              className="flex-grow w-full min-w-0 text-2xl font-semibold text-right bg-transparent outline-none"
              placeholder="0"
              style={{ direction: "ltr" }}
            />
          </div>
        </div>
        {Array.isArray(suggestedAmounts) && suggestedAmounts.length > 0 && (
          <div className="flex gap-2 mt-2">
            {suggestedAmounts.map((suggestedAmount, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setAmount(suggestedAmount.toString())}
                className="px-2 py-1 bg-gray-200 rounded-lg bg-neutral-950"
              >
                {suggestedAmount}
              </button>
            ))}
          </div>
        )}
        <Button title={"Transfer"} />
      </div>
    </div>
  );
}

export default TokenTransferTemplate;
