import React, { useState } from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SideDrawer from "../display/SideDrawer";

function Layout({ children }) {
  const address = useAddress();
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <header className="flex flex-row items-center justify-between w-full px-6 py-3 md:flex-row bg-neutral-900">
        <div className="flex items-center gap-3">
          <Link href="/" passHref>
            <Image
              src={Logo}
              className="object-contain w-32 h-12 md:w-40 md:h-14"
              alt="Logo"
              width={20}
              height={20}
            />
          </Link>

          <nav className="items-center hidden gap-4 mt-2 ml-0 md:flex md:ml-6 md:mt-0">
            <Link href="/" passHref>
              <p className="text-white hover:text-gray-400">Transfer</p>
            </Link>
            <Link href="/swap" passHref>
              <p className="text-white hover:text-gray-400">Swap</p>
            </Link>
            <Link href="/stake" passHref>
              <p className="text-white hover:text-gray-400">Stake</p>
            </Link>
            <Link href="/transfer" passHref>
              <p className="text-white hover:text-gray-400">Transfer History</p>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <button onClick={() => setVisible(true)}>
            <Bars3Icon className="block w-6 h-6 text-gray-500 md:hidden" />
          </button>
          <div className="hidden md:block">
            <ConnectWalletTemplate address={address} isConnected={!!address} />
          </div>
        </div>
      </header>
      <SideDrawer isOpen={visible} onClose={() => setVisible(false)} />
      <main className="container flex-grow p-4 mx-auto text-white">
        {children}
      </main>
    </div>
  );
}

export default Layout;
