import React from "react";
import AuctionArt from "../components/AuctionArt";
import TopListed from "../components/TopListed";

function AuctionPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <AuctionArt />
      <TopListed />
    </div>
  );
}

export default AuctionPage;
