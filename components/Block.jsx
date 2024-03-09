import React from "react";
import Image from "next/image";

const Block = ({ title, para, img }) => {
  return (
    <div className="w-60 border-r border-gray-300 h-full flex items-center px-2">
      <div className="text-3xl mr-4 ml-2"> {img}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Block;
