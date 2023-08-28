import React from "react";
import image from "../../assets/images/paul3.jpg";
import Image from "next/image";

const Tech4Copper = () => {
  return (
    <section>
      <div className="sm:py-10  w-[80%] mx-auto sm:w-auto sm:mx-0">
        <h1 className="text-3xl text-center font-bold">Tech4Kopa</h1>
        <div className="h-full sm:py-20 w-full md:flex items-center py-20 ">
          <div className="sm:w-1/2 flex justify-center items-center sm:h-96 h-60 w-60 mx-auto">
            <Image
              src={image}
              alt="guys"
              width={400}
              height={400}
              priority
              quality={100}
              className="rounded-full "
            />
          </div>

          <div className="h-full w-full md:w-1/2 space-y-6 text-center mr-14 flex flex-col justify-center items-center  py-20 sm:py-0">
            <h1 className="sm:text-4xl font-bold text-3xl">
              Corper&apos; Tech Journey
            </h1>
            <p className="max-w-2xl sm:text-2xl">
              Our Tech 4 Kopa program offers a unique training opportunity for
              corp members, diving into content writing, web design, data
              analysis, and digital marketing. Equip yourself with versatile
              skills to excel in today&apos; digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech4Copper;
