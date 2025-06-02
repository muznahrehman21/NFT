import React from "react";
import Master from "../../components/Master";
import MasterArt from "../../components/MasterArt";

import Prompt from "../../components/Prompt";
import InputMaster from "../../components/InputMaster";

function SecondPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Master />
      <MasterArt />
      <div className="flex justify-center mt-5">
        <InputMaster />
      </div>
      <div className="flex justify-center mt-30">
        <Prompt />
      </div>
    </div>
  );
}
export default SecondPage;
