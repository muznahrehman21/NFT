import React from "react";
import Button1 from "../buttons/Button1";

function ChoosesubDiv() {
  return (
    <div className="flex flex-col justify-center items-center gap-9 p-4">
      <p className="font-apex font-normal text-[#2B2B2B] text-[24px]">
        ADD TRAITS
      </p>
      <img src="/line.svg" alt="line" />
      <div className="flex flex-row gap-2">
        <div className="flex flex-col w-[272px] h-[65px]">
          <p className="font-roboto font-normal text-[#2B2B2B] text-[16px]">
            Type
          </p>
          <div className="flex items-center px-4 border-[#E8E8E8] border-[1.2px] rounded-[8px] w-full h-[40px]">
            <input
              type="text"
              placeholder="Ex. Size"
              className="border-none outline-none font-roboto font-normal text-[#808080] text-[14px]"
            />
          </div>
        </div>
        <div className="flex flex-col w-[272px] h-[65px]">
          <p className="font-roboto font-normal text-[#2B2B2B] text-[16px]">
            Name
          </p>
          <div className="flex items-center px-4 border-[#E8E8E8] border-[1.2px] rounded-[8px] w-full h-[40px]">
            <input
              type="text"
              placeholder="Ex. Large"
              className="border-none outline-none font-roboto font-normal text-[#808080] text-[14px]"
            />
          </div>
        </div>
      </div>

      <img src="/line.svg" alt="line" />
      <div className="flex justify-end w-[500px]">
        <Button1
          Btn="Add"
          borderG={false}
          width="w-[97px]"
          height="h-[53px]"
          radius="rounded-[8px]"
          textsize="text-[18px] "
          fontw="font-semibold"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          textcolor="text-[#FFFFFF]"
          font="font-roboto"
        />
      </div>
    </div>
  );
}

export default ChoosesubDiv;
