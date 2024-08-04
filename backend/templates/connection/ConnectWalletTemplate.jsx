import React, { useState, useEffect, useRef } from "react";
import { ConnectWallet, useDisconnect } from "@thirdweb-dev/react";
import Image from "next/image";
import colors from "@/utils/colors";

function ConnectWalletTemplate({ isConnected, address }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const disconnect = useDisconnect();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    navigator.clipboard.writeText(address);
    setDropdownOpen(false);
  };

  return (
    <div className="relative flex items-center gap-2">
      {isConnected ? (
        <>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-2 py-2 overflow-hidden border border-gray-600 rounded-xl"
          >
            <p className="text-black dark:text-white">{address}</p>
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
          theme="dark"
          style={{
            background: colors.main,
            color: "black",
            fontWeight: 600,
            padding: "10px 10px",
          }}
        />
      )}
    </div>
  );
}

export default ConnectWalletTemplate;
