import React from "react";
import Back from "../components/Back";
import ChooseCollectionBody from "../components/ChooseCollection/ChooseCollectionBody";
function ChooseCollection() {
  return (
    <div className="flex flex-row justify-center gap-7 mt-12">
      <Back goto="/Mint NFT" />
      <ChooseCollectionBody />
    </div>
  );
}

export default ChooseCollection;
