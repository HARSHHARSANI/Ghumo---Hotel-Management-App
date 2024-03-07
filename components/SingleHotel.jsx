import Image from "next/image";
import Link from "next/link";

const SingleHotel = ({ img }) => {
  return (
    <div className=" w-full h-96 border-red-500 border-2 mb-8 rounded-lg m-3">
      <div className="flex">
        <Image
          src={img}
          width={200}
          height={200}
          className="h-96 w-96 pb-10 p-6"
          alt="hotelImage"
        />
        <div className="mr-10">
          {" "}
          <Image
            src={img}
            width={200}
            height={200}
            className="h-24 w-28 mt-6"
            alt="hotelImage"
          />
          <Image
            src={img}
            width={200}
            height={200}
            className="h-24 w-28 mt-6"
            alt="hotelImage"
          />
          <Image
            src={img}
            width={200}
            height={200}
            className="h-20 w-28 mt-6"
            alt="hotelImage"
          />
        </div>
        <div className=" ml-8 mt-6">
          <h2 className="font-bold text-4xl line-clamp-1 ">
            Elit adipisicing incididunt veniam
          </h2>
          <p className="font-semibold mt-4 text-lg ">
            Sit velit enim exercitation pariatur nostrud esse. Mollit do aliquip
            aliqua pariatur consectetur culpa dolor veniam ipsum officia Lorem.
            Non non commodo aute consectetur. dolore.
          </p>
          <p className="text-2xl mt-4">
            <span className="font-bold">Facilities</span>
            <span className="ml-4">
              Free Wifi , Pet care , Swimming pool , Resort
            </span>
          </p>
          <div className="flex">
            <button className="w-60 h-14 rounded-lg bg-blue-500 text-lg mt-8 font-bold">
              Price 4000
            </button>
            <Link
              href={"/hotels/2"}
              className="w-40 h-14 rounded-lg text-lg mt-11 text-red-600 font-bold ml-2 text-center items-center "
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
