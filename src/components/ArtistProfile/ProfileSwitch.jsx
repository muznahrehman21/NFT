import React from "react";

function ProfileSwitch() {
  return (
    <div className="flex flex-row justify-center items-center gap-7 p-4 border-[#E7E7E7] border-[2px] rounded-[10px] w-[236px] h-[50px]">
      <p className="font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer">
        Profile
      </p>
      <p className="font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer">
        Profile Setting
      </p>
    </div>
  );
}

export default ProfileSwitch;
