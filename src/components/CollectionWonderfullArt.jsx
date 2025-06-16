import React from "react";

function CollectionWonderfullArt({ IMG = "/CWA.svg" }) {
  return (
    <div className="flex flex-col gap-1 p-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[417px] h-[285px] cursor-pointer">
      <div className="flex flex-col">
        <h1 className="font-roboto font-bold text-[#2B2B2B] text-[18px]">
          WONDERFUL ARTWORK
        </h1>
        <span className="font-roboto font-normal text-[#8B8B8B] text-[14px]">
          Items
        </span>
        <span className="font-roboto font-bold text-[#2B2B2B] text-[14px]">
          1.5k
        </span>
      </div>
      <div className="relative">
        <img src={IMG} alt="image" />
      </div>
    </div>
  );
}

export default CollectionWonderfullArt;
