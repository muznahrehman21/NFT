import React from "react";

function SellerHeader() {
  return (
    <div className="flex flex-row justify-between items-center gap-58 mt-18">
      <div className="flex flex-col">
        <h1 className="font-apex font-bold text-[#2B2B2B] text-[64px]">TOP</h1>
        <h1 className="font-apex font-bold text-[#FE0101] text-[128px]">
          SELLERS
        </h1>
      </div>
      <div>
        <img src="/col.svg" alt="" />
      </div>
    </div>
  );
}

export default SellerHeader;
