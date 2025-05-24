import React from "react";
import Button1 from "./buttons/Button1";

function Imagination() {
  return (
    <div className="top-0 flex flex-col items-center gap-7 py-12 w-[1320px] h-[931px]">
      <h1 className="w-3xl font-apex font-sans font-normal text-black text-6xl text-center uppercase">
        Turn Your Imagination Into Digital Asset
      </h1>

      <div className="relative flex justify-center items-center w-full h-full">
        <div className="z-10 absolute flex justify-center items-center w-[737px] h-[70px]">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="flex-1 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] px-10 rounded-[14.9px] outline-none w-full h-full font-roboto font-normal text-[#808080] text-[18px]"
          />
          <Button1
            Btn="Generate"
            borderG={false}
            width="w-[119px]"
            height="h-[50px]"
            bg="bg-[#FE0101]"
            textcolor="text-[#FFFFFF]"
            textsize="text-[18px]"
            src={"/click.svg"}
            showIcon={true}
            radius="rounded-[10.76px]"
            className="top-1/2 right-2 absolute flex justify-center items-center -translate-y-1/2 transform"
          />
        </div>

        <img src="/design.png" alt="" className="top-20 absolute" />
        <img
          src="/design2.svg"
          alt=""
          className="top-100 -right-65 absolute flex"
        />
        <img
          src="/im1.png"
          alt=""
          className="top-8 left-20 absolute rounded-lg w-[120px] h-[110px]"
        />
        <img
          src="/im2.png"
          alt=""
          className="top-55 left-16 absolute rounded-lg w-[170px] h-[170px]"
        />
        <img
          src="/im3.png"
          alt=""
          className="bottom-32 left-3 absolute rounded-lg w-[120px] h-[120px]"
        />
        <img
          src="/im4.png"
          alt=""
          className="bottom-10 left-63 absolute rounded-lg w-[120px] h-[120px]"
        />

        <img
          src="/im5.png"
          alt=""
          className="top-0 right-70 absolute rounded-lg w-[170px] h-[170px]"
        />
        <img
          src="/im6.png"
          alt=""
          className="top-27 right-14 absolute rounded-lg w-[110px] h-[110px]"
        />
        <img
          src="/im7.png"
          alt=""
          className="right-5 bottom-35 absolute rounded-lg w-[160px] h-[160px]"
        />
        <img
          src="/im8.png"
          alt=""
          className="right-59 bottom-0 absolute rounded-lg w-[160px] h-[160px]"
        />
      </div>
    </div>
  );
}

export default Imagination;
