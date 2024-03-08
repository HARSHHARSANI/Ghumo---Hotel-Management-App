"use client";
import Link from "next/link";
import { useRouter } from "next/router";
const Banner = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="p-5">
        <h2 className="text-4xl font-bold  text-center text-white">
          Over 157,000 Hotels and Homes across 35 countries
        </h2>
        <div className="grid grid-cols-5 mx-20 my-3">
          <input
            type="text"
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-600 col-span-2 round"
            placeholder="Search ..."
          />
          <input
            type="text"
            className="  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
            placeholder="Search ..."
          />
          <input
            type="text"
            className="  h-16 outline-none px-3 text-lg  col-span-1"
            placeholder="Search ..."
          />
          <button
            className="h-16 px-3 py-3 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
            type="submit"
            onClick={() => router.push("/hotels?location=mumbai")}
          >
            Search
          </button>
        </div>
        <div className="flex mx-20 my-6">
          <div className="text-white ">
            <button className="bg-transparent text-l mx-6 px-2 py-2  text-white font-bold">
              Continue Your Search
            </button>
          </div>
          <div>
            <button className="bg-transparent text-l border-white border-2 mx-2 px-2 py-2  font-bold text-white hover:bg-red-800 rounded-xl">
              Inn Coorg Homestay - 2 Guests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
