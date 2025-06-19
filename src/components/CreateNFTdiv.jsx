import React from "react";

function CreateNFTdiv() {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row items-center gap-5">
        <div className="flex justify-center items-center p-2 border-[#E7E7E7] border-[1.8px] rounded-[8px] w-[172px] h-[58px]">
          <p className="font-roboto font-semibold text-[#808080] text-[22px]">
            Single NFT
          </p>
        </div>
        <p className="font-roboto font-normal text-[#808080] text-[22px]">
          4/4 Generated
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default CreateNFTdiv;
