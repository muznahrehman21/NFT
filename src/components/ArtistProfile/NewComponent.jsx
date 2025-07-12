import React from "react";

function NewComponent() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row gap-8 w-full">
        <div className="flex justify-center items-center bg-[#FFFFFF] shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-400 rounded-[20px] w-[512px] h-[491px]">
          <img src="/fairy.svg" alt="fairy" className="w-[482px] h-[461px]" />
        </div>

        <div className="flex flex-col">
          <p className="font-apex font-normal text-[#2B2B2B] text-[64px]">
            WONDERFUL ARTWORK
          </p>
          <div className="gap-2 grid grid-cols-2">
            <div className="flex flex-row justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-300 p-3 rounded-[8px] w-[322px] h-[48px]">
              <p className="font-roboto font-normal text-[#808080] text-[14px]">
                Items listed
              </p>
              <p className="font-roboto font-bold text-[#808080] text-[14px]">
                09
              </p>
            </div>
            <div className="flex flex-row justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-300 p-3 rounded-[8px] w-[322px] h-[48px]">
              <p className="font-roboto font-normal text-[#808080] text-[14px]">
                Nnm of Sold Items
              </p>
              <p className="font-roboto font-bold text-[#808080] text-[14px]">
                05
              </p>
            </div>
            <div className="flex flex-row justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-300 p-3 rounded-[8px] w-[322px] h-[48px]">
              <p className="font-roboto font-normal text-[#808080] text-[14px]">
                Vol FRY
              </p>
              <p className="font-roboto font-bold text-[#808080] text-[14px]">
                18.5 FRY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
