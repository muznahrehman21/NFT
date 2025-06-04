import React from "react";
import AuctionArt from "../components/AuctionArt";
import TopListed from "../components/TopListed";
import LiveAuction from "../components/LiveAuction";

function AuctionPage() {
  return (
    <div className="flex flex-col gap-20">
      <AuctionArt />
      <TopListed />
      <LiveAuction />
    </div>
  );
}

export default AuctionPage;
