import React from "react";
import ErrorIcon from "./Icons/ErrorIcon";

const NoOptionSelectedError = () => {
  return (
    <div className="flex items-center justify-center">
      <ErrorIcon />
      <p className="ml-2 text-white font-light">Please select an answer</p>
    </div>
  );
};

export default NoOptionSelectedError;
