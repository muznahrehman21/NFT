import React from "react";
import Selection from "./Selection";
import None from "./None";

function Styles() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative flex justify-center items-center">
        <h1 className="font-apex font-normal text-[#2B2B2B] text-[24px]">
          SELECT A STYLE
        </h1>
        <img src="/line.svg" alt="" className="top-14 absolute" />
      </div>
      <div className="grid grid-cols-2 mt-10">
        <None />
        <Selection />
      </div>
    </div>
  );
}

export default Styles;
