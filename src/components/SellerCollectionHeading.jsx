import React from "react";

function SellerCollectionHeading() {
  return (
    <div className="flex flex-col items-center h-[817px]">
      <span className="font-apex font-bold text-[#FE0101] text-[96px]">
        JACOB JONES{" "}
      </span>
      <span className="font-apex font-bold text-[#2B2B2B] text-[64px]">
        COLLECTIONS
      </span>
      <div className="relative w-[1320px] h-[633]">
        <img src="/Group1.svg" alt="" className="-top-8 absolute" />
        <img src="/Group2.svg" alt="" className="-top-20 right-0 absolute" />
        <img src="/Group3.svg" alt="" className="-top-23 absolute" />
        <img src="/Group4.svg" alt="" className="top-49 left-1 absolute" />
        <img src="/Group5.svg" alt="" className="top-90 left-85 absolute" />
        <img src="/Group6.svg" alt="" className="top-78 right-25 absolute" />
      </div>
    </div>
  );
}

export default SellerCollectionHeading;
