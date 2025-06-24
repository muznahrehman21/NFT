import React from "react";
import Back from "../components/Back";
import ChooseCollectionBody from "../components/ChooseCollection/ChooseCollectionBody";
function ChooseCollection() {
  return (
    <div className="flex flex-row gap-7">
      <Back goto="/Mint NFT" />
      <ChooseCollectionBody />
    </div>
  );
}

export default ChooseCollection;
