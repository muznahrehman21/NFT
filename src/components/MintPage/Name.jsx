import React from "react";

function Name() {
  return (
    <div className="flex flex-col gap-1 w-[817px] h-[96px]">
      <p className="font-roboto font-semibold text-[#2B2B2B] text-[20px]">
        Item Name*
      </p>
      <div className="border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full h-[58px]">
        <input
          type="text"
          placeholder="Name your NFT"
          className="bg-transparent px-5 outline-none w-full h-full font-roboto font-normal text-[#808080] text-[18px]"
        />
      </div>
    </div>
  );
}

export default Name;
