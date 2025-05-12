import React from "react";

function Button1({
  Btn,
  width = "w-[176px]",
  textcolor = "text-[#FE0101]",
  bg = "bg-[#FFFFFF]",
  borderG = true,
}) {
  return borderG ? (
    <div className="inline-block bg-gradient-to-r from-[#FF5F5F] to-[#FF0000] p-[2px] rounded-[8px] w-[213px] h-[58px]">
      <button className="bg-white rounded-[6px] w-full h-full font-roboto font-semibold text-[#FE0101] text-[21px] leading-none cursor-pointer">
        {Btn}
      </button>
    </div>
  ) : (
    <button
      className={`${bg} px-8 py-4 border-[1.8px] rounded-[8px] h-[58px] cursor-pointer font-roboto font-semibold text-[21px] leading-none ${textcolor} ${width}`}
    >
      {Btn}
    </button>
  );
}

export default Button1;
