import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SideDrawer from "./SideDrawer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const address = useAddress();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-neutral-900">
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-neutral-800 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full p-6">
          <Link href="/" passHref>
            <Image
              src={Logo}
              className="object-contain w-32 h-12 md:w-40 md:h-14"
              alt="Logo"
              width={20}
              height={20}
            />
          </Link>
          <nav className="flex flex-col gap-4 mt-10">
            ${componentLinks}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        {/* Background blur elements */}
        <div className="absolute h-2/3 w-1/3 bg-white z-0 right-[-50px] top-[-100px] rounded-full bg-gradient-to-r from-primary brightness-75 to-primary opacity-20 blur-3xl overflow-hidden pointer-events-none" />
        <div className="absolute h-2/3 w-1/3 bg-white z-0 left-[-100px] bottom-[-200px] rounded-full bg-gradient-to-r from-primary brightness-75 to-primary opacity-20 blur-3xl overflow-hidden pointer-events-none" />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between w-full px-6 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
          >
            <Bars3Icon className="w-6 h-6 text-gray-500" />
          </button>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="md:hidden">
              <ConnectWalletTemplate />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-grow p-4 text-white">
          <div className="pr-4 absolute top-0 right-0 hidden md:block">
            <ConnectWalletTemplate />
          </div>
          {children}
        </main>
      </div>

      {/* Side Drawer */}
      <SideDrawer isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Layout;
