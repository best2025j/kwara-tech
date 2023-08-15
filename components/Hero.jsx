import React from "react";
import image from "../Assets/student.jpg";
import { AiOutlineSearch } from "react-icons/ai";
// import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100%] mx-auto h-[80vh] md:h-[90vh] text-center bg-gradient-to-r from-[#3762f2] to-[#123dcc]">
      <div className="w-full h-full mx-auto flex justify-center items-center">
        {/* <div className="w-full min:h-full bg-gray-700/90 absolute">
          <Image
            src={image}
            alt="/"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div> */}
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
            {/*  */}
            <div className="space-x-1 relative md:mt-2">
              <input
                type="'text'"
                className="p-1 w-80"
                placeholder="Search for our courses, tutors and tools"
              />
              <div className="absolute top-4 md:top-3 insert-y-0 md:left-0 left-4 flex items-center pl-4">
                <AiOutlineSearch className="text-black/80 md:h-6 md:w-6" />
              </div>
              <button className="rounded-lg">search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
