import React from "react";
import logo from "../assets/logo/logo.png";
import Button1 from "./buttons/Button1";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center items-center px-[300px] pt-[25px]">
      <div className="flex justify-center items-center gap-67 w-[1480px] h-[100px]">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-[99.73px] h-[100px]" />
          <p className="font-bold text-[#FF0000]"></p>
        </div>
        {/* Navigation Links */}
        <div className="flex gap-8 font-apex font-medium text-[16px] text-black">
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
        <div className="flex items-center gap-[10px] font-roboto">
          <Button1
            Btn="Connect Wallet"
            width="w-[213px]"
            textcolor="text-[#FFFFFF] "
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            borderG={false}
            radius="rounded-[8px]"
          />
          <Button1 Btn="Create NFT" />
        </div>
      </div>
    </div>
  );
}
