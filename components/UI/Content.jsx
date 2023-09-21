import React from "react";
import { useTheme } from "next-themes";

const Content = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`w-[100%] mx-auto h-[80vh] sm:h-full text-center ${
        isDarkMode
          ? "dark:bg-black w-full h-full text-center py-20 p-8"
          : "w-full h-full text-center bg-gradient-to-b from-[#0e4ee3] to-white py-20 p-8"
      }`}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto space-y-4">
        <h1 className="sm:text-4xl text-2xl sm:py-6">
          Kickstart your tech career with{" "}
          <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-yellow-500 to-[#55e022]">
            Kwara Tech Academy.
          </b>
        </h1>

        <p className="font-medium text-lg">
          We are on a mission to empower young passionate tech innovators round
          the globe, helping them build qualitative and high-paying tech
          careers to become global tech giants. Through our virtual and on-site
          trainings, empowerment programmes, internships and job-placement
          opportunities, Kwara Tech Academy position you ahead of the curve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 text-center ">
          <div className="border-2 rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-green-500 hover:text-white active:scale-105 active:text-black bg-blue-500 mx-auto flex justify-center items-center h-60 w-full">
            {/* <div className="p-4"></div> */}

            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Acquire In-demand Skills </h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                You&#39;re never wrong acquiring a tech skill with us. We are set to
                help you through the process of attaining your dream goals.
              </p>
            </div>
          </div>

          <div className="border-2 rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-red-500 hover:text-white active:scale-105 active:text-black bg-green-400 mx-auto flex justify-center items-center h-60 w-full">
            {/* <div className="p-4"></div> */}

            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Step Up Your Careers Game</h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                We will coach and provide you with internship and job placement
                opportunities, to get started and move your career 10x ahead.
              </p>
            </div>
          </div>

          <div className="border-2 rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-slate-500 hover:text-white active:scale-105 active:text-black bg-yellow-500 mx-auto flex justify-center items-center h-60 w-full">
            {/* <div className="p-4"></div> */}

            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Get Certified</h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                You will not only get qualified with us, you will be certified as
                a tech professional, making you indispensable.
              </p>
            </div>
          </div>

          <div className="border-2 rounded-xl hover:scale-105 ease-in  duration-300 hover:bg-green-500 hover:text-white active:scale-105 active:text-black bg-blue-500 mx-auto flex justify-center items-center h-60 w-full">
            {/* <div className="p-4"></div> */}

            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Upskill Your Team</h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                Contact us to help you upskill your team to a whole new level
                with our result-proven corporate training programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
