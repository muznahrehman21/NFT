import React from "react";
import logo from "../assets/logo/logo.png";
import Button1 from "./buttons/Button1";
import Button2 from "./buttons/Button2";
export default function Header() {
  return (
    <div className="flex justify-between items-center w-auto max-w-[1360px] h-[100px]">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex home&nfttext">
        {/* home and nft marketplace txt with links of those pages here */}
        <div className="home">Home</div>
        <div className="nftmarketplace">AI NFT GENERATION</div>
      </div>
      <div className="flex items-center gap-[10px] from-[#FD0000] to-[#FF9292] p-[16px_32px] border-[1.8px] border-gradient-to-r rounded-[8px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}
