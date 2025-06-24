import React from "react";
import { useState } from "react";
import ChoosesubDiv from "../ChooseCollection/ChoosesubDiv";
function Add() {
  const [traitsDiv, setTraitsDiv] = useState(false);
  return (
    <div className="flex flex-col gap-3 w-[817px] h-[256px]">
      <p className="font-roboto font-semibold text-[#2B2B2B] text-[20px]">
        Add Traits
      </p>
      <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
        Traits describe attributes of your item. They appear as filters inside
        your collection page and are also listed out inside your item page.
      </p>

      <div className="flex flex-row justify-between items-center bg-[#F4F4F4] px-5 border-[#F4F4F4] border-[2.8px] rounded-[15px] h-[58px]">
        <div>
          <p className="font-roboto font-semibold text-[#2B2B2B] text-[18px]">
            blue : fox
          </p>
        </div>
        <div className="flex flex-row gap-13">
          <img
            src="/edit.svg"
            alt="pen"
            className="cursor-pointer"
            onClick={() => {
              setTraitsDiv(true);
            }}
          />
          <img src="/x.svg" alt="cross" />
        </div>
      </div>

      <img src="/l.svg" alt="line" className="mt-3" />

      <div className="flex flex-row justify-center items-center gap-5 px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[195px] h-[58px]">
        <p className="font-roboto font-normal text-[#808080] text-[18px]">
          Add Traits
        </p>
        <img
          src="/plus.svg"
          alt="add"
          className="cursor-pointer"
          onClick={() => {
            setTraitsDiv(true);
          }}
        />
      </div>

      {traitsDiv && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40">
          <div className="relative bg-white shadow-lg rounded-3xl w-[618px] h-[342px] overflow-auto">
            <button
              onClick={() => {
                console.log("Close clicked");
                setTraitsDiv(false);
              }}
              className="top-4 right-4 absolute text-gray-600 hover:text-black"
            >
              <img src="/cross.svg" alt="close" className="cursor-pointer" />
            </button>
            <ChoosesubDiv />
            {/* Modal Content Placeholder */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Add;
