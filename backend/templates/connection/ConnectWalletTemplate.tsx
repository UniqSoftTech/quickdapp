import React, { useState, useEffect, useRef } from "react";
import {
  ConnectWallet,
  useDisconnect,
  useWallet,
  useBalance,
  useAddress,
} from "@thirdweb-dev/react";
import blockies from "ethereum-blockies";
import Image from "next/image";
import colors from "@/utils/colors";

const formatBalance = (balance: string | undefined, decimals = 4): string => {
  if (!balance) return "0.0000";
  const parts = balance.split(".");
  if (parts.length > 1) {
    return `${parts[0]}.${parts[1].substring(0, decimals)}`;
  }
  return balance;
};

function ConnectWalletTemplate() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const disconnect = useDisconnect();
  const wallet = useWallet();
  const address = useAddress();
  const { data: balance, isLoading: isBalanceLoading } = useBalance();

  const formatAddress = (address: string): string => {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4,
    )}`;
  };

  const generateIdenticon = (address: string): string => {
    return blockies.create({ seed: address }).toDataURL();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const copyAddressToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setDropdownOpen(false);
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      {address ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex flex-col items-center gap-2 px-2 py-1 overflow-hidden md:flex-row bg-neutral-950 rounded-2xl"
          >
            {isBalanceLoading ? (
              <div role="status" className="max-w-sm animate-pulse">
                <h3 className="w-24 h-6 bg-gray-300 rounded-full"></h3>
              </div>
            ) : (
              <p className="text-base font-semibold text-gray-400">
                {formatBalance(balance?.displayValue)} {balance?.symbol}
              </p>
            )}
            <div className="flex flex-row flex-wrap items-center gap-2 p-2 bg-neutral-800 rounded-2xl">
              <p className="text-sm font-semibold text-white dark:text-black">
                {formatAddress(address)}
              </p>
              <Image
                src={generateIdenticon(address)}
                alt="identicon"
                width={16}
                height={16}
                className="object-contain w-4 h-4 rounded-full"
              />
            </div>
          </button>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 z-10 w-48 mt-2 bg-white rounded-lg shadow-lg top-full dark:bg-gray-800"
            >
              <button
                onClick={copyAddressToClipboard}
                className="w-full px-4 py-2 text-left text-black rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-400"
              >
                Copy Address
              </button>
              <button
                onClick={disconnect}
                className="w-full px-4 py-2 text-left text-black rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-400"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <ConnectWallet
          theme="light"
          modalTitle="QuickDapp"
          style={{
            background: colors.main,
            color: "black",
            padding: "10px 10px",
          }}
        />
      )}
    </div>
  );
}

export default ConnectWalletTemplate;
