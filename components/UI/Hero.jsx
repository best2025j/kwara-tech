import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ButtonDefault from "../Buttons/ButtonDefault";

const Hero = () => {
  const handleOrderClick = () => {
    // Your order logic here
    console.log("Order placed!");
  };

  return (
    <div className="w-[100%] mx-auto h-[80vh] sm:h-[90vh] text-center bg-gradient-to-r from-[#3762f2] to-[#123dcc]">
      <div className="w-full h-full mx-auto flex justify-center items-center">
        <div className="animate-in fade-in zoom-in delay-120  duration-700">
          <div className="">
            <h1 className="sm:text-4xl pb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-yellow-500 to-[#55e022] font-bold text-white text-4xl">
              Join us today!!!
            </h1>
          </div>
          <div className="space-y-6">
            <p className="sm:text-6xl text-sm font-medium px-6 max-w-[900px] text-white">
              A new improve way to learn and enhance your skills
            </p>
            <p className="sm:text-lg text-sm px-6 max-w-[900px] text-white">
              learn how to design,code and building real life apps,
              website,logos in no time. get access to complete courses, the best
              tutors and best tools
            </p>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative md:mt-2 sm:space-x-1">
                <input
                  type="text"
                  placeholder="Search for our courses, tutors and tools"
                  className="sm:pl-14 pl-10 md:w-96 sm:h-10 h-8 w-80 bg-white outline-none rounded md:rounded-l-[22px] md:placeholder:text-base placeholder:text-xs"
                />
                <div className="absolute top-[10px] md:top-2 insert-y-0 sm:left-0 left-8 flex items-center pl-4">
                  <AiOutlineSearch className="text-black/80 sm:h-6 sm:w-6 " />
                </div>
                <ButtonDefault
                  onClick={handleOrderClick}
                  label="Search"
                  className="sm:rounded-l-xl sm:mt-0 mt-2 bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
