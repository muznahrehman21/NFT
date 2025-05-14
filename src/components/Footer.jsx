import Input from "./input/Input";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center space-y-[45px] w-full h-full">
      <h1 className="font-oxanium font-extrabold text-[#2B2B2B] text-[64px] text-center">
        Ready for Next NFT Drop?
      </h1>
      <Input />

      <div className="flex flex-row justify-center bg-gradient-to-r from-[#FF5F5F] to-[#FF0000] rounded-[20px] w-[1320px] h-[358px]">
        <div className="flex justify-between bg-transparent">
          <div>logo</div>
          <div>NFT</div>
          <div>about</div>
        </div>
      </div>
    </div>
  );
}
