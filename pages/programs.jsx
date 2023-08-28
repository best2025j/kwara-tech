import Link from "next/link";
import React from "react";

import ProgramsLayout from "../components/Programs/ProgramsLayout";
import Testimonies from "../components/UI/Testimonies";

const programs = () => {
  return (
    <div className="py-20 w-[85%] sm:w-full sm:mx-auto mx-auto h-full font-serif">
      <div className="w-[90%] shadow-md dark:shadow-white shadow-black mx-auto h-[80vh] md:h-[35vh] flex justify-center items-center text-center dark:bg-black rounded-[1.5rem] sm:rounded-[3rem]">
        <h1 className="font-bold animate-in fade-in zoom-in delay-120 duration-1000 text-center sm:text-4xl text-xl p-4 tracking-wide">
          Kwara tech programs open for applications
        </h1>
      </div>

      {/* GRID */}
      <div className="px-4 space-y-4 py-6">
        <div className="py-4 animate-in slide-in-from-top duration-700 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 text-center ">
          <div className="border-2  rounded-xl duration-3030 hover:bg-green-500 hover:text-white active:scale-105 active:text-black bg-blue-500 mx-auto flex justify-center items-center h-80 w-full">
            <Link href="/bootcamp">
              <a>
                <h4 className="font-bold">Coding Bootcamp for Kids</h4>
                <p>
                  <i>(online and on-site)</i>
                </p>
              </a>
            </Link>
          </div>

          <div className="border-2 rounded-3xl duration-300 hover:bg-slate-500 hover:text-white active:scale-105 active:text-black bg-yellow-500 mx-auto flex justify-center items-center h-80 w-full">
            <Link href="/bootcamp">
              <a>
                <h4 className="font-bold">Professional IT Training</h4>
                <p>
                  <i>(online and on-site)</i>
                </p>
              </a>
            </Link>
          </div>

          <div className="border-2 rounded-3xl duration-300 hover:bg-red-500 hover:text-white active:scale-105 active:text-black bg-green-400 mx-auto flex justify-center items-center h-80 w-full">
            <Link href="/bootcamp">
              <a>
                <h4 className="font-bold">
                  Corporate Training for Organinzation
                </h4>
                <p>
                  <i>(online and on-site)</i>
                </p>
              </a>
            </Link>
          </div>
        </div>

        {/* TESTIMONY */}
        <div className="py-10">
          <h1 className="text-2xl font-bold text-center">
            Student Testimonies:
          </h1>
        </div>
        <Testimonies />

        <ProgramsLayout />
      </div>
    </div>
  );
};

export default programs;


  {/* <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 text-center">
          <div className="animate-in slide-in-from-left duration-1000 section">
            <div className="p-2">
              <h2 className="font-bold text-xl">Deborah</h2>
            </div>

            <div className="space-y-4">
              <div className="text-xl">
                <h1 className="font-extrabold text-blue-500">
                  Web Developer and Graphics Designer
                </h1>
              </div>
              <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                <i>
                  &#34;I joined the academy,hoping to learn a few basics about
                  computer and i really haven&apos;t been dissappointed. Now i
                  know a lot more than i thought to learn and my appreciation
                  goes to my amazing instructors who are friendly and down to
                  earth.&#34;
                </i>
              </p>
            </div>

            {/* < className="animate-in slide-in-from-top duration-1000 section hidden">
              <div className="p-2">
                <h2 className="font-bold text-xl">Deborah</h2>
              </div>
              <div className="space-y-4">
                <div className="text-xl">
                  <h1 className="font-extrabold text-blue-500">
                    Web Developer and Graphics Designer
                  </h1>
                </div>
                <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                  <i>
                    &#34;I joined the academy,hoping to learn a few basics about
                    computer and i really haven&apos;t been dissappointed. Now i
                    know a lot more than i thought to learn and my appreciation
                    goes to my amazing instructors who are friendly and down to
                    earth.&#34;
                  </i>
                </p>
              </div>


              {/* <div className="animate-in slide-in-from-right duration-1000 section hidden">
                <div className="p-2">
                  <h2 className="font-bold text-xl">Deborah</h2>
                </div>
                <div className="space-y-4">
                  <div className="text-xl">
                    <h1 className="font-extrabold text-blue-500">
                      Web Developer and Graphics Designer
                    </h1>
                  </div>
                  <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                    <i>
                      &#34;I joined the academy,hoping to learn a few basics
                      about computer and i really haven&apos;t been
                      dissappointed. Now i know a lot more than i thought to
                      learn and my appreciation goes to my amazing instructors
                      who are friendly and down to earth.&#34;
                    </i>
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="pagination-button mx-2 active"
                  data-section="1"
                >
                  1
                </button>
                <button className="pagination-button mx-2" data-section="2">
                  2
                </button>
                <button className="pagination-button mx-2" data-section="3">
                  3
                </button>
              </div> */}
              

              {/* <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 text-center ">
                <div className="animate-in slide-in-from-left duration-1000">
                  <div className="p-2">
                    <h2 className="font-bold text-xl">Deborah</h2>
                  </div>
  
                  <div className="space-y-4">
                    <div className="text-xl">
                      <h1 className="font-extrabold text-blue-500">
                        Web Developer and Graphics Designer
                      </h1>
                    </div>
                    <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                      <i>
                        &#34;I joined the academy,hoping to learn a few basics
                        about computer and i really haven&apos;t been
                        dissappointed. Now i know a lot more than i thought to
                        learn and my appreciation goes to my amazing instructors
                        who are friendly and down to earth.&#34;
                      </i>
                    </p>
                  </div>
                </div>
  
                <div className="animate-in slide-in-from-top duration-1000">
                  <div className="p-2">
                    <h2 className="font-bold text-xl">Isaac</h2>
                  </div>
  
                  <div className=" space-y-4">
                    <div className="text-xl">
                      <h1 className="font-extrabold text-blue-500">
                        Snr Web Developer and Database Analyst
                      </h1>
                    </div>
                    <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                      <i>
                        &#34;Before joining the program, i was intended to learn
                        Database analysis but on my arriver, i attended the web
                        class once and thereafter, i suddenly developed a passion
                        for website designing and its been a experience
                        Learning.&#34;
                      </i>
                    </p>
                  </div>
                </div>
  
                <div className="animate-in slide-in-from-right duration-1000">
                  <div className="p-2">
                    <h2 className="font-bold text-xl">Stella</h2>
                  </div>
  
                  <div className=" space-y-4">
                    <div className="text-xl">
                      <h1 className="font-extrabold text-blue-500">
                        Web Developer and Content Creator
                      </h1>
                    </div>
                    <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                      <i>
                        &#34;Before joining the Program, i self-learned front-end
                        Web design for the first week and amazingly,i learnt more
                        than i ever self-learnt on my first day in class&#34;
                      </i>
                    </p>
                  </div>
                </div>
              </div> */}