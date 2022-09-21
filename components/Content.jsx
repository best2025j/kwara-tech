import React from "react";
// import Image from "next/image";
// import image from "../Assets/aqa.jpg";
// import image1 from "../Assets/games.jpg";
// import image2 from "../Assets/paul.webp";
// import image3 from "../Assets/skils.jpg";

const Content = () => {
  return (
    <div className="w-full h-full text-white text-center bg-gradient-to-r from-[#233dfc] to-[#233dfc] py-20 px-4">
      <div className="max-w-[1240px] w-full h-full mx-auto space-y-4">
        <h1 className="sm:text-4xl text-2xl">
          Kickstart your tech career with <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#fff] via-yellow-500 to-[#55e022]">kwara Tech Academy.</b>
        </h1>

        {/*  */}
        <p className="font-medium text-lg">
          We are on a mission to empower young passionate tech innovators round
          the globe, helping them to build qualitative and high-paying tech
          careers and to become glober tech giant through our virtual and on
          site training and empowerment programmes, interships and job-placement
          opportunities.
        </p>

        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 text-center ">
          {/*  */}
          <div className="px-4 py-10">
            {/* <div className="p-4"></div> */}

            {/*  */}
            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Acquire In-demand Skills </h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                You&#39;re never wrong acquiring an I.T skills. We are set to
                help you through the process.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="px-4 py-10">
            {/* <div className="p-4"></div> */}

            {/*  */}
            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Step Up Your Careers In Game</h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                We will coach and provide you with intership and job-placement
                opportunities, to get started and move your career 4x ahead.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="px-4 py-10">
            {/* <div className="p-4"></div> */}
            {/*  */}
            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Get Certified</h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                You will not only get qualify with us, you will be certified as
                a tech professional, making you indispensable.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="px-4 py-10">
            {/* <div className="p-4"></div> */}
            {/*  */}
            <div className=" space-y-4">
              <div className="text-base">
                <h1 className="font-bold">Upskill Your Team</h1>
              </div>
              <p className="sm:text-base mx-auto font-medium max:w-[20rem]">
                Contact us to help you upskill your team to a whole new leavel
                with our result-proved corporate training programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
