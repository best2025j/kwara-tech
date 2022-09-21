import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[30rem] md:h-screen text-center bg-gradient-to-r from-[#233dfc] to-[#233dfc] py-20 px-4">
      <div className="max-w-[1000px] w-full h-full mx-auto flex justify-center items-center">
          <p className="sm:text-3xl text-sm font-semibold animate-in slide-in-from-top">
            We coach people like you to aquire in demand-tech skills,
            collaborate and create IT based solutions to global problems through
            our cutting-edge programs. Join our Programmers today!
          </p>
      </div>
    </div>
  );
};

export default Hero;
