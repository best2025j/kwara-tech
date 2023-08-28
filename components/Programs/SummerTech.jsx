import React from "react";
import image from "../../assets/images/deb3.jpg";
import Image from "next/image";

const SummerTech = () => {
  return (
    <section>
      <div className="sm:py-20  w-[80%] mx-auto sm:w-auto sm:mx-0">
        <h1 className="text-3xl text-center font-bold">
          Summer Tech Adventure
        </h1>
        <div className="h-full sm:py-20 w-full md:flex flex-row-reverse items-center py-20 ">
          <div className="sm:w-1/2 flex justify-center items-center sm:h-96 h-60 w-60 mx-auto ">
            <Image
              src={image}
              alt="guys"
              width={500}
              height={500}
              priority
              quality={100}
              className="rounded-full"
            />
          </div>

          <div className="h-full w-full md:w-1/2 space-y-6 text-center mr-14 flex flex-col justify-center items-center  py-20 sm:py-0">
            <h1 className="sm:text-4xl font-bold text-3xl">
              Empowering Young Innovators
            </h1>
            <p className="max-w-2xl sm:text-2xl">
              Our Summer Experience program is all about igniting young minds in
              tech. Designed for the holiday period, we take children on an
              exciting journey to learn valuable tech skills while having fun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerTech;
