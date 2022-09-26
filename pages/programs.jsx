import Link from "next/link";
import React from "react";
import image from "../Assets/deb.jpg";
import image1 from "../Assets/paul2.webp";
import image2 from "../Assets/paul3.jpg";
import Image from "next/image";

const programs = () => {
  return (
    <div className="py-20 p-4 w-full h-full font-serif">
      <div className="w-[100%] mx-auto h-[80vh] md:h-[65vh] flex justify-center items-center text-center bg-gradient-to-r from-[#3762f2] to-[#123dcc] rounded-[1.5rem] sm:rounded-[3rem]">
        <h1 className="font-bold animate-in fade-in zoom-in delay-120 duration-1000 text-center text-4xl">Kwara Tech Programs</h1>
      </div>

      {/* GRID */}
      <div className="px-4">
        <p className="sm:text-2xl font-bold tracking-wide text-center">
          Kwara tech programs open for applications
        </p>

        <div className="py-4 animate-in slide-in-from-top duration-700 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3 text-center ">
          {/*  */}
          <div className="border-2  rounded-xl duration-300 hover:bg-green-500 hover:text-white active:scale-105 active:text-black bg-blue-500 mx-auto flex justify-center items-center h-40 w-full">
            <Link href="/bootcamp">
              <a>
                <h4 className="font-bold">Coding Bootcamp for Kids</h4>
                <p>
                  <i>(online and on-site)</i>
                </p>
              </a>
            </Link>
          </div>{" "}
          <div className="border-2 rounded-xl duration-300 hover:bg-slate-500 hover:text-white active:scale-105 active:text-black bg-yellow-500 mx-auto flex justify-center items-center h-40 w-full">
            <Link href="/bootcamp">
              <a>
                <h4 className="font-bold">Professional IT Training</h4>
                <p>
                  <i>(online and on-site)</i>
                </p>
              </a>
            </Link>
          </div>{" "}
          <div className="border-2 rounded-xl duration-300 hover:bg-red-500 hover:text-white active:scale-105 active:text-black bg-green-400 mx-auto flex justify-center items-center h-40 w-full">
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
        <div className="py-6">
          <h1 className="text-2xl font-bold">Student Testimonies:</h1>
        </div>

        {/*  */}
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 text-center ">
          <div className="animate-in slide-in-from-left duration-1000">
            <div className="p-2">
              <Image src={image} alt="/" className="rounded-xl" />
              <h2 className="font-bold text-xl">Deborah</h2>
            </div>
            {/*  */}
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
          </div>
          
          {" "}
          <div className="animate-in slide-in-from-top duration-1000">
            <div className="p-2">
              <Image src={image1} alt="/" className="rounded-xl" />
              <h2 className="font-bold text-xl">Isaac</h2>
            </div>
            {/*  */}
            <div className=" space-y-4">
              <div className="text-xl">
                <h1 className="font-extrabold text-blue-500">
                  Snr Web Developer and Database Analyst
                </h1>
              </div>
              <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                <i>
                &#34;Before joining the program, i was intended to learn Database
                  analysis but on my arriver, i attended the web class once and
                  thereafter, i suddenly developed a passion for website
                  designing and its been a experience Learning.&#34;
                </i>
              </p>
            </div>
          </div>
          
          {" "}
          <div className="animate-in slide-in-from-right duration-1000">
            <div className="p-2">
              <Image src={image2} alt="/" className="rounded-xl" />
              <h2 className="font-bold text-xl">Stella</h2>
            </div>
            {/*  */}
            <div className=" space-y-4">
              <div className="text-xl">
                <h1 className="font-extrabold text-blue-500">
                  Web Developer and Content Creator
                </h1>
              </div>
              <p className="sm:text-md mx-auto font-bold max:w-[20rem]">
                <i>
                &#34;Before joining the Program, i self-learned front-end Web
                  design for the first week and amazingly,i learnt more than i
                  ever self-learnt on my first day in class&#34;
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default programs;
