import React from "react";

function TopArt() {
  return (
    <div className="bg-amber-500 w-[417px]">
      <div className="grid grid-cols-2 bg-amber-800 w-[397px]">
        <div>
          <img src="/Art1.png" alt="" />
          <img src="/Art2.png" alt="" />
        </div>
        <div className="grid grid-cols-4 bg-blue-500">
          <div>
            <img src="/Art3.png" alt="" />
          </div>
          <div>
            <img src="/Art4.png" alt="" />
          </div>
          <div>
            <img src="/Art5.png" alt="" />
          </div>
          <div>
            <img src="/Art6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopArt;
