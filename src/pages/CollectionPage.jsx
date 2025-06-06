import React from "react";
import CollectionHeader from "../components/CollectionHeader";
import Explore from "../components/Explore";

function CollectionPage() {
  return (
    <div className="flex flex-col gap-10">
      <CollectionHeader />
      <Explore />
    </div>
  );
}

export default CollectionPage;
