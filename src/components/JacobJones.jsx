import React from "react";

function JacobJones({
  seller = "/seller1.png",
  Bold = "JACOB JONES",
  light = "245.5 FRY",
  width = "",
  height = "",
}) {
  return (
    <div>
      <div className=" flex items-end gap-3 ${w} ">
        <div>
          <img src={seller} alt="" className={`${width} ${height}`} />
        </div>
        <div className="flex flex-col">
          <p className="font-roboto font-bold text-[#2B2B2B] text-xl">{Bold}</p>

          <p className="font-roboto font-bold text-[#8B8B8B] text-sm">
            {light}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JacobJones;
