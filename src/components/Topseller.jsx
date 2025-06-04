import React from "react";
import JacobJones from "./JacobJones";

function Topseller() {
  return (
    <div className="z-10 relative flex flex-col justify-center gap-8 w-[1321px]">
      <div className="z-10 flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          TOP SELLER
        </h1>
        <img src="/d9.png" alt="" className="top-10 -left-94 z-0 absolute" />
        <img src="d10.png" alt="" className="-right-99 absolute" />
        <div className="z-30">
          <a
            href=" /topsellers"
            className="font-roboto font-medium text-[#FE0101] text-xl cursor-pointer"
          >
            View All
          </a>
        </div>
      </div>
      <div className="z-10 flex flex-row gap-25">
        <JacobJones />
        <JacobJones seller="/seller2.png" />
        <JacobJones seller="/seller3.png" />
        <JacobJones seller="/seller4.png" />
      </div>
      <div className="z-10 flex flex-row gap-25">
        <JacobJones seller="/seller5.png" />
        <JacobJones seller="/seller6.png" />
        <JacobJones seller="/seller7.png" />
        <JacobJones seller="/seller8.png" />
      </div>
    </div>
  );
}

export default Topseller;
