import React from "react";

function Button1({ Btn }) {
  return (
    <button className="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000] px-8 py-4 border-[1.8px] rounded-[8px] w-[213px] h-[58px] font-roboto font-semibold text-[#FFFFFF] text-[21px] leading-none">
      {Btn}
    </button>
  );
}

export default Button1;
