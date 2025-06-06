import React from "react";

function Button1({
  Btn,
  children,
  width = "w-[176px]",
  textcolor = "text-[#FE0101]",
  bg = "bg-[#FFFFFF]",
  borderG = true,
  height = "h-[58px]",
  radius = "rounded-[8px]",
  textsize = "text-[21px]",
  borderC = "",
  fontw = " font-semibold",
  src = null,
  onClick = () => {},
  showIcon = false,
  className = "",
}) {
  const content = (
    <div className="flex justify-center items-center gap-2">
      <span>{Btn}</span>
      {showIcon && (
        <img
          src={src}
          alt="arrow icon"
          className="w-[16px] h-[16px] object-contain"
        />
      )}
    </div>
  );

  return borderG ? (
    <div
      className={`inline-block bg-gradient-to-r from-[#FF5F5F] to-[#FF0000] p-[2px] ${radius} ${width} ${height} ${className}`}
    >
      <button
        className={`bg-white ${radius} w-full h-full font-roboto ${fontw} text-[#FE0101] ${textsize} leading-none cursor-pointer`}
        onClick={onClick}
      >
        {children || content}
      </button>
    </div>
  ) : (
    <button
      className={`${bg} flex items-center justify-center gap-2 ${borderC} px-8 py-4 border-[1.8px] ${radius} ${height} cursor-pointer font-roboto font-semibold ${textsize} ${textcolor} ${width} ${className}`}
      onClick={onClick}
    >
      {children || content}
    </button>
  );
}

export default Button1;
