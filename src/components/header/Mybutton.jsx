import React from 'react';

function Mybutton() {
  return (
    <div className=" font-roboto text-lg font-bold ml-58 flex p-4 space-x-6">
      
      <button className="px-4 py-2 text-white rounded-md bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292]">
        Connect Wallet
      </button>

      
      <div className="rounded-md p-[1.8px] bg-gradient-to-r from-[#FF9292] to-[#FD0000] transition-all ease-out duration-[500ms]">
        <button className="px-4 py-2 bg-white text-[#FD0000] rounded-md">
          Create NFT
        </button>
      </div>
    </div>
  );
}

export default Mybutton;
