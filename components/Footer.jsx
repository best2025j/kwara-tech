
import Link from "next/link";
import image from "../Assets/kw.png";

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    //   GRID CONTENT LAYER
    <div className="w-full bg-black text-slate-300 py-14 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600">
        <div>
          <h2 className="font-bold pt-2 uppercase">solutions</h2>
          <ul>
            <li>Marketting</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">support</h2>
          <ul>
            <li>Pricing</li>
            <li>Documentations</li>
            <li>Guides</li>
            <li>Api-Status</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">legal</h2>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Teams</li>
            <li>Political</li>
            <li>Condictions</li>
          </ul>
        </div>

        {/*  */}

        <div className="max-w-[1240px] col-span-2 pb-10 text-center text-white w-full h-full mx-auto flex justify-center items-center">
          <div>
            <div>
              <Link href="#">
                <a>
                  <Image
                    src={image}
                    alt="/"
                    width="150px"
                    height="138px"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </div>
            <div>
              <p className="sm:font-medium">
                We work with some of the finest industry experts, to provide
                top-notch traning and empowerment programs to individuals, team
                and organizationS, skilling and Up-skilling them to finding
                their desired employment in tech and also creating tech-based
                processes and solutions.
              </p>
            </div>
          </div>
        </div>

        {/* SUBSRIBE */}

        {/* <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold md:text-2xl text-base uppercase">
            Subscribe to our newsletter
          </p>
          <p className="py-4">
            The latest news,articles, and resources, sent to the inbox weekly..
          </p>
          <form className="flex flex-col sm:flex-row" action="">
            <input
              type="text"
              className="w-full p-2 mr-4 outline-none rounded-md mb-4"
              placeholder="enter your email..."
            />
            <button className="p-1 px-3 mb-4 border rounded-lg border-white hover:bg-[#264ac4] active:scale-105 duration-300 active:text-[#fff]">
              Subscribe
            </button>
          </form>
        </div> */}
      </div>
      {/*  */}

      {/* SOCIAL MEDIA LINKS */}

      <div className="flex-col max-w-[1240px] px-2 py-4 m-auto justify-between align-center sm:flex-row border-t flex text-center text-gray-500">
        <p className="py-4">2022 workflow , llc, All rights reserved.</p>
        <div className="flex justify-around sm:w-[360px] pt-4 text-2xl cursor-pointer">
          <Link href="">
            <a>
              <FaFacebook className="text-[#233dfc]" />
            </a>
          </Link>
          <Link href="">
            <a>
              <FaInstagram className="text-[#233dfc]" />
            </a>
          </Link>
          <Link href="">
            <a>
              <FaLinkedinIn className="text-[#233dfc]" />
            </a>
          </Link>
          <Link href="">
            <a>
              <FaTwitter className="text-[#233dfc]" />
            </a>
          </Link>

          <Link href="">
            <a>
              <FaYoutube className="text-[#233dfc]" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-[#000] w-full h-full p-4">
//       <div className="max-w-[1240px] text-center text-white w-full h-full mx-auto flex justify-center items-center">
//         <p>
//           We work with some of the finest industry experts, to provide top-notch
//           traning and empowerment programs to individuals, team and
//           organizationS, SKILLING and Up-skilling them to finding their desired
//           employment in tech and also creating tech-based processes and
//           solutions.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;








// import Link from "next/link";
// import image from "../Assets/kw.png";

// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
// import Image from "next/image";
// const Footer = () => {
//   return (
//     //   GRID CONTENT LAYER
//     <div className="w-full bg-black text-slate-300 py-14 px-2">
//       <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600 py-4">
//         <div>
//           <h2 className="font-bold pt-2 uppercase">solutions</h2>
//           <ul>
//             <li>Marketting</li>
//             <li>Analytics</li>
//             <li>Commerce</li>
//             <li>Data</li>
//             <li>Cloud</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-bold pt-2 uppercase">support</h2>
//           <ul>
//             <li>Pricing</li>
//             <li>Documentations</li>
//             <li>Guides</li>
//             <li>Api-Status</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-bold pt-2 uppercase">company</h2>
//           <ul>
//             <li>About</li>
//             <li>Blog</li>
//             <li>Jobs</li>
//             <li>Press</li>
//             <li>Partners</li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="font-bold pt-2 uppercase">legal</h2>
//           <ul>
//             <li>Claims</li>
//             <li>Privacy</li>
//             <li>Teams</li>
//             <li>Political</li>
//             <li>Condictions</li>
//           </ul>
//         </div>

//         <div className="max-w-[1240px] col-span-2 py-6 text-center text-white w-full h-full mx-auto flex justify-center items-center">
//           <p className="sm:font-medium">
//             We work with some of the finest industry experts, to provide
//             top-notch traning and empowerment programs to individuals, team and
//             organizationS, SKILLING and Up-skilling them to finding their
//             desired employment in tech and also creating tech-based processes
//             and solutions.
//           </p>
//         </div>

//         {/* SUBSRIBE */}

//         {/* <div className="col-span-2 pt-8 md:pt-2">
//           <p className="font-bold md:text-2xl text-base uppercase">
//             Subscribe to our newsletter
//           </p>
//           <p className="py-4">
//             The latest news,articles, and resources, sent to the inbox weekly..
//           </p>
//           <form className="flex flex-col sm:flex-row" action="">
//             <input
//               type="text"
//               className="w-full p-2 mr-4 outline-none rounded-md mb-4"
//               placeholder="enter your email..."
//             />
//             <button className="p-1 px-3 mb-4 border rounded-lg border-white hover:bg-[#264ac4] active:scale-105 duration-300 active:text-[#fff]">
//               Subscribe
//             </button>
//           </form>
//         </div> */}
//       </div>
//       {/*  */}

//       {/* SOCIAL MEDIA LINKS */}

//       <div className="flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row border-t flex text-center text-gray-500">
//         <p className="py-4">2022 workflow , llc, All rights reserved.</p>
//         <div className="flex justify-around sm:w-[360px] pt-4 text-2xl cursor-pointer">
//           <Link href="">
//             <a>
//               <FaFacebook className="text-[#233dfc]" />
//             </a>
//           </Link>
//           <Link href="">
//             <a>
//               <FaInstagram className="text-[#233dfc]" />
//             </a>
//           </Link>
//           <Link href="">
//             <a>
//               <FaLinkedinIn className="text-[#233dfc]" />
//             </a>
//           </Link>
//           <Link href="">
//             <a>
//               <FaTwitter className="text-[#233dfc]" />
//             </a>
//           </Link>

//           <Link href="">
//             <a>
//               <FaYoutube className="text-[#233dfc]" />
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// // import React from "react";

// // const Footer = () => {
// //   return (
// //     <div className="bg-[#000] w-full h-full p-4">
// //       <div className="max-w-[1240px] text-center text-white w-full h-full mx-auto flex justify-center items-center">
// //         <p>
// //           We work with some of the finest industry experts, to provide top-notch
// //           traning and empowerment programs to individuals, team and
// //           organizationS, SKILLING and Up-skilling them to finding their desired
// //           employment in tech and also creating tech-based processes and
// //           solutions.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;
