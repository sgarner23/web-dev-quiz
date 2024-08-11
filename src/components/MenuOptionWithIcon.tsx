"use client";

import React from "react";
import { useRouter } from "next/navigation";
import IconWithLabel from "./IconWithLabel";

interface MenuOptionProps {
  icon: React.ReactNode;
  text: string;
  route: string;
  iconBackgroundColor: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({
  icon,
  text,
  route,
  iconBackgroundColor,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[100%] pl-5 h-24 bg-[#3B4D66] hover:bg-[#455872] cursor-pointer rounded-3xl flex items-center"
    >
      <IconWithLabel
        icon={icon}
        text={text}
        iconBackgroundColor={iconBackgroundColor}
      />
    </div>
  );
};

export default MenuOption;
