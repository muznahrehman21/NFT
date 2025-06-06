import React from "react";

function CollectionHeader() {
  return (
    <div className="flex flex-row gap-22 mt-15">
      <div className="flex flex-col justify-center items-center mt-15 w-lg">
        <p className="mb-[-40px] font-apex font-bold text-[#FE0101] text-[220px] leading-none">
          NFT
        </p>
        <span className="font-apex font-bold text-[#2B2B2B] text-[64px]">
          Collections
        </span>
      </div>
      <div className="flex">
        <img src="/monkey.svg" alt="monkey" className="" />
      </div>
    </div>
  );
}

export default CollectionHeader;
