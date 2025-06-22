import React from "react";
import CreateNFTdiv from "../components/CreateNFTdiv";
import CreateNFTArt from "../components/CreateNFTArt";

function CreateNFTPage() {
  return (
    <div className="flex flex-col items-center gap-18 w-[1000px]">
      <CreateNFTdiv />
      <CreateNFTArt />
    </div>
  );
}

export default CreateNFTPage;
