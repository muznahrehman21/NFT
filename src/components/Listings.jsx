import React from "react";
import Button1 from "./buttons/Button1";

function Listings() {
  return (
    <div className="flex flex-col bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[754px] h-[164px]">
      <div className="flex flex-row justify-between items-center p-6 border-[#E7E7E7] border-b-[2.8px] w-full h-[63px]">
        <div className="flex flex-row items-center gap-2">
          <img src="/label.svg" alt="label" />
          <p className="font-roboto font-normal text-[#808080] text-[16px]">
            Listings
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
          From
        </div>
        <div></div>
      </div>
      <div className="justify-center items-center gap-15 grid grid-cols-5 px-3 w-full h-[64px]">
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
          16DD55
        </div>
        <div className="flex justify-end">
          <Button1
            Btn="Buy"
            width="w-[54px]"
            height="h-[32px]"
            textcolor="text-white"
            textsize="text-[14px]"
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            borderG={false}
            radius="rounded-[8px]"
            borderC="border-none"
            borderW="border-[1.8px]"
            fontw="font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default Listings;
