import React from "react";
import Card from "./cards/Card";
import Diamondbutton from "./buttons/Diamondbutton";

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
        <div className="flex flex-row justify-end items-center gap-5">
          <Diamondbutton icon="/l.png" />
          <Diamondbutton />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-5 mt-4">
        <Card />
        <Card avatar="/C2.png" />
        <Card avatar="/C3.png" />
        <Card avatar="/C4.png" />
      </div>
    </div>
  );
}

export default FeaturedCollection;
