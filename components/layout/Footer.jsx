import Link from "next/link";
import image from "../../assets/images/kw.png";
import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import fb from "../../assets/svg/facebooklogo.svg";
import ig from "../../assets/svg/ig.svg";
import Twitter from "../../assets/svg/Twitterlogo.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
// import inkedinIn from "../../Assets/svg/whatsapp.svg.]svg";

const Footer = () => {
  return (
    //   GRID CONTENT LAYER
    <div className="w-full bg-black text-slate-300 py-14 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600">
        <div>
          <h2 className="font-bold pt-2 uppercase">solutions</h2>
          <ul>
            <li>Marketting</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Cloud</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">support</h2>
          <ul>
            <li>Pricing</li>
            <li>Documentations</li>
            <li>Guides</li>
            <li>Api-Status</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">company</h2>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold pt-2 uppercase">legal</h2>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Teams</li>
            <li>Political</li>
            <li>Condictions</li>
          </ul>
        </div>

        {/*  */}

        <div className="max-w-[1240px] col-span-2 pb-10 text-center text-white w-full h-full mx-auto flex justify-center items-center">
          <div>
            <div>
              <Link href="#">
                <a>
                  <Image
                    src={image}
                    alt="image must be seen"
                    width="150px"
                    height="138px"
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </div>
            <div>
              <p className="sm:font-medium">
                We work with some of the finest industry experts, to provide
                top-notch traning and empowerment programs to individuals, team
                and organizationS, skilling and Up-skilling them to finding
                their desired employment in tech and also creating tech-based
                processes and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA LINKS */}

      <div className="flex-col max-w-[1240px] px-2 py-4 m-auto justify-between align-center sm:flex-row border-t flex text-center text-gray-500">
        <p className="py-4">
          &copy;2022 kwaratechacademy , All rights reserved.
        </p>
        <div className="flex justify-around sm:w-[360px] pt-4 text-2xl cursor-pointer">
          <Link href="https://www.facebook.com/kwaratechacademy?mibextid=LQQJ4d">
            <a>
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={fb}
              />
            </a>
          </Link>
          <Link
            href="https://instagram.com/kwaratechacademy?igshid=MzRlODBiNWFlZA==
"
          >
            <a>
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={ig}
              />
            </a>
          </Link>
          <Link href="https://twitter.com/kwaratech?s=21&t=sYf7NFdQaYs03psUDuFqhQ">
            <a>
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={Twitter}
              />
            </a>
          </Link>

          <Link href="https://wa.me/07011198112">
            <a>
              <Image
                alt="no image"
                className="cursor-pointer hover:scale-110 ease-in duration-300 rounded-full"
                width={30}
                height={30}
                src={whatsapp}
              />
            </a>
          </Link>

          <Link href="https://www.facebook.com/kwaratechacademy?mibextid=LQQJ4d">
            <a>
              <FaFacebook className="text-white bg-lightBlue h-8  rounded-full w-8 cursor-pointer hover:scale-110 ease-in duration-300 p-1" />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/kwara-tech-academy-a774a1244">
            <a>
              <FaLinkedinIn className="text-white bg-lightBlue h-8  rounded-full p-1 w-8 cursor-pointer hover:scale-110 ease-in duration-300" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
