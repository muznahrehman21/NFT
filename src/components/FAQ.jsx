import React from "react";

function FAQ() {
  return (
    <div className="relative flex flex-col justify-center items-center gap-7 px-4">
      <h1 className="font-apex font-bold text-[#2B2B2B] text-6xl text-center">
        Frequently Asked Questions
      </h1>

      <div className="relative flex flex-col gap-5 w-[850px]">
        <img
          src="/circle.png"
          alt=""
          className="-right-160 bottom-2 absolute"
        />{" "}
        <img src="/a5.png" alt="" className="-left-95 absolute" />
        <div className="p-4 border-[#E7E7E7] border-[2.8px] rounded-[20px]">
          <div className="flex items-center gap-5 bg-[rgba(253,0,0,0.10)] p-4 rounded-[20px]">
            <img src="/minus.svg" alt="minus" className="" />
            <p className="font-roboto font-semibold text-[#2B2B2B] text-[22px]">
              What is an NFT?
            </p>
          </div>

          <p className="mt-2 ml-15 w-[670px] text-[#6C6C6C] text-sm leading-relaxed">
            An NFT (Non-Fungible Token) is a unique digital asset that
            represents ownership or proof of authenticity of a specific item or
            piece of content, often associated with digital art, collectibles,
            or virtual goods, and is stored on a blockchain.
          </p>
        </div>
        <div className="p-4 border-[#E7E7E7] border-[2.8px] rounded-[20px]">
          <div className="flex justify-start items-center gap-7">
            <img src="/plus.svg" alt="" />
            <p className="mt-2 font-roboto font-semibold text-[#2B2B2B] text-xl leading-relaxed">
              How do I buy an NFT?
            </p>
          </div>
        </div>
        <div className="p-4 border-[#E7E7E7] border-[2.8px] rounded-[20px]">
          <div className="flex justify-start items-center gap-7">
            <img src="/plus.svg" alt="" />
            <p className="mt-2 font-roboto font-semibold text-[#2B2B2B] text-xl leading-relaxed">
              How do I sell an NFT?
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 border-[#E7E7E7] border-[2.8px] rounded-[20px]">
          <div className="relative flex justify-start items-center gap-7">
            <img src="/plus.svg" alt="" />
            <p className="mt-2 font-roboto font-semibold text-[#2B2B2B] text-xl leading-relaxed">
              What cryptocurrencies do you accept?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
