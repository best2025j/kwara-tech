import Image from "next/image";
import React from "react";
import image from "..//assets/images/Firefox_wallpaper.png";

const aboutUs = () => {
  return (
    <section>
      {/* <div className="w-full md:h-[30rem] h-32 sm:h-[20rem] lg:h-[46rem]"> */}
      <div className="w-full h-full pt-20">
        <div className="min:h-full bg-gray-700/90 relative ">
          <Image
            src={image}
            quality={100}
            priority
            width={0}
            height={0}
            alt="/"
            className="w-full h-full object-cover mix-blend-overlay"
          />

          <div className="w-full absolute h-full mx-auto top-0 flex justify-center items-center">
            <h1 className="md:text-4xl text-sm font-bold animate-in fade-in zoom-in delay-120 duration-1000 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-yellow-500 to-[#55e022]">
              JOIN OUR TEAM.YOU WONT REGRET IT.
            </h1>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="">
        <h1 className="sm:text-3xl font-bold max-w-xl text-center flex items-center justify-center py-10 flex-col mx-auto">
          Providing innovative IT solutions with over 10 years of expertise
        </h1>

        <div className="w-[80%] h-full dark:shadow-white dark:bg-black rounded-3xl bg-white shadow-black shadow text-center mx-auto flex justify-center p-6">
          <p className="max-w-2xl text-base ">
            At Kwaratech Academy, we are committed to equipping young minds in
            Nigeria, starting in Kwara, with the digital training and capacity
            building needed to create the next generation of tech giants.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="py-20 space-y-6 w-[80%] mx-auto h-full">
        <h1 className="md:text-3xl text-center font-extrabold p-4">
          Why work for us?
        </h1>

        <div className="sm:flex sm:justify-end">
          <div className="border-2  rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-green-500 hover:text-white active:scale-105 active:text-black bg-blue-500 flex justify-center items-center text-center h-60 md:w-[50%]">
            <p className="max-w-sm">
              At kwara Tech Acedemy, we strongly belive in the ability of
              technology to enhance organisations and their processes, and the
              individual lives.
            </p>
          </div>
        </div>

        <div className="sm:flex sm:justify-start">
          <div className="border-2  rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-red-500 hover:text-white active:scale-105 active:text-black bg-green-400 flex justify-center items-center text-center h-60 md:w-[50%]">
            <p className="max-w-sm">
              We develop programmers that help individual to build quality and
              high paying tech aboutUs and at the same time,help organisations
              build teams of diverse of diverse tech talent.
            </p>
          </div>
        </div>

        <div className="sm:flex sm:justify-end">
          <div className="border-2 rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-slate-500 hover:text-white active:scale-105 active:text-black bg-yellow-500 flex justify-center items-center text-center h-full md:w-[50%]">
            <p className="max-w-sm p-8">
              We are solution and result driven, our vision is to suffieciently
              empower 30,000 young tech inovators and trainers, making a
              definate shift in tech sectors,with the teams we build.with our
              partnership and sponsorship,we are doggedly working towards
              crushing every barriers to our next generations tech talents
              ,supporting them through to becoming the next generation tech
              gaint and world problem solvers.
            </p>
          </div>
        </div>

        <div className="border-2 rounded-xl  text-center hover:scale-105 ease-in  duration-300 hover:bg-green-500 hover:text-white active:scale-105 active:text-black bg-blue-500 mx-auto flex justify-center items-center h-60 md:w-[50%]">
          <p className="max-w-sm p-4">
            We do not belive in inequality of any form.This alone has driven us
            to organise work shops and empowerment programs for kids and women
            in tech ,helping us to build inclusive tech teams of diverse
            background,perspective and expectise for better and more innovative
            works.
          </p>
        </div>

        <div className="border-2 rounded-xl  text-center hover:scale-105 ease-in  duration-300 hover:bg-red-500 hover:text-white active:scale-105 active:text-black bg-green-400 mx-auto flex justify-center items-center h-60 md:w-[50%]">
          <p className="max-w-sm">
            We will stop at nothing in our pursuit to closing the digital gap
            and empowering passionate individual in tech.
          </p>
        </div>

        <div className="border-2 rounded-xl  text-center hover:scale-105 ease-in  duration-300 hover:bg-slate-500 hover:text-white active:scale-105 active:text-black bg-yellow-500 mx-auto flex justify-center items-center h-60 md:w-[50%]">
          <p className="max-w-sm">
            Does this sound like what you want? We would find the perfect
            opportunity for you below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
