"use client";

import { useTheme } from "next-themes";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="cursor-pointer bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf] rounded-md border border-button-border-color p-1.5 [transition:background_20ms_ease-in,_color_0.15s]"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IoIosSunny className="text-yellow-400 text-2xl" />
      ) : (
        <IoIosMoon className="text-2xl" />
      )}
    </button>
  );
}