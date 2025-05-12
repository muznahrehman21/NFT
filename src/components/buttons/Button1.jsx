import React from "react";

function Button1({
  Btn,
  width = "w-[213px]",
  textcolor = "text-[#FFFFFF]",
  bg = "bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]",
}) {
  return (
    <button
      className={`${bg} px-8 py-4 border-[1.8px] rounded-[8px] h-[58px] font-roboto font-semibold text-[21px] leading-none ${textcolor} ${width}`}
    >
      {Btn}
    </button>
  );
}

export default Button1;
