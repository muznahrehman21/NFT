import React from "react";
import JacobJones from "./JacobJones";

function Topseller() {
  return (
    <div className="flex flex-col gap-8 w-[1321px] h-[419px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          TOP SELLER
        </h1>
        <button className="font-roboto font-medium text-[#FE0101] text-xl">
          {" "}
          View All
        </button>
      </div>
      <JacobJones />
    </div>
  );
}

export default Topseller;
