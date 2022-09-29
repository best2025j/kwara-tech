import React, { useState } from "react";
import Image from "next/image";
import image from "../Assets/sitting-6.png";
import image2 from "../Assets/kw.png";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const { createUser } = UserAuth();

    const HandleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await createUser(email, password);
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    };


  return (
    <div className="flex items-center w-full bg-slate-100 sm:min-h-screen">
      <div className="flex-1 h-full max-w-5xl bg-white mx-auto rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-full md:h-[610px] md:w-1/2 p-16 px-10 md:flex hidden">
            <Image src={image} alt="" className="object-center w-full h-full" />
          </div>

          {/*  */}
          <div className="border rounded-l-3xl items-center text-center max-w-4xl flex justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full h-[92vh] md:h-96">
              <div className="">
                <Image
                  src={image2}
                  width="110px"
                  height="128px"
                  className="rounded"
                  alt=""
                />
              </div>

              <h1 className="mb-4 text-2xl font-bold text-center text-black">
                Sign-up
              </h1>

              {/*  form input*/}
              <form
                action=""
                method="post"
                className="space-y-2"
                // onSubmit={HandleSubmit}
              >
                {/* EMAIL INPUT */}
                <div>
                  <input
                    // onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-100 w-[20rem] px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="text"
                    placeholder="  full name"
                    id="email"
                    name="full name"
                    required
                  />
                </div>
                {/* EMAIL INPUT */}
                <div>
                  <input
                    // onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-100 w-[20rem] px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    type="email"
                    placeholder="  email"
                    id="email"
                    name="email"
                    required
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

                {/*BU  */}

                {/* button */}
                <div className="pt-2">
                  <button
                    // onChange={submitFormHandler}
                    type="submit"
                    className=" w-[20rem] text-center px-4 py-2 text-sm font-medium text-black transition-colors duration-150 hover:text-[#e6e6e9] border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                  >
                    sign-Up
                  </button>
                </div>

                <p className="text-center text-sm">
                  Already have an account?
                  <span className="font-bold">
                    <Link
                      href="/signin"
                      className="hover:text-red-500 active:text-red-600"
                    >
                      Sign in
                    </Link>
                  </span>
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
