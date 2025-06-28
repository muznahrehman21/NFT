import React from "react";
import Button1 from "../buttons/Button1";
import CollectionWonderfullArt from "../CollectionWonderfullArt";

function PWA() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between">
        <Button1
          width="w-[140px]"
          height="h-[49px]"
          radius="rounded-[8px]"
          Btn="Collections"
          fontw="font-normal"
          textcolor="text-[#FE0101]"
          textsize="text-[18px]"
        />
        <Button1
          width="w-[140px]"
          height="h-[49px]"
          radius="rounded-[8px]"
          Btn="Newest"
          showIcon={true}
          src="/redarrow.svg"
          gap="gap-2"
          fontw="font-normal"
          textcolor="text-[#FE0101]"
          textsize="text-[18px]"
        />
      </div>
      <div className="gap-5 grid grid-cols-3 mt-9">
        <CollectionWonderfullArt />
        <CollectionWonderfullArt IMG="/CWA1.svg" />
        <CollectionWonderfullArt IMG="/CWA2.svg" />
        <CollectionWonderfullArt IMG="/CWA3.svg" />
        <CollectionWonderfullArt IMG="/CWA4.svg" />
        <CollectionWonderfullArt IMG="/CWA5.svg" />
        <CollectionWonderfullArt IMG="/CWA6.svg" />
        <CollectionWonderfullArt IMG="/CWA7.svg" />
        <CollectionWonderfullArt IMG="/8.svg" />
        <CollectionWonderfullArt IMG="/9.svg" />
      </div>
    </div>
  );
}

export default PWA;
