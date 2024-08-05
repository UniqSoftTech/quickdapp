const formatBalance = (balance, decimals = 4) => {
  if (!balance) return "0.0000";
  const parts = balance.split(".");
  if (parts.length > 1) {
    return `${parts[0]}.${parts[1].substring(0, decimals)}`;
  }
  return balance;
};

const fetchConversionRate = async (symbol) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`,
  );
  const data = await response.json();
  return data[symbol.toLowerCase()].usd;
};

export { formatBalance, fetchConversionRate };
