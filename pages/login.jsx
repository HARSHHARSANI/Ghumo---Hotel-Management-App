import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All Fields Are Required");
      return;
    }
    setLogin(true);
    console.log(email, password);

    try {
      const response = await axios.post("/api/user/login", {
        email,
        password,
      });

      if (response?.data) {
        Cookies.set("user", response.data.token, { expires: 7 });
        router.back();
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="relative h-screen">
      <Head>
        <title>Oyo Login</title>
      </Head>
      <div className="absolute top-60 left-0 w-full text-white ml-28 mt-8 z-30 flex">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-6xl">
            There a smarter way to <br />
            OYO around
          </h1>
          <p className="font-bold mt-4 text-xl">
            Signup with your phone number and get exclusive access to discounts
            and <br />
            savings on OYO stays and with our many travels
          </p>
        </div>
        <div className="ml-14" style={{ marginTop: "-50px" }}>
          <h1 className="text-3xl bg-white text-black px-6 py-4 font-bold pb-10">
            Login / Signup
          </h1>
          <p className="bg-white text-black px-6">
            Please enter Your Email and Password to continue
          </p>
          <div className="flex bg-white ">
            <div className=" items-center mt-4">
              <div className="mx-4">
                <input
                  type="text"
                  className="w-60 ml-2 h-8 outline-none border-gray-400 border-4 py-4 text-black  "
                  placeholder="   Enter phone Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mx-4 mt-2">
                <input
                  type="text"
                  className="w-60 ml-2 h-8 outline-none border-gray-400 border-4 py-4 text-black  "
                  placeholder="   Enter phone Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="bg-white">
            <button
              className="px-4 py-2 bg-red-600 mt-4 ml-6 w-60  font-bold"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="text-black px-6 py-2 font-bold pb-10 mb-6">
              Dont Have a Account
              <Link href={"/signup"} className="text-red-500">
                SignUp here
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
      <div className="absolute inset-0">
        <Image
          src={"/background.avif"}
          layout="fill"
          objectFit="cover"
          className="z-0"
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
