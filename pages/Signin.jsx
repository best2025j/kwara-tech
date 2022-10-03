import React from "react";
import Image from "next/image";
import image from "../Assets/sitting-6.png";
import image2 from "../Assets/kw.png";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex items-center w-full bg-[slate-100] sm:min-h-screen">
      <div className="flex-1 h-full max-w-5xl bg-white mx-auto rounded-l-xl shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-[610px] md:w-1/2 py-16 px-10 hidden md:flex">
            <Image src={image} alt="" className="object-center w-full h-full" />
          </div>

          {/*  */}
          <div className="border rounded-l-3xl items-center text-center py-32 max-w-4xl flex justify-center md:p-12 md:w-1/2">
            <div className="w-full h-[61.2vh] md:h-96 md:py-0">
              <div className="">
                <Image
                  src={image2}
                  width="110px"
                  height="128px"
                  className=""
                  alt=""
                />
              </div>

              <h1 className="text-2xl font-bold text-center text-black pb-2">
                Sign-In
              </h1>

              {/*  form input*/}
              <form
                action="/api/form"
                method="post"
                className="space-y-3"
                // onSubmit={HandleSubmit}
              >
                <div>
                  <input
                    // onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-100 w-[20rem] px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="email"
                    placeholder=" email/username"
                    required
                    name="username"
                    id="username"
                  />
                </div>

                {/* PASSWORD INPUT */}
                <div>
                  <input
                    // onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-100 w-[20rem] px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength="6"
                    maxLength="20"
                    placeholder=" Password"
                    pattern="[a-z0-9]{1,15}"
                    title="Password should be digits (0 to 9) or alphabets (a to z)."
                  />
                </div>

                {/* button */}
                <button
                  type="submit"
                  className=" w-[20rem] text-center px-4 py-2 text-sm font-medium text-black transition-colors duration-150 hover:text-[#e6e6e9] border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                  sign-in
                </button>

                <p className="text-center text-sm">
                  You dont have an account yet?
                  <span className="font-bold">
                    <Link
                      href="/Signup"
                      className="hover:text-red-500 active:text-red-600"
                    >
                      Sign up
                    </Link>
                  </span>
                </p>
                <p className="hover:text-red-600 active:text-blue-500">
                  <Link href="">
                    <a>forgot password</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
