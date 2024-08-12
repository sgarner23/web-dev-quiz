import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="border-t-4 border-r-4 border-b-4 border-l-4 border-transparent border-t-[#a729f5] border-r-[#a729f5] rounded-full h-24 w-24 animate-spin"></div>
      <p className="mt-8 text-white text-xl">Calculating your results</p>
    </div>
  );
};

export default LoadingSpinner;
