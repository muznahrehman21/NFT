import Input from "./input/Input";
import Button1 from "./buttons/Button1";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Supply from "./Supply";
import AddStyles from "./AddStyles";

function InputMaster() {
  const [selected, setSelected] = useState("Single NFT");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="z-10 absolute flex w-[1002px] h-[70px]">
        <input
          type="text"
          placeholder="Fantasy Creature holding a sword..."
          className="flex-1 bg-white px-10 border-[#E7E7E7] border-[2.8px] rounded-[15px] outline-none w-full h-full font-roboto font-roboto font-normal text-[#808080] text-[18px]"
        />
        <Button1
          Btn="Generate"
          borderG={false}
          width="w-[119px]"
          height="h-[50px]"
          bg="bg-[#FE0101]"
          textcolor="text-[#FFFFFF]"
          textsize="text-[18px]"
          src={"/stick.svg"}
          showIcon={true}
          radius="rounded-[10px]"
          className="top-1/2 right-2 absolute flex justify-center items-center -translate-y-1/2 transform"
        />
      </div>
      <div className="flex justify-between gap-15 mt-50">
        <Dropdown selected={selected} setSelected={setSelected} />
        <Supply />
        <AddStyles />
      </div>
    </div>
  );
}

export default InputMaster;
