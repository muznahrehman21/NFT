import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Button1 from "./buttons/Button1";
import Connect from "../pages/Connect";

export default function Header() {
  const [div, setDiv] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center pt-[25px]">
      <div className="flex justify-center items-center gap-67 w-[1380px] h-[100px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[99.73px] h-[100px]" />
        </div>

        {/* Navigation */}
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
            textcolor="text-[#FFFFFF]"
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            borderG={false}
            radius="rounded-[8px]"
            onClick={() => setDiv(true)}
          />

          <Button1
            Btn="Create NFT"
            onClick={() => {
              navigate("/second");
            }}
          />
        </div>
      </div>

      {div && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40">
          <div className="relative bg-white shadow-lg rounded-3xl w-[425.81px] h-[520px] overflow-auto">
            <button
              onClick={() => {
                console.log("Close clicked");
                setDiv(false);
              }}
              className="top-4 right-4 absolute text-gray-600 hover:text-black"
            >
              <img src="/cross.svg" alt="close" className="cursor-pointer" />
            </button>
            <Connect />
            {/* Modal Content Placeholder */}
          </div>
        </div>
      )}
    </div>
  );
}
