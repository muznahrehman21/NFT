import React from "react";
import BorderWrapper from "../components/BorderWrapper";
import Button1 from "../components/buttons/Button1";

function GenerateNFTPage() {
  return (
    <div className="flex flex-col items-center gap-3 p-3">
      <h1 className="font-apex font-normal text-[#2B2B2B] text-[24px]">
        GENERATE NFT
      </h1>
      <img src="/line.svg" alt="line" />
      <div className="flex flex-col gap-1 w-[353px] h-[86px]">
        <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
          {" "}
          Type
        </p>
        <div className="flex justify-center items-center bg-gradient-to-b from-[#FF9292] to-[#FD0000] p-[2px] rounded-[8px] w-[353px] h-[55px]">
          <div className="flex justify-between items-center gap-5 bg-white p-5 rounded-[7px] w-full h-full">
            <p className="font-roboto font-normal text-[#808080] text-[14px]">
              Single NFT
            </p>
            <img src="/smarr.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-[353px] h-[140px]">
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
          Prompt
        </p>
        <div className="flex justify-center items-center bg-gradient-to-b from-[#FF9292] to-[#FD0000] p-[2px] rounded-[8px] w-[353px] h-[109px]">
          <div className="flex justify-between items-center gap-5 bg-white p-4 rounded-[7px] w-full h-full">
            <p className="font-roboto font-normal text-[#808080] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum luctus ornare ante, a mattis eros blandit non.
              Suspendisse semper hendrerit dignissim. Phasellus quam erat
              pulvinar.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4 w-[353px] h-[91px]">
        <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
          Payment Method
        </p>
        <p className="font-roboto font-normal text-[#808080] text-[14px]">
          {" "}
          Cost of Generation : 0.032 FRY
        </p>
      </div>
      <img src="/line.svg" alt="line" />

      <div className="flex justify-end items-center w-[353px]">
        <Button1
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          width="w-[144px] "
          height="h-[53px]"
          Btn="CONFIRM"
          borderG={false}
          textcolor="text-white"
        />
      </div>
    </div>
  );
}

export default GenerateNFTPage;
