import React from "react";
import PromptArt from "./PromptArt";

function Prompt() {
  return (
    <div className="flex flex-col bg-amber-400 w-7xl">
      <div className="flex justify-start items-center">
        <h1 className="font-apex font-normal text-[#2B2B2B] text-6xl">
          PROMPT EXAMPLES
        </h1>
      </div>
      <PromptArt />
    </div>
  );
}

export default Prompt;
