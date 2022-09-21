import Image from "next/image";
import React from "react";
import image from "../Assets/student.jpg";

const careers = () => {
  return (
    <div className="w-full">
      <div className="w-full md:h-[30rem] h-32 sm:h-[20rem] lg:h-[46rem]">
        <div className="w-full min:h-full bg-gray-700/90 absolute">
          <Image
            src={image}
            alt="/"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="w-full relative h-full mx-auto top-20 flex justify-center items-center">
          <h1 className="md:text-4xl text-sm font-bold text-white">
            JOIN OUR TERM.{" "}
            <span className="text-yellow-500">YOU WONT REGRET IT.</span>
          </h1>
        </div>
      </div>

      {/*  */}
      <div className=" px-6 pt-40 space-y-2 pb-6">
        <h1 className="md:text-3xl text-center font-extrabold p-4">
          Why work for us?
        </h1>
        <p>
          At kwara Tech Acedemy, we strongly belive in the ability of technology
          to enhance organisations and their processes, and the individual
          lives.
        </p>
        <p>
          We develop programmers that help individual to build quality and high
          paying tech careers and at the same time,help organisations build
          teams of diverse of diverse tech talent.
        </p>
        <p>
          We are solution and result driven, our vision is to suffieciently
          empower 30,000 young tech inovators and trainers, making a definate
          shift in tech sectors,with the teams we build.with our partnership and
          sponsorship,we are doggedly working towards crushing every barriers to
          our next generations tech talents ,supporting them through to becoming
          the next generation tech gaint and world problem solvers.
        </p>
        <p>
          We do not belive in inequality of any form.This alone has driven us to
          organise work shops and empowerment programs for kids and women in
          tech ,helping us to build inclusive tech teams of diverse
          background,perspective and expectise for better and more innovative
          works.
        </p>
        <p>
          We will stop at nothing in our pursuit to closing the digital gap and
          empowering passionate individual in tech.
        </p>
        <p>
          Does this sound like what you want? You would find the perfect
          opportunity for you below.
        </p>
      </div>
    </div>
  );
};

export default careers;
