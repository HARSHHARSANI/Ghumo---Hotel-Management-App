import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Oyo Login</title>
      </Head>
      <div className="absolute inset-0">
        <Image
          src={"/background.avif"}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="flex text-white ">
        <div className="z-10 mt-0 ml-10">
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            className="h-24 w-40 ml-10 "
          />
        </div>
        <div
          className=" text-white font-bold text-xl line-clamp-1 w-full z-10  ml-16  mt-8"
          style={{ textWrap: "nowrap" }}
        >
          Hotels and Home across 800 cities,24+ countries
        </div>
      </div>
      <div className="absolute top-60 left-0 w-full text-white ml-28 mt-8 z-30 flex">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-6xl">
            There's a smarter way to <br />
            OYO around
          </h1>
          <p className="font-bold mt-4 text-xl">
            Signup with your phone number and get exclusive access to discounts
            and <br />
            savings on OYO stays and with our many travels
          </p>
        </div>
        <div className="ml-14" style={{ marginTop: "-50px" }}>
          <div className="bg-red-600 w-102 px-6 py-2">
            {" "}
            Sign up & Get 500 OYO Money
          </div>
          <div className="w-102">
            <h1 className="text-3xl bg-white text-black px-6 py-4 font-bold pb-10">
              Login / Signup
            </h1>
            <p className="bg-white text-black px-6">
              Please enter Your phone number to continue
            </p>
            <div className="flex bg-white ">
              <div className=" items-center mt-4">
                <div className="mx-4">
                  {" "}
                  <input
                    type="text"
                    className="w-60 ml-2 h-8 outline-none border-gray-400 border-4 py-4 text-black  "
                    placeholder="   Enter phone Email"
                  />
                </div>

                <div className="mx-4 mt-2">
                  <input
                    type="text"
                    className="w-60 ml-2 h-8 outline-none border-gray-400 border-4 py-4 text-black  "
                    placeholder="   Enter phone Password"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white">
              <button className="px-4 py-2 bg-gray-400 mt-4 ml-6 w-48 font-bold">
                Login
              </button>
              <p className="text-black px-6 py-2 font-bold pb-10 mb-6">
                Prefer To signIn with Phone Number instead ?{" "}
                <Link href={"/login"} className="text-red-500">
                  {" "}
                  Click here
                </Link>
              </p>
              <hr style={{ marginTop: "0" }} />{" "}
              <p className="text-black px-6 py-2 font-bold  ">Or Signin as</p>
              <div className="flex mb-6 py-4 pb-8">
                <button className="text-black bg-white px-8 font-bold border-r-2  ">
                  Travel Agent
                </button>
                <button className="text-black bg-white px-8 font-bold ">
                  Coorporate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
