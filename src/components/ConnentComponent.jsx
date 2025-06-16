import React from "react";
import BorderWrapper from "./BorderWrapper";
function ConnentComponent({ icon = "/download 1.svg", text = "Pera" }) {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#FF9292] to-[#FD0000] p-[2px] rounded-[8px] w-[353px] h-[54.94px] cursor-pointer">
      <div className="flex items-center gap-5 bg-white p-5 rounded-[7px] w-full h-full">
        <span>
          <img src={icon} alt="Pera" />
        </span>
        <span className="font-roboto font-normal text-[#808080] text-[12.43px]">
          {text}
        </span>
      </div>
    </div>
  );
}

export default ConnentComponent;
