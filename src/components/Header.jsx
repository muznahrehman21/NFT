import React from "react";
import logo from "../assets/logo/logo.png";
import Button1 from "./buttons/Button1";
import Button2 from "./buttons/Button2";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center px-[300px] pt-[25px] w-full">
      <div className="flex justify-between items-center w-[1320px] h-[100px]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-[100px]" />
          <p className="font-bold text-[#FF0000]"></p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 font-medium text-[16px] text-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-[#FE0101] border-b-2 text-[#FE0101]"
                : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/second"
            className={({ isActive }) =>
              isActive
                ? "border-[#FE0101] border-b-2 text-[#FE0101]"
                : "text-black"
            }
          >
            AI NFT GENERATION
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-[10px]">
          <Button1 Btn="Connect wallet" />
          <Button1
            Btn="Create NFT"
            width="w-[176px]"
            textcolor="text-[#FE0101] "
            bg="bg-[#FFFFFF]"
          />
        </div>
      </div>
    </div>
  );
}
