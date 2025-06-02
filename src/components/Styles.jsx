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
      <div className="gap-5 grid grid-cols-2 mt-10">
        <None />
        <Selection />
        <Selection image="/select2.svg" text="3D Model" />
        <Selection image="/select3.svg" text="Anime Style" />
        <Selection image="/select4.svg" text="Fantasy art" />
        <Selection image="/select5.svg" text="Realistic" />
      </div>
    </div>
  );
}

export default Styles;
