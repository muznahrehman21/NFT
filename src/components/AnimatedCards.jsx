import React from "react";

function AnimatedCards() {
  return (
    <div className="relative flex flex-col justify-center items-center w-[1670px] h-[630px]">
      <img
        src="/lefthand.svg"
        alt=""
        className="top-45 -right-30 absolute scale-x-[-1]"
      />
      <img src="/lefthand.svg" alt="" className="top-45 -left-20 absolute" />
      <div className="flex flex-row justify-center w-[921.14px] h-[410.96px]">
        <img src="/circle1.png" alt=" " className="-top-75 absolute" />
        <div className="z-20 absolute w-[308px] h-[410.96px]">
          <img
            src="/main.png"
            alt=""
            className="relative shadow-[4px_4px_15px_rgba(0,0,0,0.2)] rounded-3xl w-full h-full"
          />
          <img src="/vt.svg" alt=" " className="top-0 absolute" />
          <img src="/vb.svg" alt=" " className="right-0 bottom-0 absolute" />
        </div>
        <div className="top-35 left-155 z-10 absolute w-[266.67px] h-[355.31px] animate-left-right">
          <img
            src="/left1.png"
            alt=""
            className="relative shadow-[4px_4px_15px_rgba(0,0,0,0.2)] rounded-3xl w-full h-full rotate-[-4deg]"
          />
          .
        </div>
        <div className="top-45 left-122 z-0 absolute w-[225.69px] h-[300.71px]">
          <img
            src="/left2.png"
            alt=""
            className="relative shadow-[4px_4px_15px_rgba(0,0,0,0.2)] rounded-3xl w-full h-full rotate-[-4deg]"
          />
        </div>
        <div className="top-35 right-153 z-10 absolute w-[266.67px] h-[355.31px]">
          <img
            src="/right1.png"
            alt=""
            className="relative shadow-[4px_4px_15px_rgba(0,0,0,0.2)] rounded-3xl w-full h-full rotate-[4deg]"
          />
        </div>
        <div className="top-42 right-117 z-0 absolute w-[225.69px] h-[300.71px]">
          <img
            src="/right2.png"
            alt=""
            className="shadow-[4px_4px_15px_rgba(0,0,0,0.2)] rounded-3xl w-full h-full rotate-[4deg]"
          />
        </div>
      </div>
    </div>
  );
}

export default AnimatedCards;
