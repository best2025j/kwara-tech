import React, { useState } from "react";
import Image from "next/image";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import ButtonDefault from "../Buttons/ButtonDefault";
import ButtonWhite from "../Buttons/ButtonWhite";

const staffData = [
  {
    name: "  Ayobami OLUDELE ",
    position: "CEO",
    image: "/mrAyo.jpeg",
    // facebook: "https://www.facebook.com/",
    // linkedin: "https://www.linkedin.com/",
    // whatsapp: "https://wa.me/",
  },
  {
    name: "Ibrahim.O.OYEBANJI (FIDR,MIPAN)",
    position: "Executive director",
    image: "/mrIbrahim.jpeg",
    // facebook: "https://www.facebook.com/",
    // linkedin: "https://www.linkedin.com/",
    // whatsapp: "https://wa.me/",
  },
  {
    name: "JAMES, Moses Sambo",
    position: "Business Development Manager",
    image: "/mrSambo2.jpeg",
    // facebook: "http://facebook.com/codelordtx",
    // linkedin: "https://www.linkedin.com/in/codelordx",
    // whatsapp: "https://wa.me/08129740187",
  },
  {
    name: "Orolu Bisi Morenike",
    position: "Accountant/HRM",
    image: "/acct.jpeg",
    // facebook: "http://facebook.com/codelordtx",
    // linkedin: "https://www.linkedin.com/in/codelordx",
    // whatsapp: "https://wa.me/08129740187",
  },
  {
    name: "Gt",
    position: "Software Engineer",
    image: "/gt1.jpeg",
    // facebook: "/",
    // linkedin: "https://www.linkedin.com/in/audu-godstime",
    // whatsapp: "https://wa.me/09012902537",
  },

  {
    name: "Victor Olumati Ajayi",
    position: " Media Director/ Graphics Designer",
    image: "/vic.jpeg",
    // facebook: "https://www.facebook.com/",
    // linkedin: "https://www.linkedin.com/",
    // whatsapp: "https://wa.me/09012902537",
  },
  {
    name: "Adeniyi Ogundiran",
    position: "Business Development Executive / Digital Marketing instructor",
    image: "/ade1.jpeg",
    // facebook: "https://www.facebook.com/profile.php?id=100078468232214",
    // linkedin: "https://www.linkedin.com/in/ogundiran-adeniyi",
    // whatsapp: "https://wa.me/08145264132",
  },
  {
    name: "Okechukwu Joshua",
    position:
      "Business Executive, Project Manager and Assistant Executive to CE.",
    image: "/igboman.jpeg",
    // facebook: "https://www.facebook.com/",
    // linkedin: "https://www.linkedin.com/in/joshua-okechukwu-0970951b9",
    // whatsapp: "https://wa.me/08131614690",
  },
  {
    name: "Ogundiran Moshood Adeniyi",
    position: "Busines Development Executive and Digital Marketing Instructor",
    image: "/vercel.svg",
    // facebook: "https://www.facebook.com/",
    // linkedin: "https://www.linkedin.com/",
    // whatsapp: "https://wa.me/",
  },
  {
    name: "Abdul-Azeez A. Isa",
    position: "Frontend Engineer",
    image: "/codelord.jpeg",
    // facebook: "http://facebook.com/codelordtx",
    // linkedin: "https://www.linkedin.com/in/codelordx",
    // whatsapp: "https://wa.me/08129740187",
  },
];

const Staffs = () => {
  const [visibleStaffCount, setVisibleStaffCount] = useState(4); // Number of initially visible staff members

  const handleViewMore = () => {
    setVisibleStaffCount(visibleStaffCount + 4); // Increase the visible staff count
  };

  return (
    <section>
      <div className="py-40 h-full w-[85%] mx-auto sm:mx-0 sm:w-full">
        <h1 className="sm:text-4xl text-2xl font-bold text-center">
          Meet the Team and Our Professionals
        </h1>

        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          {staffData.slice(0, visibleStaffCount).map((item, index) => (
            <div
              key={index}
              className="justify-center items-center hover:bg-slate-100 rounded-3xl p-8 flex hover:scale-105 ease-in  duration-300 dark:bg-slate-800 flex-col "
            >
              <Image
                className="h-48 w-96 md:h-auto rounded-full mx-auto"
                src={item.image}
                alt={item.name}
                quality={100}
                width="200"
                height="200"
              />
              <div className="flex flex-col justify-center items-center py-4">
                <div className="font-medium text-center">
                  <h1 className="text-sky-500 dark:text-sky-400">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-700 dark:text-slate-500">
                    {item.position}
                  </h1>
                  {/* <div className="flex space-x-2 items-center justify-center">
                    <Link href={item.facebook}>
                      <a className=" hover:text-lightBlue">
                        <SlSocialFacebook />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a className=" hover:text-lightBlue">
                        <TiSocialLinkedin />
                      </a>
                    </Link>
                    <Link href={item.whatsapp}>
                      <a className=" hover:text-lightBlue">
                        <BsWhatsapp />
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* button */}
        {visibleStaffCount < staffData.length && (
          <div className="text-center">
            <button
              onClick={handleViewMore}
              className="bg-blue-500 text-white p-2 px-6 rounded-full"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Staffs;
