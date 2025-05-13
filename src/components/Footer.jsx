import Input from "./input/Input";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center space-y-[45px] w-[1320px] h-[632px]">
      <h1 className="font-oxanium font-bold text-[#2B2B2B] text-[64px] text-center">
        READY FOR NEXT NFT DROP?
      </h1>
      <Input />
    </div>
  );
}
