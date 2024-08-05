import React, { useState, useEffect } from "react";

function BalanceDisplayTemplate({ getBalance, symbol }) {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    const fetchBalance = async () => {
      const newBalance = await getBalance();
      setBalance(newBalance);
    };
    fetchBalance();
  }, [getBalance]);

  return (
    <div className="p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Balance
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        {balance} <span className="font-semibold">{symbol}</span>
      </p>
    </div>
  );
}

export default BalanceDisplayTemplate;
