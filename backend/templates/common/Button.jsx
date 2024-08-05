import React from "react";

function Button({ children, onClick, title }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 font-semibold text-black transition-all duration-300 rounded-lg shadow-md bg-primary hover:bg-yellow-300 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:ring-opacity-75"
    >
      {title}
    </button>
  );
}

export default Button;
