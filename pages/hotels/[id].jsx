import Image from "next/image";

const SingleHotelPage = () => {
  return (
    <div className="w-7/12 mx-auto">
      <Image
        src={"/hotel.jpg"}
        width={2000}
        height={2000}
        className="w-full h-96 mb-5 mx-auto mt-10 "
        alt="hotel"
      />
      <div className="">
        <h3 className="text-3xl font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
          quia? Quisquam nisi molestias vitae nobis!
        </h3>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptatem, corrupti voluptates, hic laudantium debitis saepe est
          doloribus harum excepturi repellat eum provident. Mollitia laudantium
          possimus vero? Architecto ullam illum ex praesentium dicta maxime vel
          sit quaerat sint soluta officiis aut tenetur molestiae perferendis
          fugiat enim laudantium, quasi nulla eos.
        </p>{" "}
        <div className="text-center">
          <button className="w-80 h-14 rounded-lg bg-red-500 text-lg mt-8 font-bold">
            Price 4000
          </button>
        </div>
        <p className="font-bold text-3xl mt-8">Facilities : </p>
        <ul className="flex text-xl gap-10 my-5 justify-between">
          <li>Free Wifi </li>
          <li> Pet care </li>
          <li>Swimming pool </li>
          <li>Resort</li>
          <li>Cricket</li>
        </ul>{" "}
        <div className="text-center">
          {" "}
          <button className="w-80 h-14 rounded-lg bg-blue-500 text-lg mt-8 font-bold ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHotelPage;
