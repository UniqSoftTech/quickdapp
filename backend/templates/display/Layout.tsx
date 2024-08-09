import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SideDrawer from "../display/SideDrawer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const address = useAddress();
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-neutral-900">
      {/* Background blur elements */}
      <div className="absolute h-2/3 w-1/3 bg-white z-0 right-[-50px] top-[-100px] rounded-full bg-gradient-to-r from-primary brightness-75 to-primary opacity-20 blur-3xl overflow-hidden pointer-events-none" />
      <div className="absolute h-2/3 w-1/3 bg-white z-0 left-[-100px] bottom-[-200px] rounded-full bg-gradient-to-r from-primary brightness-75 to-primary opacity-20 blur-3xl overflow-hidden pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between w-full px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            className="object-contain w-32 h-12 md:w-40 md:h-14"
            alt="Logo"
            width={20}
            height={20}
          />
          <nav className="items-center hidden gap-4 ml-6 md:flex">
            <Link href="/" passHref>
              <p className="text-white cursor-pointer hover:text-gray-400">
                Transfer
              </p>
            </Link>
            <Link href="/swap" passHref>
              <p className="text-white cursor-pointer hover:text-gray-400">
                Swap
              </p>
            </Link>
            <Link href="/stake" passHref>
              <p className="text-white cursor-pointer hover:text-gray-400">
                Stake
              </p>
            </Link>
            <Link href="/mint" passHref>
              <p className="text-white cursor-pointer hover:text-gray-400">
                Mint
              </p>
            </Link>
            <Link href="/transfer" passHref>
              <p className="text-white cursor-pointer hover:text-gray-400">
                Transfer History
              </p>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setVisible(true)} className="md:hidden">
            <Bars3Icon className="w-6 h-6 text-gray-500" />
          </button>
          <div className="hidden md:block">
            <ConnectWalletTemplate />
          </div>
        </div>
      </header>

      {/* Side Drawer */}
      <SideDrawer isOpen={visible} onClose={() => setVisible(false)} />

      {/* Main Content */}
      <main className="container relative z-10 flex-grow p-4 mx-auto text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
