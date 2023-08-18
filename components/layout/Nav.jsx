import Image from "next/image";
import Link from "next/link";
import image from "../../Assets/images/kw.png";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ButtonWhite from "../Buttons/ButtonWhite";
import DarkModeSwitch from "../UI/DarkModeSwitch";

const Nav = ({ children }) => {
  const [nav, setNav] = useState(false);

  // Your order logic here
  const handleOrderClick = () => {
    console.log("Order placed!");
  };

  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div
      className={
        nav
          ? "bg-white dark:bg-black h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
          : "dark:bg-black border-b border-white bg-white h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]"
      }
    >
      <div className="px-2 py-6 flex w-full justify-between items-center md:justify-around h-full 2xl:px-16">
        <Link href="#">
          <a>
            <Image
              src={image}
              alt="/"
              width="110px"
              height="128px"
              className="cursor-pointer"
            />
          </a>
        </Link>

        {/* destop view */}
        <ul className="hidden md:flex capitalize">
          <li className="pl-2 font-bold text-sm hover:text-black  active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/">Home</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black  active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/ourService">Our services</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black  active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black  active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/programs">Programs</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black  active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/aboutUs">About us</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black  active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* FORM BUTTON*/}

        <div className="hidden md:flex items-center justify-center space-y-2 ">
          <div className="">
            <ButtonWhite onClick={handleOrderClick} label="Get started" />
          </div>
          <div className="">
            <DarkModeSwitch />
          </div>
        </div>

        <div onClick={handClick} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* modal */}
      {/* MOBILE VEIW */}

      <div
        // backdrop color
        className={
          nav
            ? "md:hidden fixed left-0 bg-slate-800/90 dark:bg-black w-full h-full ease-in duration-500"
            : "fixed left-[-100%] h-screen  ease-out duration-700"
        }
      >
        {/* Side Drawer Menu */}

        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[72%] sm:w-[60%] h-full bg-white dark:bg-black border-r rounded-r-3xl p-5 ease-in duration-700"
              : "fixed left-[-100%] h-full top-0 p-5 ease-out duration-700 bg-white"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <a>
                  <Image
                    src={image}
                    alt="/"
                    width="100%"
                    height="60%"
                    className=" cursor-pointer"
                  />
                </a>
              </Link>

              <div
                onClick={handClick}
                className="rounded-full shadow  shadow-slate-500 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>

            {/*  */}

            <div className="border-b border-gray-400">
              <p className="w-[90%] sm:w-[90%] md:w-full">
                Let&#39; build something together
              </p>
            </div>

            <div className="flex flex-col pt-3 ">
              <ul className="font-600 space-y-1">
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/ourService">our service</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/programs">Program</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/aboutUS">About us</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="flex justify-center items-center h-40 w-full">
                <DarkModeSwitch />
              </div>
            </div>

            <div className="bottom-0 sm:bottom-0 absolute flex items-center justify-center w-[80%]">
              <ButtonWhite onClick={handleOrderClick} label="Get started" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// import Image from "next/image";
// import Link from "next/link";
// import image from "../../Assets/images/kw.png";
// import { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import ButtonWhite from "../Buttons/ButtonWhite";
// import DarkModeSwitch from "../UI/DarkModeSwitch";

// const Nav = () => {
//   const [nav, setNav] = useState(false);

//   const handleOrderClick = () => {
//     console.log("Order placed!");
//   };

//   const toggleNav = () => setNav(!nav);

//   return (
//     <nav
//       className={`${
//         nav ? "bg-white" : "dark:bg-black"
//       } h-[70px] py-[10.5px] sm:px-[64px] px-[36px] w-full fixed z-[10]`}
//     >
//       <div className="px-4 py-6 flex w-full justify-between items-center md:justify-around h-full 2xl:px-16">
//         <Link href="/">
//           <a>
//             <Image
//               src={image}
//               alt="/"
//               width="110px"
//               height="128px"
//               className="cursor-pointer"
//             />
//           </a>
//         </Link>

//         <ul className="hidden md:flex capitalize space-x-4">
//           <li className="font-bold text-sm hover:text-black active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
//             <Link href="/">Home</Link>
//           </li>
//           {/* Other navigation items */}
//         </ul>

//         <div className="hidden md:flex items-center space-x-4">
//           <ButtonWhite onClick={handleOrderClick} label="Get started" />
//           <DarkModeSwitch />
//         </div>

//         <div onClick={toggleNav} className="md:hidden cursor-pointer">
//           <AiOutlineMenu size={25} />
//         </div>
//       </div>

//       <div
//         className={`${
//           nav ? "fixed" : "left-[-100%] ease-out"
//         } left-0 h-screen top-0 w-full duration-700 bg-white dark:bg-black`}
//       >
//         {/* Side Drawer Menu */}
//         {/* Content for the side drawer */}
//       </div>
//     </nav>
//   );
// };

// export default Nav;
