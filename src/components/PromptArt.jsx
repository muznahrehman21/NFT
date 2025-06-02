import React from "react";

function PromptArt({
  image = "/girl.svg",
  p = "Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc   metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
  title = " DRAGON WORLD",
}) {
  return (
    <div className="flex gap-9 bg-white m-7 p-3 border-[#E7E7E7] border-[2.8px] rounded-[25px] w-[557px] h-[270px]">
      <div className="relative flex m-1 w-[310px] h-[232px]">
        <div className="top-24 -right-6 z-10 absolute flex justify-center items-center gap-0.5 bg-[radial-gradient(circle_at_top,_#FF5B5B,_#FD0000)] border-[#FFF9F9] border-[2.9px] rounded-full w-[58px] h-[58px]">
          <p className="font-roboto font-normal text-white text-xs">Copy</p>
          <img src="/Copy.svg" alt="copy" className="w-[18px] h-[18px]" />
        </div>
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-1 w-[168px] h-[160px]">
        <h1 className="font-apex font-normal text-[#2B2B2B] text-[22px]">
          {title}
        </h1>
        <p className="font-roboto font-normal text-[#6B6B6B] text-[14px]">
          {p}
        </p>
      </div>
    </div>
  );
}

export default PromptArt;
