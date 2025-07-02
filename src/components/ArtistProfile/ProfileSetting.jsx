import React, { useState } from "react";
import Button1 from "../buttons/Button1";
import ProfileSwitch from "./ProfileSwitch";
import { useNavigate } from "react-router-dom";
function ProfileSetting() {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(<ProfileSwitch />);
  };

  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleBannerChange = (e) => {
    setBanner(e.target.files[0]);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center gap-19 w-full">
      {/* Banner and Profile Upload */}
      <div className="flex flex-col gap-5 w-full">
        <div className="relative bg-[#D9D9D9] rounded-[20px] w-full h-[305px]">
          {banner && (
            <img
              src={URL.createObjectURL(banner)}
              alt="Banner Preview"
              className="rounded-[20px] w-full h-full object-cover"
            />
          )}
          {!banner && (
            <label
              htmlFor="banner-upload"
              className="top-31 left-145 absolute flex justify-center items-center bg-white border-[1.4px] border-white rounded-[8px] w-[138px] h-[34px] font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer"
            >
              Upload Banner
            </label>
          )}
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            onChange={handleBannerChange}
            className="hidden"
          />

          <label
            htmlFor="profile-upload"
            className="-bottom-12 left-152 absolute flex justify-center items-center bg-[#D9D9D9] shadow-[3px_3px_9px_0_rgba(0,0,0,0.2)] border-[#6B6B6B] border-[1px] border-dashed rounded-full w-[100px] h-[100px] cursor-pointer"
          >
            {profile ? (
              <img
                src={URL.createObjectURL(profile)}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
            ) : (
              <img
                src="/addphoto.svg"
                alt="add"
                className="w-[22px] h-[22px]"
              />
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            id="profile-upload"
            className="hidden"
            onChange={handleProfileChange}
          />
        </div>

        <div className="flex justify-center items-center mt-12 w-full">
          <label
            htmlFor="profile-upload"
            className="flex justify-center items-center bg-white border-[#E7E7E7] border-[1.4px] rounded-[8px] w-[127px] h-[34px] font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer"
          >
            Upload Profile
          </label>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-7 w-[817px]">
        {/* Display Name */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            Display Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] outline-none w-full h-[58px] font-normal text-[#808080] text-[18px]"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            Bio
          </label>
          <textarea
            placeholder="Enter Bio"
            className="px-3 py-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] outline-none w-full h-[170px] font-normal text-[#808080] text-[18px] resize-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            E-Mail
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            className="px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] outline-none w-full h-[58px] font-normal text-[#808080] text-[18px]"
          />
        </div>

        <div>
          <p className="font-apex font-normal text-[#2B2B2B] text-[40px]">
            SOCIAL LINKS
          </p>
        </div>

        {/* Website */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            Website
          </label>
          <div className="flex items-center px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full h-[58px]">
            <input
              type="text"
              placeholder="http://"
              className="flex-1 bg-transparent outline-none font-normal text-[#808080] text-[18px]"
            />
            <Button1
              width="w-[101px]"
              height="h-[34px]"
              borderG={false}
              textcolor="text-[#FFFFFF]"
              bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
              radius="rounded-[8px]"
              textsize="text-[14px]"
              fontw="font-normal"
              Btn="Connect"
            />
          </div>
        </div>

        {/* X (Twitter) */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            X (Twitter)
          </label>
          <div className="flex items-center px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full h-[58px]">
            <input
              type="text"
              placeholder="@username"
              className="flex-1 bg-transparent outline-none font-normal text-[#808080] text-[18px]"
            />
            <Button1
              width="w-[101px]"
              height="h-[34px]"
              borderG={false}
              textcolor="text-[#FFFFFF]"
              bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
              radius="rounded-[8px]"
              textsize="text-[14px]"
              fontw="font-normal"
              Btn="Connect"
            />
          </div>
        </div>

        {/* Discord */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            Discord
          </label>
          <div className="flex items-center px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full h-[58px]">
            <input
              type="text"
              placeholder="@username"
              className="flex-1 bg-transparent outline-none font-normal text-[#808080] text-[18px]"
            />
            <Button1
              width="w-[101px]"
              height="h-[34px]"
              borderG={false}
              textcolor="text-[#FFFFFF]"
              bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
              radius="rounded-[8px]"
              textsize="text-[14px]"
              fontw="font-normal"
              Btn="Connect"
            />
          </div>
        </div>

        {/* Instagram */}
        <div className="flex flex-col gap-3">
          <label className="font-roboto font-medium text-[#2B2B2B] text-[20px]">
            Instagram
          </label>
          <div className="flex items-center px-3 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full h-[58px]">
            <input
              type="text"
              placeholder="@username"
              className="flex-1 bg-transparent outline-none font-normal text-[#808080] text-[18px]"
            />
            <Button1
              width="w-[101px]"
              height="h-[34px]"
              borderG={false}
              textcolor="text-[#FFFFFF]"
              bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
              radius="rounded-[8px]"
              textsize="text-[14px]"
              fontw="font-normal"
              Btn="Connect"
            />
          </div>
        </div>
        <Button1
          width="w-[179px]"
          height="h-[53px]"
          borderG={false}
          textcolor="text-[#FFFFFF]"
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          radius="rounded-[8px]"
          textsize="text-[14px]"
          fontw="font-medium"
          Btn="Save Changes"
          onClick={handleSave}
        />
      </div>
    </div>
  );
}

export default ProfileSetting;
