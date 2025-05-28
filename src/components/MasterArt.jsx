import React from "react";

function MasterArt() {
  return (
    <div className="relative flex mt-10 w-[1320px] h-[493px]">
      <img src="/master1.png" alt="" className="top-23 absolute" />
      <img src="/master2.png" alt="" className="bottom-0 absolute" />
      <img
        src="/semicircle.png"
        alt=""
        className="bottom-0 left-30 z-20 absolute"
      />
      <img
        src="/redsemi.png"
        alt=""
        className="bottom-3 left-35 z-30 absolute"
      />
      <img src="/master4.png" alt="" className="right-75 absolute" />
      <img src="/master5.png" alt="" className="top-23 right-0 absolute" />
      <img src="/master3.png" alt="" className="left-75 absolute" />
      <img src="/master6.png" alt="" className="right-0 bottom-0 absolute" />
      <div className="bottom-30 left-155 z-30 absolute flex justify-center items-center bg-[radial-gradient(circle_at_top,_#FF5B5B,_#FD0000)] border-[2.9px] border-white rounded-full w-20 h-20">
        <h1 className="font-apex font-normal text-white text-4xl">NFT</h1>
      </div>
      <div className="bottom-0 left-129 z-40 absolute">
        <p className="font-roboto font-normal text-[#808080] text-[16px]">
          Get Onboard And Earn Money Like A Pro
        </p>
      </div>
    </div>
  );
}

export default MasterArt;
