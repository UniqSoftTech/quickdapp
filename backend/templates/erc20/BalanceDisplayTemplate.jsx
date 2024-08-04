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

  return <div>Balance</div>;
}

export default BalanceDisplayTemplate;
