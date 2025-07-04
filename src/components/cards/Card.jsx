import React from "react";
import Button1 from "../buttons/Button1";

function Card({
  avatar = "/C1.png",
  showButton = true,
  countdown = null,
  white = false,
  price = "142.02",
  stock = 7,
  onClick = undefined,
}) {
  return (
    <div
      onClick={typeof onClick === "function" ? onClick : undefined}
      className="relative flex flex-col justify-center items-center bg-no-repeat bg-center shadow-gray-400 shadow-xl px-4 py-4 rounded-lg w-[308px] h-103 text-center"
      style={{ backgroundImage: "url('/card.png')" }}
    >
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
        <img
          src={avatar}
          alt="Card Visual"
          className="rounded-2xl w-full h-full"
        />
        {countdown && (
          <div className="z-20 absolute inset-0 flex justify-center items-center">
            <div className="bg-white/80 px-4 py-2 rounded-lg font-semibold text-black">
              {countdown}
            </div>
          </div>
        )}
      </div>

      <div className="right-5 bottom-7 relative flex justify-between items-center p-6 w-full h-full tracking-tight">
        {white ? (
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-[9.41px] font-roboto">
              <span className="font-roboto font-medium text-[#2B2B2B] text-[12px] tracking-wide">
                In Stock
              </span>
              <span className="font-medium text-[#808080] text-[12px]">
                {stock}
              </span>
            </div>

            <p className="left-11 relative flex items-center gap-1 bg-white px-4 py-3 rounded-[9.41px] w-31 h-9 font-roboto font-medium text-[#2B2B2B]">
              Price:
              <img
                className="flex justify-center items-center bg-black rounded-full w-4 h-4"
                src="/coin.png"
                alt="logo"
              />
              <span className="font-semibold text-[#808080] text-[12px]">
                {price}
              </span>
            </p>
          </div>
        ) : showButton ? (
          <>
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
            <p className="left-11 relative flex items-center gap-1 bg-white px-4 py-3 rounded-[9.41px] w-31 h-9 font-roboto font-medium text-[#2B2B2B]">
              Price:
              <img
                className="flex justify-center items-center bg-black rounded-full w-4 h-4"
                src="/coin.png"
                alt="logo"
              />
              <span className="font-semibold text-[#808080] text-[12px]">
                {price}
              </span>
            </p>
          </>
        ) : (
          <div className="w-full h-[40px]" />
        )}
      </div>
    </div>
  );
}

export default Card;
