import React, { useEffect, useState } from "react";
import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import colors from "@/utils/colors";
import { CurrencyPoundIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import SearchInput from "./SearchInput";
import useGlobalRequestStore from "@/hooks/useGlobalRequestStore";
import Image from "next/image";

interface CoinChooserProps {
  onClose: () => void;
  visible: boolean;
  onClick: (e: any) => void;
}

const CoinChooser: React.FC<CoinChooserProps> = ({
  onClose,
  visible,
  onClick,
}) => {
  const [filter, setFilter] = useState<string>("");
  const { requests } = useGlobalRequestStore();

  const toptokensRequest = requests["toptokens"];

  return (
    <Modal isOpen={visible} onClose={() => onClose()} title={"Select token"}>
      <div className="mb-4">
        <SearchInput onChange={(e) => setFilter(e)} />
      </div>
      <div className="overflow-y-auto max-h-80 md:max-h-[450px]">
        <div className="pb-4 text-neutral-500">Popular tokens</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {toptokensRequest?.data?.result
            ?.slice(0, 6)
            .map((i: any, index: number) => {
              return (
                <button
                  key={i.symbol}
                  onClick={() => onClick(i)}
                  className="flex flex-row items-center gap-3 p-2 bg-neutral-900 rounded-xl"
                >
                  <Image
                    src={i?.project?.logoUrl}
                    className="object-contain w-8 h-8"
                    alt={i.symbol}
                    width={20}
                    height={20}
                  />
                  <div className="text-left">
                    <h2>{i.symbol}</h2>
                    <p>{i.name}</p>
                  </div>
                </button>
              );
            })}
        </div>
        <div className="my-4 text-neutral-500">More tokens</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {toptokensRequest?.data?.result
            .filter((i: any) => i.symbol?.includes(filter))
            .map((i: any, index: number) => {
              return (
                <button
                  key={index}
                  onClick={() => onClick(i)}
                  className="flex flex-row items-center gap-3 p-2 bg-neutral-900 rounded-xl"
                >
                  <Image
                    src={i?.project?.logoUrl}
                    className="object-contain w-8 h-8"
                    alt={i.symbol}
                    width={20}
                    height={20}
                  />
                  <div className="text-left">
                    <h2>{i.symbol}</h2>
                    <p>{i.name}</p>
                  </div>
                </button>
              );
            })}
        </div>
      </div>
    </Modal>
  );
};

export default CoinChooser;
