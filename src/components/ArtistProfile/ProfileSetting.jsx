import React from "react";

function ProfileSetting() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col gap-5 w-full">
        <div className="relative bg-[#D9D9D9] rounded-[20px] w-full h-[305px]">
          <button className="top-31 left-145 absolute flex justify-center items-center bg-white border-[1.4px] border-white rounded-[8px] w-[138px] h-[34px] font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer">
            Upload Banner
          </button>
          <div className="-bottom-12 left-152 absolute flex justify-center items-center bg-[#D9D9D9] shadow-[3px_3px_9px_0_rgba(0,0,0,0.2)] border-[#6B6B6B] border-[1px] border-dashed rounded-full w-[100px] h-[100px] cursor-pointer">
            <img src="/addphoto.svg" alt="add" className="w-[22px] h-[22px]" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 w-full">
          <button className="flex justify-center-safe items-center bg-white border-[#E7E7E7] border-[1.4px] rounded-[8px] w-[127px] h-[34px] font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer">
            {" "}
            Upload Profile
          </button>
        </div>
      </div>
      {/* body */}
      <div className="flex flex-col gap-7 w-[817px]">
        {/* Display Name */}
        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            Display Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>
        {/* Bio */}
        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            Bio
          </label>
          <input
            type="text"
            placeholder="Enter Bio"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            E-Mail
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>

        {/* Website */}

        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            Website
          </label>
          <input
            type="text"
            placeholder="http://"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>
        {/* x */}

        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            X(Twitter)
          </label>
          <input
            type="text"
            placeholder="@username"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>
        {/* Discord */}

        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            Discord
          </label>
          <input
            type="text"
            placeholder="@username"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>
        {/* insta */}

        <div>
          <label className="font-roboto font-normal text-[#2B2B2B] text-[14px]">
            Instagram
          </label>
          <input
            type="text"
            placeholder="@username"
            className="mt-2 px-3 border-[#E7E7E7] border-[1.4px] rounded-[8px] outline-none w-full h-[40px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
