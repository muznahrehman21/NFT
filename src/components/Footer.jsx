import Input from "./input/Input";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center space-y-[45px] w-full h-full">
      <h1 className="font-oxanium font-extrabold text-[#2B2B2B] text-[64px] text-center">
        Ready for Next NFT Drop?
      </h1>
      <Input />

      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-[#FF5F5F] to-[#FF0000] rounded-[20px] w-[1320px] h-[358px]">
        <div className="flex justify-between bg-gray-800 p-4 w-[1000px] h-[264px]">
          <div className="flex flex-col justify-between bg-amber-500 w-[220px]">
            <img
              src="/Logowhite.svg"
              alt="logo"
              className="w-[195px] h-[130.95px]"
            />
          </div>
          <div className="flex flex-col gap-15 bg-blue-700 p-7">
            <div className="bg-emerald-500 max-w-77 font-roboto font-medium text-white text-base leading-relaxed">
              NFT ALGO is the world's leading NFTs marketplace where you can
              discover,sell and bid NFTs and get rich.
            </div>
            <div className="flex flex-row items-center gap-2.5 bg-amber-950">
              <span>
                <img src="/facebook.svg" alt="" />
              </span>
              <span>
                <img src="/telegram.svg" alt="" />
              </span>
              <span>
                <img src="/LinkdIn.svg" alt="" />
              </span>
              <span>
                <img src="/Discord.svg" alt="" />
              </span>
              <span>
                <img src="/insta.svg" alt="" />
              </span>
              <span>
                <img src="/tiktok.svg" alt="" />
              </span>
              <span>
                <img src="/git.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="bg-fuchsia-500">
            <ul>
              <li>About</li>
              <li>About NFT</li>
              <li>Live Auctions</li>
              <li>Collection</li>
              <li>Activity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
