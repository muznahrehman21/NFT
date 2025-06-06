import React from "react";

function Selection({ image = "/select1.svg", text = "Cartoon" }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 bg-[#E7E7E7] rounded-[15px] w-[211px] h-[238px]">
      <img src={image} alt="" />
      <div className="flex justify-center items-center bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[201px] h-[44px]">
        <p className="font-roboto font-medium text-[#2B2B2B] text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Selection;
