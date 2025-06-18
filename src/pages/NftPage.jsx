import React from "react";
import Description from "../components/Description";
import Traits from "../components/Traits";
import Sale from "../components/Sale";
import Listings from "../components/Listings";
import Offers from "../components/Offers";
import Details from "../components/Details";
import ItemAcivity from "../components/ItemAcivity";
import More from "../components/More";

function NftPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-5 mt-12">
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
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <p className="font-apex font-normal text-[#2B2B2B] text-[64px]">
              PIXACIO
            </p>
            <p className="font-roboto font-normal text-[#808080] text-[20px]">
              Owned by{" "}
              <span className="font-roboto font-normal text-[#2B2B2B] text-[20px]">
                {" "}
                Stella Nova
              </span>{" "}
            </p>
          </div>
          <Sale />
          <Listings />
          <Offers />
          <Details />
        </div>
        {/* last */}
      </div>

      <ItemAcivity />
      <More />
    </div>
  );
}

export default NftPage;
