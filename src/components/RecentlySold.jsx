import React from "react";
import Card from "./cards/Card";

function RecentlySold() {
  return (
    <div className="flex flex-col gap-7 w-[1318px] h-[984px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          {" "}
          RECENTLY SOLD
        </h1>{" "}
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-row gap-7">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-row gap-7">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default RecentlySold;
