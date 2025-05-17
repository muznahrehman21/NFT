import React from "react";
import BorderWrapper from "../BorderWrapper";

function Input({ placeholder = "info@gmail.com", type = "email" }) {
  return (
    <BorderWrapper>
      <div className="flex justify-between items-center px-4 w-full h-full">
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none font-roboto font-medium text-[#FE0101] text-[20px]"
          style={{
            color: "#FE0101",
            "::placeholder": {
              color: "#FE0101",
              opacity: 0.7,
            },
          }}
        />

        <button
          type="submit"
          className="flex justify-center items-center rounded-[15px] w-[88px] h-[76px]"
          style={{
            background:
              "linear-gradient(317.62deg, #FD0000 26.88%, #FF9292 105.85%)",
          }}
        >
          <img src="/Vector.svg" alt="send" className="w-[32px] h-[32px]" />
        </button>
      </div>
    </BorderWrapper>
  );
}

export default Input;
