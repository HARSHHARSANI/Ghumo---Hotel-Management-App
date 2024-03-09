import Header1 from "@/components/Header1";
import SingleHotel from "@/components/SingleHotel";
import axios from "axios";
import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>All Hotels</title>
      </Head>
      <Header1 />
      {hotels
        ? hotels.map((hotel) => (
            <div className="m-5" key={hotel._id}>
              <SingleHotel hotel={hotel} />
            </div>
          ))
        : ""}
    </>
  );
};

export default Hotels;
