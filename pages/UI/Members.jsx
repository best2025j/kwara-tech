import React from "react";
import Image from "next/image"; // Make sure to import from "next/image"
import image from "../../public/assets/images/feeling-happy-surprised-realizing-solution-idea 1.png";
import ButtonWhite from "../../components/Buttons/ButtonWhite";
import { useTheme } from "next-themes";

const Members = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <div
      className={`sm:py-20 my-20 sm:md:flex items-center py-40 dark:border-2 w-[90%] sm:px-0 rounded-[3rem] mx-auto h-full sm:w-[80%] ${
        isDarkMode
          ? "dark:bg-black"
          : "sm:py-20 my-20 sm:md:flex items-center py-40 bg-gradient-to-b from-blue-500 to-white mx-auto h-full sm:w-[80%]"
      }`}
    >
      <div className="flex-row-reverse md:flex ">
        <div className="h-full w-full md:-mt-40 mt-0 ">
          {/* Provide appropriate values for width and height */}
          <Image
            src={image}
            alt="guys"
            placeholder="blur"
            quality={100}
            // fill
            // sizes="100vw"
            width={0} // Set the desired width in pixels
            height={0} // Set the desired height in pixels
            className="object-contain" // You can use "object-cover" to ensure the image covers the entire container
          />
        </div>

        <div className="sm:space-y-2 space-y-4 flex text-center items-center md:text-justify flex-col md:items-start px-4 max-w-xl capitalize">
          <h1 className="text-xl font-bold ">
            improve yourself in order to be better prepared for the future
          </h1>
          <p className="text-normal text-sm dark:text-blue-300 md:max-w-xl">
            with kwara-tech academy, you are one step closer to securing your
            technological future.kwaratech academy puts you ahead of your peer,
            provides you with real-world knowledge, guarantees jobs, and much
            more.
          </p>
          <h1 className=" text-xl font-medium ">
            Check out our available programs
          </h1>

          <div>
            <ButtonWhite label="start learning today" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
