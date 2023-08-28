import React from "react";
import image from "../../assets/images/ladies.png";
import Image from "next/image";

const Tech4Women = () => {
  return (
    <section>
      <div className="sm:py-10 w-[80%] mx-auto sm:w-auto sm:mx-0">
        <h1 className="text-3xl text-center font-bold">Tech4Women</h1>
        <div className="h-full sm:py-20 w-full md:flex items-center py-20 ">
          <div className="sm:w-1/2 flex justify-center items-center sm:h-96 h-60 w-60 mx-auto ">
            <Image
              src={image}
              alt="guys"
              width={400}
              height={400}
              priority
              quality={100}
              className="rounded-full"
            />
          </div>

          <div className="h-full w-full md:w-1/2 space-y-6 text-center mr-14 flex flex-col justify-center items-center  py-20 sm:py-0">
            <h1 className="sm:text-4xl font-bold text-3xl">
              Elevating Women in Tech
            </h1>
            <p className="max-w-2xl sm:text-2xl">
              Tech4Women is tailored to empower women in tech through data
              analysis. Whether in-person or virtual, join us to enhance your
              skills and thrive in the world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech4Women;
