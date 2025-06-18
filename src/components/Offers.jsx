import React from "react";

function Offers() {
  return (
    <div className="flex flex-col bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[754px] h-[256px]">
      <div className="flex flex-row justify-between items-center p-6 border-b-[#E7E7E7] border-b-[2.8px] w-full h-[63px]">
        <div className="flex flex-row items-center gap-2">
          <img src="/menu.svg" alt="offers" />
          <p className="font-roboto font-normal text-[#808080] text-[16px]">
            {" "}
            Offers
          </p>
        </div>
        <img src="/arrowdown.svg" alt="arrow" />
      </div>

      <div className="gap-15 grid grid-cols-5 p-2 border-[#E7E7E7] border-b-[1px]">
        <div className="flex justify-center items-center font-roboto font-normal text-[14px] text-black">
          Price
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[14px] text-black">
          USD Price
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[14px] text-black">
          Quantity
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[14px] text-black">
          Floor Difference
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[14px] text-black">
          From
        </div>
      </div>
      <div className="justify-center items-center gap-15 grid grid-cols-5 px-3 border-[#E7E7E7] border-b-[1px] w-full h-[64px]">
        <div className="flex justify-center items-center font-roboto font-medium text-[14px] text-black">
          0.008 FRY
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          $4.25
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          2
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          44% below
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          16DD55
        </div>
      </div>

      <div className="justify-center items-center gap-15 grid grid-cols-5 px-3 border-[#E7E7E7] border-b-[1px] w-full h-[64px]">
        <div className="flex justify-center items-center font-roboto font-medium text-[14px] text-black">
          0.005 FRY
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          $4.25
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          2
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          44% below
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          16DD55
        </div>
      </div>

      <div className="justify-center items-center gap-15 grid grid-cols-5 px-3 w-full h-[64px]">
        <div className="flex justify-center items-center font-roboto font-medium text-[14px] text-black">
          0.005 FRY
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          $4.25
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          2
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          44% below
        </div>
        <div className="flex justify-center items-center font-roboto font-normal text-[#808080] text-[14px]">
          16DD55
        </div>
      </div>
    </div>
  );
}

export default Offers;
