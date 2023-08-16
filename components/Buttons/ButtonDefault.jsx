import React from "react";

const ButtonDefault = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[#264ac4] font-bold rounded-full px-8 py-[7px] active:text-[#264ac4] shadow-none capitalize bg-[#ffff] active:scale-100 ${className}`}
    >
      {label}
    </button>
  );
};

export default ButtonDefault;
