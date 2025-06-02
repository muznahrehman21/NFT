import React from "react";

function AddStyles({ onClick }) {
  return (
    <div className="flex justify-around items-center p-4 border-[#E7E7E7] border-[2.8px] rounded-2xl w-[198px] h-14">
      <p className="font-roboto font-normal text-[#808080] text-[18px]">
        {" "}
        Add Styles
      </p>
      <button onClick={onClick} className="cursor-pointer">
        <img src="/add.svg" alt="plus" className="" />
      </button>
    </div>
  );
}

export default AddStyles;
