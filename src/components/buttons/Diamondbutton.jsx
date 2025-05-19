import React from "react";

function DiamondButton({ icon = "/r.png" }) {
  return (
    <button className="flex justify-center items-center bg-gradient-to-b from-[#FF5F5F] to-[#FF0000] shadow-inner rounded-xl w-12 h-12 rotate-[-45deg]">
      <img src={icon} alt="" className="w-5 h-5 rotate-[45deg]" />
    </button>
  );
}

export default DiamondButton;
