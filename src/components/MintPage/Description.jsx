import React from "react";

function Description() {
  return (
    <div className="flex flex-col gap-1 w-[817px]">
      <p className="font-roboto font-semibold text-[#2B2B2B] text-[20px]">
        Description
      </p>
      <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
        The description will be included on the item's detail page underneath
        its image.
      </p>
      <div className="flex justify-start items-start border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full h-[158px]">
        <textarea
          placeholder="Provide a detailed description of your item"
          className="bg-transparent px-5 py-2 outline-none w-full h-full font-roboto font-normal text-[#808080] text-[18px]"
        />
      </div>
    </div>
  );
}

export default Description;
