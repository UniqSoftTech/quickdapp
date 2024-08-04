import React from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";
import Logo from "../../../public/logo.svg";

function Layout({ children }) {
  const address = useAddress();
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <header className="flex items-center justify-between w-full px-6 py-3">
        <div className="flex items-center gap-3">
          <Image src={Logo} className="h-14 w-40 object-contain" />
        </div>
        <div className="flex items-center gap-4">
          <ConnectWalletTemplate address={address} isConnected={!!address} />
        </div>
      </header>
      <main className="container flex-grow p-4 mx-auto text-white">
        {children}
      </main>
      <footer className="flex justify-center p-4 font-bold text-white">
        <p>Powered By QuickDapp Team 2024</p>
      </footer>
    </div>
  );
}

export default Layout;
