"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Filter = ({ price, setPrice, handlePrice }) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/facilities`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFacilities().then((response) => {
      console.log(response);
      setList(response);
    });
  }, []);

  return (
    <>
      <div className="border-2 border-red-500  h-full mt-5 rounded-xl ml-4 px-6 py-16 flex flex-col">
        <label htmlFor="" className="text-3xl mr-3 font-bold mb-4">
          Price
        </label>
        <div className="flex">
          <input
            type="range"
            name="price"
            id="price"
            min={0}
            max={5000}
            className="pl-6 "
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <span className="ml-4 font-bold text-xl ">&#8377; {price}</span>
        </div>
        <div>
          <button
            className="mt-4  w-full bg-green-500 py-2 rounded-2xl"
            onClick={() => handlePrice(price)}
          >
            {" "}
            Search
          </button>
          {/* {JSON.stringify(price)} */}
        </div>
        <div className="my-10 py-4 ">
          {" "}
          <h3 className="text-3xl font-bold"> Filter By Facilities</h3>
          <p className="mt-4">
            {list?.map((listItems) => (
              <div className="mt-3 items-center">
                <input type="checkbox" />
                <label
                  htmlFor="checkbox"
                  className=" ml-4 text-xl font-bold pt-5"
                >
                  {listItems}
                </label>
              </div>
            ))}
          </p>
        </div>
        <div className="my-6py-4 ">
          <h3 className="text-3xl font-bold">Filter By Location</h3>
        </div>
      </div>
    </>
  );
};

export default Filter;