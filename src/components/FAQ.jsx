import React from "react";

function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-4">
      <h1 className="font-apex font-bold text-[#2B2B2B] text-6xl text-center">
        Frequently Asked Questions
      </h1>

      <div className="w-[850px]">
        {" "}
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
      </div>
    </div>
  );
}

export default FAQ;
