import React from "react";
import BorderWrapper from "../BorderWrapper";

function Input({
  placeholder = "info@gmail.com",
  type = "email",
  textC = "text-[#FE0101]",
}) {
  return (
    <BorderWrapper>
      <div className="flex justify-center items-center ml-8 w-full h-full">
        <input
          type={type}
          placeholder={placeholder}
          className={`flex-1 font-roboto text-[20px] font-medium outline-none   bg-transparent ${textC} placeholder:${textC}`}
        />
      </div>
    </BorderWrapper>
  );
}

export default Input;
