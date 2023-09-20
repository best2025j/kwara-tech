import React, { useEffect, useState } from "react";
import { PiHandPointingLight } from "react-icons/pi";
import { FaUser, FaAward } from "react-icons/fa";

const Consulting = () => {
  const [scrollY, setScrollY] = useState(0);

  const numbers = [
    { icon: <PiHandPointingLight />, label: "Project", count: 100 },
    { icon: <FaUser />, label: "client", count: 40 },
    { icon: <FaUser />, label: "Our team", count: 12 },
    { icon: <FaAward />, label: "awards", count: 40 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-20 h-full w-full">
      <div className="flex justify-center items-center flex-col flex-grow space-y-3 ">
        <h1 className="font-bold text-xl md:text-4xl capitalize">
          Consulting successes
        </h1>
        <p className="px-6 sm:px-0 capitalize text-xl md:text-2xl sm:font-medium text-center sm:max-w-3xl">
          we pride ourselves in delevring top notch B to B and B to c Services
        </p>
      </div>
      <div className="grid sm:grid-cols-2 px-8 py-6 md:grid-cols-4 gap-6 text-white">
        {numbers.map((item, index) => (
          <div
            key={index}
            className={
              "text-center bg-[#417de5] dark:bg-black p-8 flex justify-center items-center flex-col w-full rounded-xl border-2 hover:scale-105 ease-in  duration-300"
            }
          >
            <div className="text-2xl">{item.icon}</div>
            <h2 className="text-lg capitalize ">{item.label}</h2>
            <h1 className="font-extrabold text-5xl">
              {item.label === "Support"
                ? Math.min(scrollY, item.count)
                : Math.min(Math.max(scrollY - 100, 0), item.count)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consulting;
