import React from "react";

function ExploreArt({ av = "/av1.svg", wa = "/wa1.svg" }) {
  return (
    <div className="flex flex-col bg-[#FFF9F9] border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[417px] h-[276px]">
      <div className="flex flex-col gap-2 px-3">
        <div className="flex flex-row gap-5 mt-5">
          <img src={av} alt="av" />
          <div className="flex flex-col justify-center">
            <p className="font-roboto font-bold text-[#2B2B2B] text-[18px]">
              {" "}
              WONDERFUL ARTWORK
            </p>
            <div className="flex flex-row items-center gap-2">
              <span className="font-roboto font-normal text-[#8B8B8B] text-[14px]">
                {" "}
                Created by
                <span className="font-roboto font-bold text-[#8B8B8B] text-[14px]">
                  {" "}
                  Jacob Jones
                </span>{" "}
              </span>
              <img src="/tick.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={wa} alt="" />
          <div className="bottom-0 left-37 absolute flex justify-center items-center gap-2 bg-[#E7E7E7] rounded-[8px] w-[93px] h-[30px]">
            <span className="font-roboto font-normal text-[#6B6B6B] text-[12px]">
              Items
            </span>
            <span className="font-roboto font-bold text-[#2B2B2B] text-[12px]">
              1.5k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreArt;
