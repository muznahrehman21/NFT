import React from "react";

function Imagination() {
  return (
    <div className="top-0 flex flex-col items-center gap-7 py-12 w-[1320px] h-[931px]">
      <h1 className="bg-amber-300 w-3xl font-apex font-sans font-normal text-black text-6xl text-center uppercase">
        Turn Your Imagination Into Digital Asset
      </h1>

      {/* Main layout: left - center - right */}
      <div className="flex w-full h-full">
        {/* Left column */}
        <div className="flex flex-col gap-7 bg-amber-300 p-4">
          <img src="/im1.png" alt="" className="w-[120px] h-[110px]" />
          <img src="/im2.png" alt="" className="w-[170px] h-[170px]" />
          <img src="/im3.png" alt="" className="w-[120px] h-[120px]" />
          <img src="/im4.png" alt="" className="w-[120px] h-[120px]" />
        </div>

        {/* Center box (your future input area) */}
        <div className="relative flex flex-grow justify-center items-center bg-amber-800">
          <div className="bottom-8 absolute flex justify-center items-center bg-amber-300 w-[737px] h-[70px]">
            hi
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-7 bg-amber-300 p-4">
          <img src="/im5.png" alt="" className="w-[170px] h-[170px]" />
          <img src="/im6.png" alt="" className="w-[110px] h-[110px]" />
          <img src="/im7.png" alt="" className="w-[160px] h-[160px]" />
          <img src="/im8.png" alt="" className="w-[160px] h-[160px]" />
        </div>
      </div>
    </div>
  );
}

export default Imagination;
