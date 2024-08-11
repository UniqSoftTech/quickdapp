// context/ToastContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import Toast from "@/component/toast";

type ToastContextType = {
  showToast: (
    message?: string,
    type?: "success" | "error" | "info" | "loading" | "airflow" | "airflow-done",
    duration?: number
  ) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<
    {
      id: number;
      message: string;
      type: "success" | "error" | "info" | "loading" | "airflow" | "airflow-done";
      duration: number;
    }[]
  >([]);

  const showToast = (
    message: string = "",
    type: "success" | "error" | "info" | 'loading' | "airflow" | "airflow-done" = "info",
    duration: number = 3000
  ) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type, duration }]);
    setTimeout(() => {
      setToasts((currentToasts) =>
        currentToasts.filter((toast) => toast.id !== id)
      );
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
