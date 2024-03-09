import Filter from "@/components/Filter";
import Header1 from "@/components/Header1";
import SingleHotel from "@/components/SingleHotel";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export async function getServerSideProps(ctx) {
  console.log("index.jsx", ctx.query);
  const res = await axios.get(
    `${process.env.NEXTJS_APP_API}/api/hotels?location=${ctx.query.location}`
  );
  const data = res.data;
  console.log("data", data);
  return {
    props: {
      hotels: data,
    },
  };
}

const Hotels = ({ hotels }) => {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(2000);

  const handlePrice = async (price) => {
    const response = await axios.get(
      `http://localhost:3000/api/facilities/range?price=${price}`
    );

    console.log(response.data);
    setList(response.data);
  };

  return (
    <>
      <Head>
        <title>All Hotels</title>
      </Head>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Filter handlePrice={handlePrice} price={price} setPrice={setPrice} />
        </div>
        <div className="col-span-10">
          {" "}
          {list.length > 0
            ? list.map((item) => {
                return (
                  <div className="m-5" key={item._id}>
                    <SingleHotel hotel={item} />
                  </div>
                );
              })
            : hotels.map((hotel) => (
                <div className="m-5" key={hotel._id}>
                  <SingleHotel hotel={hotel} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Hotels;
