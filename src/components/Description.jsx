import React from "react";

function Description() {
  return (
    <div className="flex flex-col items-center bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[546px] h-[171px]">
      <div className="flex flex-row justify-between items-center gap-2 p-4 border-[#E7E7E7] border-b-[2.8px] w-full h-[63px]">
        <div className="flex flex-row items-center gap-2">
          <span>
            {" "}
            <img src="/d.svg" alt="d" />
          </span>
          <span className="font-roboto font-normal text-[#808080] text-[16px]">
            {" "}
            Description
          </span>
        </div>
        <div>
          <img src="/arrowdown.svg" alt="arrow" />
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <p className="font-roboto font-normal text-[#808080] text-[16px]">
          By{" "}
          <span className="font-roboto font-medium text-[#2B2B2B] text-[16px]">
            Stella Nova
          </span>
        </p>
        <p className="font-roboto font-normal text-[#808080] text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          feugiat felis, in maximus neque. Morbi rutrum est interdum, suscipit
          erat et, mattis ante. Donec at diam pulvinar, pulvinar orci vitae,
          luctus mauris.
        </p>
      </div>
    </div>
  );
}

export default Description;
