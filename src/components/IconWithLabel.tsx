import React from "react";

interface IconWithLabelProps {
  icon: React.ReactNode;
  text: string;
  iconBackgroundColor: string;
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({
  icon,
  text,
  iconBackgroundColor,
}) => {
  return (
    <div className="flex items-center">
      <div
        className="w-[70px] h-[70px] rounded-md flex items-center justify-center"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>
      <p className="font-normal text-2xl pl-8 text-white">{text}</p>
    </div>
  );
};

export default IconWithLabel;
