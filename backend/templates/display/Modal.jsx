import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState, useRef } from "react";

function Modal({ isOpen, onClose, title, children }) {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300); // Match this with the duration of the fade-out animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!showModal && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 p-4 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      } bg-black bg-opacity-50 backdrop-blur-sm`}
    >
      <div
        ref={modalRef}
        className={`w-full max-w-xl px-6 py-6 bg-black shadow-lg rounded-xl transform transition-all duration-300 ease-in-out ${
          isOpen ? "fade-in" : "fade-out"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <XMarkIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="mt-4 text-white">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
