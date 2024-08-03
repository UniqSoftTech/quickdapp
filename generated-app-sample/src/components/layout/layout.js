import React from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";

function Layout({ children }) {
  const address = useAddress();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center justify-between w-full px-4 py-3">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900">QUICK DAPP</h1>
        </div>
        <div className="flex items-center gap-4">
          <ConnectWalletTemplate address={address} isConnected={!!address} />
        </div>
      </header>
      <main className="container flex-grow p-4 mx-auto text-gray-900">
        {children}
      </main>
      <footer className="flex justify-center p-4 font-bold text-black">
        <p>Powered By QuickDapp Team 2024</p>
      </footer>
    </div>
  );
}

export default Layout;
