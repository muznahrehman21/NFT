import React from "react";
import TopArt from "./TopArt";
function TopCollections() {
  return (
    <div className="w-[1319px]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          TOP COLLECTIONS
        </h1>
        <div>
          <a href="" className="font-medium text-[#FE0101] text-[22px]">
            View More Collection
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-15">
        <TopArt />
        <TopArt
          A1="/1.png"
          A2="/2.png"
          A3="/3.png"
          A4="/4.png"
          A5="/5.png"
          A6="/6.png"
          first={false}
          second={true}
        />
        <TopArt
          A1="/7.png"
          A2="/8.png"
          A3="/9.png"
          A4="/10.png"
          A5="/11.png"
          A6="/12.png"
          first={false}
          third={true}
        />
      </div>
    </div>
  );
}

export default TopCollections;
