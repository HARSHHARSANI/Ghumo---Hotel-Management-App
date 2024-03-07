import Header1 from "@/components/Header1";
import SingleHotel from "@/components/SingleHotel";

const Hotels = () => {
  return (
    <>
      <Header1 />
      <div className="m-5">
        <SingleHotel img={"/hotel.jpg"} />
        <SingleHotel img={"/hotel3.jpg"} />
        <SingleHotel img={"/hotel2.jpg"} />
      </div>
    </>
  );
};

export default Hotels;
