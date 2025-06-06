import React from "react";

function CollectionArt() {
  return (
    <div className="flex flex-row items-center gap-5 bg-[#FFF9F9] p-4 border-[#E7E7E7] border-[2.8px] rounded-[8px]">
      <div className="flex flex-row items-center gap-4">
        <p className="font-roboto font-semibold text-[20.87px] text-black">
          01
        </p>
        <img src="/collection1.svg" alt="" />
        <p className="font-roboto font-bold text-[#2B2B2B] text-[22px]">
          Jacob Jones
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <img src="/coin.png" alt="" className="bg-black rounded-full" />
        <p className="font-roboto font-medium text-[16.24px] text-black">
          154.00
        </p>
        <p className="font-roboto font-medium text-[16.24px] text-black">100</p>
        <p className="font-roboto font-medium text-[#4CCB9E] text-[16.24px]">
          +237.67%
        </p>
        <img src="/coin.png" alt="" className="bg-black rounded-full" />
        <p className="font-roboto font-medium text-[16.24px] text-black">
          4,901
        </p>
        <p className="font-roboto font-medium text-[16.24px] text-black">
          9.8k
        </p>
      </div>
    </div>
  );
}

export default CollectionArt;
