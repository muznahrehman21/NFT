import React from "react";

function JacobJones({ seller = "/seller1.png" }) {
  return (
    <div>
      <div className="flex items-end gap-3 w-3xs h-30">
        <div>
          <img src={seller} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="font-roboto font-bold text-[#2B2B2B] text-xl">
            Jacob Jones
          </p>

          <p className="font-roboto font-bold text-[#8B8B8B] text-sm">
            245.5 FRY
          </p>
        </div>
      </div>
    </div>
  );
}

export default JacobJones;
