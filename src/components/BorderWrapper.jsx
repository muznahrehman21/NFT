import React from "react";

function BorderWrapper({
  children,
  width = "w-[680px]",
  height = "h-[96px]",
  className = "",
}) {
  return (
    <div
      className={`inline-flex items-center bg-gradient-to-r from-[#FF5F5F] to-[#FF0000] p-[2px] rounded-[16px] ${width} ${height} ${className}`}
    >
      <div className="flex items-center bg-white px-4 rounded-[14px] w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default BorderWrapper;
