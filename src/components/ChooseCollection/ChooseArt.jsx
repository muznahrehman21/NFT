import React from "react";
import { useState } from "react";
import Button1 from "../buttons/Button1";
function ChooseArt({ image = "/h.svg" }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };
  return (
    <div className="flex flex-row justify-between items-center p-4 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[628px] h-[91px]">
      <div className="flex flex-row items-center gap-4">
        <img src={image} alt="sun" />
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
            Wonderful Artwork
          </p>
          <p className="flex flex-row gap-1 font-roboto font-normal text-[#808080 text-[14px] ]">
            Items
            <span className="font-semibold text-[#2B2B2B] text-[14px]">
              1.5k
            </span>
          </p>
        </div>
      </div>
      {selected ? (
        <Button1
          width="w-[115px]"
          height="h-[51px]"
          borderG={false}
          textcolor="text-[#FFFFFF]"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          radius="rounded-[8px] "
          Btn="Select"
          textsize="text-[18px]"
          onClick={handleSelect}
          fontw="font-semibold"
          font="font-roboto"
        />
      ) : (
        <div
          onClick={handleSelect}
          className="flex justify-center items-center bg-[#F4F4F4] border-[#E7E7E7] border-[2px] rounded-[8px] w-[115px] h-[51px] cursor-pointer"
        >
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
            {" "}
            Select
          </p>
        </div>
      )}
    </div>
  );
}

export default ChooseArt;
