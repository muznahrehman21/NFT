import React from "react";
import Button1 from "./buttons/Button1";

function Sale() {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[754px] h-[213px]">
      <div className="flex flex-row items-center gap-2 p-4 border-[#E7E7E7] border-b-[2.8px] h-[63px]">
        <img src="/clock.svg" alt="clock" />
        <p className="font-roboto font-normal text-[#808080] text-[16px]">
          Sale ends 18 November 2023 at 8:47 am{" "}
        </p>
      </div>
      <div className="flex flex-col gap-3 px-7">
        <p className="font-roboto font-normal text-[#808080] text-[12px]">
          Current price
        </p>
        <p className="font-roboto font-medium text-[24px] text-black">
          5.001 FRY
        </p>

        <div className="flex flex-row gap-3">
          {/* buy Now button  */}
          <div className="flex justify-center items-center p-3 border-[#E7E7E7] border-[2.8px] rounded-[8px] w-[343px] h-[44px] font-roboto font-medium text-[16px] text-black">
            Buy now
          </div>
          <Button1
            width="w-[343px]"
            height="h-[44px]"
            Btn="Make offer"
            borderG={false}
            textcolor="text-[#FFFFFF]"
            bg="bg-gradient-to-b from-[#FF9292] to-[#FD0000]"
            radius="rounded-[8px]"
            textsize="text-[16px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Sale;
