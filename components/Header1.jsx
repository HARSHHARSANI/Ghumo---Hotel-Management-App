import Image from "next/image";
import React from "react";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";

const Header1 = () => {
  let auth;
  if (typeof window !== "undefined") {
    auth = Cookies.get("user");
  }

  const handleLogout = () => {};
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
            src={`/logo.png`}
            alt="oyologo"
            width={200}
            height={100}
            className="h-20  w-20"
          />{" "}
          {auth ? (
            <Link href={"/login"}>
              <h3 className=" font-bold mr-4" onClick={handleLogout}>
                Logout
              </h3>
            </Link>
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
