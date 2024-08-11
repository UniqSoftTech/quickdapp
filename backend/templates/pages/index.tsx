import React from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";

const DAppContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-5">
        <Image
          src={Logo}
          className="object-contain w-32 h-12 md:w-40 md:h-14"
          alt="Logo"
          width={20}
          height={20}
        />
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <h2 className="text-xl font-semibold">
          Please connect your wallet and interact with the contract.
        </h2>
      </div>
    </div>
  );
};

export default DAppContent;
