import React from "react";

const AnswerOption = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[100%] pl-5 h-24 bg-[#3B4D66] hover:bg-[#455872] cursor-pointer rounded-3xl flex items-center">
      {children}
    </div>
  );
};

export default AnswerOption;
