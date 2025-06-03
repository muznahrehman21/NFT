import React from "react";
import Card from "./cards/Card";
function TopListed() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="flex gap-5 font-apex font-normal text-[64px] text-black">
          TOP LISTED
        </h1>
      </div>
      <div className="gap-5 grid grid-cols-4">
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction1.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction2.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction3.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction4.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction5.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction6.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction7.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction8.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction2.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction4.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction8.png"
        />
        <Card
          countdown="3 : 06 : 59 : 18"
          showButton={false}
          avatar="/auction3.png"
        />
      </div>
    </div>
  );
}

export default TopListed;
