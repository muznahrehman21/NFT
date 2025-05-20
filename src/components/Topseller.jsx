import React from "react";
import JacobJones from "./JacobJones";

function Topseller() {
  return (
    <div className="flex flex-col gap-8 w-[1321px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          TOP SELLER
        </h1>
        <button className="font-roboto font-medium text-[#FE0101] text-xl">
          {" "}
          View All
        </button>
      </div>
      <div className="flex flex-row gap-25">
        <JacobJones />
        <JacobJones seller="/seller2.png" />
        <JacobJones seller="/seller3.png" />
        <JacobJones seller="/seller4.png" />
      </div>
      <div className="flex flex-row gap-25">
        <JacobJones seller="/seller5.png" />
        <JacobJones seller="/seller6.png" />
        <JacobJones seller="/seller7.png" />
        <JacobJones seller="/seller8.png" />
      </div>
    </div>
  );
}

export default Topseller;
