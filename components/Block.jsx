import Image from "next/image";
import React from "react";

const Block = ({ title, para }) => {
  return (
    <div className="w-60 border-r border-gray-300 h-full flex items-center px-2">
      <Image
        src={"/next.svg"}
        alt="next"
        height={200}
        width={200}
        className="h-10 w-10 rounded-full mr-5 bg-gray-400"
      />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text text-xs line-clamp-1"> {para}</p>
      </div>
    </div>
  );
};

export default Block;
