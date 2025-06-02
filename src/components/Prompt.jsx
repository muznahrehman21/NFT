import React from "react";
import PromptArt from "./PromptArt";

function Prompt() {
  return (
    <div className="flex flex-col w-7xl">
      <div className="flex justify-start items-center">
        <h1 className="font-apex font-normal text-[#2B2B2B] text-6xl">
          PROMPT EXAMPLES
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <PromptArt />
        <PromptArt
          image="/master1.svg"
          title="FANTASY"
          p="Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue."
        />
        <PromptArt
          image="/master2.svg"
          title="DRAGON HOUSE"
          p="Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. "
        />
        <PromptArt
          image="/master3.svg"
          title="PRINCESS"
          p="Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu."
        />
        <PromptArt
          image="/master4.svg"
          title="SPACE TEAM"
          p="Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue."
        />
        <PromptArt
          image="/r.svg"
          title="SEA CREATURE"
          p="Pmied vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. "
        />
        <PromptArt
          image="/master5.svg"
          title="PIXEL GIRL"
          p="Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet Nam maximus augue."
        />
        <PromptArt
          image="/master6.svg"
          title="SHADOW FIGHTER"
          p="Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim."
        />
      </div>
    </div>
  );
}

export default Prompt;
