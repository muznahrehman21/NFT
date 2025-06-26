import Input from "./input/Input";
import Button1 from "./buttons/Button1";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Supply from "./Supply";
import AddStyles from "./AddStyles";
import Styles from "./Styles";
import GenerateNFTPage from "../pages/GenerateNFTPage";

function InputMaster() {
  const [div, setDiv] = useState(false);
  const [selected, setSelected] = useState("Single NFT");
  const [counter, setCounter] = useState("1");
  const [styles, setStyles] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="z-10 absolute flex w-[1002px] h-[70px]">
        <input
          type="text"
          placeholder="Fantasy Creature holding a sword..."
          className="flex-1 bg-white px-10 border-[#E7E7E7] border-[2.8px] rounded-[15px] outline-none w-full h-full font-roboto font-normal text-[#808080] text-[18px]"
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
          gap="gap-2"
          radius="rounded-[10px]"
          className="top-1/2 right-2 absolute flex justify-center items-center -translate-y-1/2 transform"
          onClick={() => setDiv(true)}
        />
      </div>

      <div className="flex justify-between gap-15 mt-50">
        <Dropdown selected={selected} setSelected={setSelected} />
        <Supply counter={counter} setCounter={setCounter} />
        <AddStyles onClick={() => setStyles(true)} />
      </div>

      {div && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40">
          <div className="relative bg-white shadow-lg p-4 rounded-3xl w-[415px] h-[611px] overflow-auto">
            <button
              onClick={() => {
                console.log("Close clicked");
                setDiv(false);
              }}
              className="top-4 right-4 absolute text-gray-600 hover:text-black"
            >
              <img src="/cross.svg" alt="close" className="cursor-pointer" />
            </button>
            <GenerateNFTPage />
            {/* Modal Content Placeholder */}
          </div>
        </div>
      )}

      {styles && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-[#00000066]">
          <div className="relative bg-white p-6 rounded-3xl w-[415px] h-[611px] overflow-auto scrollbar-hide">
            <button
              onClick={() => setStyles(false)}
              className="top-3 right-4 absolute cursor-pointer"
            >
              <img src="/cross.svg" alt="" />
            </button>
            <Styles />
          </div>
        </div>
      )}
    </div>
  );
}

export default InputMaster;
