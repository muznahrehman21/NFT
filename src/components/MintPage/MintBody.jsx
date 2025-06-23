import React from "react";
import Name from "./Name";
import Symbol from "./Symbol";
import Description from "./Description";
import Choose from "./Choose";
import Add from "./Add";
import Royalities from "./Royalities";
import Button1 from "../buttons/Button1";

function MintBody() {
  return (
    <div className="flex flex-row items-start gap-5 w-full">
      {/* img */}
      <img src="/gr.svg" alt="img" />
      {/* items */}
      <div className="flex flex-col items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-5 rounded-[20px] w-[994px] h-[1320px]">
        <p className="font-apex font-normal text-[#2B2B2B] text-[40px]">
          MINT YOUR NFT
        </p>
        <Name />
        <Symbol />
        <Description />
        <Choose />
        <Add />
        <Royalities />
        <Button1
          borderG={false}
          textcolor="text-[#FFFFFF]"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          borderC="border-none"
          radius="rounded-[8px]"
          width="w-[139px]"
          height="h-[53px]"
          Btn="Mint NFT"
          textsize="text-[18px]"
          fontw="font-semibold"
        />
      </div>
    </div>
  );
}

export default MintBody;
