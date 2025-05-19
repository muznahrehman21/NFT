import React from "react";
import Button1 from "../buttons/Button1";

function Card({ buy = true, avatar = "/C1.png" }) {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-no-repeat bg-center shadow-lg px-4 py-4 rounded-lg w-[308px] h-103 text-center"
      style={{ backgroundImage: "url('/card.png')" }}
    >
      {/* card content */}
      <div className="top-13 relative flex flex-row items-center mb-4 w-full">
        <div className="shadow-none ml-2 rounded-full w-[53.18px] h-[53.18px]">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 ml-3 text-left">
          <h1 className="font-apex font-semibold text-[#2B2B2B] text-lg leading-tight">
            STELLA NOVA
          </h1>
          <p className="font-roboto font-light text-[#6B6B6B] text-sm">
            @Stella Nova
          </p>
        </div>
      </div>

      <div className="top-12 relative w-73">
        <img src={avatar} alt="C1" className="w-full h-full" />
      </div>

      <div className="right-5 bottom-7 relative flex justify-between items-center p-6 w-full tracking-tight">
        {buy ? (
          <Button1
            Btn="Buy"
            width="w-[56px]"
            height="h-[36px]"
            textcolor="text-white"
            textsize="text-[12px]"
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            borderG={false}
            radius="rounded-[8px]"
            borderC="border-none"
          />
        ) : (
          <p>hi</p>
        )}
        <p className="left-11 relative flex items-center gap-1 bg-white px-4 py-3 rounded-[9.41px] w-31 h-9 font-roboto font-medium text-[#2B2B2B]">
          Price:
          <img
            className="flex justify-center items-center bg-black rounded-full w-4 h-4"
            src="/coin.png"
            alt="logo"
          />
          <span className="font-semibold text-[#808080] text-[12px]">
            142.02
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
