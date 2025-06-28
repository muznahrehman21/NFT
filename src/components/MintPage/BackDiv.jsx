import React from "react";
import Back from "../Back";

function BackDiv() {
  return (
    <div className="flex flex-row justify-start items-center gap-30 mt-10 w-full">
      <Back />
      <div className="flex justify-center items-center bg-white border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[129px] h-[51px]">
        <p className="font-roboto font-normal text-[#808080] text-[16px]">
          {" "}
          Single NFT
        </p>
      </div>
    </div>
  );
}

export default BackDiv;
