import Input from "./input/Input";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center space-y-[45px] w-full h-full">
      <h1 className="font-oxanium font-extrabold text-[#2B2B2B] text-[64px] text-center">
        Ready for Next NFT Drop?
      </h1>
      <Input type="email" />

      <div className="relative flex flex-row justify-center items-center bg-[linear-gradient(to_right,_#FF4D4D_0%,_#FF0000_80%)] mb-6 rounded-[20px] w-[1320px] h-[358px] overflow-hidden">
        <img
          src="/zigzag.svg"
          alt="decoration"
          className="top-0 left-0 z-0 absolute"
        />

        <div className="z-10 relative flex justify-between p-4 w-[1000px] h-[264px]">
          <div className="flex flex-col justify-between w-[220px]">
            <img
              src="/Logowhite.svg"
              alt="logo"
              className="w-[195px] h-[130.95px]"
            />
          </div>

          <div className="flex flex-col gap-15 p-7">
            <div className="max-w-95 font-roboto font-bold text-[20px] text-white text-base leading-relaxed">
              NFT ALGO is the world's leading NFTs marketplace where you can
              discover, sell and bid NFTs and get rich.
            </div>
            <div className="flex flex-row items-center gap-2.5 mt-4">
              <span>
                <img src="/facebook.svg" alt="Facebook" />
              </span>
              <span>
                <img src="/telegram.svg" alt="Telegram" />
              </span>
              <span>
                <img src="/LinkdIn.svg" alt="LinkedIn" />
              </span>
              <span>
                <img src="/Discord.svg" alt="Discord" />
              </span>
              <span>
                <img src="/insta.svg" alt="Instagram" />
              </span>
              <span>
                <img src="/tiktok.svg" alt="TikTok" />
              </span>
              <span>
                <img src="/git.svg" alt="GitHub" />
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-[18px] font-roboto text-white">
              <li className="font-bold text-2xl">About</li>
              <li className="font-normal text-[20px]">About NFT</li>
              <li className="font-normal text-[20px]">Live Auctions</li>
              <li className="font-normal text-[20px]">Collection</li>
              <li className="font-normal text-[20px]">Activity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
