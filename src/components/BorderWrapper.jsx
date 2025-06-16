import React from "react";

function BorderWrapper({
  children,
  width = "w-[680px]",
  height = "h-[96px]",
  className = "",
  radius = " rounded-[14px]",
  innerBg = "bg-transparent",
  outerradius = "rounded-[16px]",
}) {
  return (
    <div
      className={`inline-flex items-center bg-gradient-to-r from-[#FF5F5F] to-[#FF0000] ${outerradius} p-[2px]  ${width} ${height} ${className}`}
    >
      <div
        className={`flex items-center bg-white px-4  ${innerBg}  ${radius} w-full h-full`}
      >
        {children}
      </div>
    </div>
  );
}

export default BorderWrapper;
