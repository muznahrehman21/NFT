import React from "react";
import BorderWrapper from "../BorderWrapper";

function Input({
  placeholder = "info@gmail.com",
  type = "email",
  textC = "text-[#FE0101]",
}) {
  return (
    <BorderWrapper>
      <div className="flex justify-between items-center px-4 w-full h-full">
        <input
          type={type}
          placeholder={placeholder}
          className={`flex-1 font-roboto text-[20px] font-medium outline-none bg-transparent ${textC} placeholder:${textC}`}
        />

        {/* Red Gradient Button with White Outline Plane Icon */}
        <button
          type="submit"
          className="flex justify-center items-center rounded-[15px] w-[88px] h-[76px]"
          style={{
            background:
              "linear-gradient(317.62deg, #FD0000 26.88%, #FF9292 105.85%)",
          }}
        >
          <img src="/Vector.svg" alt="send" className="w-8 h-8" />
        </button>
      </div>
    </BorderWrapper>
  );
}

export default Input;
