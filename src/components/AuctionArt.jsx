import React from "react";

function AuctionArt() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-8">
      <h1 className="font-apex font-bold text-[#FE0101] text-[150px]">
        AUCTION
      </h1>

      <div className="items-end gap-6 grid grid-cols-4 w-[1273px] h-[293px]">
        <div className="flex justify-center items-center bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[25px] w-[292px] h-[293px]">
          {" "}
          <img src="/auc1.svg" alt="" className="w-[272px] h-[273px]" />
        </div>
        <div className="flex justify-center items-center bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[25px] w-[292px] h-[182px]">
          <img src="/auc2.svg" alt="" className="w-[272px] h-[162px]" />
        </div>
        <div className="flex justify-center items-center bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[25px] w-[292px] h-[182px]">
          <img src="/auc3.svg" alt="" className="w-[272px] h-[162px]" />
        </div>
        <div className="flex justify-center items-center bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[25px] w-[292px] h-[293px]">
          <img src="/auc4.svg" alt="" className="w-[272px] h-[273px]" />
        </div>
      </div>
    </div>
  );
}

export default AuctionArt;
