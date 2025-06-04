import React from "react";
import CollectionArt from "./CollectionArt";

function Collections() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-20">
      <div className="flex flex-row justify-between w-[1320px]">
        <button className="flex justify-center items-center gap-2 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-2 rounded-[8px] w-34 h-12">
          {" "}
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[14px]">
            Category
          </p>
          <img src="/arrowdown.svg" alt="" className="w-3.5 h-2" />
        </button>
        <button className="bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-2 rounded-[8px] w-[115px] h-12 font-roboto font-semibold text-[#2B2B2B] text-[14px]">
          {" "}
          Last 30 Days{" "}
        </button>
      </div>
      <div className="flex flex-row justify-between items-center bg-[#FFF9F9] px-9 border-[#E7E7E7] border-[2.8px] rounded-[8px] w-full h-25">
        <div className="w-91 h-6">
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
            Collections
          </p>
        </div>
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
          Volume
        </p>
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
          Folowers
        </p>
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
          {" "}
          24%
        </p>
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
          Floor Price
        </p>
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
          Items
        </p>
      </div>
    </div>
  );
}

export default Collections;
