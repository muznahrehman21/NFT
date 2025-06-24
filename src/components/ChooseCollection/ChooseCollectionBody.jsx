import React from "react";
import ChooseArt from "./ChooseArt";
import Button1 from "../buttons/Button1";
import { useNavigate } from "react-router-dom";
function ChooseCollectionBody() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/Mint NFT");
  };
  return (
    <div className="flex flex-col items-center gap-15 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-6 rounded-[20px] w-[1164px] h-[730px]">
      <p className="font-apex font-normal text-[#2B2B2B] text-[40px]">
        CHOOSE COLLECTION
      </p>
      <div className="flex flex-col gap-6">
        <ChooseArt />
        <ChooseArt image="/ch1.svg" />
        <ChooseArt image="/ch2.svg" />
        <ChooseArt image="/ch3.svg" />
      </div>
      <div className="flex justify-end w-[840px]">
        <Button1
          width="w-[102px]"
          height="h-[53px]"
          borderG={false}
          textcolor="text-[#FFFFFF]"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          radius="rounded-[8px] "
          Btn="Next "
          textsize="text-[18px]"
          fontw="font-semibold"
          font="font-roboto"
          onClick={() => {
            handleNext();
          }}
        />
      </div>
    </div>
  );
}

export default ChooseCollectionBody;
