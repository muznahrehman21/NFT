import React from "react";

function Imagination() {
  return (
    <div className="top-0 flex flex-col items-center gap-7 py-12 w-[1320px] h-[931px]">
      <h1 className="bg-amber-300 w-3xl font-apex font-sans font-normal text-black text-6xl text-center uppercase">
        Turn Your Imagination Into Digital Asset
      </h1>

      <div className="flex flex-col bg-amber-800 w-7xl">
        <div className="flex flex-col gap-7 bg-amber-300 w-3xs">
          <img src="/im1.png" alt="" className="ml-15 w-[120px] h-[110px]" />
          <img src="/im2.png" alt="" className="ml-15 w-[170px] h-[170px]" />
          <img src="/im3.png" alt="" className="ml-1 w-[120px] h-[120px]" />
          <img src="/im4.png" alt="" className="ml-30 w-[120px] h-[120px]" />
        </div>
      </div>
    </div>
  );
}

export default Imagination;
