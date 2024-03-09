import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";

const Banner = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const handleSearch = () => {
    router.push(
      `/hotels?location=${location}&startDate=${startDate}&endDate=${endDate}`
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startDateRef.current &&
        !startDateRef.current.contains(event.target) &&
        showStartDatePicker
      ) {
        setShowStartDatePicker(false);
      }
      if (
        endDateRef.current &&
        !endDateRef.current.contains(event.target) &&
        showEndDatePicker
      ) {
        setShowEndDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showStartDatePicker, showEndDatePicker]);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60 h-[340px]">
      <div className="p-14">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Over 157,000 Hotels and Homes across 35 countries
        </h2>
        <div className="grid grid-cols-5  mx-20">
          <input
            type="text"
            className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="relative col-span-1" ref={startDateRef}>
            <input
              type="text"
              className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 w-full"
              placeholder="Start Date"
              onClick={() => setShowStartDatePicker(!showStartDatePicker)}
              value={startDate ? startDate.toDateString() : ""}
              readOnly
            />
            {showStartDatePicker && (
              <div className="absolute top-full z-30">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setShowStartDatePicker(false);
                  }}
                  dateFormat="dd-MM-yyyy"
                  inline
                />
              </div>
            )}
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="absolute right-4 top-4 cursor-pointer text-gray-400"
              onClick={() => setShowStartDatePicker(!showStartDatePicker)}
            />
          </div>
          <div className="relative col-span-1" ref={endDateRef}>
            <input
              type="text"
              className="h-16 outline-none px-3 text-lg border-r-2 border-gray-400 w-full"
              placeholder="End Date"
              onClick={() => setShowEndDatePicker(!showEndDatePicker)}
              value={endDate ? endDate.toDateString() : ""}
              readOnly
            />
            {showEndDatePicker && (
              <div className="absolute top-full z-30">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    setShowEndDatePicker(false);
                  }}
                  dateFormat="dd-MM-yyyy"
                  inline
                />
              </div>
            )}
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="absolute right-4 top-4 cursor-pointer text-gray-400"
              onClick={() => setShowEndDatePicker(!showEndDatePicker)}
            />
          </div>

          <button
            className="h-16 px-3 bg-green-400 hover:bg-green-600 text-white text-xl rounded-r-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-transparent text-lg text-white font-bold mr-6">
            Continue Your Search
          </button>
          <button className="bg-transparent text-lg border-white border-2 text-white hover:bg-red-800 rounded-xl py-2 px-4">
            Inn Coorg Homestay - 2 Guests
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
