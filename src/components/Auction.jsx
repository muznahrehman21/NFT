import React from "react";
import Card from "./cards/Card";
function Auction() {
  return (
    <div className="flex flex-col gap-7 w-[1318px] h-[984px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl"> AUCTION</h1>{" "}
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-row gap-7">
          <Card avatar="/auction1.png" showButton={false} />
          <Card avatar="/auction2.png" showButton={false} />
          <Card avatar="/auction3.png" showButton={false} />
          <Card avatar="/auction4.png" showButton={false} />
        </div>
        <div className="flex flex-row gap-7">
          <Card avatar="/auction5.png" showButton={false} />
          <Card avatar="/auction6.png" showButton={false} />
          <Card avatar="/auction7.png" showButton={false} />
          <Card avatar="/auction8.png" showButton={false} />
        </div>
      </div>
    </div>
  );
}

export default Auction;
