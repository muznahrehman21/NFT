function Connect() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FFF9F9] h-screen">
      <div className="flex flex-col justify-center items-center p-6 w-full max-w-4xl">
        <h1 className="mb-6 font-bold text-3xl">Connect Your Wallet</h1>
        <p className="mb-4 text-lg">
          To get started, please connect your wallet.
        </p>
        <button className="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000] px-6 py-3 rounded-lg text-white">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Connect;
