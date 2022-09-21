import Image from "next/image";
import React from "react";
import image from "../Assets/code1.jpeg";
import image2 from "../Assets/IT.jpeg";
import image3 from "../Assets/COP.jpg";

const Cards = () => {
  return (
    <div className="w-full h-full px-4 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-5 text-center ">
        {/*  */}
        <div
          className="
        animate-in slide-in-from-top duration-700 shadow-slate-800 shadow-md rounded-[2rem] px-4 py-10 "
        >
          <div className="p-4">
            <Image
              src={image}
              alt="/"
              width={150}
              height={149}
              className="rounded-full"
            />
          </div>

          {/*  */}
          <div className=" space-y-4">
            <div className="text-xl">
              <h1 className="font-extrabold">Coding Bootcamp For Kids</h1>
            </div>
            <p className="sm:text-md mx-auto font-medium max:w-[20rem]">
              Kids also have a spec in tech .Groom your kids to become
              tomorrow&#39;s leading tech giants.
            </p>
            <button className="hover:bg-blue-800 bg-[#233dfc] text-white py-3 px-9 font-bold">
              JOIN NOW
            </button>
          </div>
        </div>

        {/*  */}
        <div
          className="
        animate-in slide-in-from-top duration-700 shadow-slate-800 shadow-md rounded-[2rem] px-4 py-10"
        >
          <div className="p-4">
            <Image
              src={image2}
              alt="/"
              width={150}
              height={149}
              className="rounded-full"
            />
          </div>

          {/*  */}
          <div className=" space-y-4">
            <div className="text-xl">
              <h1 className="font-extrabold">Professional I.T Training</h1>
            </div>
            <p className="sm:text-md mx-auto font-medium max:w-[20rem]">
              Move your career to the next level by aquiring a professional I.T
            </p>
            <div className="">
              <button className="hover:bg-blue-800 bg-[#233dfc] text-white  py-3 px-9 font-bold ">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div
          className="
        animate-in slide-in-from-top duration-700 shadow-slate-800 shadow-md rounded-[2rem] px-4 py-10"
        >
          <div className="p-4">
            <Image
              src={image3}
              alt="/"
              width={150}
              height={149}
              className="rounded-full"
            />
          </div>

          {/*  */}
          <div className=" space-y-4">
            <div className="text-xl">
              <h1 className="font-extrabold">
                Corporate Trainings for Organizations
              </h1>
            </div>
            <p className="sm:text-md mx-auto font-medium max:w-[20rem]">
              Improve your organization&apos;s human capital by signing up for
              our corporate training programers designed for top, middle and
              technincal level workers and managers.
            </p>
            <button className="hover:bg-blue-800 bg-[#233dfc] text-white py-3 px-9 font-bold">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
