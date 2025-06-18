import React from "react";

function Details() {
  return (
    <div className="flex flex-col bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[546px] h-[247px]">
      <div className="flex flex-row justify-between items-center p-6 border-[#E7E7E7] border-b-[2.8px] h-[63px]">
        <div className="flex flex-row items-center gap-2">
          <img src="/details.svg" alt="details" />
          <p className="font-roboto font-normal text-[#808080] text-[16px]">
            Details
          </p>
        </div>
        <img src="/arrowdown.svg" alt="arrow" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-row justify-between h-full">
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            {" "}
            Contract Address
          </p>
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            0x5848...1713
          </p>
        </div>
        <div className="flex flex-row justify-between h-full">
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            Token ID
          </p>
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            7926
          </p>
        </div>
        <div className="flex flex-row justify-between h-full">
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            Token Standard
          </p>
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            ERC-721
          </p>
        </div>
        <div className="flex flex-row justify-between h-full">
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            Chain
          </p>
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            Algorand
          </p>
        </div>
        <div className="flex flex-row justify-between h-full">
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            Creator Earnings
          </p>
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            6.5%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
