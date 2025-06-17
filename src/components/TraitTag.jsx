import React from "react";

function TraitTag() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-[#F4F4F4] p-4 rounded-[8px] w-[165px] h-[74px]">
      <p className="font-roboto font-medium text-[#808080] text-[10.31px]">
        EDITION
      </p>
      <p className="flex gap-1 font-roboto font-medium text-[#2B2B2B] text-[10.31px]">
        Founders edition
        <span className="font-roboto font-normal text-[#808080] text-[10.31px]">
          52%
        </span>
      </p>
      <p className="font-roboto font-normal text-[#808080] text-[10.31px]">
        Floor: 12.75 ALGO
      </p>
    </div>
  );
}

export default TraitTag;
