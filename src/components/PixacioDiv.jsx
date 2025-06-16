import React from "react";

function PixacioDiv({ Items = "Items Listed", price = "3,027" }) {
  return (
    <div className="flex justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-[8px] w-[322px] h-[48px]">
      <p className="font-roboto font-normal text-[#808080] text-[14px]">
        {" "}
        {Items}
      </p>
      <p className="font-roboto font-bold text-[#808080] text-[14px]">
        {" "}
        {price}
      </p>
    </div>
  );
}

export default PixacioDiv;
