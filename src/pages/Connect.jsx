import ConnentComponent from "../components/ConnentComponent";

function Connect() {
  return (
    <div className="z-90 flex flex-col justify-center items-center gap-5 bg-white w-full h-full">
      <h1 className="font-apex font-normal text-[#2B2B2B] text-[24px]">
        CONNECT YOUR WALLET
      </h1>
      <img src="/fry.svg" alt="logo" />
      <img src="/line.svg" alt="" />
      <div className="flex flex-col justify-center items-center gap-5">
        <ConnentComponent />
        <ConnentComponent icon="/s1.svg" text="Defly" />
        <ConnentComponent icon="/s2.svg" text="Daffi" />
        <ConnentComponent icon="/s3.svg" text="Walletconnect" />
      </div>
    </div>
  );
}

export default Connect;
