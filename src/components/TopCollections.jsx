import React from "react";
import TopArt from "./TopArt";
function TopCollections() {
  return (
    <div className="w-[1319px]">
      <div className="flex flex-row justify-between items-center bg-amber-800">
        <h1 className="font-apex font-normal text-black text-6xl">
          TOP COLLECTIONS
        </h1>
        <div>
          <a href="" className="font-medium text-[#FE0101] text-[22px]">
            View More Collection
          </a>
        </div>
      </div>
      <TopArt />
    </div>
  );
}

export default TopCollections;
