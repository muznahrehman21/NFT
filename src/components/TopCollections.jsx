import React from "react";
import TopArt from "./TopArt";
function TopCollections() {
  return (
    <div className="relative flex flex-col justify-center w-[1319px]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl">
          TOP COLLECTIONS
        </h1>
        <img src="/d5.svg" alt="" className="top-45 -right-99 absolute" />
        <img src="/d6.png" alt="" className="-left-99 absolute" />
        <div>
          <a
            href="/collections"
            className="font-medium text-[#FE0101] text-[22px] cursor-pointer"
          >
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
