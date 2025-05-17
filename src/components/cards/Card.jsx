import React from "react";

function Card() {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-no-repeat bg-center shadow-gray-600 shadow-xl px-4 py-4 rounded-lg w-[308px] text-center"
      style={{
        backgroundImage: "url('/card.png')",
        backgroundSize: "100% 100%",

        height: "410px",
      }}
    >
      {/* card content  */}
      <div className="top-8 absolute flex flex-row items-center mb-4 w-full">
        <div className="shadow-none ml-2 rounded-full w-[53.18px] h-[53.18px]">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="ml-3 text-left">
          <h1 className="font-apex font-semibold text-[#2B2B2B] text-lg leading-tight">
            STELLA NOVA
          </h1>
          <p className="font-roboto font-light text-[#6B6B6B] text-sm">
            @Stella Nova
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
