import React from "react";

function List() {
  return (
    <div className="flex flex-col gap-6 w-[1300px]">
      <div className="items-center grid grid-cols-5 border-[#E7E7E7] border-b-[1px] w-full">
        <div className="font-roboto font-normal text-[14px] text-black">
          Event
        </div>
        <div className="font-roboto font-normal text-[14px] text-black">
          Price
        </div>
        <div className="font-roboto font-normal text-[14px] text-black">
          From
        </div>
        <div className="font-roboto font-normal text-[14px] text-black">To</div>
        <div className="font-roboto font-normal text-[14px] text-black">
          Date
        </div>
      </div>

      <div className="items-center grid grid-cols-5 border-[#E7E7E7] border-b-[1px] w-full">
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          List
        </div>
        <div className="font-roboto font-semibold text-[14px] text-black">
          0.008 FRY
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          294693
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]"></div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          1 days
        </div>
      </div>

      <div className="items-center grid grid-cols-5 border-[#E7E7E7] border-b-[1px] w-full">
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          List
        </div>
        <div className="font-roboto font-normal text-[14px] text-black"></div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          199016
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          126673
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          2mo ago
        </div>
      </div>

      <div className="items-center grid grid-cols-5 border-[#E7E7E7] border-b-[1px] w-full">
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          Sale
        </div>
        <div className="font-roboto font-semibold text-[14px] text-black">
          0.008 FRY
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          294693
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          294693
        </div>
        <div className="font-roboto font-normal text-[#808080] text-[14px]">
          2mo ago
        </div>
      </div>
    </div>
  );
}

export default List;
