import React from "react";
import BorderWrapper from "./BorderWrapper";
import Button1 from "../components/buttons/Button1";
import ExploreArt from "./ExploreArt";

function Explore() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-ROW items-center mt-15">
        <h1 className="font-apex font-normal text-[#000000] text-[64px]">
          EXPLORE COLLECTIONS
        </h1>
      </div>

      <div className="flex flex-row items-center gap-17">
        <Button1
          Btn="Popular"
          width="w-[112px]"
          height="h-[49px]"
          radius="rounded-[8px]"
          textsize="text-[18px]"
          fontw=" font-normal"
        />

        <p className="font-roboto font-normal text-[#000000] text-[18px] cursor-pointer">
          Trending
        </p>
        <p className="font-roboto font-normal text-[#000000] text-[18px] cursor-pointer">
          Sports
        </p>
        <p className="font-roboto font-normal text-[#000000] text-[18px] cursor-pointer">
          {" "}
          Art
        </p>
        <p className="font-roboto font-normal text-[#000000] text-[18px] cursor-pointer">
          Fantasy
        </p>
        <p className="font-roboto font-normal text-[#000000] text-[18px] cursor-pointer">
          Photography
        </p>
        <p className="font-roboto font-normal text-[#000000] text-[18px] cursor-pointer">
          Space
        </p>
      </div>
      <div className="gap-5 grid grid-cols-3">
        <ExploreArt />
        <ExploreArt av="/av2.svg" wa="/wa2.svg" />
        <ExploreArt av="/av3.svg" wa="/wa3.svg" />
        <ExploreArt av="/av4.svg" wa="/wa4.svg" />
        <ExploreArt av="/av5.svg" wa="/wa5.svg" />
        <ExploreArt av="/av6.svg" wa="/wa6.svg" />
        <ExploreArt av="/av7.svg" wa="/wa7.svg" />
        <ExploreArt av="/av8.svg" wa="/wa8.svg" />
        <ExploreArt av="/av9.svg" wa="/wa9.svg" />
        <ExploreArt av="/av10.svg" wa="/wa10.svg" />
        <ExploreArt av="/av11.svg" wa="/wa11.svg" />
      </div>
    </div>
  );
}

export default Explore;
