import React from "react";
import Card from "./cards/Card";

function LiveAuction() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="font-apex font-normal text-[64px] text-black">
        LIVE AUCTION
      </h1>
      <div className="gap-5 grid grid-cols-4">
        <Card
          avatar="/auction6.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction4.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction1.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction7.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction5.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction2.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction6.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction3.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction4.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction3.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction7.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
        <Card
          avatar="/auction5.png"
          white={true}
          countdown="3 : 06 : 59 : 18"
        />
      </div>
    </div>
  );
}

export default LiveAuction;
