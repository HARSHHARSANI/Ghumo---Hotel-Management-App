"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className=" mt-10 border-2 grid grid-cols-10 mb-10">
      <div className="flex col-span-5 mt-5 gap-5">
        <div className="rounded-md">
          <Image
            src={"/fire.jpg"}
            width={200}
            height={200}
            className="h-24 w-24 rounded-xl bg-transparent"
          />
        </div>
        <div className="items-center mt-5 text-xl">
          <h3 className="font-bold">Get access to exclusive deals</h3>
          <p>Only the best deals reach your inbox </p>
        </div>
      </div>
      <div className="col-span-3 relative">
        <input
          type="text"
          placeholder="e.g, john@gmail.com"
          className="mt-8 mb-8 px-3 py-6 rounded-lg border-gray-300 border-2 outline-none w-full"
        />
        <label
          className="absolute top-8 left-6 px-3 py-1 bg-white text-gray-500"
          style={{ transform: "translateY(-50%)" }}
        >
          Your Email
        </label>
      </div>

      <div className="col-span-2 mx-3 mr-16">
        <button className="bg-red-500 items-center mt-8 mb-8 px-3 py-6 rounded-lg border-gray-300 border-2 outline-none w-full">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default Header4;
