import React from "react";
import Master from "../../components/Master";
import MasterArt from "../../components/MasterArt";
import InputMaster from "../../components/inputmaster";

function SecondPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Master />
      <MasterArt />
      <div className="flex justify-center mt-5">
        <InputMaster />
      </div>
    </div>
  );
}
export default SecondPage;
