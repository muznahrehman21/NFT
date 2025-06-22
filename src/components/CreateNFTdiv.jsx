import React from "react";
import Button1 from "../components/buttons/Button1";
function CreateNFTdiv() {
  return (
    <div className="flex flex-row justify-between mt-5 w-full">
      <div className="flex flex-row items-center gap-9">
        <div className="flex justify-center items-center p-2 border-[#E7E7E7] border-[1.8px] rounded-[8px] w-[172px] h-[58px]">
          <p className="font-roboto font-semibold text-[#808080] text-[22px]">
            Single NFT
          </p>
        </div>
        <p className="font-roboto font-normal text-[#808080] text-[22px]">
          4/4 Generated
        </p>
      </div>
      <div className="flex flex-row items-center gap-1">
        <p className="font-roboto font-normal text-[#808080] text-[16px]">
          Select an NFT to mint
        </p>
        <Button1
          Btn="Mint NFT"
          textcolor="text-[#FFFFFF]"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          borderG={false}
          borderColor="border-[#FDFDFD]"
          width="w-[96px]"
          height="h-[37px]"
          fontw="font-bold"
          textsize="text-[12px]"
          font="font-montserrat"
          btnw="w-[96px]"
        />
      </div>
    </div>
  );
}

export default CreateNFTdiv;
