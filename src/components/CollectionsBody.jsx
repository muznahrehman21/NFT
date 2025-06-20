import React from "react";
import CollectionWonderfullArt from "./CollectionWonderfullArt";
import { useNavigate } from "react-router-dom";
function CollectionsBody() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/TopCollection");
  };
  return (
    <div className="flex flex-col gap-5 mt-8">
      <div className="flex items-center">
        <h2 className="font-apex font-normal text-[64px] text-black">
          Collections
        </h2>
      </div>
      <div onClick={handleClick} className="gap-6 grid grid-cols-3">
        <CollectionWonderfullArt />
        <CollectionWonderfullArt IMG="/CWA1.svg" />
        <CollectionWonderfullArt IMG="/CWA2.svg" />
        <CollectionWonderfullArt IMG="/CWA3.svg" />
        <CollectionWonderfullArt IMG="/CWA4.svg" />
        <CollectionWonderfullArt IMG="/CWA5.svg" />
        <CollectionWonderfullArt IMG="/CWA6.svg" />
        <CollectionWonderfullArt IMG="/CWA7.svg" />
        <CollectionWonderfullArt IMG="/CWA8.svg" />
        <CollectionWonderfullArt IMG="/CWA9.svg" />
      </div>
    </div>
  );
}

export default CollectionsBody;
