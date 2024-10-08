import React, { useState, useEffect } from "react";
import styles from "@/styles/toast.module.css"; // Assume you have corresponding CSS module
import Spinner from "./spinner";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info" | "loading" | "airflow" | "airflow-done";
  duration?: number; // duration in milliseconds
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  if (type === "loading") {
    return (
      <div className={`${styles.toast} ${styles[type]} flex flex-row gap-2`}>
        {/* <p>{message}</p> */}
        <Spinner />
      </div>
    );
  }

  if (type === "airflow") {
    return (
      <div className={`${styles.toast} flex flex-row gap-2 bg-neutral-900 backdrop-blur-2xl`}>
        <Spinner />
        <p>{message}</p>
      </div>
    );
  }

  if (type === "airflow-done") {
    return (
      <div
        className={`${styles.toast} flex flex-row gap-2 bg-neutral-900 backdrop-blur-2xl`}
      >
        <p>✅</p>
        <p>{message}</p>
      </div>
    );
  }

  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
};

export default Toast;
