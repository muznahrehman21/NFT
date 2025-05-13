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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4Z" />
          </svg>
        </button>
      </div>
    </BorderWrapper>
  );
}

export default Input;
