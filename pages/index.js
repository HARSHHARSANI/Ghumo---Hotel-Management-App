import React from "react";
import Header1 from "../components/Header1";
import Header2 from "@/components/Header2";
import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Oyo : India's Best Online Hotel Site For Sanitized Stay</title>
      </Head>
      <Header1 />
      <Header2 />
      <Banner />
      <div className="mx-20 mt-10">
        <div className="">
          <Image
            src={"/banner1.avif"}
            width={200}
            height={200}
            className="w-full h-80"
          />
        </div>
        <div className="">
          <Image
            src={"/banner2.avif"}
            width={200}
            height={200}
            className="w-full h-40 mt-16"
          />
        </div>{" "}
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
