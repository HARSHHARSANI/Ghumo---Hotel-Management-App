import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const countryCodes = [
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+91",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+212",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+355",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+380",
  "+381",
  "+382",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+590",
  "+591",
  "+592",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+684",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+870",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998",
];

const Login = () => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Oyo Login</title>
      </Head>
      <div className="absolute inset-0">
        <Image
          src={"/background.avif"}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="flex text-white ">
        <div className="z-10 mt-0 ml-10">
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            className="h-24 w-40 ml-10 "
          />
        </div>
        <div
          className=" text-white font-bold text-xl line-clamp-1 w-full z-10  ml-16  mt-8"
          style={{ textWrap: "nowrap" }}
        >
          Hotels and Home across 800 cities,24+ countries
        </div>
      </div>
      <div className="absolute top-60 left-0 w-full text-white ml-28 mt-8 z-30 flex">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-6xl">
            There's a smarter way to <br />
            OYO around
          </h1>
          <p className="font-bold mt-4 text-xl">
            Signup with your phone number and get exclusive access to discounts
            and <br />
            savings on OYO stays and with our many travels
          </p>
        </div>
        <div className="ml-14" style={{ marginTop: "-50px" }}>
          <div className="bg-red-600 w-102 px-6 py-2">
            {" "}
            Sign up & Get 500 OYO Money
          </div>
          <div className="w-102">
            <h1 className="text-3xl bg-white text-black px-6 py-4 font-bold pb-10">
              Login / Signup
            </h1>
            <p className="bg-white text-black px-6">
              Please enter Your phone number to continue
            </p>
            <div className="flex bg-white ">
              <div className="flex items-center mt-4">
                {/* Country code dropdown */}
                <select className="w-20 h-8 outline-none border-gray-400 border-2 text-black ml-6">
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="w-60 ml-2 h-8 outline-none border-gray-400 border-2 text-black  "
                  placeholder="   Enter phone number"
                />
              </div>
            </div>
            <div className="bg-white">
              <button className="px-4 py-2 bg-gray-400 mt-4 ml-6 w-48 font-bold">
                Verify Number
              </button>
              <p className="text-black px-6 py-2 font-bold pb-10 mb-10">
                Prefer To signIn with Password instead ?{" "}
                <Link href={"/loginwithemail"} className="text-red-500">
                  Click here
                </Link>
              </p>
              <hr style={{ marginTop: "0" }} />{" "}
              <p className="text-black px-6 py-2 font-bold  ">Or Signin as</p>
              <div className="flex mb-6 py-4 pb-8">
                <button className="text-black bg-white px-8 font-bold border-r-2  ">
                  Travel Agent
                </button>
                <button className="text-black bg-white px-8 font-bold ">
                  Coorporate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
