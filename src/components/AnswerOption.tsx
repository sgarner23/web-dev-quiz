import React from "react";

interface AnswerOptionProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  correctOptionSelected: boolean;
  incorrectOptionSelected: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  children,
  isSelected,
  onClick,
  correctOptionSelected,
  incorrectOptionSelected,
}) => {
  // Determine the border color based on the selection state
  let borderColor = "border-transparent"; // Default to transparent
  if (correctOptionSelected) {
    borderColor = "border-green-500";
  } else if (incorrectOptionSelected) {
    borderColor = "border-red-500";
  } else if (isSelected) {
    borderColor = "border-[#a729f5]";
  }

  return (
    <div
      onClick={onClick}
      className={`w-[100%] pl-5 h-24 bg-[#3B4D66] hover:bg-[#455872] cursor-pointer rounded-3xl flex items-center group border-2 ${borderColor}`}
    >
      {children}
    </div>
  );
};

export default AnswerOption;
