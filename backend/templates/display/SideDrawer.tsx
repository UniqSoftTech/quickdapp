import React from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ConnectWalletTemplate from "../connection/ConnectWalletTemplate";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 bg-neutral-900 bg-opacity-75`}
    >
      <div className="relative flex flex-col w-64 h-full p-4 shadow-lg bg-neutral-800">
        <button className="flex justify-end text-white" onClick={onClose}>
          <XMarkIcon className="w-6 h-6" />
        </button>
        <ConnectWalletTemplate />
        <nav className="flex flex-col p-6 space-y-4">
          <Link href="/" passHref>
            <p className="text-white hover:text-gray-400" onClick={onClose}>
              Home
            </p>
          </Link>
          <Link href="/swap" passHref>
            <p className="text-white hover:text-gray-400" onClick={onClose}>
              Swap
            </p>
          </Link>
          <Link href="/transfer" passHref>
            <p className="text-white hover:text-gray-400" onClick={onClose}>
              Transfer History
            </p>
          </Link>
        </nav>
      </div>
      <div className="flex-grow" onClick={onClose} />
    </div>
  );
};

export default SideDrawer;
