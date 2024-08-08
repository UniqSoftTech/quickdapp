import React from "react";
import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import colors from "@/utils/colors";

interface ButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  title,
  disabled,
  loading,
}) => {
  const address = useAddress();

  if (!address) {
    return (
      <ConnectWallet
        theme="light"
        modalTitle="QuickDapp"
        style={{
          background: colors.main,
          color: "black",
          padding: "10px 10px",
          fontWeight: "bold",
        }}
      />
    );
  }

  const buttonClasses = `
    relative rounded px-5 py-2.5 overflow-hidden group transition-all ease-out duration-300 
    ${
      disabled || loading
        ? "bg-neutral-800 text-gray-400 cursor-not-allowed"
        : "bg-primary hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400"
    }
  `;

  const spanClasses = `
    absolute right-0 w-44 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 
    group-hover:-translate-x-40 ease ${disabled || loading ? "hidden" : ""}
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      <span className={spanClasses}></span>
      <span className="relative flex items-center justify-center text-base font-semibold">
        {loading ? (
          <>
            <svg
              className="w-5 h-5 mr-2 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {title}
          </>
        ) : (
          title
        )}
      </span>
    </button>
  );
};

export default Button;
