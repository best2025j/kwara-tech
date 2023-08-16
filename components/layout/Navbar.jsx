import Image from "next/image";
import Link from "next/link";
import image from "../../Assets/images/kw.png";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ButtonWhite from "../Buttons/ButtonWhite";

const Navbar = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleOrderClick = () => {
    // Your order logic here
    console.log("Order placed!");
  };

  const handClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    //   navbar
    <div
      className={
        shadow
          ? "w-full h-[4rem] border-b shadow-md bg-white duration-1000 easy-in fixed z-[100]"
          : "fixed w-full h-[5rem] z-[100] bg-white"
      }
    >
      <div className="px-4 py-6 flex w-full justify-between items-center md:justify-around h-full 2xl:px-16">
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
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/">Home</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/ourService">Our services</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/programs">Programs</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/aboutUs">About us</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* FORM BUTTON*/}

        <div className="hidden md:flex">
          <ButtonWhite onClick={handleOrderClick} label="Get started" />
        </div>

        <div onClick={handClick} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* modal */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        {/* Side Drawer Menu */}

        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[72%] sm:w-[60%] h-full bg-white border-r rounded-r-3xl p-5 ease-in duration-700"
              : "fixed left-[-100%] h-full top-0 p-5 ease-out duration-700 bg-slate-600"
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

              {/* MOBILE VEIW */}

              <div
                onClick={handClick}
                className="rounded-full shadow bg-white shadow-slate-500 p-2 cursor-pointer"
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
            </div>

            <div className=" bottom-0 sm:bottom-0 absolute py-[6px]  flex items-center flex-grow">
              <ButtonWhite onClick={handleOrderClick} label="Get started" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
