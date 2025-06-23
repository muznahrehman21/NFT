import React from "react";
import BackDiv from "../components/MintPage/BackDiv";
import MintBody from "../components/MintPage/MintBody";

function MintPage() {
  return (
    <div className="flex flex-col gap-8 px-25 w-[1500px]">
      <BackDiv />
      <MintBody />
    </div>
  );
}

export default MintPage;
