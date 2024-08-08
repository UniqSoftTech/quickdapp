import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 rounded dark:bg-gray-700"
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-white" />
      ) : (
        <MoonIcon className="w-6 h-6 text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
