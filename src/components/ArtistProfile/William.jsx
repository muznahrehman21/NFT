import React from "react";
import Button1 from "../buttons/Button1";

function William({ bannerUrl, profilePicUrl }) {
  return (
    <div className="flex flex-col gap-14 w-full">
      {/* Banner Image */}
      <div className="relative w-full h-[305px]">
        <img
          src={bannerUrl || "/wave.svg"}
          alt="Banner"
          className="rounded-[20px] w-full h-full object-cover"
        />

        {/* Follow Button */}
        <Button1
          width="w-[103px]"
          height="h-[53px]"
          radius="rounded-[15px]"
          Btn="Follow"
          borderG={false}
          borderC="border-none"
          textcolor="text-[#FFFFFF]"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          textsize="text-[18px]"
          fontw="font-bold"
          className="top-3 right-3 absolute"
        />

        {/* Profile Image Circle */}
        <div className="-bottom-12 left-1/2 absolute bg-[#D9D9D9] shadow-lg border-4 border-white rounded-full w-[100px] h-[100px] overflow-hidden -translate-x-1/2 transform">
          <img
            src={profilePicUrl || "/WC.svg"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="flex flex-col justify-center items-center gap-3 mt-16">
        <p className="font-apex font-normal text-[#2B2B2B] text-[40px]">
          WILLIAM AKARANA
        </p>
        <div className="flex flex-row gap-3">
          <p className="flex items-center gap-1 font-roboto font-bold text-[#2B2B2B] text-[20px]">
            99{" "}
            <span className="font-roboto font-normal text-[#808080] text-[16px]">
              Followers
            </span>
          </p>
          <p className="flex items-center gap-1 font-roboto font-bold text-[#2B2B2B] text-[20px]">
            26{" "}
            <span className="font-roboto font-normal text-[#808080] text-[16px]">
              Following
            </span>
          </p>
          <p className="flex items-center gap-1 font-roboto font-bold text-[#2B2B2B] text-[20px]">
            12{" "}
            <span className="font-roboto font-normal text-[#808080] text-[16px]">
              Items
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-3 bg-white border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[162px] h-[53px]">
          <img src="/redlogo.svg" alt="red" />
          <p className="font-roboto font-normal text-[#2B2B2B] text-[18px]">
            10.89 FRY
          </p>
        </div>
      </div>
    </div>
  );
}

export default William;
