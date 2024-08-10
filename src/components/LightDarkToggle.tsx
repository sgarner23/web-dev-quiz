"use client";
import React, { useEffect, useState } from "react";
import SunIcon from "./Icons/SunIcon";
import MoonIcon from "./Icons/MoonIcon";

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex">
      <SunIcon />
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`w-12 h-6 flex items-center bg-[#A729F5] rounded-full ml-3 mr-3 p-1 cursor-pointer ${
          isDarkMode ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-5 h-5 bg-white rounded-full shadow-md"></div>
      </button>
      <MoonIcon />
    </div>
  );
};

export default LightDarkToggle;
