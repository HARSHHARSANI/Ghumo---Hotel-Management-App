import Image from "next/image";
import Link from "next/link";
import { FaWifi } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

const SingleHotel = ({ hotel }) => {
  return (
    <div className="w-full h-96 border-red-500 border-2 mb-8 rounded-lg m-3">
      <div className="flex">
        <Image
          src={hotel?.gallery[0]}
          width={200}
          height={200}
          className="h-96 w-96 pb-10 p-6"
          alt="hotelImage"
        />
        <div className="mr-10">
          {hotel?.gallery?.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={200}
              className="h-24 w-28 mt-6"
              alt={`hotelImage${index}`} // Alt text should be unique for each image
            />
          ))}
        </div>
        <div className="ml-8 mt-6">
          <h2 className="font-bold text-4xl line-clamp-1 ">{hotel.name}</h2>
          <p className="font-semibold mt-4 text-lg ">{hotel.description}</p>

          <div className="text-2xl mt-4">
            {" "}
            {/* Move ul outside of the p */}
            <span className="font-bold">Facilities</span>
            <span className="ml-4">
              <ul className="flex">
                {hotel?.facilities?.map((facility, index) => (
                  <li key={index} className="mr-4">
                    <div className="flex items-center gap-2">
                      {facility?.name === "Gym" ? (
                        <>
                          <CgGym className="mr-2" /> {facility?.name}
                        </>
                      ) : (
                        <>
                          <FaWifi /> {facility?.name}
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </span>
          </div>
          <div className="flex">
            <button className="w-60 h-14 rounded-lg bg-blue-500 text-lg mt-8 font-bold">
              ₹ {hotel.price}
            </button>
            <Link
              href={`/hotels/${hotel._id}`}
              className="w-40 h-14 rounded-lg text-lg mt-11 text-red-600 font-bold ml-2 text-center items-center "
            >
              See Details
            </Link>
          </div>
          <div className="text-xl font-bold mt-4 flex">
            Location :<div className="ml-4"> {hotel.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
