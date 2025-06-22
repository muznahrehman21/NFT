import React from "react";
import { useState } from "react";
function CreateNFTArt() {
  const [selectedArt, setSelectedArt] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
  });

  const handleClick = (key) => {
    setSelectedArt((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <div className="gap-8 grid grid-cols-4">
      <img
        src={selectedArt.c1 ? "/v1.svg" : "/c1.svg"}
        alt="art"
        className="cursor-pointer"
        onClick={() => handleClick("c1")}
      />
      <img
        src={selectedArt.c2 ? "/v2.svg" : "/c2.svg"}
        alt="art"
        onClick={() => handleClick("c2")}
        className="cursor-pointer"
      />
      <img
        src={selectedArt.c3 ? "/v3.svg" : "/c3.svg"}
        alt="art"
        className="cursor-pointer"
        onClick={() => handleClick("c3")}
      />
      <img
        src={selectedArt.c4 ? "/v4.svg" : "/c4.svg"}
        alt="art"
        className="cursor-pointer"
        onClick={() => handleClick("c4")}
      />
    </div>
  );
}

export default CreateNFTArt;
