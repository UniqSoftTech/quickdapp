import React, { useState } from "react";
import { useAddress, useContract } from "@thirdweb-dev/react";

function TokenTransferTemplate({ onTransfer, suggestedAmounts }) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
    setError("");
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!recipient.match(/^0x[a-fA-F0-9]{40}$/)) {
      setError("Invalid recipient address");
      setIsLoading(false);
      return;
    }

    const amountFloat = parseFloat(amount);
    if (isNaN(amountFloat) || amountFloat <= 0) {
      setError("Invalid amount");
      setIsLoading(false);
      return;
    }

    try {
      await onTransfer(recipient, amount);
      setRecipient("");
      setAmount("");
    } catch (err) {
      setError(err.message || "Transaction failed");
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-md p-6 mx-auto rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Transfer Tokens
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 form-group">
          <label
            htmlFor="recipient"
            className="block mb-2 text-gray-700 dark:text-gray-300"
          >
            Recipient Address:
          </label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="0x..."
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
          />
        </div>
        <div className="mb-4 form-group">
          <label
            htmlFor="amount"
            className="block mb-2 text-gray-700 dark:text-gray-300"
          >
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.0"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
          />
          {Array.isArray(suggestedAmounts) && suggestedAmounts.length > 0 && (
            <div className="flex gap-2 mt-2">
              Suggested amounts:
              {suggestedAmounts.map((suggestedAmount, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setAmount(suggestedAmount.toString())}
                  className="px-2 py-1 bg-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-300"
                >
                  {suggestedAmount}
                </button>
              ))}
            </div>
          )}
        </div>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-400"
        >
          {isLoading ? "Transferring..." : "Transfer"}
        </button>
      </form>
    </div>
  );
}

export default TokenTransferTemplate;
