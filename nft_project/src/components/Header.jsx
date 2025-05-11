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
        <div className="home">
          <p> Home</p>
        </div>
        <div className="nftmarketplace">
          <p>AI NFT GENERATION</p>
        </div>
      </div>
      <div className="flex items-center gap-[10px] p-[16px_32px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}
