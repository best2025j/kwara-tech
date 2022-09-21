import Image from "next/image";
import Link from "next/link";
import image from "../Assets/kw.png";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
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
  }, []);

  return (
    //   navbar
    <div
      className={
        shadow
          ? "w-full h-[6rem] border-b shadow-2xl bg-white duration-1000 easy-in fixed z-[100]"
          : "fixed w-full h-20 z-[100] bg-white"
      }
    >
      <div className="px-4 py-4 flex w-full justify-between items-center sm:justify-around h-full 2xl:px-16">
        <Link href="/">
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

        {/*  */}
        <ul className="hidden md:flex">
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/">Home</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/programs">Programs</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/hire">Hire</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/community">Community</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/careers">Careers</Link>
          </li>
          <li className="pl-2 font-bold text-sm hover:text-black text-gray-700 active:text-blue-800 focus:outline-none focus:ring focus:ring-violet-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* FORM BUTTON*/}

        <div className="hidden md:flex">
          <button className="text-black rounded-3xl px-4 active:text-[#264ac4] shadow-none">
            <Link href="/signin">Sign-In</Link>
          </button>
          <button className="px-4 active:text-white rounded-3xl active:bg-[#264ac4] py-[5px] bg-[#ffff] text-[#264ac4]">
            <Link href="/signup">Sign-Up</Link>
          </button>
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
              ? " fixed left-0 top-0 w-[72%] sm:w-[60%] md:w-[45%] h-screen bg-white border-r rounded-r-3xl p-5 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-5 ease-out duration-700 bg-slate-600"
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

            <div className="border-b border-gray-400 py-4">
              <p className="w-[90%] sm:w-[90%] md:w-full py-2">
                Let&#39; build something together
              </p>
            </div>

            <div className="flex flex-col py-4 ">
              <ul className="font-600 space-y-1">
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/programs">Programs</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/hire">Hire</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/community">Community</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/careers">Careers</Link>
                </li>
                <li className="text-sm" onClick={handleClose}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 ">
              <button className="active:text-white w-full active:bg-[#264ac4] px-5 text-[#264ac4] shadow-none">
                <Link href="/signin">Sign-In</Link>
              </button>
              <button className="px-4 active:text-white w-full active:bg-[#264ac4] py-2 bg-[#ffff] text-[#264ac4]">
                <Link href="/signup">Sign-Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
