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
    whatsapp: "https://wa.me/",
  },
  {
    name: "Ibrahim.o.OYEBARI",
    position: "Eexcutive director",
    image: "/mrIbrahim.jpeg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
  },
  {
    name: "Gt",
    position: "Software Engineer",
    image: "/gt1.jpeg",
    facebook: "/",
    linkedin: "https://www.linkedin.com/in/audu-godstime",
    whatsapp: "https://wa.me/09012902537",
  },

  {
    name: "Victor Olumati Ajayi",
    position: " Media Director/ Graphics Designer",
    image: "/vic.jpeg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/09012902537",
  },
  {
    name: "Adeniyi Ogundiran",
    position: "Business Development Executive / Digital Marketing instructor",
    image: "/ade1.jpeg",
    facebook: "https://www.facebook.com/profile.php?id=100078468232214",
    linkedin: "https://www.linkedin.com/in/ogundiran-adeniyi",
    whatsapp: " https://wa.me/08145264132",
  },
  {
    name: "Okechukwu Joshua",
    position:
      "Business Executive, Project Manager and Assistant Executive to Kingseed NGO.",
    image: "/igboman.jpeg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/in/joshua-okechukwu-0970951b9",
    whatsapp: "https://wa.me/08131614690",
  },
  {
    name: "Ogundiran Moshood Adeniyi",
    position: "Busines Development Executive and Digital Marketing Instructor",
    image: "/vercel.svg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
  },
  {
    name: "John Doe",
    position: "Frontend Engineer",
    image: "/codelord.jpeg",
    facebook: "http://facebook.com/codelordtx",
    linkedin: "https://www.linkedin.com/in/codelordx",
    whatsapp: "https://wa.me/08129740187",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    image: "/path/to/image2.jpg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    image: "/path/to/image2.jpg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    image: "/path/to/image2.jpg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
  },
  {
    name: "John Doe",
    position: "Software Engineer",
    image: "/path/to/image2.jpg",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    whatsapp: "https://wa.me/",
  },
  // Add more staff data here...
];

console.log("staffData.image", staffData.image);

const Staffs = () => {
  return (
    <section>
      <div className="py-40 h-full w-full">
        <h1 className="sm:text-4xl text-2xl font-bold text-center">
          Meet the Team and Our Professionals
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {staffData.map((item, index) => (
            <div
              key={index}
              className="justify-center items-center hover:bg-slate-100 rounded-xl p-8 flex dark:bg-slate-800 flex-col"
            >
              <Image
                className="w-24 h-24 rounded-full mx-auto object-contain"
                src={item.image}
                alt={item.name}
                quality={100}
                width={200}
                height={200}
              />
              <div className="flex flex-col justify-center items-center py-4">
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
