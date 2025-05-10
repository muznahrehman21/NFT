import React from "react";
import logo from "../assets/logo/logo.png";
export default function Header() {
  return (
    <div className="flex justify-between items-center w-auto max-w-[1360px] h-[100px]">
      <div className="logo">
        {/* logo yaha dalo */}
        <img src={logo} alt="logo" />
      </div>
      <div className="flex home&nfttext">
        {/* home and nft marketplace txt with links of those pages here */}
        <div className="home">Home</div>
        <div className="nftmarketplace">AI NFT GENERATION</div>
      </div>
      <div className="buttons">
        {/* buttons ka component bano then 2 times yaha import krna */}
      </div>
    </div>
  );
}
