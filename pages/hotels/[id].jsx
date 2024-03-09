"use client";
import axios from "axios";
import Image from "next/image";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { BiSolidDrink } from "react-icons/bi";
import { MdSportsCricket } from "react-icons/md";
import Head from "next/head";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const SingleHotelPage = ({ data }) => {
  const { name, description, price, banner, gallery, facilities } = data;
  const [auth, setAuth] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="w-7/12 mx-auto">
        <Image
          src={data?.gallery[0]}
          width={2000}
          height={2000}
          className="w-full h-96 mb-5 mx-auto mt-10 "
          alt="hotel"
        />
        <div className="">
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="mt-4 text-justify">{description}</p>{" "}
          <div className="text-center">
            <button className="w-80 h-14 rounded-lg bg-red-500 text-lg mt-8 font-bold">
              Rs {price}
            </button>
          </div>
          <p className="font-bold text-3xl mt-8">Facilities : </p>
          <ul className="flex text-xl gap-10 my-5 justify-between">
            <li className="flex gap-4 items-center">
              Free Wifi <FaWifi />
            </li>
            <li className="flex gap-4 items-center">
              {" "}
              Pet care <MdOutlinePets />{" "}
            </li>
            <li className="flex gap-4 items-center">
              Swimming pool <FaPersonSwimming />{" "}
            </li>
            <li className="flex gap-4 items-center">
              Resort <BiSolidDrink />
            </li>
            <li className="flex gap-4 items-center">
              Cricket <MdSportsCricket />
            </li>
          </ul>{" "}
          <div className="text-center">
            {auth ? (
              <Link href={`/payment/${data?._id}`}>
                <button className="w-80 h-14 rounded-lg bg-blue-500 text-lg mt-8 font-bold ">
                  Book Now
                </button>
              </Link>
            ) : (
              <button
                className="w-80 h-14 rounded-lg bg-blue-500 text-lg mt-8 font-bold "
                onClick={() => router.push("/login")}
              >
                Login To Book Hotels
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
export async function getStaticProps(ctx) {
  // console.log(ctx.params.id);
  const hotelId = ctx.params.id;
  const response = await axios.get(
    `${process.env.NEXTJS_APP_API}/api/hotels/${hotelId}`
  );

  const result = response.data;
  return {
    props: {
      data: result,
    },
  };
}

export default SingleHotelPage;
