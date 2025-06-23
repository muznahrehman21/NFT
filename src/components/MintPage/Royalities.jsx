import React from "react";
import { useState } from "react";
function Royalities() {
  const [royalties, setRoyalties] = useState(false);
  const handleClick = () => {
    setRoyalties(!royalties);
  };
  return (
    <div className="flex flex-col justify-start gap-3 px-3 w-[820px]">
      <p className="font-roboto font-semibold text-[#2B2B2B] text-[20px]">
        Royalties
      </p>

      <img
        src={royalties ? "/1.svg" : "/0.svg"}
        alt="off"
        className="w-[59px] h-[28px] cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
}

export default Royalities;
