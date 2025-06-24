import React from "react";
import ChooseArt from "./ChooseArt";

function ChooseCollectionBody() {
  return (
    <div className="flex flex-col items-center gap-12 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-6 w-[1164px] h-[730px] radius-[20px]">
      <p className="font-apex font-normal text-[#2B2B2B] text-[40px]">
        CHOOSE COLLECTION
      </p>
      <div className="flex flex-col gap-6">
        <ChooseArt />
        <ChooseArt image="/ch1.svg" />
        <ChooseArt image="/ch2.svg" />
        <ChooseArt image="/ch3.svg" />
      </div>
    </div>
  );
}

export default ChooseCollectionBody;
