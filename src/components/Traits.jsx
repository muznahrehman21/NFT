import React from "react";
import TraitTag from "./TraitTag";

function Traits() {
  return (
    <div className="flex flex-col bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[548px] h-[336px]">
      <div className="flex flex-row justify-between p-3 border-[#E7E7E7] border-b-[2.8px] w-full h-[63px]">
        <span className="flex flex-row items-center gap-2">
          <img
            src="/label.svg"
            alt="label"
            className="w-[22.74px] h-[22.75px]"
          />
          <span className="font-roboto font-normal text-[#808080] text-[16px]">
            Traits{" "}
          </span>
        </span>
        <img
          src="/arrowdown.svg"
          alt="arrow"
          className="w-[15.53px] h-[8.9px]"
        />
      </div>

      {/* content */}
      <div className="gap-4 grid grid-cols-3 p-3">
        <TraitTag />
        <TraitTag />
        <TraitTag />
        <TraitTag />
        <TraitTag />
        <TraitTag />
        <TraitTag />
        <TraitTag />
        <TraitTag />
      </div>
    </div>
  );
}

export default Traits;
