import React, { useState } from "react";
import Button1 from "../buttons/Button1";
import William from "./William";
import PWA from "./PWA";
import ProfileSetting from "./ProfileSetting";
import NewComponent from "./NewComponent";

function ProfileSwitch() {
  const [activeTab, setActiveTab] = useState("profile");
  const [bannerUrl, setBannerUrl] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [hasSaved, setHasSaved] = useState(false);
  const handleSaveChanges = (bannerImgUrl, profileImgUrl) => {
    setBannerUrl(bannerImgUrl);
    setProfilePicUrl(profileImgUrl);
    setHasSaved(true);
    setActiveTab("profile");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Switch Tabs */}
      <div className="flex flex-row justify-center items-center gap-7 border-[#E7E7E7] border-[2px] rounded-[10px] w-[240px] h-[50px]">
        {activeTab === "profile" ? (
          <Button1
            width="w-[90px]"
            height="h-[34px]"
            borderG={false}
            textcolor="text-[#FFFFFF]"
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            radius="rounded-[8px]"
            textsize="text-[14px]"
            fontw="font-semibold"
            Btn="Profile"
            className="whitespace-nowrap"
          />
        ) : (
          <p
            onClick={() => setActiveTab("profile")}
            className="font-roboto font-normal text-[#2B2B2B] text-[14px] cursor-pointer"
          >
            Profile
          </p>
        )}

        {activeTab === "profileSetting" ? (
          <Button1
            width="w-[125px]"
            height="h-[34px]"
            borderG={false}
            textcolor="text-[#FFFFFF]"
            bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
            radius="rounded-[8px]"
            textsize="text-[14px]"
            fontw="font-semibold"
            Btn="Profile Setting"
            className="whitespace-nowrap"
          />
        ) : (
          <p
            onClick={() => setActiveTab("profileSetting")}
            className="font-roboto font-normal text-[#2B2B2B] text-[14px] whitespace-nowrap cursor-pointer"
          >
            Profile Setting
          </p>
        )}
      </div>

      {activeTab === "profile" && (
        <div className="flex flex-col gap-24">
          <William bannerUrl={bannerUrl} profilePicUrl={profilePicUrl} />
          {hasSaved ? <NewComponent /> : <PWA />}
        </div>
      )}

      {activeTab === "profileSetting" && (
        <div>
          <ProfileSetting onSave={handleSaveChanges} />
        </div>
      )}
    </div>
  );
}

export default ProfileSwitch;
