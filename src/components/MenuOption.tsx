"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface MenuOptionProps {
  icon: React.ReactNode;
  text: string;
  route: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ icon, text, route }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[100%] pl-5 h-24 bg-[#3B4D66] hover:bg-[#455872] cursor-pointer rounded-3xl flex items-center"
    >
      <div className="w-[70px] h-[70px] rounded-md flex items-center justify-center bg-[#EBF0FF]">
        {icon} {/* Render the icon directly as JSX */}
      </div>
      <p className="font-normal text-2xl pl-8 text-white">{text}</p>
    </div>
  );
};

export default MenuOption;
