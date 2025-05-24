import React from "react";
import JacobJones from "./JacobJones";

function TopArt({
  A1 = "/Art1.png",
  A2 = "/Art2.png",
  A3 = "/Art3.png",
  A4 = "/Art4.png",
  A5 = "/Art5.png",
  A6 = "/Art6.png",
  first = true,
  second = false,
  third = false,
}) {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-4 border-[#E7E7E7] border-[2.8px] w-[417px]">
      <div className="bg-[#E7E7E7] mb-2 rounded-2xl">
        <div className="gap-4 grid grid-cols-2 p-4">
          <img
            src={A1}
            alt="art1"
            className="rounded-xl w-[181px] h-[95px] object-cover"
          />
          <img
            src={A2}
            alt="art2"
            className="rounded-xl w-[181px] h-[95px] object-cover"
          />
        </div>

        <div className="gap-4 grid grid-cols-4 px-4 pb-4">
          <img
            src={A3}
            alt=""
            className="rounded-xl w-[83px] h-[73px] object-cover"
          />
          <img
            src={A4}
            alt=""
            className="rounded-xl w-[83px] h-[73px] object-cover"
          />
          <img
            src={A5}
            alt=""
            className="rounded-xl w-[83px] h-[73px] object-cover"
          />
          <img
            src={A6}
            alt=""
            className="rounded-xl w-[83px] h-[73px] object-cover"
          />
        </div>
      </div>
      {first && (
        <div className="w-full">
          <JacobJones
            width="w-[68px]"
            height="h-[68px]"
            Bold="WONDERFUL ARTWORK"
            light="Created by Jacob Jones"
            seller="/seller8.png"
          />
        </div>
      )}
      {second && (
        <div className="w-full">
          <JacobJones
            width="w-[68px]"
            height="h-[68px]"
            Bold="WONDERFUL ARTWORK"
            light="Created by Jacob Jones"
            seller="/seller4.png"
          />
        </div>
      )}
      {third && (
        <div className="w-full">
          <JacobJones
            width="w-[68px]"
            height="h-[68px]"
            Bold="WONDERFUL ARTWORK"
            light="Created by Jacob Jones"
            seller="/seller9.png"
          />
        </div>
      )}
    </div>
  );
}

export default TopArt;
