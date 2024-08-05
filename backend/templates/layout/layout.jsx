import React from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";
import Logo from "../../../public/logo.svg";
import Link from "next/link";

function Layout({ children }) {
  const address = useAddress();
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <header className="flex items-center justify-between w-full px-6 py-3 bg-neutral-900">
        <div className="flex items-center gap-3">
          <Image src={Logo} className="object-contain w-40 h-14" alt="Logo" />
          <nav className="flex items-center gap-4 ml-6">
            <Link href="/" passHref>
              <p className="text-white hover:text-gray-400">Transfer</p>
            </Link>
            <Link href="/swap" passHref>
              <p className="text-white hover:text-gray-400">Swap</p>
            </Link>
            <Link href="/transfer" passHref>
              <p className="text-white hover:text-gray-400">Transfer History</p>
            </Link>
          </nav>
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
