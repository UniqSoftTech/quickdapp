import React from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";
import Logo from "../../../public/logo.svg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  const address = useAddress();
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <header className="flex items-center justify-between w-full px-6 py-3 bg-neutral-900">
        <div className="flex items-center gap-3">
          <Image src={Logo} className="object-contain w-40 h-14" alt="Logo" />
        </div>
        <div className="flex items-center gap-4">
          <ConnectWalletTemplate address={address} isConnected={!!address} />
        </div>
      </header>
      <main className="container flex-grow p-4 mx-auto text-white">
        {children}
      </main>
    </div>
  );
}

export default Layout;
