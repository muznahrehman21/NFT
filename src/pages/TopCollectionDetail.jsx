import React from "react";
import Pixacio from "../components/pixacio";
import SearchBar from "../components/SearchBar";
import PixacioArt from "../components/PixacioArt";

function TopCollectionDetail() {
  return (
    <div className="flex flex-col gap-10">
      <Pixacio />
      <SearchBar />
      <PixacioArt />
    </div>
  );
}

export default TopCollectionDetail;
