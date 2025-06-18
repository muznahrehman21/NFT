import React from "react";
import Filter from "./Filter";
import List from "./List";

function ItemAcivity() {
  return (
    <div className="flex flex-col gap-6 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[1320] h-[346px]">
      <div className="flex flex-row justify-between p-6 border-[#E7E7E7] border-b-[2.8px] w-full h-[63px]">
        <div className="flex flex-row items-center gap-1 w-[200px]">
          <img src="/arr.svg" alt="arr" />
          <p className="font-roboto font-normal text-[#2B2B2B] text-[16px]">
            Item Activity
          </p>
        </div>
        <img src="/arrowdown.svg" alt="arrow" />
      </div>
      <div className="flex justify-center">
        <Filter />
      </div>
      <div className="flex justify-end">
        <List />
      </div>
    </div>
  );
}

export default ItemAcivity;
