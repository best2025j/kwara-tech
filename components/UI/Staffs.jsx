import React from "react";
import Image from "next/image";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const staffData = [
  {
    name: "Ayobami ",
    position: "CEO , Kwaratech",
    image: "/mrAyo.jpeg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://www.whatsapp.com/",
  },
  {
    name: "Ibrahim",
    position: "Data-Science Engineer",
    image: "/mrIbrahim.jpeg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://www.whatsapp.com/",
  },
  {
    name: "Gt",
    position: "Software Engineer",
    image: "/gt1.jpeg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://www.whatsapp.com/",
  },
  // ...

  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // {
  //   name: "John Doe",
  //   position: "Software Engineer",
  //   image: "/path/to/image2.jpg",
  //   facebook: "https://www.facebook.com/",
  //   linkedin: "https://www.linkedin.com/",
  //   whatsapp: "https://www.whatsapp.com/",
  // },
  // Add more staff data here...
];

console.log("staffData.image", staffData.image);

const Staffs = () => {
  return (
    <section>
      <div className="py-40 h-full w-full">
        <h1 className="text-4xl font-bold text-center">
          Our leadership and people
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          {staffData.map((item, index) => (
            <div
              key={index}
              className="justify-center items-center hover:bg-slate-100 rounded-xl p-8 flex dark:bg-slate-800 flex-col"
            >
              <Image
                className="w-24 h-24 rounded-[120px] mx-auto object-contain"
                src={item.image}
                alt={item.name}
                quality={100}
                width={200}
                height={200}
              />
              <div className="flex flex-col justify-center items-center p-3">
                <div className="font-medium text-center">
                  <h1 className="text-sky-500 dark:text-sky-400">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-700 dark:text-slate-500">
                    {item.position}
                  </h1>
                  <div className="flex space-x-2 items-center justify-center">
                    <Link href={item.facebook}>
                      <a>
                        <SlSocialFacebook />
                      </a>
                    </Link>
                    <Link href={item.linkedin}>
                      <a>
                        <TiSocialLinkedin />
                      </a>
                    </Link>
                    <Link href={item.whatsapp}>
                      <a>
                        <BsWhatsapp />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staffs;
