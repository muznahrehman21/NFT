import React from "react";
import ProfileSwitch from "../components/ArtistProfile/ProfileSwitch";
import William from "../components/ArtistProfile/William";
import PWA from "../components/ArtistProfile/PWA";

function ArtistProfile() {
  return (
    <div className="flex flex-col">
      <ProfileSwitch />
      <William />
      <PWA />
    </div>
  );
}

export default ArtistProfile;
