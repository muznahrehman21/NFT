import React, { useState } from "react";
import FilterDown from "./FilterDown";
function FilterBar() {
  const [toggle, setToggle] = useState();

  return (
    <div className="-left-37 z-30 absolute flex flex-col justify-center gap-5 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-[30px] w-[292px]">
      <div className="flex flex-row justify-between items-center">
        <img src="/filter.svg" alt="" />
        <img src="/arrowdown.svg" alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img src="/blackline.svg" alt="" />
      </div>

      <div className="flex flex-col gap-3">
        <FilterDown />
        <FilterDown filter="Price" Quantity="" />
        <FilterDown filter="Background" Quantity="20" toggle={toggle} />

        {toggle && <div> HI</div>}
        <FilterDown filter="Clothing" Quantity="110" />
        <FilterDown filter="Eye" Quantity="2" />
        <FilterDown filter="Body Color" Quantity="11" />
        <FilterDown filter="Head" Quantity="33" />
      </div>
    </div>
  );
}

export default FilterBar;
