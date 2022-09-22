// import { useRouter } from "next/router";
import React from "react";

const bootcamp = () => {
  // const router = useRouter();
  // console.log(router.query.bootcamp);
  return (
    <>
      <div className="py-20 px-4 h-auto w-full">
        <div className="w-[100%] mx-auto h-[80vh] md:h-[65vh] flex justify-center items-center text-center bg-gradient-to-r from-[#3762f2] to-[#123dcc] rounded-[1.5rem] sm:rounded-[3rem]">
          <div className=" animate-in fade-in zoom-in delay-120 duration-1000">
            <div>
              <h1 className=" font-bold text-4xl">Coding Bootcamp For Kids.</h1>
            </div>
            <div>
              <p>8Weeks onsite Programs Join NOW</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default bootcamp;
