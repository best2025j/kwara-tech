import React, { useState, useEffect } from "react";
import Image from "next/image";
import image from "../../assets/images/full-shot-smiley.png";
import ButtonWhite from "../Buttons/ButtonWhite";

const Cards = () => {
  // scrool feuture
  // const [scrollY, setScrollY] = useState(0);
  // const numbers = [
  //   { label: "Courses", count: 200 },
  //   { label: "Tutors", count: 500 },
  //   { label: "Support", count: 24 },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);

  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="h-full sm:py-20 w-full md:flex items-center py-20 ">
      <div className="sm:w-1/2 flex justify-center items-center sm:h-96 h-60 w-60 mx-auto">
        <Image
          src={image}
          alt="guys"
          width={400}
          height={400}
          quality={100}
          className="rounded-full "
        />
      </div>

      <div className="h-full w-full md:w-1/2 space-y-6 text-center mr-14 flex flex-col justify-center items-center   py-20 sm:py-0">
        <h1 className="sm:text-4xl font-bold text-4xl">
          Expand your Career Opportunities
        </h1>
        <p className="max-w-md text-xl">
          An easy step by step process to set up your classes, get familiar with
          your tutors, socialize with other students online.
        </p>

        {/* <div className="flex space-x-6 text-[#3762f2]">
          {numbers.map((item, index) => (
            <h2 className="text-2xl pr-2" key={index}>
              {item.label}
            </h2>
          ))}
        </div> */}

        {/* <div className="flex divide-x space-x-4 ">
          {numbers.map((item, index) => (
            <h1 className="font-extrabold text-5xl pr-2 " key={index}>
              {item.label === "Support"
                ? `${Math.min(scrollY, item.count)}h`
                : Math.min(scrollY < 200 ? 0 : scrollY - 200, item.count)}
            </h1>
          ))}
        </div> */}

        <div>
          <ButtonWhite label="get started" className='hover:scale-105 ease-out  duration-300'/>
        </div>
      </div>
    </div>
  );
};

export default Cards;
// import Image from "next/image";
// import React from "react";
// import image from "../Assets/code1.jpeg";
// import image2 from "../Assets/IT.jpeg";
// import image3 from "../Assets/COP.jpg";

// const Cards = () => {
//   return (
//     <div className="w-full h-full px-4 py-14">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-5 text-center ">
//         {/*  */}
//         <div
//           className="
//         animate-in slide-in-from-top duration-700 shadow-slate-800 shadow-md rounded-[2rem] px-4 py-10 "
//         >
//           <div className="p-4">
//             <Image
//               src={image}
//               alt="/"
//               width={150}
//               height={149}
//               className="rounded-full"
//             />
//           </div>

//           {/*  */}
//           <div className=" space-y-4">
//             <div className="text-xl">
//               <h1 className="font-extrabold">Coding Bootcamp For Kids</h1>
//             </div>
//             <p className="sm:text-md mx-auto font-medium max:w-[20rem]">
//               Kids also have a spec in tech .Groom your kids to become
//               tomorrow&#39;s leading tech giants.
//             </p>
//             <button className="hover:bg-blue-800 bg-[#233dfc] text-white py-3 px-9 font-bold">
//               JOIN NOW
//             </button>
//           </div>
//         </div>

//         {/*  */}
//         <div
//           className="
//         animate-in slide-in-from-top duration-700 shadow-slate-800 shadow-md rounded-[2rem] px-4 py-10"
//         >
//           <div className="p-4">
//             <Image
//               src={image2}
//               alt="/"
//               width={150}
//               height={149}
//               className="rounded-full"
//             />
//           </div>

//           {/*  */}
//           <div className=" space-y-4">
//             <div className="text-xl">
//               <h1 className="font-extrabold">Professional I.T Training</h1>
//             </div>
//             <p className="sm:text-md mx-auto font-medium max:w-[20rem]">
//               Move your career to the next level by aquiring a professional I.T
//             </p>
//             <div className="">
//               <button className="hover:bg-blue-800 bg-[#233dfc] text-white  py-3 px-9 font-bold ">
//                 JOIN NOW
//               </button>
//             </div>
//           </div>
//         </div>

//         {/*  */}
//         <div
//           className="
//         animate-in slide-in-from-top duration-700 shadow-slate-800 shadow-md rounded-[2rem] px-4 py-10"
//         >
//           <div className="p-4">
//             <Image
//               src={image3}
//               alt="/"
//               width={150}
//               height={149}
//               className="rounded-full"
//             />
//           </div>

//           {/*  */}
//           <div className=" space-y-4">
//             <div className="text-xl">
//               <h1 className="font-extrabold">
//                 Corporate Trainings for Organizations
//               </h1>
//             </div>
//             <p className="sm:text-md mx-auto font-medium max:w-[20rem]">
//               Improve your organization&apos;s human capital by signing up for
//               our corporate training programers designed for top, middle and
//               technincal level workers and managers.
//             </p>
//             <button className="hover:bg-blue-800 bg-[#233dfc] text-white py-3 px-9 font-bold">
//               JOIN NOW
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
