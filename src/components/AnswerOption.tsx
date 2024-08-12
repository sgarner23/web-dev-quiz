import React from "react";

interface AnswerOptionProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: any;
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
  console.log(correctOptionSelected);
  return (
    <div
      onClick={onClick}
      className={`w-[100%] pl-5 h-24 bg-[#3B4D66] hover:bg-[#455872] cursor-pointer rounded-3xl flex items-center group ${
        isSelected && "border-2 border-[#a729f5]"
      } ${correctOptionSelected && "border-2 border-green-500"} ${
        incorrectOptionSelected && "border-2 border-red-500"
      }`}
    >
      {children}
    </div>
  );
};

export default AnswerOption;
