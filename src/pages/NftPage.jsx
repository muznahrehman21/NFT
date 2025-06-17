import React from "react";
import Description from "../components/Description";
import Traits from "../components/Traits";

function NftPage() {
  return (
    <div className="flex flex-row justify-between mt-12">
      {/* 1st div */}
      <div className="flex flex-col gap-7">
        {/* picture */}
        <div className="relative bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[25px] w-[546px] h-[610px]">
          <img src="/nft1.svg" alt="nft" className="top-5 left-4 absolute" />
        </div>

        <Description />
        <Traits />
      </div>
      {/* 2nd div */}
      <div className="flex flex-col bg-amber-200">dd</div>
    </div>
  );
}

export default NftPage;
