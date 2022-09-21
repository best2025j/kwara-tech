import React from "react";

const Hero = () => {
  return (
    <div className="py-20 px-4">
      <div className="w-[100%] mx-auto h-80 sm:h-[30rem] md:h-screen text-center bg-gradient-to-r from-[#3762f2] to-[#2756f2] rounded-[1.5rem] sm:rounded-[3rem]">
        <div className="w-full h-full mx-auto flex justify-center items-center">
          <div className="animate-in fade-in zoom-in delay-120 duration-700">
            <div>
              <h1 className="sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-yellow-600 to-[#55e022] font-bold text-white text-4xl"> Join us today!!! </h1>
            </div>
            {/*  */}
            <div>
              <p className="sm:text-xl text-sm px-6 font-semibold max-w-[1000px]">
                We coach people like you to aquire in demand-tech skills,
                collaborate and create IT based solutions to global problems
                through our cutting-edge programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
