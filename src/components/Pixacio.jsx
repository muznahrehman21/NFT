import React from "react";
import PixacioDiv from "./PixacioDiv";

function Pixacio() {
  return (
    <div className="flex flex-row gap-12 mt-12">
      <div className="relative bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[20px] w-[512px] h-[491px]">
        <img src="/tc1.svg" alt="pic" className="top-4 left-4 absolute" />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-apex font-normal text-[#2B2B2B] text-[64px]">
          PIXACIO
        </h1>
        <div className="gap-2 grid grid-cols-2">
          <PixacioDiv />
          <PixacioDiv Items="Nnm of Sold Items" price="120" />
          <PixacioDiv Items="Vol FRY" price="18.5 FRY" />
        </div>
        <img src="/Vector 261.svg" alt="line" className="mt-5" />
        <div className="flex flex-row gap-2">
          <div className="flex justify-center items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[45.71px] h-[42px]">
            <img src="/internet.svg" alt="net" />
          </div>
          <div className="flex justify-between items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-3 rounded-[8px] w-[116.12px] h-[42px]">
            <img src="/bird.svg" alt="bird" />
            <div className="flex justify-center items-center bg-[#FE0101]/20 rounded-[2.4px] w-[44px] h-[22.4px]">
              <p className="font-bold text-[7.45px]">12.3k</p>
            </div>
          </div>

          <div className="flex justify-center items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[45.71px] h-[42px]">
            <img src="/dis.svg" alt="discord" />
          </div>
          <div className="flex justify-between items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-3 rounded-[8px] w-[116.12px] h-[42px]">
            <img src="/bino.svg" alt="binoculars" />
            <div className="flex justify-center items-center bg-[#FE0101]/20 rounded-[2.4px] w-[44px] h-[22.4px]">
              <p className="font-bold text-[7.45px]">12.3k</p>
            </div>
          </div>
        </div>
        <div className="flex w-[674px] h-[96px]">
          <p className="font-roboto font-normal text-[#808080] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod vulputate ipsum, non molestie magna facilisis a. Cras
            tincidunt sem sed lorem dapibus laoreet. Curabitur vel lectus purus.
            In gravida eros ac aliquam facilisis. Suspendisse at elementum
            metus. Proin elementum maximus placerat. Suspendisse sapien justo,
            interdum sit amet sollicitudin quis, porttitor a metus. In eu
            accumsan dolor, eu venenatis eros. Aliquam erat volutpat. Etiam
            suscipit placerat mi. Mauris diam purus, sagittis eu feugiat eu,
            sodales a quam. Cras elit enim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pixacio;
