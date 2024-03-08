"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Header1 = () => {
  const [auth, setAuth] = useState(false); // State to manage authentication

  useEffect(() => {
    // Check if user is authenticated when component mounts
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false); // Update authentication status
    router.push("/");
  };
  return (
    <div className=" flex h-24 px-10 border-b-2 border-gray-300  items-center justify-between">
      <Image
        src={`/logo.png`}
        alt="oyologo"
        width={200}
        height={100}
        className="h-20 w-20 mr-40"
      />
      <div className="border-r-2 border-gray-300 h-full flex">
        {" "}
        <Block
          title={"Become a Member"}
          para={"Additional 10% off on stays."}
        />
        <Block title={"Oyo for Business"} para={"Trusted by 5000 cooperates"} />
        <Block title={"List Your Property"} para={"Start Earning in 30 mins"} />
        <Block title={"0124-6201611"} para={"Call us to Book Now"} />
        <div className="flex items-center px-3 ">
          <Image
            src={`/profilepic.jpg`}
            alt="oyologo"
            width={200}
            height={100}
            className="h-16 mr-4 w-16 rounded-full"
          />{" "}
          {auth ? (
            <h3
              className=" font-bold mr-4 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </h3>
          ) : (
            <Link href={"/login"}>
              <h3 className=" font-bold mr-4">Login / Signup</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
