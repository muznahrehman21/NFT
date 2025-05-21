import React from "react";
import Button1 from "./buttons/Button1";
import Card from "./cards/Card";

function TrendingNFT() {
  return (
    <div className="flex flex-col gap-9 w-[1318px] h-[984px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          TRENDING NFT'S
        </h1>
        <Button1
          width="w-[300px]"
          height="h-[52px]"
          Btn="Last 30 minutes"
          textcolor="#FE0101"
          textsize="text-[18px]"
          showIcon={true}
          src="/Arrow.svg"
        ></Button1>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-row gap-7">
          <Card avatar="/C5.png" />
          <Card avatar="/C6.png" />
          <Card avatar="/C7.png" />
          <Card avatar="/C8.png" />
        </div>
        <div className="flex flex-row gap-7">
          <Card avatar="/C9.png" />
          <Card avatar="/C10.png" />
          <Card avatar="/C11.png" />
          <Card avatar="/C12.png" />
        </div>
      </div>
    </div>
  );
}

export default TrendingNFT;
