import React from "react";

function CA() {
  return (
    <div className="flex flex-row gap-6 w-[817px]">
      <div className="flex flex-row gap-8 bg-[#FFFFFF] p-4 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[396px] h-[91px ]">
        <div className="flex justify-center items-center bg-[#E7E7E7] rounded-[12px] w-[61px] h-[61px]">
          <img src="/plus.svg" alt="plus" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
            Create new collection
          </p>
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            {" "}
            Type to create
          </p>
        </div>
        <div />
      </div>
      <div className="flex flex-row gap-8 bg-[#FFFFFF] p-4 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[396px] h-[91px ]">
        <div className="flex justify-center items-center rounded-[12px] w-[61px] h-[61px]">
          <img src="/sun.svg" alt="img" className="rounded-[12px]" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
            Wonderful Artwork
          </p>
          <p className="flex flex-row gap-1 font-roboto font-normal text-[#808080] text-[14px]">
            {" "}
            Items
            <span className="font-roboto font-semibold text-[#2B2B2B] text-[14px]">
              1.5k
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CA;
