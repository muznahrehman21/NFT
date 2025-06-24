import React from "react";
import CA from "./CA";

function Choose() {
  return (
    <div className="flex flex-col gap-1 w-[817px] h-[153px]">
      <div className="flex flex-row justify-between">
        <p className="font-roboto font-semibold text-[#2B2B2B] text-[20px]">
          Choose Collection
        </p>
        <a
          className="font-roboto font-normal text-[#808080] text-[18px] decoration-solid underline cursor-pointer"
          href="/ChooseCollection"
        >
          Choose From Existed
        </a>
      </div>
      <p className="font-roboto font-normal text-[#808080] text-[16px]">
        (This is The Collection Where Your Item Will Appear)
      </p>
      <div className="gap-5 grid grid-cols-2">
        <CA />
      </div>
    </div>
  );
}

export default Choose;
