import React from "react";
import { useNavigate } from "react-router-dom";
function Back({ goto = "/Create NFT" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(goto);
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-row justify-center items-center gap-4 shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[20px] w-[126px] h-[64px] cursor-pointer"
    >
      <img src="/Door.svg" alt="door" />
      <p className="font-roboto font-normal text-[#2B2B2B] text-[20px]">Back</p>
    </div>
  );
}

export default Back;
