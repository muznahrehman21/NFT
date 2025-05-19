import React from "react";
import Card from "./cards/Card";
1;
function FeaturedCollection() {
  return (
    <div className="p-6 w-[1316px] h-[513px]">
      <div className="">
        <h1 className="font-apex font-normal text-[#000000] text-[64px]">
          FEATURED COLLECTION
        </h1>
        <p className="max-w-190 font-roboto font-light text-[#6B6B6B] text-lg">
          Explore our exclusive featured collection, showcasing innovative
          campaigns and creative storytelling from top brands around the world.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center gap-5 bg-amber-500 mt-6">
        <Card />
        <Card avatar="/C2.png" />
        <Card avatar="/C3.png" />
        <Card avatar="/C4.png" />
      </div>
    </div>
  );
}

export default FeaturedCollection;
