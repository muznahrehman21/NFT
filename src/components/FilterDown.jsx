import React, { useState } from "react";

function FilterDown({ filter = "Popular", Quantity = "15", toggle }) {
  const [arrow, setArrow] = useState(false);
  const handleArrowClick = () => {
    if (toggle) {
      toggle();
    }
    setArrow(!arrow);
  };
  return (
    <div className="flex flex-row justify-between items-center p-4 border-[#E7E7E7] border-[2.8px] rounded-[8px]">
      <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
        {" "}
        {filter}
      </p>
      <div className="flex flex-row gap-3">
        <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
          {Quantity}
        </p>
        <img
          onClick={handleArrowClick}
          src={arrow ? "/filterup.svg " : "/filterarrow.svg"}
          alt=""
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default FilterDown;
