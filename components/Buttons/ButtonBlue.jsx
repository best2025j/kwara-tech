import React from "react";

const ButtonBlue = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="text-white rounded-full px-8 py-[7px] active:text-[#264ac4] shadow-none capitalize bg-[#3762f2] active:scale-100;"
    >
      {label}
    </button>
  );
};

export default ButtonBlue;
