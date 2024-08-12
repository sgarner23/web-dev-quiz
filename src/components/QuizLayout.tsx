import React from "react";

interface QuizLayoutProps {
  children: React.ReactNode;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#313E51] relative overflow-hidden">
      <div className="absolute top-[-389px] left-[-315px] w-[815px] h-[815px] bg-[#313E51] border-[95px] border-[#2E3A48] rounded-full opacity-75 z-0"></div>
      <div className="absolute bottom-[-389px] right-[-315px] w-[815px] h-[815px] bg-[#313E51] border-[95px] border-[#2E3A48] rounded-full opacity-75 z-0"></div>
      <div className="z-50 relative pt-24 pr-32 pl-32">{children}</div>
    </div>
  );
};

export default QuizLayout;
