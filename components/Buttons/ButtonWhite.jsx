import React from "react";

const ButtonWhite = ({ label, className }) => {
  return (
    <button
      className={`text-white rounded-full w-full h-10 px-6 active:text-[#264ac4] shadow-none capitalize bg-[#3762f2] active:scale-100 ${className}`}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
