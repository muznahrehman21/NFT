import React from "react";

function CollectionArt({
  number = "1",
  amount = "100",
  img = "/collection1.svg",
}) {
  return (
    <div className="flex flex-row items-center gap-43 bg-[#FFF9F9] p-4 border-[#E7E7E7] border-[2.8px] rounded-[8px] w-full">
      <div className="flex flex-row items-center gap-9 w-120">
        <p className="font-roboto font-semibold text-[20.87px] text-black">
          {number}
        </p>
        <img src={img} alt="" />
        <p className="font-roboto font-bold text-[#2B2B2B] text-[22px]">
          Jacob Jones
        </p>
      </div>
      <div className="flex flex-row justify-between items-center p-4 w-full">
        <div className="flex flex-row items-center gap-3">
          <img src="/coin.png" alt="" className="bg-black rounded-full" />
          <p className="font-roboto font-medium text-[16.24px] text-black">
            154.00
          </p>
        </div>
        <div>
          <p className="font-roboto font-medium text-[16.24px] text-black">
            {amount}
          </p>
        </div>
        <div>
          <p className="font-roboto font-medium text-[#4CCB9E] text-[16.24px]">
            +237.67%
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-3">
          <img src="/coin.png" alt="" className="bg-black rounded-full" />
          <p className="font-roboto font-medium text-[16.24px] text-black">
            4,901
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-roboto font-medium text-[16.24px] text-black">
            9.8k
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollectionArt;
