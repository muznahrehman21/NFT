import React from "react";

function Add() {
  return (
    <div className="flex flex-col gap-5 w-[817px] h-[256px]">
      <p className="font-roboto font-semibold text-[#2B2B2B] text-[20px]">
        Add Traits
      </p>
      <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
        Traits describe attributes of your item. They appear as filters inside
        your collection page and are also listed out inside your item page.
      </p>

      <div className="flex flex-row justify-between items-center bg-[#F4F4F4] px-5 border-[#F4F4F4] border-[2.8px] rounded-[15px] h-[58px]">
        <div>
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
            blue : fox
          </p>
        </div>
        <div className="flex flex-row gap-13">
          <img src="/edit.svg" alt="pen" />
          <img src="/x.svg" alt="cross" />
        </div>
      </div>
    </div>
  );
}

export default Add;
