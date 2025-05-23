import React from "react";
import Button1 from "./buttons/Button1";
import Card from "../components/cards/Card";
function Boost() {
  return (
    <div className="relative flex w-[1320px] h-[611px]">
      <div className="flex flex-col w-[632px]">
        {" "}
        <h1 className="font-apex font-normal text-[#2B2B2B] text-[64px]">
          BOOST YOUR NFTS: ENHANCE VISIBILITY AND VALUE
        </h1>
        <div className="flex flex-col gap-21 w-[580px]">
          <p className="font-roboto font-light text-[#6B6B6B] text-[18px]">
            {" "}
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          <Button1
            Btn="Boost"
            borderG={false}
            width="w-[217px]"
            height="h-[58px] "
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            textcolor="text-[#FFFFFF]"
            textsize="text-[22px]"
            src={"/tri.svg"}
            showIcon={true}
          />
        </div>
      </div>
      <div className="relative flex justify-end w-[554px]">
        <img src="/z.png" alt=" " className="bottom-13 left-21 absolute" />
      </div>
    </div>
  );
}

export default Boost;
